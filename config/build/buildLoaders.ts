import {type RuleSetRule} from 'webpack';

import buildCssLoader from './loaders/buildCssLoader';
import buildSvgLoader from './loaders/buildSvgLoader';

import {type BuildOptions} from './types/config';

export function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {
	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const babelLoader = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{
							locales: ['ru', 'en'],
							keyAsDefaultValue: true,
						},
					],
				],
			},
		},
	};

	return [babelLoader, typeScriptLoader, buildCssLoader(isDev), buildSvgLoader(), fileLoader];
}
