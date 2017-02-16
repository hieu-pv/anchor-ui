import React from 'react';
import ReactMarkdown from 'react-markdown';
import Message from 'anchor-ui/message';
import MessageList from 'anchor-ui/message-list';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';
import background from '../assets/images/channel-background.jpg';

const usage = '```js\n import Message from \'anchor-ui/message\';';

const messages = [
  {
    body: 'Stop talking, brain thinking. Hush. You know when grown-ups tell you \'everything\'s going to be fine\' and you think they\'re probably lying to make you feel better? I\'m the Doctor. Well, they call me the Doctor. I don\'t know why. I call me the Doctor too. I still don\'t know why.',
    createdAt: new Date(),
    username: 'Sjaak',
    avatar: 'https://avatars1.githubusercontent.com/u/6596471?v=3&s=400'
  },
  {
    body: 'Daleks have no concept of elegance.',
    createdAt: new Date(),
    username: 'Ian',
    avatar: 'https://avatars0.githubusercontent.com/u/14125280?v=3&s=400'
  },
  {
    body: ':hammer:',
    createdAt: new Date(),
    username: 'Lars',
    avatar: 'https://avatars0.githubusercontent.com/u/16486197?v=3&s=400'
  },
];

const currentUser = 'Sjaak';

function MessageDoc() {
  const componentData = _.find(components, component => component.displayName === 'Message');

  const style = {
    list: {
      backgroundImage: `url(${background})`,
      backgroundSize: '500px',
      height: '475px'
    }
  };

  return (
    <article className="doc">
      <h1>Messages</h1>
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
        <MessageList style={style.list}>
          {messages.map((message, index) => (
            <Message
              message={message}
              key={`message-${index}`}
              myMessage={message.username === currentUser}
              avatar={message.avatar}
              emoji
            />
          ))}
        </MessageList>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default MessageDoc;