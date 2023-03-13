import { DefaultTheme } from 'styled-components';

const DEFAULT = {
	neutral1: '#FFFFFF',
	neutral2: '#F1F1F1',
	neutral3: '#E0E0E0',
	neutral4: '#3A3A3A',
	neutral5: '#D0D7DE',
	neutral6: '#D9D9D9',
	neutral7: '#959595',
	neutral8: '#ACACAC',
	neutral9: '#F6F8FA',
	neutral10: '#BABABA',
	neutral11: '#202020',
	neutral12: '#FAFAFA',
	neutral13: '#F7F7F7',
	neutral14: '#FFFFFF',
	neutral15: '#536471',
	neutral16: '#F0F9FE',
	primary: '#FF5F15',
	primary2: '#FF7433',
	primary3: '#FF8247',
	primary4: '#FF8F5C',
	alt1: '#FF5F15',
	alt2: '#FF7433',
	overlay1: 'rgba(255, 255, 255, 0.75)',
	contrast: '#EE3C3C',
	contrastShadow: '#F27979',
	success: '#72F052',
	neutral: '#FFB600',
	transparent: 'rgba(255, 255, 255, 0)',
	semiTransparent: 'rgba(255, 255, 255, 0.5)',
	backdropShadow1: '#c4c4c4b0',
	backdropShadow2: '#dadadaba',
};

export const defaultTheme: DefaultTheme = {
	scheme: 'light',
	colors: {
		border: {
			primary: DEFAULT.neutral5,
			alt1: DEFAULT.primary3,
			alt2: DEFAULT.primary4,
			alt3: DEFAULT.neutral6,
			alt4: DEFAULT.primary
		},
		button: {
			primary: {
				background: DEFAULT.neutral1,
				border: DEFAULT.primary,
				hover: DEFAULT.neutral9,
				label: DEFAULT.primary,
				active: {
					background: DEFAULT.primary,
					hover: DEFAULT.primary2,
					label: DEFAULT.neutral1,
				},
				disabled: {
					background: DEFAULT.neutral5,
					border: DEFAULT.neutral3,
					label: DEFAULT.neutral7,
				},
			},
			alt1: {
				background: DEFAULT.primary,
				border: DEFAULT.transparent,
				hover: DEFAULT.primary3,
				label: DEFAULT.neutral1,
				active: {
					background: DEFAULT.neutral1,
					hover: DEFAULT.neutral9,
					label: DEFAULT.primary,
				},
				disabled: {
					background: DEFAULT.neutral5,
					border: DEFAULT.neutral3,
					label: DEFAULT.neutral7,
				},
			},
			alt2: {
				background: DEFAULT.neutral1,
				border: DEFAULT.neutral5,
				hover: DEFAULT.neutral2,
				label: DEFAULT.primary,
				active: {
					background: DEFAULT.primary3,
					hover: DEFAULT.primary2,
					label: DEFAULT.neutral1,
				},
				disabled: {
					background: DEFAULT.neutral13,
					border: DEFAULT.neutral3,
					label: DEFAULT.neutral7,
				},
			},
		},
		checkbox: {
			active: {
				background: DEFAULT.primary2,
			},
			background: DEFAULT.neutral1,
			hover: DEFAULT.neutral9,
			border: DEFAULT.neutral5,
			disabled: DEFAULT.neutral5,
		},
		container: {
			primary: {
				background: DEFAULT.neutral1,
				hover: DEFAULT.neutral9,
			},
			alt1: {
				background: DEFAULT.primary,
			},
			alt2: {
				background: DEFAULT.primary2,
			},
			alt3: {
				background: DEFAULT.neutral9,
			},
			alt4: {
				background: DEFAULT.neutral12,
			},
			alt5: {
				background: DEFAULT.neutral11,
			},
		},
		font: {
			primary: {
				base: DEFAULT.neutral1,
				alt1: DEFAULT.neutral4,
				alt2: DEFAULT.alt1,
				alt3: DEFAULT.alt2,
				alt4: DEFAULT.primary3,
				alt5: DEFAULT.primary4,
				alt6: DEFAULT.neutral7,
				alt7: DEFAULT.neutral8,
				alt8: DEFAULT.neutral11,
				alt9: DEFAULT.neutral15,
				active: {
					base: DEFAULT.primary,
					hover: DEFAULT.primary3,
				},
				invalid: DEFAULT.contrast,
			},
		},
		form: {
			background: DEFAULT.neutral1,
			border: DEFAULT.neutral11,
			invalid: {
				outline: DEFAULT.contrast,
				shadow: DEFAULT.contrastShadow,
			},
			valid: {
				outline: DEFAULT.primary3,
				shadow: DEFAULT.primary4,
			},
			disabled: {
				background: DEFAULT.neutral2,
				label: DEFAULT.neutral7,
			},
		},
		icon: {
			primary: {
				fill: DEFAULT.neutral1,
				hover: DEFAULT.neutral6,
				alt1: {
					fill: DEFAULT.neutral7,
				},
			},
			alt1: {
				fill: DEFAULT.alt1,
			},
			alt2: {
				fill: DEFAULT.neutral4,
			},
			inactive: DEFAULT.neutral4,
			info: {
				background: DEFAULT.contrast,
				border: DEFAULT.neutral7,
			},
		},
		image: {
			shadow1: DEFAULT.backdropShadow1,
			shadow2: DEFAULT.backdropShadow2,
		},
		indicator: {
			active: {
				base: DEFAULT.primary,
				hover: DEFAULT.primary2,
			},
			inactive: {
				base: DEFAULT.neutral6,
				hover: DEFAULT.neutral8,
			},
		},
		loader: {
			primary: DEFAULT.primary3,
		},
		navigation: {
			footer: {
				background: DEFAULT.neutral1,
			},
			header: {
				background: DEFAULT.neutral11,
				logoFill: DEFAULT.primary,
			},
		},
		notification: {
			success: DEFAULT.success,
			warning: DEFAULT.contrast,
			neutral: DEFAULT.neutral,
		},
		overlay: {
			primary: DEFAULT.overlay1,
		},
		shadow: {
			primary: DEFAULT.neutral9,
		},
		table: {
			placeholder: {
				background: DEFAULT.neutral2,
				backgroundStart: DEFAULT.transparent,
				backgroundSlide: DEFAULT.semiTransparent,
				backgroundEnd: DEFAULT.transparent,
			},
			row: {
				active: {
					background: DEFAULT.neutral16,
					border: DEFAULT.primary4,
				},
			},
		},
		tabs: {
			active: DEFAULT.primary,
			inactive: DEFAULT.transparent,
		},
		transparent: DEFAULT.transparent,
		view: {
			background: DEFAULT.neutral2,
		},
		warning: DEFAULT.contrast,
	},
	typography: {
		family: {
			primary: `'Roboto Mono', monospace`,
			alt1: `'Roboto Mono', monospace`,
		},
		size: {
			h1: '48px',
			h2: '24px',
			base: '16px',
			small: '15px',
			xSmall: '14px',
			xxSmall: '13px',
		},
		weight: {
			regular: '400',
			medium: '500',
			bold: '600',
		},
	},
};
