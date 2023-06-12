import type {Meta, StoryObj} from '@storybook/react';

import {Theme} from 'app/providers/ThemeProvider';

import {
	routeDecorator,
	themeDecorator,
} from 'shared/config/storybook/decorators';

import Navbar from './Navbar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Navbar> = {
	title: 'widget/Navbar',
	component: Navbar,
	tags: ['autodocs'],
	decorators: [routeDecorator],
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
