const SettingsIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={23} fill='none'>
    <mask
      id='a'
      width={24}
      height={23}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill='#D9D9D9' d='M0 0h23.063v22.737H0z' />
    </mask>
    <g mask='url(#a)'>
      <path
        fill='#1C1B1F'
        d='m8.889 20.842-.384-3.031a3.667 3.667 0 0 1-.589-.285 7.927 7.927 0 0 1-.54-.355l-2.86 1.184-2.642-4.5 2.474-1.847a2.232 2.232 0 0 1-.024-.32v-.64c0-.102.008-.209.024-.32L1.874 8.883l2.643-4.5 2.858 1.184c.177-.127.36-.245.553-.356.192-.11.384-.205.577-.284l.384-3.031h5.285l.385 3.031c.208.08.404.174.588.284.185.111.365.23.54.356l2.86-1.184 2.642 4.5-2.474 1.847c.016.11.024.217.024.32v.64c0 .102-.016.208-.048.319l2.475 1.847-2.643 4.5-2.835-1.184c-.176.126-.36.245-.553.355-.192.11-.384.206-.576.285l-.385 3.031H8.89Zm2.69-6.158c.93 0 1.723-.323 2.38-.97a3.172 3.172 0 0 0 .984-2.346c0-.915-.328-1.697-.985-2.344a3.264 3.264 0 0 0-2.378-.971c-.945 0-1.742.323-2.39.97a3.192 3.192 0 0 0-.974 2.345c0 .916.325 1.698.973 2.345.649.648 1.446.971 2.39.971Zm0-1.894a1.4 1.4 0 0 1-1.02-.415 1.36 1.36 0 0 1-.42-1.007c0-.394.14-.73.42-1.006a1.4 1.4 0 0 1 1.02-.415c.401 0 .741.139 1.022.415.28.276.42.612.42 1.006 0 .395-.14.73-.42 1.007a1.4 1.4 0 0 1-1.021.415Zm-1.008 6.157h1.898l.336-2.51a5.427 5.427 0 0 0 1.381-.557c.425-.245.813-.54 1.166-.888l2.378.971.937-1.61-2.066-1.54c.08-.22.136-.454.168-.699a5.733 5.733 0 0 0 0-1.492 3.306 3.306 0 0 0-.168-.698l2.066-1.54-.937-1.61-2.378.994a5.327 5.327 0 0 0-1.166-.911 5.43 5.43 0 0 0-1.381-.557l-.312-2.51h-1.898l-.337 2.51a5.43 5.43 0 0 0-1.381.557c-.424.244-.813.54-1.165.888l-2.379-.971-.937 1.61L6.463 9.9a3.81 3.81 0 0 0-.169.71c-.032.237-.048.49-.048.758 0 .253.016.498.048.735.032.236.088.473.169.71l-2.067 1.54.937 1.61 2.379-.995c.352.364.74.668 1.165.912.424.245.885.43 1.381.557l.313 2.51Z'
      />
    </g>
  </svg>
);
export default SettingsIcon;