const HomeIcon = () => (
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
        d='M3.844 19.895v-8.882l-1.73 1.303L.961 10.8l2.883-2.179V5.684h1.922v1.492l5.766-4.334 10.57 7.958-1.153 1.492-1.73-1.279v8.882H3.845ZM5.766 18h4.805v-3.79h1.922V18h4.805V9.568l-5.766-4.334-5.766 4.334V18ZM3.844 4.737c0-.79.28-1.46.84-2.013.561-.553 1.242-.83 2.043-.83.272 0 .5-.09.685-.272a.91.91 0 0 0 .276-.675H9.61c0 .79-.28 1.46-.841 2.014-.56.552-1.241.828-2.042.828-.272 0-.5.091-.685.273a.91.91 0 0 0-.276.675H3.844Z'
      />
    </g>
  </svg>
);
export default HomeIcon;