import React from 'react';
import find from 'lodash/find';
import faker from 'faker';
import ProfileCard from '../anchor-ui/profile-card';
import components from '../components.json';
import Props from './props';
import Paper from '../anchor-ui/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import ProfileCard from 'anchor-ui/profile-card';
  \`\`\`
`;

const componentData = find(components, { displayName: 'ProfileCard' });
const style = {
  paper: {
    margin: 0,
    padding: '20px'
  }
};

const ProfileCardDoc = () => (
  <article className="page">
    <h1>ProfileCard</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <Markdown markdown={usage} title="Code example" />
    <section>
      <h1>Examples</h1>
      <Paper style={style.paper}>
        <ProfileCard username={faker.internet.userName()} avatar={faker.internet.avatar()} />
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default ProfileCardDoc;
