import React from 'react';

import { LANGUAGE } from 'arcframework';

import { ASSETS, DOM } from 'helpers/config';
import * as windowUtils from 'helpers/window';

import { IconButton } from '../IconButton';
import { Portal } from '../Portal';

import * as S from './styles';
import { IProps } from './types';

export default function Modal(props: IProps) {
	React.useEffect(() => {
		windowUtils.hideDocumentBody();
		return () => {
			windowUtils.showDocumentBody();
		};
	}, []);

	const escFunction = React.useCallback(
		(e: any) => {
			if (e.key === 'Escape') {
				props.handleClose();
			}
		},
		[props]
	);

	React.useEffect(() => {
		document.addEventListener('keydown', escFunction, false);

		return () => {
			document.removeEventListener('keydown', escFunction, false);
		};
	}, [escFunction]);

	return (
		<Portal node={DOM.modal}>
			<S.Wrapper top={window ? (window as any).pageYOffset : 0}>
				<S.Container noHeader={!props.header}>
					{props.header && (
						<S.Header>
							<S.LT>
								<S.Title>{props.header}</S.Title>
							</S.LT>
							<S.Close>
								<IconButton type={'primary'} sm warning src={ASSETS.close} handlePress={() => props.handleClose()} />
							</S.Close>
						</S.Header>
					)}
					<S.Body>{props.children}</S.Body>
				</S.Container>
				{!props.header && (
					<S.CloseTextContainer>
						<S.CloseButtonContainer onClick={() => props.handleClose()}>
							{`${LANGUAGE.close} (ESC)`}
						</S.CloseButtonContainer>
					</S.CloseTextContainer>
				)}
			</S.Wrapper>
		</Portal>
	);
}
