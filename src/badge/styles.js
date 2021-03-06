import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  badge: {
    backgroundColor: colors.theme,
    borderRadius: '12px',
    boxSizing: 'border-box',
    boxShadow: styles.depthShadows[0],
    color: colors.white,
    display: 'block',
    fontSize: '12px',
    fontWeight: 'inherit',
    height: '20px',
    lineHeight: '14px',
    padding: '3px',
    textAlign: 'center',
    minWidth: '20px',
    transition: 'background .3s ease-in-out'
  },
  inverted: {
    color: colors.theme,
    backgroundColor: colors.white
  }
};
