const styles = {
  nav: {
    menu: {
      boxShadow: 2,
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '0.5rem',
      zIndex: 400,
      width: 'auto',
      height: 'auto',
      border: '1px solid transparent',
      borderRadius: '5px',
      background: 'white',
      top: '1.5rem',
      left: '5.5rem',
      padding: '0.5rem',
    },
    inputWrapper: { display: 'flex', alignItems: 'center', gap: '1rem' },
    origin: { fill: '#2196F3' },
    destination: { fill: '#F44336' },
    moreWrapper: { width: '24px', display: 'flex', justifyContent: 'center' },
    moreIcon: { fill: '#767676', fontSize: '1.2rem' },
    swapIcon: { fill: '#767676', fontSize: '2rem' },
    input: {
      width: '20rem',
      '&::before': {
        border: '0px',
      },
    },
    divider: {
      width: '20rem',
    },
    dividerWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
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
    appIconWrapper: {
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
    itemIconWrapper: {
      flexShrink: 0,
      padding: '0.8rem',
      boxShadow: '2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset',
      borderRadius: '0.3125rem',
      background: '#F0F0F0',
    },
  },
};

export default styles;
