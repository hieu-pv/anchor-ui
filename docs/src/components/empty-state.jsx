import React from 'react';
import { EmptyState, Button, colors } from 'anchor-ui';
import Props from './props';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';
import emptyStateBackground from '../assets/images/empty_state_users.jpg';

function EmptyStateDoc() {
  const componentData = components['src/components/empty-state.jsx'];
  const props = omitSheetFromProps(componentData.props);
  const userListStyle = {
    borderLeft: `1px solid ${colors.grey}`
  };
  const emptyState = {
    header: 'Empty state',
    body: 'You have stumbled upon an empty state my good sir.',
    background: emptyStateBackground
  };
  return (
    <article>
      <h1>Empty state</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <EmptyState
          style={userListStyle}
          background={emptyState.background}
          headerText={emptyState.header}
          bodyText={emptyState.body}
          button={<Button onClick={() => {}}><p>Click me</p></Button>}
        />
      </section>
      <Props props={props} />
    </article>
  );
}

export default EmptyStateDoc;
