module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['import', '@typescript-eslint', 'simple-import-sort', 'react-hooks'],
	extends: [],
	rules: {
		'import/no-duplicates': 'error',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
	},
	overrides: [
		{
			files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
			rules: {
				'simple-import-sort/imports': [
					'error',
					{
						groups: [
							['^react', '^@?\\w'],
							['^(@|arcframework)(/.*|$)'],
							[
								'^(@|actions)(/.*|$)',
								'^(@|app)(/.*|$)',
								'^(@|assets)(/.*|$)',
								'^(@|collections)(/.*|$)',
								'^(@|components)(/.*|$)',
								'^(@|filters)(/.*|$)',
								'^(@|global)(/.*|$)',
								'^(@|gql)(/.*|$)',
								'^(@|helpers)(/.*|$)',
								'^(@|hooks)(/.*|$)',
								'^(@|navigation)(/.*|$)',
								'^(@|providers)(/.*|$)',
								'^(@|root)(/.*|$)',
								'^(@|routes)(/.*|$)',
								'^(@|search)(/.*|$)',
								'^(@|state)(/.*|$)',
								'^(@|views)(/.*|$)',
								'^(@|wallet)(/.*|$)',
								'^(@|wrappers)(/.*|$)',
							],
							['^\\u0000'],
							['^\\.\\.(?!/?$)', '^\\.\\./?$'],
							['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
						],
					},
				],
				'react-hooks/exhaustive-deps': 'off',
			},
		},
	],
};
