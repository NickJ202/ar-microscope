import React from 'react';

export interface IProps {
	header: string | null;
	handleClose: () => void;
	children: React.ReactNode;
}
