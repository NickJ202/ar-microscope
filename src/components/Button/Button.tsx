import { ReactSVG } from 'react-svg';

import { LANGUAGE } from 'arcframework';

import * as S from './styles';
import { IProps } from './types';

export default function Button(props: IProps) {
	const buttonStyle = getType();
	const StyledButton = buttonStyle.wrapper;
	const StyledIcon = buttonStyle.icon;

	function getType() {
		let buttonObj: {
			wrapper: any;
			icon: any;
		};
		switch (props.type) {
			case 'alt1':
				buttonObj = {
					wrapper: S.Alt1,
					icon: S.IconSecondary,
				};
				return buttonObj;
			case 'alt2':
				buttonObj = {
					wrapper: S.Alt2,
					icon: S.IconAlt2,
				};
				return buttonObj;
			default:
				buttonObj = {
					wrapper: S.Primary,
					icon: S.IconPrimary,
				};
				return buttonObj;
		}
	}

	function getLabel() {
		return (
			<>
				{props.icon && props.iconLeftAlign && (
					<StyledIcon disabled={props.disabled} active={props.active} leftAlign={props.iconLeftAlign}>
						<ReactSVG src={props.icon} />
					</StyledIcon>
				)}
				<span>{props.label}</span>
				{props.icon && !props.iconLeftAlign && (
					<StyledIcon disabled={props.disabled} active={props.active} leftAlign={props.iconLeftAlign}>
						<ReactSVG src={props.icon} />
					</StyledIcon>
				)}
			</>
		);
	}

	function handlePress(e: React.MouseEvent) {
		e.stopPropagation();
		props.handlePress(e);
	}

	return (
		<StyledButton
			tabIndex={props.noFocus ? -1 : 0}
			type={props.formSubmit ? 'submit' : 'button'}
			onClick={props.handlePress}
			onKeyPress={handlePress}
			disabled={props.disabled}
			active={props.active}
			useMaxWidth={props.useMaxWidth}
			noMinWidth={props.noMinWidth}
			width={props.width}
			data-testid={props.testingCtx}
		>
			{props.loading ? `${LANGUAGE.loading} ...` : getLabel()}
		</StyledButton>
	);
}
