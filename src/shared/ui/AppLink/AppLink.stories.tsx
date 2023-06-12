import type {Meta, StoryObj} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {
	routeDecorator,
	themeDecorator,
} from 'shared/config/storybook/decorators';

import AppLink, {AppLinkTheme} from './AppLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	tags: ['autodocs'],
	decorators: [routeDecorator],
	args: {
		children: 'Link',
		to: '/',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	args: {theme: AppLinkTheme.PRIMARY},
};

export const Secondary: Story = {
	args: {theme: AppLinkTheme.SECONDARY},
};

export const Red: Story = {
	args: {theme: AppLinkTheme.RED},
};

export const PrimaryDark: Story = {
	args: {theme: AppLinkTheme.PRIMARY},
	decorators: [themeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
	args: {theme: AppLinkTheme.SECONDARY},
	decorators: [themeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
	args: {theme: AppLinkTheme.RED},
	decorators: [themeDecorator(Theme.DARK)],
};
