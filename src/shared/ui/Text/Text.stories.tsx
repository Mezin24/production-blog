import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: TextTheme.PRIMARY,
  title: 'This is my title',
  text: 'Some long text, Some long text, Some long text Some long text Some long text Some long text',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  theme: TextTheme.PRIMARY,
  title: 'This is my title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  theme: TextTheme.PRIMARY,
  text: 'Some long text, Some long text, Some long text Some long text Some long text Some long text',
};

export const Error = Template.bind({});
Error.args = {
  theme: TextTheme.ERROR,
  title: 'Error message',
  text: 'Some long text, Some long text, Some long text Some long text Some long text Some long text',
};
