import colors from './colors';
import darken from '../internal/darken';

const styleSheet = {
  iconButton: {
    backgroundColor: colors.white,
    background: 'none',
    borderRadius: '50%',
    border: 0,
    height: '40px',
    outline: 0,
    padding: '8px',
    transition: 'background-color .3s ease-in-out',
    width: '40px',
    '&:active': {
      backgroundColor: darken(colors.white, 0.15)
    },
    '&:hover': {
      backgroundColor: darken(colors.white, 0.05)
    }
  },
  button: {
    backgroundColor: colors.green,
    background: 'none',
    borderRadius: '5px',
    border: 0,
    color: colors.white,
    fontSize: '16px',
    outline: 0,
    padding: '12px 16px',
    transition: 'background-color .3s ease-in-out',
    '&:hover': {
      backgroundColor: darken(colors.green, 0.15)
    },
    '&:active': {
      backgroundColor: darken(colors.green, 0.25)
    },
    '&>*': {
      margin: '0'
    }
  }
};

export default styleSheet;
