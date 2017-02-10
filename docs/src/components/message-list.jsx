import React from 'react';
import Message from 'anchor-ui/message';
import MessageList from 'anchor-ui/message-list';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';
import theDoctor from '../assets/images/the_doctor.jpg';
import dalek from '../assets/images/dalek.jpg';
import background from '../assets/images/channel-background.jpg';

const messages = [
  {
    body: 'Stop talking, brain thinking. Hush. You know when grown-ups tell you \'everything\'s going to be fine\' and you think they\'re probably lying to make you feel better? I\'m the Doctor. Well, they call me the Doctor. I don\'t know why. I call me the Doctor too. I still don\'t know why.',
    createdAt: new Date(),
    username: 'The Doctor',
    profileImage: theDoctor
  },
  {
    body: 'Daleks have no concept of elegance.',
    createdAt: new Date(),
    username: 'Dalek',
    profileImage: dalek
  },
  {
    body: 'You hit me with a cricket bat. I\'m nobody\'s taxi service; I\'m not gonna be there to catch you every time you feel like jumping out of a spaceship. Sorry, checking all the water in this area; there\'s an escaped fish.',
    createdAt: new Date(),
    username: 'The Doctor',
    profileImage: theDoctor
  },
  {
    body: ':whale2:',
    createdAt: new Date(),
    username: 'Dalek',
    profileImage: dalek
  },
];

const currentUser = 'The Doctor';

function MessageListDoc() {
  const componentData = _.find(components, component => component.displayName === 'MessageList');

  const style = {
    messageList: {
      backgroundImage: `url(${background})`,
      backgroundSize: '500px',
      height: '300px'
    }
  };

  return (
    <article className="doc">
      <h1>MessagesList</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <MessageList style={style.messageList}>
          {messages.map((message, index) => (
            <Message
              message={message} key={`message-${index}`}
              myMessage={message.username === currentUser}
              avatar={message.profileImage}
              emoji
            />
          ))}
        </MessageList>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default MessageListDoc;
