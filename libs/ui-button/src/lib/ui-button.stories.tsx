import { Story, Meta } from '@storybook/react';
import { UiButton, UiButtonProps } from './ui-button';

export default {
  component: UiButton,
  title: 'UiButton',
} as Meta;

const Template: Story<UiButtonProps> = (args) => <UiButton {...args} />;

const x: number = 'Primary!';

export const Primary = Template.bind({});
Primary.args = {
  children: x,
};
