import type { SVGProps } from 'react'

export const Icons = {
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

  Photo: (props: SVGProps<SVGSVGElement>) => (
    <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.958 48.625c-1.26 0-2.349-.44-3.265-1.318-.879-.916-1.318-2.005-1.318-3.265V11.958c0-1.26.44-2.33 1.318-3.208.916-.917 2.005-1.375 3.265-1.375h32.084c1.26 0 2.33.458 3.208 1.375.917.878 1.375 1.948 1.375 3.208v32.084c0 1.26-.458 2.349-1.375 3.265-.879.879-1.948 1.318-3.208 1.318H11.958zm0-4.583h32.084V11.958H11.958v32.084zm2.292-4.584h27.5L33.156 28l-6.875 9.167-5.156-6.875-6.875 9.166zm-2.292 4.584V11.958v32.084z"
        fill="#727272"
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
}
