import type { SVGProps } from 'react'

export const MapIcons = {
  Toilet: (props: SVGProps<SVGSVGElement>) => (
    <svg width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={1} y={1} width={42} height={42} rx={3} fill="#F9F9F9" />
      <rect x={1} y={1} width={42} height={42} rx={3} stroke="#363F3D" strokeWidth={2} />
      <path
        d="M13.75 3.667a3.667 3.667 0 110 7.333 3.667 3.667 0 010-7.333zM11 12.833h5.5a3.666 3.666 0 013.667 3.667v10.083h-2.75v13.75h-7.334v-13.75h-2.75V16.5A3.666 3.666 0 0111 12.833zm19.25-9.166a3.667 3.667 0 110 7.333 3.667 3.667 0 010-7.333zM27.5 40.333v-11H22l4.748-13.915a3.653 3.653 0 013.502-2.585 3.653 3.653 0 013.502 2.585L38.5 29.333H33v11h-5.5z"
        fill="#363F3D"
      />
    </svg>
  ),
  Locker: (props: SVGProps<SVGSVGElement>) => (
    <svg width={44} height={51} viewBox="0 0 44 51" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={44} height={51} rx={4} fill="#F9F9F9" />
      <path
        d="M5.5 4.25h33c.973 0 1.905.448 2.593 1.245.688.797 1.074 1.878 1.074 3.005v34c0 1.127-.386 2.208-1.074 3.005-.688.797-1.62 1.245-2.593 1.245h-33c-.972 0-1.905-.448-2.593-1.245-.687-.797-1.074-1.878-1.074-3.005v-34c0-1.127.387-2.208 1.074-3.005.688-.797 1.62-1.245 2.593-1.245zM23.834 8.5v34H38.5v-34H23.834zM5.5 8.5v34h14.667v-34H5.5zm3.667 19.125h3.667v8.5H9.167v-8.5zm0-14.875H16.5v3.188H9.167V12.75zm0 6.375H16.5v3.188H9.167v-3.188zm18.333 8.5h3.667v8.5H27.5v-8.5zm0-14.875h7.334v3.188H27.5V12.75zm0 6.375h7.334v3.188H27.5v-3.188z"
        fill="#363F3D"
      />
    </svg>
  ),
  Escalator: (props: SVGProps<SVGSVGElement>) => (
    <svg width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#F9F9F9" d="M1 1H43V43H1z" />
      <path stroke="#363F3D" strokeWidth={2} d="M1 1H43V43H1z" />
      <path
        d="M36.666 14.667h-1.924l-22 22H7.333a3.666 3.666 0 110-7.334h2.365l3.135-3.135v-7.865a1.833 1.833 0 011.833-1.833H16.5a1.833 1.833 0 011.833 1.833v2.365L31.698 7.333h4.968a3.666 3.666 0 110 7.334zm-21.083-5.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z"
        fill="#363F3D"
      />
    </svg>
  ),
  Elevator: (props: SVGProps<SVGSVGElement>) => (
    <svg width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={1} y={1} width={42} height={42} rx={3} fill="#F9F9F9" />
      <rect x={1} y={1} width={42} height={42} rx={3} stroke="#363F3D" strokeWidth={2} />
      <path
        d="M12.833 3.667L20.167 11h-5.5v7.333H11V11H5.5l7.333-7.333zm18.334 14.666L23.833 11h5.5V3.667H33V11h5.5l-7.333 7.333zM12.833 22h18.334a3.667 3.667 0 013.666 3.667v11a3.667 3.667 0 01-3.666 3.666H12.833a3.667 3.667 0 01-3.666-3.666v-11A3.667 3.667 0 0112.833 22zm0 3.667v11h18.334v-11H12.833z"
        fill="#363F3D"
      />
    </svg>
  ),
  Telephone: (props: SVGProps<SVGSVGElement>) => (
    <svg width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={44} height={44} rx={4} fill="#F9F9F9" />
      <path
        d="M12.137 19.782a27.677 27.677 0 0012.081 12.081l4.034-4.033a1.84 1.84 0 011.87-.458 20.828 20.828 0 006.545 1.045A1.833 1.833 0 0138.5 30.25v6.417a1.833 1.833 0 01-1.833 1.833A31.167 31.167 0 015.5 7.333 1.833 1.833 0 017.333 5.5h6.417a1.834 1.834 0 011.833 1.833c0 2.292.367 4.492 1.045 6.545a1.84 1.84 0 01-.458 1.87l-4.033 4.034z"
        fill="#363F3D"
      />
    </svg>
  ),
  AED: (props: SVGProps<SVGSVGElement>) => (
    <svg width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={44} height={44} rx={4} fill="#F9F9F9" />
      <path
        d="M30.25 5.188c-3.19 0-6.252 1.485-8.25 3.795-1.998-2.31-5.06-3.795-8.25-3.795-5.647 0-10.084 4.419-10.084 10.084 0 6.911 6.234 12.576 15.675 21.138L22 38.812l2.658-2.402c9.442-8.562 15.675-14.227 15.675-21.138 0-5.665-4.436-10.084-10.083-10.084zM22 32.688v-7.333h-5.5L22 12.522v7.333h5.5"
        fill="#363F3D"
      />
    </svg>
  ),
}
