import type {Meta, StoryObj} from '@storybook/react';

import {Theme} from 'app/providers/ThemeProvider';

import {themeDecorator} from 'shared/config/storybook/decorators';

import AboutPage from './AboutPage';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AboutPage> = {
	title: 'pages/AboutPage',
	component: AboutPage,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [themeDecorator(Theme.DARK)],
};
