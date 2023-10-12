import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisvoluptas voluptatibus consequatur earum necessitatibus ullam, ab ea  recusandae doloribus.',
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisvoluptas voluptatibus consequatur earum necessitatibus ullam, ab earecusandae doloribus.',
  isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
