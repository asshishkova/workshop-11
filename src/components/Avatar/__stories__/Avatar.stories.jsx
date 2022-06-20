import React from 'react';

import { Avatar } from '../Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Avatar {...args} />;
export const Active = Template.bind({});
Active.args = {
  active: true,
  // label: 'Avatar',
};

export const Disabled = Template.bind({});
Disabled.args = {
  // label: 'Avatar',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  // label: 'Avatar',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  // label: 'Avatar',
};

export const Photo = Template.bind({});
Photo.args = {
  content: 'photo',
  // label: 'Avatar',
};

export const Icon = Template.bind({});
Icon.args = {
  content: 'icon',
  // label: 'Avatar',
};

export const Letters = Template.bind({});
Letters.args = {
  content: 'letters',
  label: 'AB',
};
