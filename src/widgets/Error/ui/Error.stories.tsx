import type {Meta, StoryObj} from '@storybook/react';

import {Theme} from 'app/providers/ThemeProvider';

import {themeDecorator} from 'shared/config/storybook/decorators';

import Error from './Error';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Error> = {
	title: 'widget/Error',
	component: Error,
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
