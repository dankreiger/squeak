import type { ComponentStory, Meta } from '@storybook/react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { TextWithIcon } from './text-with-icon.components';

export default {
  component: TextWithIcon,
  title: 'Components/Molecules/TextWithIcon',
} as Meta;

const Template: ComponentStory<typeof TextWithIcon> = (args) => (
  <TextWithIcon {...args} />
);

export const Example = Template.bind({});
Example.args = {
  icon: <AiOutlineClockCircle fontSize="20px" />,
  text: 'Opening Hours',
};
