import type {Meta, StoryObj} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';

import {themeDecorator} from 'shared/config/storybook/decorators';

import Button, {ButtonSize, ThemeButton} from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'button',
	},
	decorators: [themeDecorator(Theme.LIGHT)],
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

export const ClearInverted: Story = {
	args: {
		theme: ThemeButton.CLEAR_INVERTED,
	},
};

export const OutlineSizeM: Story = {
	args: {
		theme: ThemeButton.OUTLINE,
	},
};
export const OutlineSizeL: Story = {
	args: {
		theme: ThemeButton.OUTLINE,
		size: ButtonSize.L,
	},
};
export const OutlineSizeXL: Story = {
	args: {
		theme: ThemeButton.OUTLINE,
		size: ButtonSize.XL,
	},
};

export const OutlineDark: Story = {
	args: {
		theme: ThemeButton.OUTLINE,
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const Background: Story = {
	args: {
		theme: ThemeButton.BACKGROUND,
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const BackgroundInverted: Story = {
	args: {
		theme: ThemeButton.BACKGROUND_INVERTED,
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const SquareSizeM: Story = {
	args: {
		children: '>',
		theme: ThemeButton.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.M,
	},
};
export const SquareSizeL: Story = {
	args: {
		children: '>',
		theme: ThemeButton.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L,
	},
};
export const SquareSizeXL: Story = {
	args: {
		children: '>',
		theme: ThemeButton.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL,
	},
};
