import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconMail = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M4.84695652,6.56521739 C4.692,6.56521739 4.56521739,6.69043478 4.56521739,6.83913043 L4.56521739,16.1443478 C4.56521739,16.2930435 4.692,16.4182609 4.84695652,16.4182609 L19.0622609,16.4182609 C19.2164348,16.4182609 19.3416522,16.2930435 19.3416522,16.1443478 L19.3416522,6.83913043 C19.3416522,6.69043478 19.2164348,6.56521739 19.0622609,6.56521739 L4.84695652,6.56521739 Z M19.0622609,17.9834783 L4.84695652,17.9834783 C3.82878261,17.9834783 3,17.1617391 3,16.1443478 L3,6.83913043 C3,5.82173913 3.82878261,5 4.84695652,5 L19.0622609,5 C20.0788696,5 20.9068696,5.82173913 20.9068696,6.83913043 L20.9068696,16.1443478 C20.9068696,17.1617391 20.0788696,17.9834783 19.0622609,17.9834783 L19.0622609,17.9834783 Z" /> {/* eslint-disable-line max-len */}
      <path d="M19.0622609,17.5921739 L4.84695652,17.5921739 C4.24747826,17.5921739 3.70356522,17.2165217 3.48913043,16.6530435 C3.43121739,16.5043478 3.47426087,16.3321739 3.59478261,16.2226087 L9.14347826,11.2765217 C9.30391304,11.1356522 9.55121739,11.1513043 9.69521739,11.3078261 C9.83921739,11.4721739 9.82513043,11.7147826 9.66469565,11.8634783 L4.35469565,16.5982609 C4.47991304,16.7313043 4.65678261,16.8095652 4.84695652,16.8095652 L19.0622609,16.8095652 C19.250087,16.8095652 19.4269565,16.7313043 19.5529565,16.5982609 L14.1811304,11.8086957 C14.0206957,11.66 14.0073913,11.4173913 14.1506087,11.2530435 C14.2930435,11.0965217 14.5403478,11.0808696 14.7023478,11.2217391 L20.312087,16.2226087 C20.4333913,16.3321739 20.4756522,16.5043478 20.4177391,16.6530435 C20.2056522,17.2165217 19.6609565,17.5921739 19.0622609,17.5921739" /> {/* eslint-disable-line max-len */}
      <path d="M4.35626087,6.38521739 L11.9546087,13.1626087 L19.5529565,6.38521739 C19.4269565,6.25217391 19.250087,6.17391304 19.0622609,6.17391304 L4.84695652,6.17391304 C4.65678261,6.17391304 4.47991304,6.25217391 4.35626087,6.38521739 Z M11.9546087,14.0782609 C11.8614783,14.0782609 11.7675652,14.0469565 11.6932174,13.9765217 L3.59478261,6.76086957 C3.47426087,6.65130435 3.43121739,6.47913043 3.48913043,6.33043478 C3.70356522,5.76695652 4.24747826,5.39130435 4.84695652,5.39130435 L19.0622609,5.39130435 C19.6609565,5.39130435 20.2056522,5.76695652 20.4177391,6.33043478 C20.4756522,6.47913043 20.4333913,6.65130435 20.312087,6.76086957 L12.2144348,13.9765217 C12.1408696,14.0469565 12.0477391,14.0782609 11.9546087,14.0782609 L11.9546087,14.0782609 Z" /> {/* eslint-disable-line max-len */}
    </g>
  </svg>
);

IconMail.propTypes = {
  color: PropTypes.string
};

IconMail.defaultProps = {
  color: colors.icons
};

IconMail.displayName = 'IconMail';

export default IconMail;
