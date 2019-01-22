import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconClock = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M11.7233333,3.66666667 C7.28166667,3.66666667 3.66666667,7.28 3.66666667,11.7216667 C3.66666667,16.1633333 7.28166667,19.7766667 11.7233333,19.7766667 C16.165,19.7766667 19.7766667,16.1633333 19.7766667,11.7216667 C19.7766667,7.28 16.165,3.66666667 11.7233333,3.66666667 Z M11.7233333,21.4433333 C6.3625,21.4433333 2,17.0825 2,11.7216667 C2,6.36083333 6.3625,2 11.7233333,2 C17.0833333,2 21.4433333,6.36083333 21.4433333,11.7216667 C21.4433333,17.0825 17.0833333,21.4433333 11.7233333,21.4433333 L11.7233333,21.4433333 Z" /> {/* eslint-disable-line max-len */}
      <path d="M11.7233333,12.555 C11.2625,12.555 10.89,12.1825 10.89,11.7216667 L10.89,5.70833333 C10.89,5.24833333 11.2625,4.875 11.7233333,4.875 C12.1841667,4.875 12.5566667,5.24833333 12.5566667,5.70833333 L12.5566667,11.7216667 C12.5566667,12.1825 12.1841667,12.555 11.7233333,12.555" /> {/* eslint-disable-line max-len */}
      <path d="M11.7233333,4.20666667 C11.2625,4.20666667 10.89,3.83416667 10.89,3.37333333 L10.89,2.83333333 C10.89,2.37333333 11.2625,2 11.7233333,2 C12.1841667,2 12.5566667,2.37333333 12.5566667,2.83333333 L12.5566667,3.37333333 C12.5566667,3.83416667 12.1841667,4.20666667 11.7233333,4.20666667" /> {/* eslint-disable-line max-len */}
      <path d="M11.7233333,21.4433333 C11.2625,21.4433333 10.89,21.0708333 10.89,20.61 L10.89,20.07 C10.89,19.61 11.2625,19.2366667 11.7233333,19.2366667 C12.1841667,19.2366667 12.5566667,19.61 12.5566667,20.07 L12.5566667,20.61 C12.5566667,21.0708333 12.1841667,21.4433333 11.7233333,21.4433333" /> {/* eslint-disable-line max-len */}
      <path d="M20.61,12.5541667 L20.07,12.5541667 C19.6091667,12.5541667 19.2366667,12.1808333 19.2366667,11.7208333 C19.2366667,11.2608333 19.6091667,10.8875 20.07,10.8875 L20.61,10.8875 C21.0708333,10.8875 21.4433333,11.2608333 21.4433333,11.7208333 C21.4433333,12.1808333 21.0708333,12.5541667 20.61,12.5541667" /> {/* eslint-disable-line max-len */}
      <path d="M3.37416667,12.5541667 L2.83333333,12.5541667 C2.37333333,12.5541667 2,12.1808333 2,11.7208333 C2,11.2608333 2.37333333,10.8875 2.83333333,10.8875 L3.37416667,10.8875 C3.83416667,10.8875 4.2075,11.2608333 4.2075,11.7208333 C4.2075,12.1808333 3.83416667,12.5541667 3.37416667,12.5541667" /> {/* eslint-disable-line max-len */}
      <path d="M15.5125,5.57333333 L15.3058333,5.5175 C15.1058333,5.40333333 15.0375,5.14833333 15.1516667,4.94833333 L15.395,4.52416667 C15.5108333,4.32416667 15.7666667,4.25666667 15.965,4.37083333 C16.1633333,4.48583333 16.2333333,4.74 16.1183333,4.94 L15.8741667,5.36416667 C15.7975,5.49833333 15.6575,5.57333333 15.5125,5.57333333" /> {/* eslint-disable-line max-len */}
      <path d="M7.68666667,19.1291667 L7.48,19.0741667 C7.28,18.9591667 7.21166667,18.705 7.32583333,18.505 L7.57,18.08 C7.68583333,17.8791667 7.9375,17.8108333 8.13916667,17.9258333 C8.33833333,18.04 8.40833333,18.295 8.2925,18.4941667 L8.04833333,18.92 C7.97166667,19.0541667 7.83166667,19.1291667 7.68666667,19.1291667" /> {/* eslint-disable-line max-len */}
      <path d="M18.7125,16.1725 L18.5058333,16.1175 L18.0825,15.8741667 C17.8825,15.76 17.8141667,15.505 17.9283333,15.3058333 C18.0433333,15.105 18.2991667,15.0366667 18.4975,15.1516667 L18.9208333,15.395 C19.1191667,15.5091667 19.1891667,15.7633333 19.0741667,15.9633333 C18.9975,16.0975 18.8575,16.1725 18.7125,16.1725" /> {/* eslint-disable-line max-len */}
      <path d="M5.15916667,8.34666667 L4.9525,8.29166667 L4.52666667,8.0475 C4.32583333,7.93333333 4.2575,7.67833333 4.37166667,7.47916667 C4.48583333,7.27833333 4.7425,7.21 4.94,7.32416667 L5.36583333,7.56833333 C5.56666667,7.6825 5.63666667,7.9375 5.52083333,8.1375 C5.44416667,8.27166667 5.30416667,8.34666667 5.15916667,8.34666667" /> {/* eslint-disable-line max-len */}
      <path d="M7.9325,5.57333333 C7.79,5.57333333 7.65,5.49833333 7.57166667,5.36416667 L7.3275,4.94 C7.21333333,4.74 7.28166667,4.48583333 7.48166667,4.37083333 C7.67916667,4.25666667 7.93416667,4.32416667 8.05,4.52416667 L8.29416667,4.94833333 C8.41,5.14833333 8.34,5.40333333 8.14083333,5.5175 L7.9325,5.57333333" /> {/* eslint-disable-line max-len */}
      <path d="M15.7616667,19.1291667 C15.6183333,19.1291667 15.4783333,19.055 15.4016667,18.9216667 L15.1541667,18.4966667 C15.0391667,18.2975 15.1058333,18.0425 15.3058333,17.9266667 C15.5025,17.8116667 15.7583333,17.8775 15.8758333,18.0775 L16.1233333,18.5033333 C16.2383333,18.7016667 16.17,18.9566667 15.9716667,19.0725 L15.7616667,19.1291667" /> {/* eslint-disable-line max-len */}
      <path d="M4.73333333,16.1725 C4.58833333,16.1725 4.44833333,16.0966667 4.37166667,15.9625 C4.2575,15.7616667 4.3275,15.5075 4.5275,15.3941667 L4.95416667,15.1508333 C5.1525,15.0366667 5.40666667,15.1066667 5.5225,15.3066667 C5.63666667,15.5066667 5.56666667,15.7608333 5.36583333,15.875 L4.94,16.1183333 L4.73333333,16.1725" /> {/* eslint-disable-line max-len */}
      <path d="M18.2891667,8.34666667 C18.1458333,8.34666667 18.0058333,8.27166667 17.9291667,8.13833333 C17.8141667,7.93916667 17.8825,7.68416667 18.0808333,7.56916667 L18.5041667,7.325 C18.7025,7.21 18.96,7.27833333 19.0741667,7.4775 C19.1891667,7.67666667 19.1208333,7.93166667 18.9208333,8.04666667 L18.4975,8.29083333 L18.2891667,8.34666667" /> {/* eslint-disable-line max-len */}
      <path d="M9.20583333,15.0716667 C8.9925,15.0716667 8.77916667,14.9908333 8.61666667,14.8275 C8.29083333,14.5025 8.29083333,13.9741667 8.61666667,13.6491667 L11.035,11.2316667 C11.3608333,10.9058333 11.8875,10.9058333 12.2133333,11.2316667 C12.5391667,11.5575 12.5391667,12.085 12.2133333,12.41 L9.795,14.8275 C9.63166667,14.9908333 9.41916667,15.0716667 9.20583333,15.0716667" /> {/* eslint-disable-line max-len */}
    </g>
  </svg>
);

IconClock.propTypes = {
  color: PropTypes.string
};

IconClock.defaultProps = {
  color: colors.icons
};

IconClock.displayName = 'IconClock';

export default IconClock;
