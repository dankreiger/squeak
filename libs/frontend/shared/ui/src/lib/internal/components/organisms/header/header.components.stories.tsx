import type { ComponentStory, Meta } from '@storybook/react';
import { Header } from './header.components';

export default {
  component: Header,
  title: 'Components/Organisms/Header',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const _Header: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderDefault = _Header.bind({});
HeaderDefault.args = {
  logo: <h1>some logo</h1>,
  navLinks: (
    <>
      <div>link 1</div>
      <div>link 2</div>
      <div>link 3</div>
      <div>link 4</div>
    </>
  ),
};
