import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconChannel({ color, ...custom }) {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" {...custom}>
      <g fill={color}>
        <path d="M6.3,21.789198 L6.08333333,21.764198 C5.64166667,21.639198 5.375,21.189198 5.49166667,20.739198 L10.35,2.61419798 C10.4666667,2.17253132 10.925,1.90586465 11.375,2.03086465 C11.8166667,2.14753132 12.0833333,2.60586465 11.9583333,3.04753132 L7.10833333,21.1725313 C7.00833333,21.5475313 6.66666667,21.789198 6.3,21.789198" />
        <path d="M12.6416667,21.789198 L12.425,21.764198 C11.9833333,21.639198 11.7166667,21.189198 11.8416667,20.739198 L16.6916667,2.61419798 C16.8166667,2.17253132 17.2666667,1.90586465 17.7166667,2.03086465 C18.1583333,2.14753132 18.425,2.60586465 18.3083333,3.04753132 L13.45,21.1725313 C13.35,21.5475313 13.0083333,21.789198 12.6416667,21.789198" />
        <path d="M20.9583333,9.55586465 L2.83333333,9.55586465 C2.375,9.55586465 2,9.18086465 2,8.72253132 C2,8.26419798 2.375,7.88919798 2.83333333,7.88919798 L20.9583333,7.88919798 C21.425,7.88919798 21.7916667,8.26419798 21.7916667,8.72253132 C21.7916667,9.18086465 21.425,9.55586465 20.9583333,9.55586465" />
        <path d="M20.9583333,15.8975313 L2.83333333,15.8975313 C2.375,15.8975313 2,15.5225313 2,15.064198 C2,14.6058646 2.375,14.2308646 2.83333333,14.2308646 L20.9583333,14.2308646 C21.425,14.2308646 21.7916667,14.6058646 21.7916667,15.064198 C21.7916667,15.5225313 21.425,15.8975313 20.9583333,15.8975313" />
      </g>
    </svg>
  );
}

IconChannel.propTypes = {
  color: PropTypes.string
};

IconChannel.defaultProps = {
  color: colors.icons
};

IconChannel.displayName = 'IconChannel';

export default pure(IconChannel);
