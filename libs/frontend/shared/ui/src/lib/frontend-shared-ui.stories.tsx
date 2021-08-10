import { Story, Meta } from '@storybook/react';
import { FrontendSharedUi, FrontendSharedUiProps } from './frontend-shared-ui';

export default {
  component: FrontendSharedUi,
  title: 'FrontendSharedUi',
} as Meta;

const Template: Story<FrontendSharedUiProps> = (args) => (
  <FrontendSharedUi {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
