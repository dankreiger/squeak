import type { ComponentStory, Meta } from '@storybook/react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { TextRow } from '../text-row';
import { TextWithIcon } from '../text-with-icon';
import { Panel } from './panel.components';

export default {
  component: Panel,
  title: 'Components/Molecules/Panel',
} as Meta;

const dummyRows = [
  {
    vdomKey: 'monday',
    content: <TextRow left="Monday" right={<div>Closed</div>} />,
  },
  {
    vdomKey: 'tuesday',
    content: <TextRow left="Tuesday" right={<div>10 AM - 6 PM</div>} />,
  },
  {
    vdomKey: 'wednesday',
    content: (
      <TextRow
        left="Wednesday"
        right={<div color="secondary">Closed</div>}
        accentedText="Text"
      />
    ),
  },
  {
    vdomKey: 'thursday',
    content: <TextRow left="Thursday" right={<div>10 AM - 6 PM</div>} />,
  },
  {
    vdomKey: 'friday',
    content: (
      <TextRow
        left={<div>Friday</div>}
        right={<div color="secondary">10 AM - 1 AM</div>}
      />
    ),
  },
  {
    vdomKey: 'saturday',
    content: <TextRow left="Saturday" right={<div>10 AM - 1 AM</div>} />,
  },
  {
    vdomKey: 'sunday',
    content: <TextRow left="Sunday" right={<div>12 PM - 9 PM</div>} />,
  },
];

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />;

export const OnePanel = Template.bind({});
OnePanel.args = {
  header: (
    <TextWithIcon
      icon={<AiOutlineClockCircle fontSize="20px" />}
      text={'Opening Hours'}
    />
  ),
  rows: dummyRows,
};

const Template2: ComponentStory<typeof Panel> = (args) => (
  <div style={{ gridTemplateColumns: '1fr' }}>
    <Panel {...args} />
    <Panel {...args} />
  </div>
);

export const TwoPanels = Template2.bind({});
TwoPanels.args = {
  header: (
    <TextWithIcon
      icon={<AiOutlineClockCircle fontSize="20px" />}
      text={'Opening Hours'}
    />
  ),
  rows: dummyRows,
};
