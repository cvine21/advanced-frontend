module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'xo', 'plugin:react/jsx-runtime'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
	},
	globals: {
		__IS_DEV__: true,
	},
};
