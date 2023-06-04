import {StoryFn} from '@storybook/react';
import 'app/styles';

const StyleDecorator = (story: () => StoryFn) => story();

export default StyleDecorator;
