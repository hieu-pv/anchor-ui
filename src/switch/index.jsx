import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/switch';
import combineStyles from '../internal/combine-styles';
import fade from '../internal/fade';

function getKnobStyle(themeColor, active, overrideStyle) {
  let style = styles.knob;
  let activeStyle = styles.knobActive;

  if (themeColor) {
    activeStyle = combineStyles(activeStyle, { background: themeColor });
  }

  if (active) {
    style = combineStyles(style, activeStyle);
  }

  return combineStyles(style, overrideStyle);
}

function getTrackStyle(themeColor, active, overrideStyle) {
  let style = styles.track;
  let activeStyle = styles.trackActive;

  if (themeColor) {
    activeStyle = combineStyles(activeStyle, { background: fade(themeColor, 0.5) });
  }

  if (active) {
    style = combineStyles(style, activeStyle);
  }

  return combineStyles(style, overrideStyle);
}


function Switch({ active, toggleSwitch, style, trackStyle, knobStyle }, { color }) {
  return (
    <section style={combineStyles(styles.wrapper, style)} onClick={toggleSwitch}>
      <div style={getTrackStyle(color, active, trackStyle)} />
      <div style={getKnobStyle(color, active, knobStyle)} />
    </section>
  );
}

Switch.displayName = 'Switch';

Switch.propTypes = {
  /** The switch's active state */
  active: PropTypes.bool,
  /** Toggle the switch's active state */
  toggleSwitch: PropTypes.func.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the track element */
  trackStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the knob element */
  knobStyle: PropTypes.instanceOf(Object),
};

Switch.defaultProps = {
  active: false,
  style: {},
  trackStyle: {},
  knobStyle: {}
};

Switch.contextTypes = {
  color: PropTypes.string
};

export default pure(Radium(Switch));
