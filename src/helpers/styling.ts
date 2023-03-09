export const STYLING = {
	cutoffs: {
		initial: '1024px',
		initialWrapper: '1200px',
		tablet: '840px',
		secondary: '540px',
		max: '1400px',
		mobileLandscape: '600px',
	},
	dimensions: {
		borderRadius: '10px',
		borderRadiusField: '2.25px',
		borderRadiusWrapper: '5px',
		buttonHeight: '33.5px',
		buttonWidth: '150px',
		navHeight: '70px',
		formHeightMin: '37.5px',
		formHeightSm: '42.5px',
		formHeightMax: '55px',
		formWidthMin: '300px',
		formWidthMax: '500px',
		messagingContent: '650px',
		threadWidth: '600px',
		threadDetailWidth: '500px',
		wrapWidth: '675px',
	},
};

export function getImageShadow(theme: any) {
	return `0 0 5px ${theme.colors.transparent};`;
}
