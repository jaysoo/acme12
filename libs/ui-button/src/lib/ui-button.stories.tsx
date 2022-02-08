import { Story, Meta } from '@storybook/react';
import { UiButton, UiButtonProps } from './ui-button';

export default {
  component: UiButton,
  title: 'UiButton',
} as Meta;

const Template: Story<UiButtonProps> = (args) => <UiButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};
