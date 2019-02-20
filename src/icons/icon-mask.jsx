import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconMask = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <path d="m17.6137684 16c-.8449393 0-1.7816724-.2185158-2.7916772-.6561041-1.3872584-.6012665-2.5111202-1.4452664-2.8221843-1.6891133-.311064.2438469-1.4349258 1.0878468-2.82218425 1.6891133-2.18344072.9461595-4.02721695.8676608-5.33112547-.2271451-1.96471531-1.6493072-2.37084182-4.0805391-1.17425312-7.03092005.01525358-.03757915.04576074-.06652901.08389468-.0790554.03758918-.01224802.07953652-.00723746.1133123.01363984.01361926.00862929 1.39679191.85736138 3.36395869.63383502.14000605-.01586675.27810541-.0325686.41484284-.04927044 1.84159715-.223248 3.43695793-.41726776 5.35182673 2.00505653 1.9148688-2.42232429 3.5096849-2.22858289 5.3515544-2.00505653.136465.01670184.2748368.03340369.4148428.04927044 1.9682564.22352636 3.3500671-.62520573 3.3639587-.63383502.0340482-.02115567.0746336-.02616622.1133123-.01363984.0378616.01252639.0686411.04147625.0838947.0790554 1.1965887 2.95065925.7901898 5.38189115-1.1745255 7.03092005-.7011198.5884616-1.5577716.8832492-2.5394483.8832492zm-1.496296-2.6131763c-1.5765663 0-2.5895673-.9108073-2.6320594-.9497782-.0283281-.0261663-.0446712-.0631887-.0452159-.1021596-.0005448-.038971.0152535-.0762718.0427645-.1029948.0533875-.0514973 1.3265165-1.2609893 2.6440442-1.1643969.4012236.0292282.7703057.0988192 1.0960786.1603377.7329889.1383469 1.2619612.2382796 1.7154827-.1347282.0525704-.0437032.1285659-.0406412.1775952.006124.0498466.0467652.0582905.1235936.0201566.1806583-.0569286.0860145-1.4223962 2.1069377-3.0188465 2.1069377zm-8.623458.0002079c-1.59617798 0-2.96164558-2.0212016-3.0188465-2.1072161-.03813394-.0570647-.02941761-.1336148.02015651-.1806583.04957413-.0464868.12502487-.0492704.17759523-.0058457.45324917.3730079.98249385.2730752 1.71521036.1347283.32577284-.0615185.69512733-.1311095 1.09607852-.1603377 1.31807256-.0985409 2.59065678 1.1131779 2.64431668 1.1643969.0277833.026723.0433093.0640238.0427645.1029947-.0005448.038971-.0168879.0759934-.0454883.1021596-.0419474.038971-1.05549316.9497783-2.631787.9497783z" fill="none" stroke={color} /> {/* eslint-disable-line max-len */}
  </svg>
);

IconMask.propTypes = {
  color: PropTypes.string
};

IconMask.defaultProps = {
  color: colors.icons
};

IconMask.displayName = 'IconMask';

export default IconMask;