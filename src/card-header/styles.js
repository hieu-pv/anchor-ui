import colors from '../settings/colors';

export default {
  root: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: colors.secondaryText,
    margin: 0,
    fontWeight: 'bolder',
    fontSize: '16px'
  },
  subtitle: {
    color: colors.grey,
    marginTop: '8px',
    marginBottom: '0',
    fontWeight: 'bolder',
    fontSize: '14px'
  },
  avatar: {
    marginRight: '16px',
    flexShrink: 0
  }
};
