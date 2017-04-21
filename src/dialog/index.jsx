import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'recompose/shallowEqual';
import Radium from 'radium';
import styles from './styles';
import Button from '../button';
import IconClose from '../icons/icon-close';
import colors from '../settings/colors';
import getStyles from './get-styles';

/** General purpose dialog */
class Dialog extends Component {
  static displayName = 'Dialog'

  static propTypes = {
    /** Header text */
    header: PropTypes.node,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the overlay element */
    overlayStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the header element */
    headerStyle: PropTypes.instanceOf(Object),
    /** Function to hide dialog element */
    hideDialog: PropTypes.func.isRequired,
    /** Optional children, will only render children and headerText with other styles */
    children: PropTypes.node,
    /** The close button's icon color */
    iconColor: PropTypes.string,
    /** Toggle the Dialogs visibility */
    open: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    overlayStyle: {},
    headerStyle: {},
    children: null,
    iconColor: colors.white,
    header: null,
    open: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const {
      header,
      hideDialog,
      style,
      overlayStyle,
      headerStyle,
      children,
      iconColor,
      open,
      ...custom
    } = this.props;
    const { color } = this.context;

    if (!open) {
      return null;
    }

    return (
      <section style={getStyles.overlay(overlayStyle)}>
        <section style={styles.clickAway} onClick={hideDialog} />
        <section style={getStyles.root(color, style)} {...custom}>
          <Button style={styles.closeButton} onClick={hideDialog} iconButton>
            <IconClose color={iconColor} />
          </Button>
          {header ? <h1 style={getStyles.header(headerStyle)}>{header}</h1> : null}
          {children}
        </section>
      </section>
    );
  }
}

export default Radium(Dialog);
