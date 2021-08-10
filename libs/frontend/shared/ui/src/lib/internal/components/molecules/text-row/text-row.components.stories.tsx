import type { ComponentStory, Meta } from '@storybook/react';
import { TextRow } from './text-row.components';

export default {
  component: TextRow,
  title: 'Components/Molecules/TextRow',
} as Meta;

const Template: ComponentStory<typeof TextRow> = (args) => (
  <TextRow {...args} />
);

export const OneTextRow = Template.bind({});
OneTextRow.args = {
  left: 'On the left',
  right: 'On the right',
};
