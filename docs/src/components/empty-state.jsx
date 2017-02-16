import React from 'react';
import ReactMarkdown from 'react-markdown';
import EmptyState from 'anchor-ui/empty-state';
import Button from 'anchor-ui/button';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';
import emptyStateBackground from '../assets/images/empty_state_users.jpg';

const usage = '```js\n import EmptyState from \'anchor-ui/empty-state\';';

function EmptyStateDoc() {
  const componentData = _.find(components, component => component.displayName === 'EmptyState');

  const emptyState = {
    header: 'Empty state',
    body: 'You have stumbled upon an empty state my good sir.',
    background: emptyStateBackground
  };
  return (
    <article className="doc">
      <h1>Empty state</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <EmptyState
          background={emptyState.background}
          headerText={emptyState.header}
          bodyText={emptyState.body}
          button={<Button onClick={() => {}}><p>Click me</p></Button>}
          style={{ width: '275px', height: '600px' }}
        />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default EmptyStateDoc;