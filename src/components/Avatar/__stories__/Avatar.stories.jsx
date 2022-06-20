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
export const Round = Template.bind({});
Round.args = {
  round: true,
  // label: 'Avatar',
};

export const Square = Template.bind({});
Square.args = {
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
