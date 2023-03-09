import React from 'react';
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
				'label': 'data(label)',
				'background-color': '#3A3A3A',
				'text-valign': 'center',
				'text-halign': 'center',
				'width': '50px',
				'height': '50px',
				'border-radius': '50%',
				'cursor': 'pointer !important'
			}
		},
		{
			selector: `node[id="${props.activeId}"]`,
			style: {
				'background-color': '#72F052',
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


// TODO: update icon -> M
export default function Microscope() {
	const [searchTerm, setSearchTerm] = React.useState<string>('');
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
			return null;
		}
	}

	function getFrame() {
		if (activeNode) {
			return <S.Frame src={rendererURL} />;
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
			);
		} else {
			return (
				<S.EmptyContainer>
					<p>Search Tx ID</p>
				</S.EmptyContainer>
			);
		}
	}

	console.log(data)

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
					<S.Content>{getData()}</S.Content>
				</S.Container>
			</S.Wrapper>
		</>
	);
}
