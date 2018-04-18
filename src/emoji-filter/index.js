import Radium from 'radium';
import compose from 'recompose/compose';
import onClickOutside from 'react-onclickoutside';
import withTheme from '../with-theme';
import EmojiFilter from './component';

const enhance = compose(
  withTheme,
  onClickOutside,
  Radium
);

export default enhance(EmojiFilter);
