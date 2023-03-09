import React from 'react';
import { elements } from 'lib/molecule'

import { formatAddress } from 'arcframework';

import { Button } from 'components/Button';
import { Search } from 'components/Search';
import { ASSETS } from 'helpers/config';

import * as S from './styles';

function renderTree(data: any, parent: any, handleCallback: (node: any) => void, activeId: string | null) {
	return (
		<>
			{data
				.filter((node: any) => node.parent === parent)
				.map((node: any) => (
					<S.NodeContainer key={node.id}>
						<S.Node>
							<Button
								type={'alt2'}
								label={formatAddress(node.id, false)}
								handlePress={() => handleCallback(node)}
								active={activeId ? node.id === activeId : false}
							/>
						</S.Node>
						{renderTree(data, node.id, handleCallback, activeId)}
					</S.NodeContainer>
				))}
		</>
	);
}

function Tree(props: { data: any; handleCallback: (node: any) => void; activeId: string | null }) {
	return <S.TreeDiagram>{renderTree(props.data, null, props.handleCallback, props.activeId)}</S.TreeDiagram>;
}

export default function Microscope() {
	const [searchTerm, setSearchTerm] = React.useState<string>('');
	const [loading, setLoading] = React.useState<boolean>(false);

	const [searchRequested, setSearchRequested] = React.useState<boolean>(false);
	const [searchToggle, setSearchToggle] = React.useState<boolean>(false);

	const [data, setData] = React.useState<any>(null);
	const [activeNode, setActiveNode] = React.useState<any>(null);

	React.useEffect(() => {
		(async function () {
			if (searchTerm || searchRequested) {
				setLoading(true);
				setData(await elements(searchTerm));
				setLoading(false);
			}
		})();
	}, [searchToggle]);

	React.useEffect(() => {
		if (data && data.length) {
			setActiveNode(data[0]);
		}
	}, [data]);

	function handleSearch(e: any) {
		if ((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click') {
			if (searchTerm) {
				setSearchRequested(true);
				setSearchToggle(!searchToggle);
			}
		}
	}

	function handleClear() {
		setSearchTerm('');
		setData(null);
		setActiveNode(null);
	}

	function handleCallback(node: any) {
		setActiveNode(node);
	}

	function getTreeData() {
		if (data) {
			return (
				<Tree
					data={data}
					handleCallback={(node: any) => handleCallback(node)}
					activeId={activeNode ? activeNode.id : null}
				/>
			);
		} else {
			return null;
		}
	}

	function getFrame() {
		if (activeNode) {
			return <S.Frame src={`https://${activeNode.renderWith}.arweave.dev/?tx=${activeNode.id}`} />;
		} else {
			return null;
		}
	}

	function getData() {
		if (data && activeNode) {
			return (
				<>
					<S.ContentWrapper>{getTreeData()}</S.ContentWrapper>
					<S.ContentWrapper>{getFrame()}</S.ContentWrapper>
				</>
			)
		}
		else {
			return (
				<S.EmptyContainer>
					<p>Search Tx ID</p>
				</S.EmptyContainer>
			)
		}
	}

	console.log(data);

	return (
		<>
			<S.HeaderWrapper>
				<S.HeaderContainer>
					<S.HeaderContent>
						<S.LogoContainer>
							<S.Logo src={ASSETS.logo} />
						</S.LogoContainer>
						<S.ActionContainer>
							<Search
								value={searchTerm}
								handleChange={(id: string) => setSearchTerm(id)}
								handleSearch={(e: React.KeyboardEvent<HTMLInputElement>) => handleSearch(e)}
								handleClear={() => handleClear()}
								disabled={loading}
								loading={loading}
							/>
						</S.ActionContainer>
					</S.HeaderContent>
				</S.HeaderContainer>
			</S.HeaderWrapper>
			<S.Wrapper>
				<S.Container>
					<S.Content>
						{getData()}
					</S.Content>
				</S.Container>
			</S.Wrapper>
		</>
	);
}
