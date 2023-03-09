import React from 'react';

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
				await setData([
					{ id: '-aSGk_rcr9Pa0UkIe-HfWMdEq7OaZnUV6KPXJFBAIIs', parent: null, renderWith: 'alex-renderers' },
					{
						id: '4Fzwj8x-c-gk6ZabmHtfluPuMOlmH8fhWzpS9XVGR7s',
						parent: '-aSGk_rcr9Pa0UkIe-HfWMdEq7OaZnUV6KPXJFBAIIs',
						renderWith: 'alex-renderers',
					},
					{
						id: 'pGF_4CHDkymYmEaz_CqYvQ7BppKpPNeINc-9KJtB-hk',
						parent: '-aSGk_rcr9Pa0UkIe-HfWMdEq7OaZnUV6KPXJFBAIIs',
						renderWith: 'alex-renderers',
					},
					{
						id: '2gqBfu0TH5JVv0UVdOOghRpM7dttCvOl9Oh-3MmHvyo',
						parent: '4Fzwj8x-c-gk6ZabmHtfluPuMOlmH8fhWzpS9XVGR7s',
						renderWith: 'alex-renderers',
					},
					{
						id: 'VrCe4YWRurLEm7NZ7-dy4W9TDLPpDifKf6RgDHSjvOE',
						parent: '4Fzwj8x-c-gk6ZabmHtfluPuMOlmH8fhWzpS9XVGR7s',
						renderWith: 'alex-renderers',
					},
					{
						id: '_vL66BTmajIB1KNLhdsBRo5Ry2tlqs27YG2Z8tjGTws',
						parent: 'pGF_4CHDkymYmEaz_CqYvQ7BppKpPNeINc-9KJtB-hk',
						renderWith: 'alex-renderers',
					},
					{
						id: 'KUumdF1j_-BYGaLNfWZNupE-bXhoGZhL0ckmIqcaFfM',
						parent: 'pGF_4CHDkymYmEaz_CqYvQ7BppKpPNeINc-9KJtB-hk',
						renderWith: 'alex-renderers',
					},
					{
						id: '3PRTFt7m8giKZlXlcasIkJHvHBMqjYA2mWHhfsxrIvs',
						parent: 'KUumdF1j_-BYGaLNfWZNupE-bXhoGZhL0ckmIqcaFfM',
						renderWith: 'alex-renderers',
					},
				]);
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
