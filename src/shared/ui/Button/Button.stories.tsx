import type {Meta, StoryObj} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';

import {themeDecorator} from 'shared/config/storybook/decorators';

import Button, {ThemeButton} from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'button',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	args: {},
};

export const Clear: Story = {
	args: {
		theme: ThemeButton.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		theme: ThemeButton.OUTLINE,
	},
};

export const OutlineDark: Story = {
	args: {
		theme: ThemeButton.OUTLINE,
	},
	decorators: [themeDecorator(Theme.DARK)],
};
