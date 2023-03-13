import React from 'react';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';
import cytoscape from 'cytoscape';
import klay from 'cytoscape-klay';
import { elements, getRendererURL } from 'lib/molecule';

cytoscape.use(klay);

import { Search } from 'components/Search';
import { ASSETS } from 'helpers/config';

import * as S from './styles';

const layouts: Record<string, any> = {
	random: {
		name: 'random',
		animate: true,
	},
	grid: {
		name: 'grid',
		animate: true,
	},
	circle: {
		name: 'circle',
		animate: true,
	},
	breadthfirst: {
		name: 'breadthfirst',
		animate: true,
	},
	klay: {
		name: 'klay',
		animate: true,
		padding: 4,
		nodeDimensionsIncludeLabels: true,
		klay: {
			spacing: 40,
			mergeEdges: false,
		},
	},
	fcose: {
		name: 'fcose',
		animate: true,
	},
	cose: {
		name: 'cose',
		animate: true,
	},

	cola: {
		name: 'cola',
		animate: true,
		maxSimulationTime: 40000,
	},
	dagre: {
		name: 'dagre',
		animate: true,
	},
};

['box', 'disco', 'force', 'layered', 'mrtree', 'random', 'stress'].forEach((elkAlgo) => {
	layouts[`elk_${elkAlgo}`] = {
		name: 'elk',
		animate: true,
		elk: {
			algorithm: elkAlgo,
		},
	};
});

function Tree(props: { data: any; handleCallback: (node: any) => void; activeId: string | null }) {
	const styles: any = [
		{
			selector: 'node',
			style: {
				label: 'data(label)',
				'background-color': '#D9D9D9',
				'text-valign': 'center',
				'text-halign': 'center',
				height: '50px',
				width: '50px',
				'border-radius': '50%',
			},
		},
		{
			selector: `node[id="${props.activeId}"]`,
			style: {
				'background-color': '#FF5F15',
			},
		},
	];

	const cyRef = React.useRef<any>();

	React.useEffect(() => {
		const cy = cytoscape({
			container: cyRef.current,
			elements: props.data,
			style: styles,
		});

		cy.on('click', 'node', function (event) {
			const target = event.target;
			props.handleCallback(target['_private'].data);
		});

		return () => {
			cy.destroy();
		};
	}, [props.activeId]);

	return (
		<S.TreeDiagram>
			<S.SelectedContainer>
				<p>Selected</p>
			</S.SelectedContainer>
			<div
				ref={cyRef}
				style={{
					width: '35%',
					height: '35%',
				}}
			/>
		</S.TreeDiagram>
	);
}

export default function Tx(props: any) {
	const [searchTerm, setSearchTerm] = React.useState<string>('pq8klYW8sYx_t4QnDjm5NTUG4qR8HA3lHoHUrZodOYY');
	const [loading, setLoading] = React.useState<boolean>(false);

	const [searchRequested, setSearchRequested] = React.useState<boolean>(false);
	const [searchToggle, setSearchToggle] = React.useState<boolean>(false);

	const [data, setData] = React.useState<any>(null);
	const [activeNode, setActiveNode] = React.useState<any>(null);
	const [rendererURL, setRendererURL] = React.useState<any>(null);

	React.useEffect(() => {
		(async function () {
			if (searchTerm || searchRequested) {
				setLoading(true);
				const result = await elements(searchTerm);
				setData(result);
				setLoading(false);
			}
		})();
	}, [searchToggle]);

	React.useEffect(() => {
		if (data && data.length) {
			setActiveNode(data[0].data);
		}
	}, [data]);

	React.useEffect(() => {
		(async function () {
			if (activeNode) {
				setRendererURL(await getRendererURL(activeNode.id));
			}
		})();
	}, [activeNode]);

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
			return (
				<S.EmptyContainer>
					<p>Enter a TXID to focus on ...</p>
				</S.EmptyContainer>
			);
		}
	}

	function getFrame() {
		if (activeNode) {
			return <S.Frame src={rendererURL} />;
		} else {
			return (
				<S.EmptyContainer>
					<p>Waiting for selection ...</p>
				</S.EmptyContainer>
			);
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
						<S.TreeWrapper>{getTreeData()}</S.TreeWrapper>
						<S.Divider>
							<ReactSVG src={ASSETS.divider} />
						</S.Divider>
						<S.RendererWrapper>{getFrame()}</S.RendererWrapper>
					</S.Content>
				</S.Container>
			</S.Wrapper>
		</>
	);
}

export const ConnectedTx = connect(null, (dispatch) => ({
	goToHome: () => dispatch({ type: 'HOME' }),
}))(Tx);
