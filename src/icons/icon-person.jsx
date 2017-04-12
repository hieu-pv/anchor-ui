import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconPerson({ color, ...custom }) {
  return (
    <svg fill={color} height="24" viewBox="0 0 24 24" width="24" {...custom}>
      <g fill={color}>
        <path d="M8.98266105,9.23308857 L9.09764025,9.25755223 C9.39854326,9.35540687 9.61382346,9.62450712 9.65051895,9.93438013 C9.69944627,10.3502623 9.74755813,10.7661445 9.79240817,11.1820268 C9.80627091,11.2309541 9.92451193,11.4103542 10.1634403,11.5571362 C10.3673042,11.687609 10.5026697,11.8996274 10.5344725,12.1361095 L10.7187654,13.4571471 C10.7505682,13.67732 10.6934863,13.8974929 10.5597516,14.0687385 C10.4260169,14.2481387 10.2270458,14.3623024 10.0085038,14.3867661 C8.19330031,14.606939 6.45882688,15.1043668 4.85319538,15.8627402 C4.61426697,15.9932131 4.40877224,16.4254044 4.43405135,16.670041 C4.49684141,17.3387143 4.56533966,17.9992331 4.63302245,18.6679065 C4.65911702,18.9125431 4.90701543,19.1816433 5.08233832,19.2142615 C9.62197801,19.9400167 14.3565115,19.9481713 18.9385549,19.206107 C19.0967532,19.1816433 19.3454671,18.9125431 19.3707462,18.6679065 L19.5680864,16.670041 C19.5917346,16.4254044 19.3846089,15.9932131 19.1187705,15.8545857 C17.5424954,15.1043668 15.808022,14.606939 13.992003,14.3867661 C13.773461,14.3623024 13.5761208,14.2481387 13.4423861,14.0687385 C13.3086515,13.8974929 13.2515696,13.67732 13.2817414,13.4571471 L13.472558,12.1279549 C13.5076225,11.8996274 13.6413572,11.687609 13.8411438,11.5652907 C14.0768104,11.4103542 14.1893432,11.2391086 14.2056523,11.1820268 L14.3516188,9.93438013 C14.3899452,9.62450712 14.6052254,9.35540687 14.9061284,9.25755223 L15.0194767,9.23308857 L15.113254,8.32793318 L14.9827812,8.2545422 C14.7324364,8.08329659 14.5987017,7.78157812 14.6337663,7.47985966 L14.6451827,7.39831413 C14.68514,7.06397745 14.7242819,6.73779533 14.7609774,6.40345866 L14.7756556,6.23221304 C14.8359992,5.60431246 14.858832,4.88671179 14.3548806,4.43821137 C13.8297274,3.92447452 12.9580057,3.63091061 12.0014766,3.63091061 C11.0441321,3.63091061 10.1756722,3.92447452 9.67742897,4.41374771 C9.14575211,4.88671179 9.16776941,5.60431246 9.2281131,6.24036759 L9.3667405,7.48801421 C9.40180508,7.78973268 9.26480859,8.08329659 9.01364835,8.2545422 L8.88888369,8.32793318 L8.98266105,9.23308857 Z M11.9998457,21.3915272 C9.60077617,21.3915272 7.17887391,21.2039725 4.80263715,20.8207085 C3.88524993,20.6494629 3.10730557,19.7769257 3.0118973,18.8309975 C2.94176814,18.1623242 2.87326989,17.4936508 2.80966438,16.8249775 C2.71751793,15.903513 3.29404483,14.8434211 4.12336288,14.4030752 C5.66865069,13.6691654 7.29629948,13.1635831 8.99244652,12.8863283 L8.96553649,12.6987736 C8.50806606,12.3155096 8.21205579,11.8180819 8.16883666,11.3369633 C8.153343,11.1820268 8.13377208,11.0270902 8.11664752,10.8639992 C7.73582989,10.7009081 7.45857508,10.3421078 7.4145405,9.90991647 L7.21638486,8.00990561 C7.18295119,7.70818715 7.27102036,7.40646868 7.46672964,7.16183209 L7.66570073,6.96612282 L7.60372613,6.3953041 C7.54338244,5.75924896 7.3998623,4.2588112 8.56433248,3.22318296 C9.3430923,2.45665497 10.6062326,2 12.0014766,2 C13.3967206,2 14.6606764,2.45665497 15.4687926,3.24764662 C16.6022754,4.2588112 16.4603862,5.75109441 16.4000425,6.38714955 L16.3861798,6.55024061 C16.3698707,6.68886801 16.354377,6.82749542 16.3380679,6.96612282 L16.5321463,7.15367754 C16.728671,7.39831413 16.8175556,7.70003259 16.784122,8.01806016 L16.5884127,9.90991647 C16.5484554,10.3421078 16.2695697,10.7090627 15.8838593,10.8721537 L15.8251465,11.3614269 C15.790082,11.8099273 15.4973335,12.3073551 15.0382322,12.6987736 L15.012953,12.8863283 C16.7058383,13.1635831 18.3269634,13.6691654 19.8469721,14.3949207 C20.7023847,14.8352665 21.2805425,15.903513 21.1908424,16.8249775 L20.9935023,18.8309975 C20.8932013,19.7769257 20.1144414,20.6494629 19.2174406,20.8125539 C16.8224484,21.2039725 14.3997307,21.3915272 11.9998457,21.3915272 L11.9998457,21.3915272 Z" />
      </g>
    </svg>
  );
}

IconPerson.propTypes = {
  color: PropTypes.string
};

IconPerson.defaultProps = {
  color: colors.icons
};

IconPerson.displayName = 'IconPerson';

export default pure(IconPerson);
