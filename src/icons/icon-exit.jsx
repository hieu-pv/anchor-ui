import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconExit = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M16.5670001,18.3290398 C16.3920001,18.3290398 16.2253334,18.2773731 16.0753334,18.1698731 C15.7003334,17.8982064 15.6253334,17.3773731 15.8920001,17.0057064 L19.5336668,11.9990398 L15.8920001,6.99070642 C15.6253334,6.61820642 15.7003334,6.09653976 16.0753334,5.82653976 C16.4503334,5.55487309 16.9670001,5.63820642 17.2420001,6.00987309 L21.2420001,11.5082064 C21.4503334,11.8015398 21.4503334,12.1973731 21.2420001,12.4890398 L17.2420001,17.9857064 C17.0753334,18.2098731 16.8253334,18.3290398 16.5670001,18.3290398" /> {/* eslint-disable-line max-len */}
      <path d="M20.2416668,12.8333333 L9.9000001,12.8333333 C9.44166676,12.8333333 9.06666676,12.46 9.06666676,12 C9.06666676,11.54 9.44166676,11.1666667 9.9000001,11.1666667 L20.2416668,11.1666667 C20.7000001,11.1666667 21.0750001,11.54 21.0750001,12 C21.0750001,12.46 20.7000001,12.8333333 20.2416668,12.8333333" /> {/* eslint-disable-line max-len */}
      <path d="M3.23333343,22 C2.7750001,22 2.4000001,21.6162431 2.4000001,21.1414835 L2.4000001,2.85851648 C2.4000001,2.38461538 2.7750001,2 3.23333343,2 C3.69166676,2 4.06666676,2.38461538 4.06666676,2.85851648 L4.06666676,21.1414835 C4.06666676,21.6162431 3.69166676,22 3.23333343,22" /> {/* eslint-disable-line max-len */}
      <path d="M14.0872563,22 L3.21274392,22 C2.76573482,22 2.4000001,21.6275 2.4000001,21.1666667 C2.4000001,20.7066667 2.76573482,20.3333333 3.21274392,20.3333333 L14.0872563,20.3333333 C14.5423928,20.3333333 14.9000001,20.7066667 14.9000001,21.1666667 C14.9000001,21.6275 14.5423928,22 14.0872563,22" /> {/* eslint-disable-line max-len */}
      <path d="M14.0872563,3.66666667 L3.21274392,3.66666667 C2.76573482,3.66666667 2.4000001,3.29416667 2.4000001,2.83333333 C2.4000001,2.37333333 2.76573482,2 3.21274392,2 L14.0872563,2 C14.5423928,2 14.9000001,2.37333333 14.9000001,2.83333333 C14.9000001,3.29416667 14.5423928,3.66666667 14.0872563,3.66666667" /> {/* eslint-disable-line max-len */}
    </g>
  </svg>
);

IconExit.propTypes = {
  color: PropTypes.string
};

IconExit.defaultProps = {
  color: colors.icons
};

IconExit.displayName = 'IconExit';

export default IconExit;
