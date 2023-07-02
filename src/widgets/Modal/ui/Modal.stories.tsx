import type {Meta, StoryObj} from '@storybook/react';

import {Theme} from 'app/providers/ThemeProvider';

import {themeDecorator} from 'shared/config/storybook/decorators';

import Modal from './Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
	title: 'widget/Modal',
	component: Modal,
	tags: ['autodocs'],
	args: {
		isOpen: true,
		children:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique temporibus harum corporis doloremque libero accusantium et perferendis in ad commodi?',
	},
	decorators: [themeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
	decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
	decorators: [themeDecorator(Theme.DARK)],
};
