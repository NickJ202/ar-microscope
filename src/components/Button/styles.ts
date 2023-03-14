import styled from 'styled-components';

import { STYLING } from 'helpers/styling';

function getWidth(noMinWidth: boolean | undefined, width: number | undefined) {
	if (width) {
		return `${width.toString()}px`;
	} else {
		if (noMinWidth) {
			return 'none';
		} else {
			return STYLING.dimensions.buttonWidth;
		}
	}
}

export const Primary = styled.button<{
	useMaxWidth: boolean | undefined;
	noMinWidth: boolean | undefined;
	width: number | undefined;
	active: boolean | undefined;
}>`
	position: relative;
	background: ${(props) =>
		props.active ? props.theme.colors.button.primary.active.background : props.theme.colors.button.primary.background};
	border: 1.5px solid ${(props) => props.theme.colors.button.primary.border};
	height: ${STYLING.dimensions.buttonHeight};
	min-width: ${(props) => getWidth(props.noMinWidth, props.width)};
	max-width: ${(props) => (props.useMaxWidth ? STYLING.dimensions.buttonWidth : 'none')};
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 16.5px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${STYLING.dimensions.borderRadiusField};
	font-weight: ${(props) => props.theme.typography.weight.bold};
	&:hover {
		border: 1.5px solid ${(props) => (props.active ? 'transparent' : props.theme.colors.button.primary.border)};
		background: ${(props) =>
			props.active ? props.theme.colors.button.primary.active.hover : props.theme.colors.button.primary.hover};
	}
	&:focus {
		border: 1.5px solid ${(props) => (props.active ? 'transparent' : props.theme.colors.button.primary.border)};
		background: ${(props) =>
			props.active ? props.theme.colors.button.primary.active.hover : props.theme.colors.button.primary.hover};
	}
	&:disabled {
		background: ${(props) => props.theme.colors.button.primary.disabled.background};
		color: ${(props) => props.theme.colors.button.primary.disabled.label};
		border: 1.5px solid ${(props) => props.theme.colors.button.primary.disabled.border};
		span {
			color: ${(props) => props.theme.colors.button.primary.disabled.label};
		}
	}
	span {
		width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: ${(props) => props.theme.typography.size.xSmall};
		color: ${(props) =>
			props.active ? props.theme.colors.button.primary.active.label : props.theme.colors.button.primary.label};
	}
`;

export const IconPrimary = styled.div<{
	active: boolean;
	disabled: boolean;
	leftAlign: boolean;
}>`
	svg {
		height: 20px;
		width: 15px;
		margin: ${(props) => (props.leftAlign ? '0 12.5px 0 0' : '0 0 0 12.5px')};
		padding: 3.5px 0 0 0;
		fill: ${(props) =>
			props.disabled
				? props.theme.colors.button.primary.disabled.label
				: props.active
				? props.theme.colors.button.primary.active.label
				: props.theme.colors.button.primary.label};
	}
`;

export const Alt1 = styled(Primary)`
	background: ${(props) =>
		props.active ? props.theme.colors.button.alt1.active.background : props.theme.colors.button.alt1.background};
	border: 1.5px solid ${(props) => props.theme.colors.button.alt1.border};
	&:hover {
		border: 1.5px solid ${(props) => (props.active ? 'transparent' : props.theme.colors.button.alt1.border)};
		background: ${(props) =>
			props.active ? props.theme.colors.button.alt1.active.hover : props.theme.colors.button.alt1.hover};
	}
	&:focus {
		border: 1.5px solid ${(props) => (props.active ? 'transparent' : props.theme.colors.button.alt1.border)};
		background: ${(props) =>
			props.active ? props.theme.colors.button.alt1.active.hover : props.theme.colors.button.alt1.hover};
	}
	&:disabled {
		background: ${(props) => props.theme.colors.button.alt1.disabled.background};
		color: ${(props) => props.theme.colors.button.alt1.disabled.label};
		border: 1.5px solid ${(props) => props.theme.colors.button.alt1.disabled.border};
		span {
			color: ${(props) => props.theme.colors.button.alt1.disabled.label};
		}
	}
	span {
		color: ${(props) =>
			props.active ? props.theme.colors.button.alt1.active.label : props.theme.colors.button.alt1.label};
	}
`;

export const IconSecondary = styled(IconPrimary)`
	svg {
		fill: ${(props) =>
			props.disabled
				? props.theme.colors.button.alt1.disabled.label
				: props.active
				? props.theme.colors.button.alt1.active.label
				: props.theme.colors.button.alt1.label};
	}
`;

export const Alt2 = styled(Primary)`
	background: ${(props) =>
		props.active ? props.theme.colors.button.alt2.active.background : props.theme.colors.button.alt2.background};
	border: 1.5px solid
		${(props) =>
			props.active ? props.theme.colors.button.alt2.active.background : props.theme.colors.button.alt2.border};
	&:hover {
		border: 1.5px solid
			${(props) => (props.active ? props.theme.colors.button.alt2.active.hover : props.theme.colors.button.alt2.border)};
		background: ${(props) =>
			props.active ? props.theme.colors.button.alt2.active.hover : props.theme.colors.button.alt2.hover};
	}
	&:focus {
		border: 1.5px solid
			${(props) => (props.active ? props.theme.colors.button.alt2.active.hover : props.theme.colors.button.alt2.border)};
		background: ${(props) =>
			props.active ? props.theme.colors.button.alt2.active.hover : props.theme.colors.button.alt2.hover};
	}
	&:disabled {
		background: ${(props) => props.theme.colors.button.alt2.disabled.background};
		color: ${(props) => props.theme.colors.button.alt2.disabled.label};
		border: 1.5px solid ${(props) => props.theme.colors.button.alt2.disabled.border};
		span {
			color: ${(props) => props.theme.colors.button.alt2.disabled.label};
		}
	}
	span {
		color: ${(props) =>
			props.active ? props.theme.colors.button.alt2.active.label : props.theme.colors.button.alt2.label};
	}
`;
export const IconAlt2 = styled(IconPrimary)`
	svg {
		fill: ${(props) =>
			props.disabled
				? props.theme.colors.button.alt2.disabled.label
				: props.active
				? props.theme.colors.button.alt2.active.label
				: props.theme.colors.button.alt2.label};
	}
`;
