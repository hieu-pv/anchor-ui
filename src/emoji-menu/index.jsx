import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojione from 'emojione';
import _ from 'lodash';
import Radium from 'radium';
import compose from 'recompose/compose';
import onClickOutside from 'react-onclickoutside';
import EventListener from 'react-event-listener';
import emojis from './emoji';
import EmojiCategory from './emoji-category';
import EmojiModifiers from './emoji-modifiers';
import EmojiCategories from './emoji-categories';
import Storage from './storage';
import getStyles from './get-styles';
import themeable from '../themeable';

const storage = new Storage();

/** Menu for sending messages with emoji */
class EmojiMenu extends Component {
  static displayName = 'EmojiMenu'

  static propTypes = {
    /** Path to svg sprites */
    svgSprites: PropTypes.string,
    /** Send an emoji */
    sendEmoji: PropTypes.func.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the header element */
    headerStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the color modifiers */
    modifierStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the emoji category */
    categoryStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the emojis */
    emojiStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the footer element */
    footerStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the footer icons */
    iconStyle: PropTypes.instanceOf(Object),
    /** Toggle the EmojiMenu's visibility */
    open: PropTypes.bool,
    /** Function to hide the menu */
    hideMenu: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired
  }

  static defaultProps = {
    svgSprites: '',
    style: {},
    headerStyle: {},
    modifierStyle: {},
    categoryStyle: {},
    emojiStyle: {},
    footerStyle: {},
    iconStyle: {},
    open: false
  }

  constructor(props) {
    super(props);

    if (props.svgSprites) {
      emojione.imageType = 'svg';
      emojione.sprites = true;
      emojione.imagePathSVGSprites = props.svgSprites;
    }

    const storedEmojis = storage.getEmojis();

    this.state = {
      tone: 'tone0',
      storedEmojis: storedEmojis || [],
      category: 'people'
    };

    this.changeTone = this.changeTone.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.sendEmoji = this.sendEmoji.bind(this);
  }

  handleClickOutside = (event) => {
    const { hideMenu } = this.props;

    hideMenu(event);
  }

  handleKeyUp = (event) => {
    const { hideMenu } = this.props;

    if (event.which === 27) {
      hideMenu(event);
    }
  }

  changeTone(tone) {
    this.setState({
      tone
    });
  }

  changeCategory(category) {
    this.setState({
      category
    });
  }

  sendEmoji(emoji) {
    const { sendEmoji } = this.props;

    storage.storeEmoji(emoji);
    sendEmoji(emoji);

    const storedEmojis = storage.getEmojis();

    this.setState({
      storedEmojis: storedEmojis || []
    });
  }

  render() {
    const { tone, storedEmojis, category } = this.state;
    const {
      style,
      headerStyle,
      modifierStyle,
      categoryStyle,
      emojiStyle,
      footerStyle,
      iconStyle,
      sendEmoji, // eslint-disable-line no-unused-vars
      svgSprites, // eslint-disable-line no-unused-vars
      color,
      open,
      eventTypes, // eslint-disable-line no-unused-vars, react/prop-types
      outsideClickIgnoreClass, // eslint-disable-line no-unused-vars, react/prop-types
      preventDefault, // eslint-disable-line no-unused-vars, react/prop-types
      stopPropagation, // eslint-disable-line no-unused-vars, react/prop-types
      disableOnClickOutside, // eslint-disable-line no-unused-vars, react/prop-types
      enableOnClickOutside, // eslint-disable-line no-unused-vars, react/prop-types
      hideMenu, // eslint-disable-line no-unused-vars
      ...custom
    } = this.props;

    if (!open) {
      return null;
    }

    const modifiers = _.filter(emojis, { category: 'modifier' });

    const filteredEmoji = _.chain(emojis).filter({ category }).filter((emoji) => {
      if (_.includes(emoji.title, 'tone')) {
        return _.includes(emoji.title, tone);
      }

      return true;
    }).value();

    return (
      <section style={getStyles.root(style)} {...custom}>
        <EmojiModifiers
          modifiers={modifiers}
          changeTone={this.changeTone}
          tone={tone}
          style={headerStyle}
          modifierStyle={modifierStyle}
        />
        {
          storedEmojis.length > 0 && category === 'recent'
          ? <EmojiCategory
            emojis={storedEmojis}
            category="recent"
            sendEmoji={this.sendEmoji}
            style={categoryStyle}
            emojiStyle={emojiStyle}
          />
          : null
        }
        {
          category !== 'recent'
          ? <EmojiCategory
            emojis={filteredEmoji}
            category={category}
            sendEmoji={this.sendEmoji}
            style={categoryStyle}
            emojiStyle={emojiStyle}
          />
          : null
        }
        <EmojiCategories
          changeCategory={this.changeCategory}
          category={category}
          activeColor={color}
          recent={storedEmojis.length > 0}
          style={footerStyle}
          iconStyle={iconStyle}
        />
        <EventListener target="window" onKeyUp={this.handleKeyUp} />
      </section>
    );
  }
}

const enhance = compose(
  themeable(),
  onClickOutside,
  Radium
);

export default enhance(EmojiMenu);
