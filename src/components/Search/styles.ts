import styled from 'styled-components';

import { STYLING } from 'helpers/styling';

export const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
`;

export const SearchWrapper = styled.div`
	height: ${STYLING.dimensions.formHeightSm};
	width: ${STYLING.dimensions.formWidthMax};
	width: 100%;
	max-width: 88.25vw;
	display: flex;
	position: relative;
`;

export const SearchIcon = styled.div<{ disabled: boolean | undefined }>`
    svg {
        position: absolute;
        top: 5.15px;
        left: 17.5px;
        width: 15px;
        fill ${(props) => props.theme.colors.icon.primary.alt1.fill};
        &:hover {
            cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
        }
    }
`;

export const SearchInput = styled.input`
	height: ${STYLING.dimensions.formHeightSm};
	width: 100%;
	font-size: ${(props) => props.theme.typography.size.base};
	font-weight: ${(props) => props.theme.typography.weight.bold};
	border: 1px solid ${(props) => props.theme.colors.form.border};
	border-radius: 36px;
	padding: 10px 35px 10px 40px;
	&:focus {
		outline: 0;
		border: 1px solid ${(props) => props.theme.colors.form.valid.outline};
		box-shadow: 0 0 2.5px 1px ${(props) => props.theme.colors.form.valid.shadow};
		transition: box-shadow, border 225ms ease-in-out;
	}
	&:disabled {
		background: ${(props) => props.theme.colors.form.disabled.background};
		color: ${(props) => props.theme.colors.form.disabled.label};
		box-shadow: none;
		border: 1px solid ${(props) => props.theme.colors.form.border};
	}
`;

export const ClearWrapper = styled.div`
	button {
		width: auto;
	}
	svg {
		height: auto;
		width: auto;
		position: absolute;
		right: 14.5px;
		width: 12.5px;
		height: auto;
		top: 50.5%;
		transform: translate(0, -50%);
	}
`;

export const SearchButtonWrapper = styled.div`
	margin: 0 0 0 20px;
	display: flex;
	align-items: center;

	@media (max-width: ${STYLING.cutoffs.secondary}) {
		display: none;
	}
`;