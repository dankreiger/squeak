import type { ComponentStory, Meta } from '@storybook/react';
import { Header } from '../../components';
import { Page } from './page.layout';

export default {
  component: Page,
  title: 'Layouts/Page',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const _Page: ComponentStory<typeof Page> = (args) => (
  <Page {...args}>page body</Page>
);

export const PageLayoutDefault = _Page.bind({});

PageLayoutDefault.args = {
  header: (
    <Header
      height="60px"
      logo={<h1>some logo</h1>}
      navLinks={
        <>
          <div>link 1</div>
          <div>link 2</div>
          <div>link 3</div>
          <div>link 4</div>
        </>
      }
    />
  ),
};
