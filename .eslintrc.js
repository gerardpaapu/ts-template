const path = require('path');
module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	settings: {},
	parserOptions: {
		project: path.resolve(__dirname, './tsconfig.json'),
		tsconfigRootDir: __dirname,
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'@typescript-eslint/explicit-function-return-type': [0],
		'@typescript-eslint/no-explicit-any': [0],
		'@typescript-eslint/interface-name-prefix': [1, 'always'],
		'@typescript-eslint/no-non-null-assertion': [0],
	},
};
