import { useEffect, useState } from 'react'

import styled from 'styled-components'

import { Theme } from 'components/Theme'

import type { Color, Size } from 'types/index'

import multiplier from 'utils/multiplier'

export type IconProps = {
  size?: Size
  color?: Color
}

export type Icon = (props: IconProps) => JSX.Element

export const Icon = styled.svg`
  width: ${(props: IconProps) => multiplier(props.size) || multiplier(6)};
  height: ${(props: IconProps) => multiplier(props.size) || multiplier(6)};
  &:hover path,
  &:active path {
    fill: ${Theme.colors.primaryBlue};
    transition: background-color 0.5s;
  }
`

const { primaryBlack } = Theme.colors

export const GitHub = ({ color = primaryBlack, ...props }: IconProps) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path
        d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
        fill={color}
      />
    </Icon>
  )
}

export const Linkedin = ({ color = primaryBlack, ...props }: IconProps) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6C1.13 6 0.02 4.881 0.02 3.5C0.02 2.12 1.13 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM5 8H0V24H5V8ZM12.982 8H8.014V24H12.983V15.601C12.983 10.931 19.012 10.549 19.012 15.601V24H24V13.869C24 5.989 15.078 6.276 12.982 10.155V8Z"
        fill={color}
      />
    </Icon>
  )
}

export const Instagram = ({ color = primaryBlack, ...props }: IconProps) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0)">
        <path
          d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163V2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0V0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="secondaryWhite" />
        </clipPath>
      </defs>
    </Icon>
  )
}

export const Facebook = ({ color = primaryBlack, ...props }: IconProps) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M9 8H6V12H9V24H14V12H17.642L18 8H14V6.333C14 5.378 14.192 5 15.115 5H18V0H14.192C10.596 0 9 1.583 9 4.615V8Z"
        fill={color}
      />
    </Icon>
  )
}

export const Email = ({ color = primaryBlack, ...props }: IconProps) => (
  <Icon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <g clipPath="url(#clip0)">
      <path
        d="M12.042 23.6481C4.229 23.6481 0 18.7721 0 12.4771C0 5.75005 4.762 0.352051 13.276 0.352051C19.49 0.352051 24 4.39005 24 9.95305C24 18.6651 13.67 20.9651 14.188 15.9951C13.478 17.1031 12.334 18.3491 10.135 18.3491C7.619 18.3491 6.055 16.5071 6.055 13.5421C6.055 9.09805 8.976 5.34305 12.434 5.34305C14.093 5.34305 15.234 6.21905 15.711 7.56405L16.175 5.93205H18.513C18.269 6.76405 16.192 14.4591 16.192 14.4591C15.544 17.1251 17.542 17.1721 19.314 15.7561C22.643 13.1761 22.815 6.42905 18.316 3.61505C13.495 0.724051 2.521 2.51305 2.521 12.3081C2.521 17.9191 6.471 21.6891 12.35 21.6891C15.786 21.6891 17.892 20.7591 19.645 19.7411L20.822 21.4391C19.111 22.4051 16.361 23.6481 12.042 23.6481ZM9.698 9.34305C8.983 10.6831 8.521 12.4191 8.521 13.7671C8.521 17.3771 12.043 17.4001 13.773 14.0061C14.485 12.6121 14.944 10.8351 14.944 9.47705C14.944 6.56005 11.449 6.04305 9.698 9.34305V9.34305Z"
        fill={color}
      />
    </g>
  </Icon>
)

export const Link = ({ color = primaryBlack, ...props }: IconProps) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0)">
        <path
          d="M20.25 15H18.75C18.5511 15 18.3603 15.079 18.2197 15.2197C18.079 15.3603 18 15.5511 18 15.75V21H3V6H9.75C9.94891 6 10.1397 5.92098 10.2803 5.78033C10.421 5.63968 10.5 5.44891 10.5 5.25V3.75C10.5 3.55109 10.421 3.36032 10.2803 3.21967C10.1397 3.07902 9.94891 3 9.75 3H2.25C1.65326 3 1.08097 3.23705 0.65901 3.65901C0.237053 4.08097 0 4.65326 0 5.25L0 21.75C0 22.3467 0.237053 22.919 0.65901 23.341C1.08097 23.7629 1.65326 24 2.25 24H18.75C19.3467 24 19.919 23.7629 20.341 23.341C20.7629 22.919 21 22.3467 21 21.75V15.75C21 15.5511 20.921 15.3603 20.7803 15.2197C20.6397 15.079 20.4489 15 20.25 15ZM22.875 0H16.875C15.8733 0 15.3727 1.21453 16.0781 1.92188L17.753 3.59672L6.32812 15.0173C6.22325 15.1219 6.14003 15.2461 6.08325 15.3828C6.02647 15.5195 5.99724 15.6662 5.99724 15.8142C5.99724 15.9623 6.02647 16.1089 6.08325 16.2456C6.14003 16.3824 6.22325 16.5066 6.32812 16.6111L7.39078 17.6719C7.4953 17.7768 7.61949 17.86 7.75624 17.9168C7.89298 17.9735 8.03959 18.0028 8.18766 18.0028C8.33572 18.0028 8.48233 17.9735 8.61908 17.9168C8.75582 17.86 8.88001 17.7768 8.98453 17.6719L20.4037 6.24938L22.0781 7.92188C22.7812 8.625 24 8.13281 24 7.125V1.125C24 0.826631 23.8815 0.540483 23.6705 0.329505C23.4595 0.118526 23.1734 0 22.875 0V0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="secondaryWhite" />
        </clipPath>
      </defs>
    </Icon>
  )
}
export const Hamburger = () => {
  return (
    <Icon
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.800003 2.39999H15.2"
        stroke="#100D2B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.800003 8H15.2"
        stroke="#100D2B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.800003 13.6H15.2"
        stroke="#100D2B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

export const Close = () => {
  return (
    <Icon
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.2 0.800003L0.800003 15.2"
        stroke="#100D2B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.800003 0.800003L15.2 15.2"
        stroke="#100D2B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

export const Headset = ({ color = primaryBlack, ...props }: IconProps) => {
  return (
    <Icon
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M18.125 9.99999V16.25C18.125 17.0788 17.7958 17.8736 17.2097 18.4597C16.6237 19.0457 15.8288 19.375 15 19.375H10.625C10.4592 19.375 10.3003 19.3091 10.1831 19.1919C10.0658 19.0747 10 18.9157 10 18.75C10 18.5842 10.0658 18.4253 10.1831 18.308C10.3003 18.1908 10.4592 18.125 10.625 18.125H15C15.4973 18.125 15.9742 17.9274 16.3258 17.5758C16.6775 17.2242 16.875 16.7473 16.875 16.25H15C14.5027 16.25 14.0258 16.0524 13.6742 15.7008C13.3225 15.3492 13.125 14.8723 13.125 14.375V11.25C13.125 10.7527 13.3225 10.2758 13.6742 9.92416C14.0258 9.57253 14.5027 9.37499 15 9.37499H16.8477C16.7294 8.07572 16.2439 6.83693 15.4478 5.8033C14.6518 4.76968 13.578 3.9839 12.352 3.53774C11.1261 3.09159 9.79844 3.00348 8.52425 3.28371C7.25007 3.56394 6.08192 4.20094 5.15625 5.1203C4.0052 6.25617 3.29525 7.76411 3.15313 9.37499H5C5.49728 9.37499 5.97419 9.57253 6.32583 9.92416C6.67746 10.2758 6.875 10.7527 6.875 11.25V14.375C6.875 14.8723 6.67746 15.3492 6.32583 15.7008C5.97419 16.0524 5.49728 16.25 5 16.25H3.75C3.25272 16.25 2.77581 16.0524 2.42417 15.7008C2.07254 15.3492 1.875 14.8723 1.875 14.375V9.99999C1.87675 8.39053 2.35596 6.81778 3.25196 5.48079C4.14796 4.1438 5.42047 3.1027 6.90843 2.48924C8.39639 1.87579 10.0329 1.71757 11.6108 2.03462C13.1887 2.35167 14.6371 3.12972 15.7727 4.2703C16.5224 5.02366 17.1161 5.91756 17.5197 6.90076C17.9234 7.88396 18.1291 8.93715 18.125 9.99999Z"
        fill={color}
      />
    </Icon>
  )
}

export const Plus = ({ ...props }: IconProps) => {
  return (
    <Icon
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M6.66669 20H33.3334"
        stroke="#141313"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 6.66699V33.3337"
        stroke="#141313"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

export const Minus = ({ ...props }: IconProps) => {
  return (
    <Icon
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M6.66669 20H33.3334"
        stroke="#141313"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

type LineProps = {
  color?: Color
}

export const Line = ({ color = '#141313' }: LineProps) => {
  const [width, setWidth] = useState(1280) // Initial width

  useEffect(() => {
    const handleResize = () => {
      const box = document.getElementById('main') // Use the id of the main Box
      if (box) {
        const boxWidth = box.offsetWidth
        setWidth(boxWidth)
      }
    }

    handleResize()

    // Attach resize event listener
    window.addEventListener('resize', handleResize)

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <svg
      width={width}
      height="4"
      viewBox={`0 0 ${width} 4`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.2" d={`M0 2H${width}`} stroke={color} strokeWidth="4" />
    </svg>
  )
}
