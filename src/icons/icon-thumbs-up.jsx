import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconThumbsUp = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M4.78593827,11.4025 L4.80093827,11.44 L7.01343827,18.9625 L10.0809383,18.055 L7.86093827,10.495 L4.78593827,11.4025 Z M6.50343827,20.6425 C6.18093827,20.6425 5.88093827,20.4325 5.79093827,20.1025 L3.13593827,11.1025 C3.02343827,10.705 3.24843827,10.2925 3.64593827,10.1725 L8.15343827,8.845 C8.34093827,8.785 8.55093827,8.8075 8.72343827,8.905 C8.89593827,9.0025 9.03093827,9.16 9.08343827,9.3475 L11.7384383,18.355 C11.7909383,18.5425 11.7684383,18.745 11.6784383,18.925 C11.5809383,19.0975 11.4159383,19.225 11.2284383,19.285 L6.72093827,20.6125 C6.64593827,20.635 6.57843827,20.6425 6.50343827,20.6425 L6.50343827,20.6425 Z" /> {/* eslint-disable-line max-len */}
      <path d="M11.6709383,15.1975 C12.0234383,15.1975 12.4209383,15.22 12.8484383,15.2575 L14.0184383,15.3625 C14.8284383,15.43 15.5409383,15.49 15.9984383,15.55 C16.1259383,15.565 16.2684383,15.5725 16.4184383,15.5725 C16.9209383,15.5725 17.1234383,15.445 17.1459383,15.415 C17.1759383,15.3475 17.1909383,15.265 17.1984383,15.1825 C17.2359383,14.8975 17.4234383,14.6575 17.6934383,14.56 C17.9784383,14.4625 18.1659383,14.215 18.1884383,13.93 L18.1734383,13.7725 C18.1209383,13.4575 18.2634383,13.15 18.5334383,12.9925 C18.7434383,12.865 18.8709383,12.6625 18.8859383,12.43 C18.8934383,12.3175 18.8709383,12.2125 18.8259383,12.1075 C18.6984383,11.8075 18.7659383,11.47 19.0059383,11.2525 C19.2159383,11.0575 19.3359383,10.8025 19.3359383,10.5325 C19.3359383,9.9925 18.8934383,9.55 18.3534383,9.55 L18.0234383,9.55 C14.7384383,9.55 14.1534383,8.95 13.9584383,8.755 C13.7484383,8.5375 13.6359383,8.2525 13.6434383,7.9675 C13.6434383,7.735 13.6509383,7.465 13.6809383,7.165 C13.6959383,7 13.7184383,6.865 13.7409383,6.7375 C13.7634383,6.565 13.7859383,6.4 13.8009383,6.25 C13.9134383,4.8475 13.5459383,4.1425 13.3659383,4 C13.2609383,4.0075 13.1334383,4.03 13.0284383,4.06 C13.0659383,4.585 13.1109383,5.8375 12.7659383,6.955 L12.7059383,7.09 C12.1359383,8.155 10.5984383,9.8725 9.48093827,10.8625 L10.7709383,15.2425 C11.0484383,15.2125 11.3484383,15.1975 11.6709383,15.1975 Z M16.4184383,17.0725 C16.2009383,17.0725 15.9984383,17.0575 15.8109383,17.035 C15.3609383,16.975 14.6784383,16.9225 13.8909383,16.855 L12.7209383,16.75 C11.4834383,16.645 10.7484383,16.735 10.4184383,16.8175 C10.0284383,16.915 9.63843827,16.6825 9.51843827,16.3 L7.90593827,10.8175 C7.81593827,10.525 7.92093827,10.21 8.16093827,10.015 C9.11343827,9.2575 10.7784383,7.45 11.3559383,6.4375 C11.6709383,5.35 11.5209383,4.0375 11.5209383,3.985 C11.4834383,3.655 11.5809383,3.3325 11.8059383,3.085 C12.3159383,2.515 13.3059383,2.5 13.4184383,2.5 C13.8084383,2.5 14.1909383,2.68 14.4984383,3.01 C15.1209383,3.6925 15.4134383,4.915 15.2934383,6.3775 C15.2784383,6.5575 15.2484383,6.7525 15.2184383,6.955 C15.2034383,7.075 15.1884383,7.195 15.1734383,7.315 C15.1584383,7.465 15.1509383,7.615 15.1434383,7.7575 C15.4959383,7.8925 16.4409383,8.05 18.0234383,8.05 L18.3384383,8.05 C19.7259383,8.05 20.8359383,9.16 20.8359383,10.5325 C20.8359383,11.065 20.6634383,11.5675 20.3484383,11.995 C20.3784383,12.1675 20.3934383,12.34 20.3784383,12.5125 C20.3559383,13.0825 20.1009383,13.6075 19.6809383,13.9975 L19.6809383,14.0275 C19.6434383,14.755 19.2309383,15.4075 18.6084383,15.7825 L18.5559383,15.94 C18.2784383,16.675 17.5209383,17.0725 16.4184383,17.0725 L16.4184383,17.0725 Z" /> {/* eslint-disable-line max-len */}
    </g>
  </svg>
);

IconThumbsUp.propTypes = {
  color: PropTypes.string
};

IconThumbsUp.defaultProps = {
  color: colors.icons
};

IconThumbsUp.displayName = 'IconThumbsUp';

export default IconThumbsUp;
