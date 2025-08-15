import type { SVGProps } from 'react'

export const Icons = {
  // Navbar
  Home: (props: SVGProps<SVGSVGElement>) => (
    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.875 25.417V15h6.25v10.417m-12.5-13.542L15 4.583l9.375 7.292v11.458a2.083 2.083 0 01-2.083 2.084H7.708a2.083 2.083 0 01-2.083-2.084V11.875z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  AiGuide: (props: SVGProps<SVGSVGElement>) => (
    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={15} cy={15} r={1.25} fill="currentColor" />
      <path
        d="M15 3.5c1.143 0 2.448.953 3.525 3.108C19.573 8.704 20.25 11.67 20.25 15c0 3.33-.677 6.296-1.725 8.392C17.448 25.547 16.143 26.5 15 26.5c-1.143 0-2.447-.953-3.525-3.108C10.427 21.296 9.75 18.33 9.75 15c0-3.33.677-6.296 1.725-8.392C12.553 4.453 13.857 3.5 15 3.5z"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        d="M24.96 9.25c.57.99.398 2.596-.93 4.607-1.291 1.956-3.521 4.024-6.405 5.69-2.884 1.665-5.79 2.561-8.13 2.702-2.406.144-3.883-.51-4.454-1.5-.572-.99-.4-2.595.929-4.607 1.291-1.955 3.52-4.024 6.405-5.689 2.884-1.665 5.79-2.562 8.13-2.702 2.405-.144 3.883.509 4.454 1.499z"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        d="M24.96 20.75c.57-.99.398-2.596-.93-4.607-1.291-1.956-3.521-4.025-6.405-5.69-2.884-1.665-5.79-2.561-8.13-2.702-2.406-.144-3.883.509-4.454 1.499-.572.99-.4 2.596.929 4.607 1.291 1.956 3.52 4.024 6.405 5.69 2.884 1.665 5.79 2.561 8.13 2.702 2.405.144 3.883-.51 4.454-1.5z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  ),
  Profile: (props: SVGProps<SVGSVGElement>) => (
    <svg width={30} height={31} viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23.333 24.875v-2.083a4.167 4.167 0 00-4.166-4.167h-8.334a4.167 4.167 0 00-4.166 4.167v2.083m12.5-14.583a4.167 4.167 0 11-8.333 0 4.167 4.167 0 018.333 0z"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Train: (props: SVGProps<SVGSVGElement>) => (
    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15 2.917c-4.833 0-9.667.604-9.667 4.833v11.48a4.234 4.234 0 004.23 4.228L7.75 25.271v.604h14.5v-.604l-1.813-1.813a4.234 4.234 0 004.23-4.229V7.75c0-4.23-4.326-4.833-9.667-4.833zm6.84 3.625H8.27c.737-.629 2.489-1.209 6.73-1.209 4.483 0 6.187.556 6.84 1.209zm-8.048 2.416v3.625H7.75V8.958h6.042zm2.416 0h6.042v3.625h-6.042V8.958zm4.23 12.084H9.561a1.81 1.81 0 01-1.812-1.813V15h14.5v4.23a1.81 1.81 0 01-1.813 1.812z"
        fill="currentColor"
      />
      <path
        d="M10.77 19.833a1.813 1.813 0 100-3.625 1.813 1.813 0 000 3.625zM19.23 19.833a1.812 1.812 0 100-3.625 1.812 1.812 0 000 3.625z"
        fill="currentColor"
      />
    </svg>
  ),
  RouteMap: (props: SVGProps<SVGSVGElement>) => (
    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={15.0001} cy={15.0001} r={1.94003} stroke="currentColor" strokeWidth={2} />
      <circle cx={25.9203} cy={15.0001} r={1.94003} stroke="currentColor" strokeWidth={2} />
      <circle cx={22.5599} cy={7.44003} r={1.94003} stroke="currentColor" strokeWidth={2} />
      <circle cx={4.07992} cy={15.0001} r={1.94003} stroke="currentColor" strokeWidth={2} />
      <circle cx={7.44003} cy={22.5601} r={1.94003} stroke="currentColor" strokeWidth={2} />
      <path stroke="currentColor" strokeWidth={2} d="M17 14.5L24 14.5" />
      <path stroke="currentColor" strokeWidth={2} d="M6 14.5L13 14.5" />
      <path stroke="currentColor" strokeWidth={2} d="M15.5801 17.1003L15.5801 22.9804" />
      <path stroke="currentColor" strokeWidth={2} d="M9.53979 21.9802L15.4199 21.9802" />
      <path stroke="currentColor" strokeWidth={2} d="M14.4199 12.9001L14.4199 7.02009" />
      <path stroke="currentColor" strokeWidth={2} d="M20.4602 8.02002L14.5801 8.02002" />
    </svg>
  ),

  // Home
  Bell: (props: SVGProps<SVGSVGElement>) => (
    <svg width={23} height={24} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.158 20.957a1.917 1.917 0 01-3.316 0M17.25 8.5a5.75 5.75 0 00-11.5 0c0 6.708-2.875 8.625-2.875 8.625h17.25s-2.875-1.917-2.875-8.625z"
        stroke="url(#paint0_linear_98_1843)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_98_1843"
          x1={-5.75}
          y1={12.3307}
          x2={28.75}
          y2={12.3307}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Sound: (props: SVGProps<SVGSVGElement>) => (
    <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.158 14.763a3.753 3.753 0 010-3.861c.218-.363.578-.617.993-.7l1.693-.338a.45.45 0 00.258-.154L9.17 7.227c1.182-1.419 1.774-2.128 2.301-1.937C12 5.48 12 6.405 12 8.252v9.161c0 1.848 0 2.771-.528 2.962-.527.191-1.119-.518-2.301-1.938L7.1 15.956a.45.45 0 00-.257-.154l-1.693-.338a1.5 1.5 0 01-.993-.7z"
        fill="#363F3D"
      />
      <path
        d="M14.536 9.297a5 5 0 01.027 7.043M18.657 7.176a8 8 0 01.044 11.269"
        stroke="#363F3D"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  ),
  Coupon: (props: SVGProps<SVGSVGElement>) => (
    <svg width={34} height={35} viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M28.658 6.052l.568-1.113-.568 1.113zm.874.874l1.114-.567-1.114.567zm.218 2.108H31h-1.25zm0 4.973H31h-1.25zm-.007.137l1.214.3v-.001l-1.214-.299zm-.183.183l.297 1.214h.002l-.3-1.214zm-1.227.008v-1.25 1.25zM25.5 17.166h-1.25 1.25zM28.333 20v1.25V20zm1.227.008l.299-1.213h-.002l-.297 1.213zm.183.183l1.214-.299-1.214.299zm.007.137H31h-1.25zm0 4.973H31h-1.25zm-.218 2.108l1.114.567-1.114-.567zm-.874.874l.568 1.113-.568-1.113zM7.45 28.5v-1.25 1.25zm-2.108-.217l-.568 1.113.568-1.113zm-.874-.874l-1.114.567 1.114-.567zM4.25 25.3H3h1.25zm0-4.973H3h1.25zm.007-.137l-1.214-.3v.001l1.214.299zm.183-.183l-.297-1.214H4.14l.3 1.214zM4.577 20v-1.25V20zm1.09 0v1.25V20zM8.5 17.168h1.25H8.5zm-2.833-2.833v-1.25 1.25zm-1.09 0v1.25-1.25zm-.137-.008l-.299 1.213h.002l.297-1.213zm-.183-.183l-1.214.299 1.214-.299zm-.007-.137H3h1.25zm0-4.973H3h1.25zm.218-2.108L3.354 6.36l1.114.567zm.874-.874l-.568-1.114.568 1.114zm2.108-.218v1.25-1.25zm19.1 0v1.25c.58 0 .941.001 1.212.023.256.021.32.055.329.059l.567-1.114.568-1.114c-.42-.213-.85-.289-1.26-.322-.397-.033-.877-.032-1.416-.032v1.25zm2.108.218l-.567 1.114a.751.751 0 01.328.328l1.113-.568 1.114-.567a3.25 3.25 0 00-1.42-1.42l-.568 1.113zm.874.874l-1.114.568c.005.008.038.072.059.328.022.271.023.631.023 1.212H31c0-.54.001-1.02-.031-1.415-.034-.41-.11-.84-.323-1.26l-1.114.567zm.218 2.108H28.5v4.973H31V9.034h-1.25zm0 4.973H28.5v.038c0-.015.004-.095.03-.2l1.213.299 1.214.299c.033-.134.04-.247.041-.305.002-.051.002-.11.002-.13h-1.25zm-.007.137l-1.213-.3a1 1 0 01.73-.731l.3 1.214.299 1.213a1.5 1.5 0 001.098-1.097l-1.214-.299zm-.183.183l-.298-1.214a.98.98 0 01.184-.028h.009-.032v2.5c.016 0 .225.007.434-.044l-.297-1.214zm-.137.008v-1.25h-1.09v2.5h1.09v-1.25zm-1.09 0v-1.25a4.083 4.083 0 00-4.083 4.082h2.5c0-.874.709-1.582 1.583-1.583v-1.25zM25.5 17.166h-1.25a4.083 4.083 0 004.083 4.083v-2.5a1.583 1.583 0 01-1.583-1.582H25.5zM28.333 20v1.25h1.09v-2.5h-1.09V20zm1.09 0v1.25h.023a.989.989 0 01-.184-.028l.298-1.214.297-1.214c-.209-.05-.418-.044-.434-.044V20zm.137.008l-.3 1.214a1 1 0 01-.73-.732l1.213-.3 1.214-.298a1.5 1.5 0 00-1.098-1.097l-.3 1.213zm.183.183l-1.214.299a1.003 1.003 0 01-.029-.2v-.003.04H31c0-.02 0-.079-.002-.13a1.494 1.494 0 00-.041-.305l-1.214.299zm.007.137H28.5V25.3H31v-4.973h-1.25zm0 4.973H28.5c0 .58-.001.941-.023 1.212-.021.256-.054.32-.059.328l1.114.568 1.114.567c.214-.42.29-.85.323-1.26.032-.396.031-.876.031-1.415h-1.25zm-.218 2.108l-1.113-.568a.751.751 0 01-.328.328l.567 1.114.568 1.113a3.251 3.251 0 001.42-1.42l-1.114-.567zm-.874.874l-.567-1.114c-.008.004-.073.038-.329.058-.271.023-.631.023-1.212.023v2.5c.54 0 1.019.002 1.415-.03.41-.034.841-.11 1.26-.323l-.567-1.114zm-2.108.217v-1.25H7.45v2.5h19.1V28.5zm-19.1 0v-1.25c-.58 0-.941 0-1.212-.023-.257-.02-.32-.054-.329-.058l-.567 1.114-.568 1.113c.42.214.85.29 1.26.323.397.032.877.031 1.416.031V28.5zm-2.108-.217l.567-1.114a.751.751 0 01-.327-.328l-1.114.568-1.114.567a3.25 3.25 0 001.42 1.42l.568-1.113zm-.874-.874l1.114-.568c-.005-.008-.038-.072-.059-.328-.022-.271-.023-.631-.023-1.212H3c0 .54-.001 1.019.031 1.415.034.41.11.84.323 1.26l1.114-.567zM4.25 25.3H5.5v-4.973H3V25.3h1.25zm0-4.973H5.5v-.041.003c0 .015-.004.095-.03.2l-1.213-.3-1.214-.298c-.033.134-.04.247-.041.305-.002.051-.002.11-.002.13h1.25zm.007-.137l1.214.3a1 1 0 01-.731.731l-.3-1.214-.299-1.213a1.5 1.5 0 00-1.098 1.097l1.214.299zm.183-.183l.298 1.214a.985.985 0 01-.184.028h-.009.032v-2.5c-.016 0-.225-.007-.434.044l.297 1.214zM4.577 20v1.25h1.09v-2.5h-1.09V20zm1.09 0v1.25a4.083 4.083 0 004.083-4.082h-2.5c0 .874-.709 1.582-1.583 1.582V20zM8.5 17.168h1.25a4.083 4.083 0 00-4.083-4.083v2.5c.874 0 1.583.708 1.583 1.582H8.5zm-2.833-2.833v-1.25h-1.09v2.5h1.09v-1.25zm-1.09 0v-1.25h-.023c.02 0 .09.005.184.028l-.298 1.214-.297 1.214c.209.05.418.043.434.043v-1.25zm-.137-.008l.3-1.214a1 1 0 01.73.732l-1.213.299-1.214.3a1.5 1.5 0 001.098 1.096l.3-1.213zm-.183-.183l1.214-.299c.025.105.028.185.029.2v-.037H3c0 .02 0 .079.002.13.002.058.008.17.041.305l1.214-.299zm-.007-.137H5.5V9.034H3v4.973h1.25zm0-4.973H5.5c0-.58 0-.941.023-1.212.02-.256.054-.32.059-.328l-1.114-.568-1.114-.567c-.214.42-.29.85-.323 1.26C3 8.015 3 8.495 3 9.034h1.25zm.218-2.108l1.114.568a.75.75 0 01.327-.328l-.567-1.114-.568-1.113a3.25 3.25 0 00-1.42 1.42l1.114.567zm.874-.874l.567 1.114c.008-.004.072-.038.329-.059.27-.022.631-.023 1.212-.023v-2.5c-.54 0-1.019 0-1.415.032-.41.033-.841.109-1.26.322l.567 1.114zm2.108-.218v1.25h19.1v-2.5H7.45v1.25z"
        fill="url(#paint0_linear_98_1894)"
      />
      <path d="M20 13.168v2" stroke="url(#paint1_linear_98_1894)" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M20 6.167v2" stroke="url(#paint2_linear_98_1894)" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M20 19.168v2" stroke="url(#paint3_linear_98_1894)" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M20 26.168v2" stroke="url(#paint4_linear_98_1894)" strokeWidth={2.5} strokeLinecap="round" />
      <defs>
        <linearGradient
          id="paint0_linear_98_1894"
          x1={-8.50001}
          y1={17.1675}
          x2={42.5}
          y2={17.1675}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_98_1894"
          x1={19.5}
          y1={14.1675}
          x2={21.5}
          y2={14.1675}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_98_1894"
          x1={19.5}
          y1={7.16748}
          x2={21.5}
          y2={7.16748}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_98_1894"
          x1={19.5}
          y1={20.1675}
          x2={21.5}
          y2={20.1675}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_98_1894"
          x1={19.5}
          y1={27.1675}
          x2={21.5}
          y2={27.1675}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
      </defs>
    </svg>
  ),
  AiFeature: (props: SVGProps<SVGSVGElement>) => (
    <svg width={45} height={44} viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={22.5} cy={21.9998} r={1.83333} fill="url(#paint0_linear_297_1443)" />
      <path
        d="M22.5 4.667c1.949 0 3.982 1.606 5.587 4.817 1.576 3.151 2.58 7.575 2.58 12.516 0 4.94-1.004 9.365-2.58 12.516-1.605 3.211-3.638 4.817-5.587 4.818-1.948 0-3.982-1.607-5.588-4.818-1.575-3.151-2.579-7.576-2.579-12.516 0-4.941 1.004-9.365 2.58-12.516 1.605-3.211 3.639-4.817 5.587-4.817z"
        stroke="url(#paint1_linear_297_1443)"
        strokeWidth={2}
      />
      <path
        d="M37.511 13.333c.974 1.688.6 4.251-1.378 7.248-1.942 2.94-5.27 6.02-9.55 8.49-4.279 2.471-8.612 3.814-12.129 4.026-3.584.215-5.99-.743-6.965-2.43-.974-1.688-.6-4.252 1.378-7.248 1.941-2.94 5.271-6.021 9.55-8.492 4.279-2.47 8.611-3.813 12.128-4.024 3.584-.215 5.992.743 6.966 2.43z"
        stroke="url(#paint2_linear_297_1443)"
        strokeWidth={2}
      />
      <path
        d="M37.511 30.666c.974-1.687.6-4.25-1.378-7.247-1.942-2.94-5.27-6.02-9.55-8.491-4.279-2.47-8.612-3.814-12.129-4.025-3.584-.215-5.99.742-6.965 2.43-.974 1.687-.6 4.251 1.378 7.248 1.941 2.94 5.271 6.021 9.55 8.492 4.279 2.47 8.611 3.813 12.128 4.024 3.584.215 5.992-.743 6.966-2.43z"
        stroke="url(#paint3_linear_297_1443)"
        strokeWidth={2}
      />
      <defs>
        <linearGradient
          id="paint0_linear_297_1443"
          x1={18.8333}
          y1={21.9998}
          x2={26.1667}
          y2={21.9998}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_297_1443"
          x1={4.16666}
          y1={21.9998}
          x2={40.8333}
          y2={21.9998}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_297_1443"
          x1={13.3333}
          y1={6.12263}
          x2={31.6667}
          y2={37.8769}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_297_1443"
          x1={13.3333}
          y1={37.8769}
          x2={31.6667}
          y2={6.12262}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Gift: (props: SVGProps<SVGSVGElement>) => (
    <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M34.667 21.332v17.084H7.333V21.332M21 38.416V12.79m0 0h-7.688a4.27 4.27 0 010-8.542c5.98 0 7.688 8.542 7.688 8.542zm0 0h7.688a4.27 4.27 0 000-8.542c-5.98 0-7.688 8.542-7.688 8.542zm-17.083 0h34.166v8.541H3.917v-8.541z"
        stroke="url(#paint0_linear_569_3144)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_569_3144"
          x1={-13.1667}
          y1={21.3324}
          x2={55.1667}
          y2={21.3324}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Marker: (props: SVGProps<SVGSVGElement>) => (
    <svg width={41} height={41} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.909 7.301c2.833-2.883 6.646-4.49 10.613-4.468 3.966.02 7.764 1.666 10.569 4.58 2.804 2.912 4.389 6.857 4.409 10.976.02 4.12-1.526 8.081-4.302 11.023l-7.957 8.264a3.731 3.731 0 01-2.688 1.157 3.731 3.731 0 01-2.688-1.157L9.91 29.412C7.086 26.48 5.5 22.503 5.5 18.357c0-4.147 1.586-8.124 4.409-11.056z"
        stroke="url(#paint0_linear_569_3125)"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path
        d="M20.553 24.279c3.15 0 5.703-2.652 5.703-5.923s-2.554-5.923-5.703-5.923c-3.15 0-5.702 2.652-5.702 5.923 0 3.27 2.553 5.922 5.702 5.922z"
        stroke="url(#paint1_linear_569_3125)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_569_3125"
          x1={-9.5}
          y1={20.8325}
          x2={50.5}
          y2={20.8325}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_569_3125"
          x1={9.14829}
          y1={18.3558}
          x2={31.9578}
          y2={18.3558}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
      </defs>
    </svg>
  ),
  RoutPlanning_Gradient: (props: SVGProps<SVGSVGElement>) => (
    <svg width={43} height={43} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M32 27.082a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 0v-12.25a3.5 3.5 0 00-3.5-3.5h-5.25M11 16.582a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zm0 0v21"
        stroke="url(#paint0_linear_569_3131)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_569_3131"
          x1={-10}
          y1={21.8325}
          x2={53}
          y2={21.8325}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
      </defs>
    </svg>
  ),

  // Others
  ArrowLeft: (props: SVGProps<SVGSVGElement>) => (
    <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.625 10.5H4.375M10.5 16.625L4.375 10.5 10.5 4.375"
        stroke="#363F3D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ChevronRight: (props: SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_425_2281)">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" fill="#363F3D" />
      </g>
      <defs>
        <clipPath id="clip0_425_2281">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  Photo: (props: SVGProps<SVGSVGElement>) => (
    <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.958 48.625c-1.26 0-2.349-.44-3.265-1.318-.879-.916-1.318-2.005-1.318-3.265V11.958c0-1.26.44-2.33 1.318-3.208.916-.917 2.005-1.375 3.265-1.375h32.084c1.26 0 2.33.458 3.208 1.375.917.878 1.375 1.948 1.375 3.208v32.084c0 1.26-.458 2.349-1.375 3.265-.879.879-1.948 1.318-3.208 1.318H11.958zm0-4.583h32.084V11.958H11.958v32.084zm2.292-4.584h27.5L33.156 28l-6.875 9.167-5.156-6.875-6.875 9.166zm-2.292 4.584V11.958v32.084z"
        fill="#727272"
      />
    </svg>
  ),
  RoutPlanning_Gray: (props: SVGProps<SVGSVGElement>) => (
    <svg width={36} height={35} viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M26.75 21.875a4.375 4.375 0 100 8.75 4.375 4.375 0 000-8.75zm0 0V11.667a2.917 2.917 0 00-2.917-2.917h-4.375M9.25 13.125a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75zm0 0v17.5"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Map: (props: SVGProps<SVGSVGElement>) => (
    <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.02 5.646v12.783m5.96-9.858v12.783M9.203 5.31L4.601 7.986a1.083 1.083 0 00-.538.936v11.36a1.083 1.083 0 001.628.937l3.513-2.044a1.624 1.624 0 011.634 0l4.324 2.515a1.626 1.626 0 001.634 0l4.603-2.678a1.084 1.084 0 00.538-.936V6.717a1.084 1.084 0 00-1.628-.937l-3.513 2.044a1.625 1.625 0 01-1.634 0L10.838 5.31a1.625 1.625 0 00-1.634-.001z"
        stroke="#363F3D"
        strokeLinejoin="round"
      />
    </svg>
  ),
  LocationMarker: (props: SVGProps<SVGSVGElement>) => (
    <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.6 4.165a6.93 6.93 0 019.8 9.8l-3.663 3.663a1.75 1.75 0 01-2.474 0L5.6 13.965a6.93 6.93 0 010-9.8z"
        fill="url(#paint0_linear_40_1872)"
      />
      <path
        d="M10.5 11.69a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25z"
        fill="#0197BC"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_40_1872"
          x1={3.57056}
          y1={10.1624}
          x2={17.3806}
          y2={10.1624}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Transfer: (props: SVGProps<SVGSVGElement>) => (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.167 5.833L5.833 2.5 2.5 5.833"
        stroke="url(#paint0_linear_40_1871)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.833 2.5v10"
        stroke="url(#paint1_linear_40_1871)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 14.167L14.167 17.5l-3.334-3.333"
        stroke="url(#paint2_linear_40_1871)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.167 7.5v10"
        stroke="url(#paint3_linear_40_1871)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_40_1871"
          x1={2.5}
          y1={4.16683}
          x2={9.16667}
          y2={4.16683}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_40_1871"
          x1={1.33325}
          y1={7.5}
          x2={11.3333}
          y2={7.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_40_1871"
          x1={10.8333}
          y1={15.8333}
          x2={17.4999}
          y2={15.8333}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_40_1871"
          x1={9.66675}
          y1={12.5}
          x2={19.6667}
          y2={12.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0197BC" />
          <stop offset={1} stopColor="#4BB748" />
        </linearGradient>
      </defs>
    </svg>
  ),
}
