const AppIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={50} height={50} fill='none'>
    <rect width={50} height={50} fill='#fff' rx={25} />
    <g filter='url(#a)'>
      <rect width={6} height={19} x={10} y={16} fill='#444E61' rx={3} />
    </g>
    <g filter='url(#b)'>
      <rect width={6} height={19} x={18} y={16} fill='#FE8A64' rx={3} />
    </g>
    <g filter='url(#c)'>
      <rect width={6} height={19} x={26} y={16} fill='#444E61' rx={3} />
    </g>
    <g filter='url(#d)'>
      <rect width={6} height={19} x={34} y={16} fill='#444E61' rx={3} />
    </g>
    <defs>
      <filter
        id='a'
        width={8}
        height={21}
        x={8}
        y={16}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dx={-1} dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_0_1' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_0_1'
          result='shape'
        />
      </filter>
      <filter
        id='b'
        width={8}
        height={21}
        x={16}
        y={16}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dx={-1} dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_0_1' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_0_1'
          result='shape'
        />
      </filter>
      <filter
        id='c'
        width={8}
        height={21}
        x={24}
        y={16}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dx={-1} dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_0_1' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_0_1'
          result='shape'
        />
      </filter>
      <filter
        id='d'
        width={8}
        height={21}
        x={32}
        y={16}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dx={-1} dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_0_1' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_0_1'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);
export default AppIcon;
