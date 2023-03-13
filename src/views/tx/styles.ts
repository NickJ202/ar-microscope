import styled from 'styled-components';

import { fadeIn2, open } from 'helpers/animations';
import { STYLING } from 'helpers/styling';

export const HeaderWrapper = styled.header`
	height: ${STYLING.dimensions.navHeight};
	width: 100%;
	position: fixed;
	top: 0px;
	z-index: 5;
    background: ${(props) => props.theme.colors.navigation.header.background};
`;

export const HeaderContainer = styled.div`
	height: 100%;
	width: 100%;
	max-width: ${STYLING.cutoffs.max};
	margin: 0 auto;
	padding: 0 20px;
`;

export const HeaderContent = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
`;

export const LogoContainer = styled.div`
	height: 35px;
	width: 35px;
`;

export const Logo = styled.img`
	height: 100%;
	width: 100%;
`;

export const ActionContainer = styled.div`
	height: fit-content;
	width: 600px;
	display: flex;
	align-items: center;
	position: absolute;
	right: 0;
	@media (max-width: ${STYLING.cutoffs.tablet}) {
		top: 75px;
	}
`;

export const Wrapper = styled.main`
	height: calc(100vh - ${STYLING.dimensions.navHeight});
	width: 100%;
	margin: ${STYLING.dimensions.navHeight} 0 0 0;
	position: relative;
	@media (max-width: ${STYLING.cutoffs.tablet}) {
		margin: calc(${STYLING.dimensions.navHeight} + 75px) 0 0 0;
	}
`;

export const Container = styled.div`
	height: 100%;
	width: 100%;
	max-width: ${STYLING.cutoffs.max};
	margin: 0 auto;
	padding: 20px;
`;

export const Content = styled.div`
	height: 100%;
	max-height: 625px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: ${STYLING.cutoffs.tablet}) {
		flex-direction: column;
	}
`;

export const ContentWrapper = styled.div`
	height: 95%;
	width: 47.5%;
	@media (max-width: ${STYLING.cutoffs.tablet}) {
		height: 500px;
		width: 100%;
		margin: 0 0 40px 0;
	}
`;

export const TreeWrapper = styled(ContentWrapper)`
	width: 40%;
	background: ${(props) => props.theme.colors.navigation.header.background};
	border-radius: ${STYLING.dimensions.borderRadius};
	position: relative;
`;

export const RendererWrapper = styled(ContentWrapper)`
	width: 47.5%;
	background: ${(props) => props.theme.colors.container.primary.background};
	border: 3.5px solid ${(props) => props.theme.colors.border.alt4};
	border-radius: ${STYLING.dimensions.borderRadius};
	overflow: hidden;
`;

export const TreeDiagram = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${open} ${fadeIn2};
	border: 1px solid ${(props) => props.theme.colors.border.primary};
	border-radius: ${STYLING.dimensions.borderRadiusWrapper};
`;

export const SelectedContainer = styled.div`
	// border: 1px solid ${(props) => props.theme.colors.border.primary};
	border-radius: ${STYLING.dimensions.borderRadius};
	background: ${(props) => props.theme.colors.container.alt1.background};
	padding: 10px 15px;
	position: absolute;
	top: 20px;
	left: 20px;
	p {
		font-size: ${(props) => props.theme.typography.size.small};
		font-weight: ${(props) => props.theme.typography.weight.bold};
		color: ${(props) => props.theme.colors.font.primary.base};
	}
`;

export const NodeContainer = styled.div``;

export const Node = styled.div`
	margin: 0 0 10px 0;
`;

export const Frame = styled.iframe`
	height: 100%;
	width: 100%;
`;

export const EmptyContainer = styled.div`
	height: 100%;
	width:L 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		font-size: ${(props) => props.theme.typography.size.small};
		font-weight: ${(props) => props.theme.typography.weight.bold};
		color: ${(props) => props.theme.colors.font.primary.active.base};
	}
`;

export const Divider = styled.div`
	svg {
		width: 60px;
	}
`;