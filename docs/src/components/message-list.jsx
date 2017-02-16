import React from 'react';
import ReactMarkdown from 'react-markdown';
import Message from 'anchor-ui/message';
import MessageList from 'anchor-ui/message-list';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';
import background from '../assets/images/channel-background.jpg';

const usage = '```js\n import MessageList from \'anchor-ui/message-list\';';

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
    body: ':pig2:',
    createdAt: new Date(),
    username: 'Sjaak',
    avatar: 'https://avatars1.githubusercontent.com/u/6596471?v=3&s=400'
  },
];

const currentUser = 'Ian';

function MessageListDoc() {
  const componentData = _.find(components, component => component.displayName === 'MessageList');

  const style = {
    messageList: {
      backgroundImage: `url(${background})`,
      backgroundSize: '500px',
      height: '475px'
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
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <MessageList style={style.messageList}>
          {messages.map((message, index) => (
            <Message
              message={message} key={`message-${index}`}
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

export default MessageListDoc;