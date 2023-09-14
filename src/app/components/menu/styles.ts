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
      padding: '0.5rem',
    },
    drawerOpen: { left: '15rem' },
    drawerClose: { left: '5.5rem' },
    inputWrapper: { display: 'flex', alignItems: 'center', gap: '1rem' },
    origin: { fill: '#2196F3' },
    destination: { fill: '#F44336' },
    moreWrapper: { width: '24px', display: 'flex', justifyContent: 'center' },
    moreIcon: { fill: '#767676', fontSize: '1.2rem' },
    swapIcon: { fill: '#767676', fontSize: '2rem' },
    input: {
      width: '20rem',
      border: '0px',
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        border: '0px',
        borderRadius: '0px',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderBottom: '1px solid blue',
      },
      '& .MuiOutlinedInput-root': {
        padding: '0px',
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
    itemShow: { gap: '1rem', width: '100%' },
    icon: {
      paddingTop: '1.5rem',
      '&:hover': {
        cursor: 'pointer',
      },
    },
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
      paddingLeft: '0.3rem',
      paddingRight: '0.3rem',
    },
    itemIconWrapper: {
      flexShrink: 0,
      padding: '0.8rem',
      boxShadow: '2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset',
      borderRadius: '0.3125rem',
      background: '#F0F0F0',
    },
    itemIconWrapperNotSelected: {
      flexShrink: 0,
      padding: '0.8rem',
      borderRadius: '0.3125rem',
    },
  },
};

export default styles;
