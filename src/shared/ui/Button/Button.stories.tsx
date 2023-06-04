import type {Meta, StoryObj} from '@storybook/react';

import Button, {ThemeButton} from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	args: {
		children: 'button',
	},
};

export const Clear: Story = {
	args: {
		children: 'button',
		theme: ThemeButton.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: 'button',
		theme: ThemeButton.OUTLINE,
	},
};
