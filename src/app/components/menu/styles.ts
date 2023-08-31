const styles = {
  navMenu: {
    boxShadow: 2,
    position: 'absolute',
    zIndex: 400,
    width: '25rem',
    height: 'auto',
    border: '1px solid transparent',
    borderRadius: '5px',
    background: 'white',
    top: '1.5rem',
    left: '5.5rem',
    padding: '0.5rem',
  },
  drawer: {
    wrapper: {
      boxShadow: 4,
      position: 'absolute',
      zIndex: 400,
      top: 0,
      background: 'white',
      height: '100%',
    },
    open: {
      width: '14rem',
    },
    close: {
      width: '4rem',
    },
    icon: { paddingTop: '1.5rem' },
    iconWrapper: {
      display: 'flex',
      justifyContent: 'center',
      background: '#FE8A64',
      height: '8rem',
    },
    items: {
      paddingTop: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    item: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },
  },
};

export default styles;
