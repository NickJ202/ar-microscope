import styled from 'styled-components';

import { fadeIn2, open } from 'helpers/animations';
import { STYLING } from 'helpers/styling';

export const HeaderWrapper = styled.header`
	height: ${STYLING.dimensions.navHeight};
	width: 100%;
	position: fixed;
	top: 0px;
	z-index: 5;
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
`;

export const LogoContainer = styled.div`
	height: 40px;
	width: 40px;
`;

export const Logo = styled.img`
	height: 100%;
	width: 100%;
`;

export const ActionContainer = styled.div`
	height: 100%;
	width: fit-content;
	display: flex;
	align-items: center;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
`;

export const Wrapper = styled.main`
	height: calc(100vh - ${STYLING.dimensions.navHeight});
	width: 100%;
	margin: ${STYLING.dimensions.navHeight} 0 0 0;
	position: relative;
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
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ContentWrapper = styled.div`
	height: 95%;
	width: 47.5%;
	background: ${(props) => props.theme.colors.container.primary.background};
	border: 1px solid ${(props) => props.theme.colors.border.primary};
	border-radius: ${STYLING.dimensions.borderRadiusWrapper};
	box-shadow: 0 0 2.5px ${(props) => props.theme.colors.shadow.primary};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TreeDiagram = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: ${open} ${fadeIn2};
`;

export const NodeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Node = styled.div`
	margin: 0 0 10px 0;
`;

export const Frame = styled.iframe`
	height: 100%;
	width: 100%;
`;
