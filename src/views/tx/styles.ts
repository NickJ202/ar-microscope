import styled from 'styled-components';

import { fadeIn2, open } from 'helpers/animations';
import { STYLING } from 'helpers/styling';

export const HeaderWrapper = styled.header`
	height: ${STYLING.dimensions.navHeight};
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 5;
    background: ${(props) => props.theme.colors.navigation.header.background};
	border-top: 2.5px solid ${(props) => props.theme.colors.border.alt4};
	border-bottom: 1.5px solid ${(props) => props.theme.colors.border.primary};
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

export const FooterWrapper = styled.footer`
	height: 40px;
	width: 100%;
	position: fixed;
	bottom: 0;
	z-index: 5;
	border-top: 1.5px solid ${(props) => props.theme.colors.border.primary};
    background: ${(props) => props.theme.colors.navigation.footer.background};
`;

export const FooterContainer = styled.div`
	height: 100%;
	width: 100%;
	max-width: ${STYLING.cutoffs.max};
	margin: 0 auto;
	padding: 0 20px;
`;

export const FooterContent = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	position: relative;
`;

export const ReturnContainer = styled.div`
	display: flex;
	position: absolute;
	top: 50%;
	right: 0;
	transform: translate(0, -50%);
	a {
		font-size: ${(props) => props.theme.typography.size.xSmall};
		font-weight: ${(props) => props.theme.typography.weight.bold};
		color: ${(props) => props.theme.colors.font.primary.base};
		text-transform: uppercase;
	}
	svg {
		width: 10px;
		fill: ${(props) => props.theme.colors.font.primary.base};
		margin: 0 0 0 10px;
	}
`;

export const LogoContainer = styled.div`
	position: absolute;
	left: 0;
	height: 100%;
	display: flex;
	align-items: center;
	a {
		&:hover {
			text-decoration: none;
			opacity: 0.85;
		}
		&:focus {
			text-decoration: none;
		}
	}
	@media (max-width: ${STYLING.cutoffs.initial}) {
		position: relative;
		left: auto;
		width: auto;
	}
`;

export const LogoLink = styled.a`
	height: 100%;
`;

export const LogoContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 5px 0;
	svg {
		height: 40px;
		width: 40px;
		fill: ${(props) => props.theme.colors.navigation.header.logoFill};
	}
`;

export const ActionContainer = styled.div`
	height: fit-content;
	width: 600px;
	max-width: 90vw;
	display: flex;
	align-items: center;
	position: absolute;
	right: 0;
	@media (max-width: ${STYLING.cutoffs.initial}) {
		top: 75px;
		position: relative;
		right: auto;
	}
`;

export const MobileActionContainer = styled.div`
	position: absolute;
	right: 0;
`;

export const Wrapper = styled.main`
	height: calc(100vh - ${STYLING.dimensions.navHeight});
	width: 100%;
	margin: ${STYLING.dimensions.navHeight} 0 0 0;
	position: relative;
	@media (max-width: ${STYLING.cutoffs.initial}) {
		height: auto;
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
	@media (max-width: ${STYLING.cutoffs.initial}) {
		flex-direction: column;
		max-height: none;
	}
`;

export const ContentWrapper = styled.div`
	height: 95%;
	width: 47.5%;
	@media (max-width: ${STYLING.cutoffs.initial}) {
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
	@media (max-width: ${STYLING.cutoffs.initial}) {
		width: 100%;
	}
`;

export const RendererWrapper = styled(ContentWrapper)`
	width: 47.5%;
	background: ${(props) => props.theme.colors.container.primary.background};
	border: 3.5px solid ${(props) => props.theme.colors.border.alt4};
	border-radius: ${STYLING.dimensions.borderRadius};
	overflow: hidden;
	@media (max-width: ${STYLING.cutoffs.initial}) {
		width: 100%;
	}
`;

export const TreeDiagram = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	animation: ${open} ${fadeIn2};
	border: 1px solid ${(props) => props.theme.colors.border.primary};
	border-radius: ${STYLING.dimensions.borderRadiusWrapper};
`;

export const SelectedContainer = styled.div`
	position: absolute;
	top: 20px;
	left: 20px;
	p {
		width: fit-content;
		border-radius: ${STYLING.dimensions.borderRadius};
		background: ${(props) => props.theme.colors.container.alt1.background};
		padding: 10px 15px 12.5px 15px;
		font-size: ${(props) => props.theme.typography.size.small};
		font-weight: ${(props) => props.theme.typography.weight.bold};
		color: ${(props) => props.theme.colors.font.primary.base};
	}
`;

export const CyWrapper = styled.div`
	height: calc(100% - 60px);
	width: 100%;
	height: 75%;
	width: 75%;
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
	@media (max-width: ${STYLING.cutoffs.initial}) {
		transform: rotate(90deg);
		margin: 0 15px 40px 0;
	}
`;