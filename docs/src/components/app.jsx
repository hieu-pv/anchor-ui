import React, { PropTypes } from 'react';
import { AppHeader, Button } from 'anchor-ui';
import Menu from './menu';
import logo from '../assets/images/logo.svg';
import github from '../assets/images/github.svg';

function App({ children }) {
  return (
    <main className="app">
      <AppHeader
        text="Anchor UI"
        icon={
          <a
            href="https://anchor.chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="Anchor Chat" />
          </a>
        }
        rightButton={
          <a
            href="https://github.com/anchorchat/anchor-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button onClick={() => {}} iconButton>
              <img className="github" src={github} alt="Github" />
            </Button>
          </a>
        }
      />
      <article className="doc">
        <Menu />
        {children}
      </article>
    </main>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;