import React from 'react';
import Svg, { Path, SvgProps, Defs, G, ClipPath } from 'react-native-svg';

import { SvgParams } from '../types';
import { theme } from './components';

//Login Icons
export const Google = () => (
  <Svg width={16} height={17} viewBox="0 0 16 17" fill="none">
    <Path
      d="M15.845 6.933H15.2V6.9H8v3.2h4.521A4.798 4.798 0 013.2 8.5 4.8 4.8 0 018 3.7c1.224 0 2.337.462 3.184 1.216l2.263-2.263A7.963 7.963 0 008 .5a8 8 0 107.845 6.433z"
      fill="#FFC107"
    />
    <Path
      d="M.922 4.776L3.55 6.704A4.798 4.798 0 018 3.7c1.223 0 2.336.462 3.184 1.216l2.263-2.263A7.963 7.963 0 007.999.5 7.995 7.995 0 00.922 4.776z"
      fill="#FF3D00"
    />
    <Path
      d="M8 16.5c2.066 0 3.944-.79 5.364-2.076l-2.476-2.096A4.764 4.764 0 018 13.3a4.798 4.798 0 01-4.513-3.178l-2.609 2.01A7.994 7.994 0 008 16.5z"
      fill="#4CAF50"
    />
    <Path
      d="M15.844 6.933H15.2V6.9H8v3.2h4.521a4.816 4.816 0 01-1.635 2.228h.002l2.476 2.095C13.188 14.583 16 12.5 16 8.5c0-.536-.055-1.06-.156-1.567z"
      fill="#1976D2"
    />
  </Svg>
);

export const Facebook = () => (
  <Svg width={11} height={21} viewBox="0 0 11 21" fill="none">
    <Path
      d="M11 .5H8a5 5 0 00-5 5v3H0v4h3v8h4v-8h3l1-4H7v-3a1 1 0 011-1h3v-4z"
      fill="#4092FF"
    />
  </Svg>
);

// Home Icons
export const SearchIcon = ({ color, width, height }: SvgParams) => (
  <Svg
    width={width ? width : 14}
    height={height ? height : 14}
    viewBox="0 0 14 14"
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 2a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM0 6.25a6.25 6.25 0 1112.5 0 6.25 6.25 0 01-12.5 0z"
      fill={color ? color : theme.colors.primary}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.293 9.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414z"
      fill={color ? color : theme.colors.primary}
    />
  </Svg>
);

export function HeartIcon({ color, width }: SvgParams) {
  return (
    <Svg
      width={width ? width : 24}
      height={width ? width : 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M4.545 12.775L12 20.063l7.455-7.288.04-.039a5.068 5.068 0 000-7.288c-2.06-2.013-5.395-2.014-7.455 0l-.04.04-.041-.04c-2.06-2.015-5.395-2.015-7.455 0a5.069 5.069 0 000 7.287l.04.04z"
        stroke={color ? color : theme.colors.primary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function HeartIconFill({ color, width, height }: SvgParams) {
  return (
    <Svg
      width={width ? width : 22}
      height={height ? height : 20}
      viewBox="0 0 22 20"
      fill="none"
    >
      <Path
        d="M3.545 10.775L11 18.063l7.455-7.288.04-.039a5.068 5.068 0 000-7.288c-2.06-2.013-5.395-2.014-7.455 0l-.04.04-.041-.04c-2.061-2.015-5.396-2.015-7.455 0a5.069 5.069 0 000 7.287l.04.04z"
        fill={color ? color : theme.colors.red}
        stroke={color ? color : theme.colors.red}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export const AlarmIcon = ({ color, width }: SvgParams) => (
  <Svg
    width={width ? width : 24}
    height={width ? width : 24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4a6.03 6.03 0 00-6.031 6.031v5.25a1 1 0 01-.06.34l-.361 1.004h12.904l-.362-1.005a1 1 0 01-.059-.338v-5.25C18.031 6.7 15.331 4 12 4zm-8.031 6.031A8.03 8.03 0 0112 2a8.031 8.031 0 018.031 8.031v5.076l.785 2.18a1 1 0 01-.941 1.338H4.125a1 1 0 01-.94-1.339l.784-2.179v-5.076z"
      fill={color ? color : theme.colors.primary}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.625 16.625a1 1 0 011 1 2.375 2.375 0 104.75 0 1 1 0 112 0 4.375 4.375 0 11-8.75 0 1 1 0 011-1z"
      fill={color ? color : theme.colors.primary}
    />
  </Svg>
);

export const HomeIcon = ({ color, width, height }: SvgParams) => (
  <Svg
    width={width ? width : 20}
    height={height ? height : 20}
    viewBox="0 0 20 20"
    fill="none"
  >
    <Path
      d="M1 7.75L10 1l9 6.75M19 7.75V19H1V7.75"
      stroke={color ? color : theme.colors.grey}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.25 12.25h-4.5V19h4.5v-6.75z"
      stroke={color ? color : theme.colors.grey}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ExploreIcon = ({ color, width, height }: SvgParams) => (
  <Svg
    width={width ? width : 20}
    height={height ? height : 20}
    viewBox="0 0 20 20"
    fill="none"
  >
    <Path
      d="M8.875 16.75a7.875 7.875 0 100-15.75 7.875 7.875 0 000 15.75z"
      stroke={color ? color : theme.colors.grey}
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M14.5 14.5L19 19"
      stroke={color ? color : theme.colors.grey}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </Svg>
);

export const CartIcon = ({ color, width, height }: SvgParams) => (
  <Svg
    width={width ? width : 20}
    height={height ? height : 20}
    viewBox="0 0 20 20"
    fill="none"
  >
    <Path
      d="M7.188 19a.562.562 0 100-1.125.562.562 0 000 1.125zM15.063 19a.562.562 0 100-1.125.562.562 0 000 1.125z"
      fill={color ? color : theme.colors.grey}
      stroke={color ? color : theme.colors.grey}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1 1h2.25L5.5 14.5h11.25L19 4.375H4.375"
      stroke={color ? color : theme.colors.grey}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const OfferIcon = ({ color, width, height }: SvgParams) => (
  <Svg
    width={width ? width : 20}
    height={height ? height : 20}
    viewBox="0 0 20 20"
    fill="none"
  >
    <Path
      d="M6.063 6.625a.563.563 0 100-1.125.563.563 0 000 1.125z"
      fill={color ? color : theme.colors.grey}
      stroke={color ? color : theme.colors.grey}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 11l-8 8L1 9V1h8l10 10z"
      stroke={color ? color : theme.colors.grey}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ProfileIcon = ({ color, width, height }: SvgParams) => (
  <Svg
    width={width ? width : 20}
    height={height ? height : 20}
    viewBox="0 0 20 20"
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2a2.902 2.902 0 100 5.805A2.902 2.902 0 0010 2zM5.098 4.903a4.902 4.902 0 119.804 0 4.902 4.902 0 01-9.804 0zM7.518 13.39A5.518 5.518 0 002 18.908V19a1 1 0 11-2 0v-.09a7.518 7.518 0 017.518-7.519h4.964A7.518 7.518 0 0120 18.908V19a1 1 0 11-2 0v-.09a5.518 5.518 0 00-5.518-5.519H7.518z"
      fill={color ? color : theme.colors.grey}
    />
  </Svg>
);

// Categories
export function ShoeIcon({ width, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 24}
      height={width ? width : 24}
      viewBox="0 0 18 11"
      fill="none"
    >
      <Path
        d="M11.148 3.452L7.608.355h-2.85v.92l.506 1.08L3.308 3.63 1.246 1.516H0v9.29h18V5.194l-6.852-1.742zm-5.418-.1l.152.326a.884.884 0 01-.315 1.106c-.459.3-.883.246-1.297-.167l-.187-.192L5.73 3.352zM16.91 9.718H1.09V8.629H16.91v1.089zM1.09 7.54V2.915L3.493 5.38l.005.005c.778.778 1.774.894 2.665.31a1.979 1.979 0 00.706-2.478l-.83-1.773H7.2l3.428 3L16.91 6.04v1.5H1.09z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function MakeupIcon({ width, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 24}
      height={width ? width : 25}
      viewBox="0 0 25 24"
      fill="none"
    >
      <Path
        d="M23.838 22.8l-4.933-4.392-.607-.975a7.925 7.925 0 001.841-2.052c.638-1.031.974-2.152.974-3.24 0-3.539-2.24-6.62-5.524-8.18v-.12C15.59 1.723 13.348 0 10.591 0 7.835 0 5.593 1.723 5.593 3.84v.121C2.309 5.521.069 8.601.069 12.141c0 2.268 1.2 4.338 3.23 5.613C3.45 21.221 6.662 24 10.591 24c2.093 0 4.053-.784 5.438-2.164l2.199 1.958a.842.842 0 00.558.206h4.493c.32 0 .608-.171.73-.434a.648.648 0 00-.171-.766zm-7.954-2.836l-1.917-.947c.5-.874 1.277-1.566 2.259-2.01l1.063 1.706-1.405 1.25zM10.591 1.406c1.64 0 3.015.827 3.344 1.927a11.536 11.536 0 00-3.226-.457h-.235c-1.126 0-2.21.161-3.226.457.329-1.1 1.703-1.927 3.343-1.927zM1.648 12.141c0-4.333 3.96-7.858 8.826-7.858h.235c4.866 0 8.825 3.525 8.825 7.858 0 1.277-.62 2.618-1.645 3.667v-2.493c0-2.65-2.422-4.807-5.399-4.807H8.693c-2.978 0-5.4 2.156-5.4 4.807v2.58c-1.048-.993-1.645-2.324-1.645-3.754zm8.943 10.453c-3.153 0-5.718-2.284-5.718-5.092v-4.187c0-1.875 1.713-3.4 3.82-3.4h3.797c2.106 0 3.82 1.525 3.82 3.4v2.13l-.01.003c-1.604.518-2.913 1.54-3.699 2.863a.808.808 0 00-.687.365c-.26.422-.766.684-1.323.684-.556 0-1.063-.262-1.323-.684-.21-.34-.69-.465-1.072-.278-.382.186-.522.614-.313.954.537.872 1.575 1.414 2.708 1.414.81 0 1.572-.277 2.136-.754l2.013.995c-1.078 1.013-2.564 1.587-4.149 1.587zm8.522 0l-1.974-1.759 1.13-1.005 3.104 2.764h-2.26z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function CreamIcon({ width, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 25}
      height={width ? width : 25}
      viewBox="0 0 25 25"
      fill="none"
    >
      <Path
        d="M14.392 12.682V9.72a4.874 4.874 0 00-4.869-4.868H9.34V1.516h1.413c1.232 0 2.39.48 3.262 1.351l.145.145 1.072-1.072-.145-.145A6.089 6.089 0 0010.752 0H4.337v1.516h.859V4.85h-.134A4.874 4.874 0 00.194 9.719v14.584h24v-11.62h-9.802zm0 1.516h8.286v1.516h-8.286v-1.516zM6.712 1.516h1.111V4.85H6.712V1.516zM1.71 22.787V9.72a3.357 3.357 0 013.352-3.353h4.461a3.357 3.357 0 013.353 3.353v13.068H1.71zm20.968 0h-8.286V17.23h8.286v5.557z"
        fill={color ? color : theme.colors.primary}
      />
      <Path
        d="M7.913 11.337l-.62-.883c-.827 1.116-2.952 4.278-2.855 5.462.156 3.787 5.553 3.787 5.71 0 .11-.911-1.504-3.572-2.235-4.579zm-.62 5.918a1.34 1.34 0 01-1.34-1.339c0-.36.5-1.452 1.34-2.779.84 1.327 1.339 2.42 1.339 2.78 0 .738-.6 1.338-1.34 1.338z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function ManiPedi({ width, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 25}
      height={width ? width : 25}
      viewBox="0 0 24 22"
      fill="none"
    >
      <Path
        d="M8.536 6.68v-.983A1.988 1.988 0 006.55 3.711H4.01a1.988 1.988 0 00-1.986 1.986V6.78A5.065 5.065 0 000 10.873v11.003h10.56V10.873c0-1.675-.75-3.214-2.024-4.194zm-5.092-.983c0-.312.254-.566.567-.566h2.54c.311 0 .566.254.566.566v5.38a1.838 1.838 0 01-1.837 1.836 1.838 1.838 0 01-1.836-1.836v-5.38zm5.697 14.76H1.42v-9.584c0-.766.209-1.466.604-2.059v2.263a3.26 3.26 0 003.256 3.256 3.26 3.26 0 003.256-3.256V8.754c.39.614.605 1.346.605 2.119v9.583zM23.532 9.699a1.775 1.775 0 00-1.303-.572h-.944L20.812.656h-5.27l-.473 8.47h-.944a1.776 1.776 0 00-1.765 1.918l.905 10.832h9.824l.905-10.83a1.775 1.775 0 00-.462-1.347zM19.47 2.076l.081 1.465h-2.748l.081-1.465h2.586zM16.723 4.96h2.908l.232 4.166H16.49l.233-4.166zm5.856 5.966l-.796 9.53h-7.212l-.796-9.53a.348.348 0 01.091-.267.348.348 0 01.259-.113H22.229a.349.349 0 01.35.38z"
        fill={color ? color : theme.colors.primary}
      />
      <Path
        d="M15.85 17.62h4.686l.454-5.254h-5.594l.454 5.253zm3.592-3.834l-.209 2.413h-2.081l-.209-2.413h2.499z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function BabyIcon({ width, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 25}
      height={width ? width : 25}
      viewBox="0 0 25 24"
      fill="none"
    >
      <Path
        d="M20.323 15.309c2.066-.18 3.679-1.595 3.679-3.309 0-1.713-1.613-3.129-3.679-3.309a8.986 8.986 0 00-4.245-4.664C16.026 1.825 14.23 0 12.002 0 9.774 0 7.978 1.823 7.926 4.027A8.985 8.985 0 003.681 8.69C1.615 8.871.002 10.286.002 12c0 1.714 1.614 3.129 3.68 3.309a9.044 9.044 0 003.325 4.12 7.703 7.703 0 00-2.577 3.649.703.703 0 001.336.438c.444-1.354 1.361-2.526 2.6-3.332a8.966 8.966 0 007.4-.06c1.287.808 2.237 2 2.693 3.392a.703.703 0 101.336-.438 7.699 7.699 0 00-2.68-3.728 8.97 8.97 0 003.208-4.041zM22.596 12c0 .821-.774 1.542-1.824 1.81a9.02 9.02 0 000-3.62c1.05.268 1.824.989 1.824 1.81zM12.002 1.406c1.353 0 2.475 1.03 2.648 2.359a4.08 4.08 0 00-3.55 2.877 2.665 2.665 0 01-1.77-2.517c0-1.5 1.199-2.719 2.672-2.719zM1.408 12c0-.821.774-1.542 1.824-1.81a9.02 9.02 0 000 3.62c-1.05-.268-1.824-.989-1.824-1.81zm14.066 6.703c-4.045 2.1-9.08.18-10.631-4.31a7.555 7.555 0 013.319-8.89 4.064 4.064 0 003.409 2.677.703.703 0 00.773-.628 2.662 2.662 0 012.86-2.387c3.437 1.612 5.18 5.57 3.957 9.229a7.618 7.618 0 01-3.687 4.309z"
        fill={color ? color : theme.colors.primary}
      />
      <Path
        d="M10.276 11.171a.703.703 0 000-.994 2.577 2.577 0 00-3.646 0 .703.703 0 00.994.994 1.171 1.171 0 011.657 0c.275.275.72.275.995 0zM17.4 10.177a2.577 2.577 0 00-3.645 0 .703.703 0 10.994.994 1.171 1.171 0 011.657 0 .703.703 0 00.995-.994zM13.361 14.878c-.75.75-1.969.75-2.718 0a.703.703 0 00-.994.994 3.332 3.332 0 004.706 0 .703.703 0 10-.994-.994z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function DrinksIcon({ width, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 25}
      height={width ? width : 25}
      viewBox="0 0 20 24"
      fill="none"
    >
      <Path
        d="M9.522 12.104c0-.99-.244-1.946-.713-2.767l-.11-.194H1.746l-.108.194a5.592 5.592 0 00-.713 2.767c0 2.522 1.605 4.612 3.688 4.958v5.89c-1.201.049-2.096.231-2.096.448 0 .257 1.22.462 2.726.462 1.507 0 2.73-.205 2.73-.462 0-.216-.896-.4-2.098-.448v-5.895c2.062-.368 3.646-2.45 3.646-4.953zm-4.3 4.24c-1.945 0-3.53-1.902-3.53-4.243 0-.78.176-1.532.51-2.193h6.043c.333.66.51 1.415.51 2.193.001 2.342-1.586 4.242-3.532 4.242zM16.882 2.65h-3.057V0h3.057v2.65zm0 3.285v-2.47h-3.057v2.47a3.718 3.718 0 00-2.193 3.39V24h7.442V9.327a3.714 3.714 0 00-2.192-3.391zm1.535 14.323h-6.062v-7.273h6.062v7.273zm-9.981-8.076s-.161 3.846-3.16 3.846c-3 0-3.404-3.846-3.404-3.846h6.564z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function ChildIcon({ color, width }: SvgProps) {
  return (
    <Svg
      width={width ? width : 24}
      height={width ? width : 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M20.75 11.319a4.34 4.34 0 001.476-3.262V6.656a4.354 4.354 0 00-4.35-4.35h-.008a4.354 4.354 0 00-4.35 4.35v1.4a4.34 4.34 0 001.477 3.264c-.45.159-.875.384-1.262.669a2.888 2.888 0 00-1.73-.573h-.005c-.648 0-1.246.213-1.73.572a4.866 4.866 0 00-1.264-.669 4.34 4.34 0 001.477-3.262v-.933a4.334 4.334 0 00-1.212-3.01v-.96A3.158 3.158 0 006.114 0H6.11a3.158 3.158 0 00-3.154 3.154v.994a4.333 4.333 0 00-1.181 2.976v.933a4.34 4.34 0 001.476 3.262A4.887 4.887 0 000 15.917v7.38c0 .388.315.703.703.703h22.594a.703.703 0 00.703-.703v-7.38a4.887 4.887 0 00-3.25-4.598zM17.868 11a2.948 2.948 0 01-2.824-2.118 6.578 6.578 0 003.415-1.67 6.61 6.61 0 002.31 1.387A2.948 2.948 0 0117.877 11h-.009zm0-7.287h.009a2.947 2.947 0 012.943 2.943v.452a5.232 5.232 0 01-1.828-1.366.703.703 0 00-1.066 0 5.2 5.2 0 01-3.001 1.733v-.82a2.947 2.947 0 012.943-2.943zm-5.87 9.109h.005c.825 0 1.496.671 1.496 1.497v.468c0 .407-.165.815-.452 1.12-.287.303-.658.47-1.045.47h-.005c-.386 0-.757-.167-1.044-.47a1.65 1.65 0 01-.452-1.12v-.469c0-.825.671-1.496 1.497-1.496zm-5.875-8.64h.009c.276 0 .542.038.795.11a2.546 2.546 0 01-3.662 2.134 2.948 2.948 0 012.858-2.245zM6.11 1.405h.005a1.75 1.75 0 011.748 1.728 4.325 4.325 0 00-1.73-.359h-.009c-.627 0-1.223.134-1.762.373A1.75 1.75 0 016.11 1.406zM3.18 7.904a3.956 3.956 0 005.05-2.841c.522.531.845 1.26.845 2.061v.933A2.947 2.947 0 016.132 11h-.009A2.947 2.947 0 013.18 8.057v-.153zm-1.774 8.014a3.477 3.477 0 013.473-3.473h2.497c.72 0 1.416.223 1.998.633-.179.376-.28.797-.28 1.24v.47c0 .822.342 1.58.883 2.127a3.845 3.845 0 00-1.888 3.307v2.372H1.406v-6.677zm8.09 6.676v-2.372a2.44 2.44 0 012.437-2.438h.133a2.44 2.44 0 012.438 2.438v2.372H9.496zm13.098 0H15.91v-2.372a3.845 3.845 0 00-1.887-3.307c.54-.548.882-1.305.882-2.128v-.469c0-.444-.101-.864-.28-1.241a3.476 3.476 0 011.998-.632h2.497a3.476 3.476 0 013.473 3.473v6.676z"
          fill={color ? color : theme.colors.primary}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function WomanIcon({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 25 30"
      fill="none"
    >
      <Path
        d="M14.056 0h-3.712A10.139 10.139 0 00.2 10.144v18.557c0 .478.388.866.866.866h22.268a.866.866 0 00.866-.866V10.144A10.139 10.139 0 0014.056 0zm0 1.732c5.05 0 7.364 3.888 7.983 5.749a2.72 2.72 0 00-.56-.058h-1.857c-3.321 0-6.073-2.483-6.498-5.69h.932zm4.7 7.378v1.962c0 2.596-2.1 4.7-4.7 4.7h-3.712c-2.595 0-4.7-2.1-4.7-4.7V9.11A8.307 8.307 0 0012.2 4.554a8.307 8.307 0 006.556 4.556zM6.633 19.484c-1.313-.054-1.312-1.925 0-1.979h11.134c1.313.055 1.312 1.925 0 1.98H6.633zm8.412 1.733v2.906h-1.979v-2.906h1.98zm-4.7-19.485h.931c-.425 3.208-3.177 5.69-6.498 5.69H2.921c-.192 0-.38.02-.561.059.782-2.353 3.347-5.749 7.983-5.749zM2.921 9.155h.99v1.979h-.99c-1.313-.055-1.312-1.925 0-1.98zm-.99 3.524c.307.12.64.187.99.187h1.242c.197.684.67 1.893 1.863 2.976-2.005.441-2.812 2.966-1.407 4.483a10.172 10.172 0 00-2.688 2.706V12.68zm.044 15.155c.4-3.944 3.199-5.936 4.527-6.617h4.83v3.772c0 .479.389.867.867.867h3.711a.866.866 0 00.867-.867v-3.772h1.118c1.329.68 4.127 2.673 4.527 6.617H1.976zm20.492-4.803a10.173 10.173 0 00-2.689-2.706c1.407-1.517.598-4.042-1.406-4.483a6.405 6.405 0 001.863-2.976h1.242c.35 0 .683-.066.99-.187v10.352zm-.99-11.897h-.99v-1.98h.99c1.313.055 1.312 1.926 0 1.98z"
        fill={color ? color : theme.colors.primary}
      />
      <Path
        d="M10.12 11.473a.866.866 0 00.162 1.215 3.17 3.17 0 001.918.642 3.17 3.17 0 001.918-.642.866.866 0 00-1.053-1.376c-.478.378-1.252.378-1.73 0a.866.866 0 00-1.215.161z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function ManIcon({ width, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 24}
      height={width ? width : 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G
        clipPath="url(#prefix__clip0)"
        fill={color ? color : theme.colors.primary}
      >
        <Path d="M15.012 14.963a3.72 3.72 0 003.716-3.716v-.803h.803c2.535-.06 3.04-3.512.67-4.315a5.22 5.22 0 00-5.189-4.623h-1.315l.307-.306a.703.703 0 10-.995-.994L12 1.215 10.99.205a.703.703 0 00-.993.995l.306.306H8.987A5.22 5.22 0 003.8 6.13c-2.373.804-1.864 4.256.669 4.315h.803v.803a3.72 3.72 0 003.716 3.716h.803v.886c-3.797.355-6.778 3.56-6.778 7.448 0 .388.314.703.703.703h16.568a.703.703 0 00.704-.703c0-3.888-2.982-7.092-6.779-7.448v-.886h.803zm5.322-6.729c0 .443-.36.803-.803.803h-.803V7.431h.803c.443 0 .803.36.803.803zm-15.062.803h-.803c-1.066-.044-1.065-1.562 0-1.606h.803v1.606zm-.036-3.012c.46-2.48 2.723-3.112 3.75-3.112h6.027c1.739 0 3.4 1.222 3.75 3.112H5.237zm1.542 16.569H4.46a6.074 6.074 0 012.32-4.1v4.1zm9.038 0H8.184v-1.607h7.632v1.607zm1.406-4.1a6.076 6.076 0 012.319 4.1h-2.32v-4.1zm-1.406-.816v1.903H8.184v-1.903a6.028 6.028 0 011.73-.429c.693 1.96 3.479 1.96 4.171 0a6.026 6.026 0 011.73.43zm-4.62-1.16v-1.556h1.607v1.557c-.042 1.065-1.564 1.065-1.606 0zm-2.208-2.962a2.312 2.312 0 01-2.31-2.31V7.432h10.644v3.816a2.312 2.312 0 01-2.31 2.31H8.988z" />
        <Path d="M13.968 9.963a.703.703 0 00-.992.07c-.572.678-1.382.676-1.952 0a.703.703 0 00-1.06.922c1.108 1.318 2.964 1.318 4.073 0a.703.703 0 00-.07-.992z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

// This is not a laptop, might need to change the name later
export function LaptopIcon({ width, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 24}
      height={width ? width : 24}
      viewBox="0 0 24 22"
      fill="none"
    >
      <Path
        d="M18.281 17.301L24 20.114V9.418l-5.719 2.812V8.437h-1.48a4.907 4.907 0 001.48-3.515A4.927 4.927 0 0013.36 0a4.924 4.924 0 00-4.218 2.39A4.924 4.924 0 004.92 0 4.927 4.927 0 000 4.922c0 1.376.568 2.621 1.481 3.516H0v12.656h18.281V17.3zm4.313-5.625v6.179l-4.313-2.12v-1.938l4.313-2.12zm-9.235-10.27a3.52 3.52 0 013.516 3.516 3.52 3.52 0 01-3.516 3.516 3.52 3.52 0 01-3.515-3.516 3.52 3.52 0 013.515-3.516zM9.92 8.438H8.363c.299-.293.56-.623.778-.984.217.36.479.69.778.984zM1.406 4.921a3.52 3.52 0 013.516-3.516 3.52 3.52 0 013.516 3.516 3.52 3.52 0 01-3.516 3.516 3.52 3.52 0 01-3.516-3.516zm15.469 14.765H1.406V9.845h15.469v9.844z"
        fill={color ? color : theme.colors.primary}
      />
      <Path
        d="M4.219 16.875h9.843v-4.219H4.22v4.219zm1.406-2.813h7.031v1.407H5.625v-1.406zM5.625 2.813H4.219v1.406H2.812v1.406H4.22v1.406h1.406V5.625h1.406V4.219H5.625V2.812zM12.656 7.031h1.406V5.625h1.407V4.219h-1.406V2.812h-1.407V4.22H11.25v1.406h1.406v1.406z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function PhoneIcon({ width, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 24}
      height={width ? width : 24}
      viewBox="0 0 14 24"
      fill="none"
    >
      <Path
        d="M11.714 0H2.276C1.32 0 .545.775.545 1.731V22.27A1.73 1.73 0 002.276 24h9.438c.956 0 1.731-.775 1.731-1.731V1.731C13.445.775 12.67 0 11.714 0zM5.837 1.023h2.316a.151.151 0 010 .303H5.837a.151.151 0 010-.303zM3.528.66a.242.242 0 110 .483.242.242 0 010-.483zM2.433.515a.386.386 0 110 .773.386.386 0 010-.773zM7.6 23.121H6.391a.693.693 0 110-1.386h1.208a.693.693 0 110 1.386zm5.113-1.934H1.278V2.813h11.434v18.374z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function PerfumeIcon({ width, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 24}
      height={width ? width : 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M16.5 8.017V6.422c0-.825-.612-1.51-1.406-1.624V2.813h.703a.703.703 0 000-1.407h-.703V.703A.703.703 0 0014.39 0h-2.813a.703.703 0 00-.703.703v.703H4.922a2.581 2.581 0 00-2.578 2.578v.341c-.583.179-1.117.576-1.527 1.15C.29 6.211 0 7.18 0 8.202c0 1.022.29 1.991.817 2.729.57.798 1.383 1.255 2.23 1.255s1.66-.457 2.23-1.255c.526-.738.817-1.707.817-2.729s-.29-1.99-.818-2.729c-.409-.573-.943-.97-1.526-1.149v-.34c0-.647.526-1.172 1.172-1.172h5.953v1.985a1.643 1.643 0 00-1.406 1.624v1.595l-2.273 2.407a8.612 8.612 0 00-2.363 6.227 8.612 8.612 0 002.75 6.067l1.172 1.093c.13.122.301.189.48.189h7.5c.178 0 .349-.067.48-.19l1.17-1.092a8.613 8.613 0 002.75-6.067 8.613 8.613 0 00-2.362-6.227L16.5 8.017zm-11.812.186c0 1.398-.752 2.578-1.641 2.578-.89 0-1.64-1.18-1.64-2.578 0-1.397.75-2.578 1.64-2.578.89 0 1.64 1.18 1.64 2.578zM15.494 9l1.558 1.65a4.898 4.898 0 01-3.737-.364 6.304 6.304 0 00-3.365-.73L10.475 9h5.019zm-1.806-7.594v3.375H12.28V1.406h1.406zm-2.579 4.782h3.75c.13 0 .235.105.235.234v1.172h-4.219V6.422c0-.13.105-.234.234-.234zm6.317 15.502l-.969.904H9.511l-.968-.904a7.393 7.393 0 01-.49-.503h9.862a7.421 7.421 0 01-.49.503zm2.304-5.083a7.235 7.235 0 01-.838 3.174H7.077a7.236 7.236 0 01-.839-3.174 7.214 7.214 0 011.901-5.132 4.899 4.899 0 014.515.052 6.308 6.308 0 005.43.242 7.209 7.209 0 011.646 4.838zM18.14 1.406h1.172a.703.703 0 100-1.406h-1.171a.703.703 0 100 1.406zM23.297 0h-1.172a.703.703 0 000 1.406h1.172a.703.703 0 000-1.406z"
        fill={color ? color : theme.colors.primary}
      />
      <Path
        d="M17.666 4.41l1.131.303a.705.705 0 00.862-.498.703.703 0 00-.497-.86L18.03 3.05a.704.704 0 00-.364 1.358zM23.01 4.385l-1.132-.303a.703.703 0 00-.364 1.359l1.132.303a.703.703 0 10.364-1.359z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function ClothingIcon({ width, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 24}
      height={width ? width : 24}
      viewBox="0 0 24 28"
      fill="none"
    >
      <Path
        d="M23.996 19.981L22.661 5.238A4 4 0 0018.677 1.6h-3.144C14.986 1.08 13.65 0 12 0 10.35 0 9.013 1.08 8.466 1.6H5.322a4 4 0 00-3.984 3.638L.003 19.981a.8.8 0 00.796.872h3.098l-.691 5.555a.8.8 0 00.793.899h16a.8.8 0 00.794-.9l-.691-5.554h3.097a.8.8 0 00.797-.872zM12 1.6c.941 0 1.79.6 2.247.993L12.005 7.85 9.753 2.593c.457-.395 1.306-.993 2.246-.993zM9.6 25.707H4.904l1.401-11.254h3.293v11.254zm.271-12.854H6.399V7.2a.8.8 0 00-1.6 0v6.404l-.703 5.65h-2.42L2.931 5.382A2.388 2.388 0 015.322 3.2h2.95l2.865 6.685-1.266 2.968zM11.2 25.707V14.453h1.6v5.6a.8.8 0 101.6 0v-5.6h3.293l1.4 11.254H11.2zm8.703-6.454l-.704-5.65V7.2a.8.8 0 10-1.6 0v5.653H11.61L15.728 3.2h2.95c1.249 0 2.276.938 2.39 2.182l1.256 13.871h-2.421z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function ChargerIcon({ width, color }: SvgProps) {
  return (
    <Svg
      width={width ? width : 24}
      height={width ? width : 24}
      viewBox="0 0 25 24"
      fill="none"
    >
      <Path
        d="M23.74 6.35H22.34V4.386a.703.703 0 10-1.406 0V6.35H17.25V4.386a.703.703 0 10-1.406 0V6.35h-1.398a.703.703 0 000 1.406h.737l-.018 2.535a2.916 2.916 0 002.917 2.986h.308v5.333a3.989 3.989 0 01-3.985 3.984h-4.104a3.989 3.989 0 01-3.984-3.984v-4.87c1.063-.692 4.115-2.959 4.308-6.265.147-2.524-1.399-4.993-4.596-7.338a.703.703 0 00-.832 0C2.001 2.482.454 4.95.602 7.475c.193 3.306 3.245 5.573 4.308 6.265v4.87A5.397 5.397 0 0010.301 24h4.104a5.397 5.397 0 005.39-5.39v-5.333h.283a2.917 2.917 0 002.917-2.856l.021-2.665h.724a.703.703 0 000-1.406zm-18.127.172a.703.703 0 00-.703.703v4.783c-1.13-.89-2.783-2.533-2.904-4.615-.112-1.914 1.101-3.867 3.608-5.809 2.503 1.94 3.717 3.891 3.608 5.804-.119 2.075-1.774 3.724-2.905 4.617v-4.78a.703.703 0 00-.704-.703zm15.976 3.881a1.503 1.503 0 01-1.511 1.468h-1.996a1.51 1.51 0 01-1.511-1.563l.018-2.552h5.02l-.02 2.647z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

// Notifications

export function OfferNotificationIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M6.063 6.625a.563.563 0 100-1.125.563.563 0 000 1.125z"
        fill="#085827"
        stroke="#085827"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 11l-8 8L1 9V1h8l10 10z"
        stroke="#085827"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

// Payment

export function CardTransferIcon({ color, width, height }: SvgParams) {
  return (
    <Svg
      width={width ? width : 20}
      height={height ? height : 16}
      viewBox="0 0 20 16"
      fill="none"
    >
      <Path
        d="M19 1.25H1v13.5h18V1.25zM1 5.75h18"
        stroke={color ? color : theme.colors.primary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function BankTransferIcon({ color, width, height }: SvgProps) {
  return (
    <Svg
      width={width ? width : 20}
      height={height ? height : 20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M1 4.375L10 1l9 3.375M1 19h18M10 14.5V7.75M16.75 14.5V7.75M3.25 14.5V7.75"
        stroke={color ? color : theme.colors.primary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function PayPalIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.35 6.883l.002.002A.489.489 0 019.83 6.5h6.736l.025-.003C16.448 4.107 14.443 3 12.675 3H5.939a.492.492 0 00-.478.389l-.002-.001-2.945 13.519h.007c-.007.032-.02.063-.02.097 0 .276.224.495.5.495h4.036L9.35 6.885z"
        fill="#1565C0"
      />
      <Path
        d="M16.592 6.497c.026.438-.003.914-.115 1.44-.64 2.998-2.956 4.558-5.817 4.558H8.503a.46.46 0 00-.44.27l-.87 4.025-.152.714h-.003l-.632 2.898h.007c-.007.033-.02.063-.02.098a.5.5 0 00.5.5h3.667l.006-.005a.493.493 0 00.473-.394l.009-.008.906-4.208s.063-.401.485-.401h2.089c2.861 0 5.2-1.553 5.841-4.551.721-3.38-1.69-4.924-3.777-4.936z"
        fill="#039BE5"
      />
      <Path
        d="M9.83 6.5a.488.488 0 00-.478.384H9.35l-1.287 5.882a.46.46 0 01.44-.27h2.117c2.862 0 5.216-1.56 5.857-4.558a5.305 5.305 0 00.114-1.44c-.008-.002-.017.002-.025.002H9.83z"
        fill="#283593"
      />
    </Svg>
  );
}

// Others

export function TrashIcon({ color, width, height }: SvgParams) {
  return (
    <Svg
      width={width ? width : 18}
      height={height ? height : 18}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M1 4.375h18M6.625 1h6.75M16.75 4.375H3.25V19h13.5V4.375z"
        stroke={color ? color : theme.colors.grey}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CheckIcon({ color, width, height, stroke }: SvgParams) {
  return (
    <Svg
      width={width ? width : 29}
      height={height ? height : 21}
      viewBox="0 0 29 21"
      fill="none"
    >
      <Path
        d="M3 10.5l7.667 7.5L26 3"
        stroke={color ? color : theme.colors.white}
        strokeWidth={stroke ? stroke : 6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function GenderIcon({ color, width, height }: SvgProps) {
  return (
    <Svg
      width={width ? width : 14}
      height={height ? height : 22}
      viewBox="0 0 14 22"
      fill="none"
    >
      <Path
        d="M7 13A6 6 0 107 1a6 6 0 000 12zM7 13v8M4 17h6"
        stroke={color ? color : theme.colors.primary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function LocationIcon({ color, width, height }: SvgProps) {
  return (
    <Svg
      width={width ? width : 17}
      height={height ? height : 22}
      viewBox="0 0 17 22"
      fill="none"
    >
      <Path
        d="M16 8.777C16 13.075 8.5 21 8.5 21S1 13.074 1 8.777C1 4.481 4.357 1 8.5 1S16 4.482 16 8.777z"
        stroke={color ? color : theme.colors.primary}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 8.5a2 2 0 11-4 0 2 2 0 014 0z"
        fill={color ? color : theme.colors.primary}
        stroke={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function LockIcon({ color, width, height }: SvgProps) {
  return (
    <Svg
      width={width ? width : 20}
      height={height ? height : 20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.75a1 1 0 011-1h18a1 1 0 011 1V19a1 1 0 01-1 1H1a1 1 0 01-1-1V7.75zm2 1V18h16V8.75H2z"
        fill={color ? color : theme.colors.primary}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C7.481 2 5.375 4.132 5.375 6.841a1 1 0 01-2 0C3.375 3.099 6.306 0 10 0s6.625 3.1 6.625 6.841a1 1 0 11-2 0C14.625 4.132 12.519 2 10 2zM10 11.726a1 1 0 011 1v1.125a1 1 0 11-2 0v-1.125a1 1 0 011-1z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function CloseEye({ width, color }: SvgProps) {
  return (
    <Svg
      width={width}
      height={width ? width : 24 * 0.857}
      viewBox="0 0 14 12"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.901.75L1.825 10.826l1.06 1.06L12.963 1.812 11.902.75zM8.88 1.871L7 3.75A2.25 2.25 0 004.75 6L2.145 8.605C.813 7.375.25 6 .25 6S2.09 1.5 7 1.5c.65 0 1.28.14 1.879.371zm3.527 2.515A13.99 13.99 0 0113.75 6S10.682 10.5 7 10.5c-.233 0-.46-.01-.678-.03l6.084-6.084z"
        fill={color ? color : theme.colors.grey}
      />
    </Svg>
  );
}

export function Eye({ width, color }: SvgProps) {
  return (
    <Svg width={width} height={width} viewBox="0 0 14 10" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 .5C2.09.5.25 5 .25 5S2.09 9.5 7 9.5c3.682 0 6.75-4.5 6.75-4.5S10.682.5 7 .5zM4.75 5a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function Filter({ width, color }: SvgProps) {
  return (
    <Svg
      width={width || 24}
      height={width || 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M3 12h5.625M17.625 3v18L21 17.625M3 5h10.125M3 19h3.375M17.625 21l-3.375-3.375"
        stroke={color || theme.colors.primary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function LogOut({ width, color }: SvgProps) {
  return (
    <Svg
      width={width || 24}
      height={width || 24}
      viewBox="0 0 511 512"
      fill="none"
    >
      <Path
        d="M361.016 392v40c0 44.113-35.888 80-80.004 80H80.004C35.888 512 0 476.113 0 432V80C0 35.887 35.888 0 80.004 0h201.008c44.116 0 80.004 35.887 80.004 80v40c0 11.047-8.954 20-20.001 20s-20.001-8.953-20.001-20V80c0-22.055-17.946-40-40.002-40H80.004c-22.056 0-40.002 17.945-40.002 40v352c0 22.055 17.946 40 40.002 40h201.008c22.056 0 40.002-17.945 40.002-40v-40c0-11.047 8.954-20 20.001-20s20.001 8.953 20.001 20zm136.361-170.355l-44.787-44.786c-7.813-7.812-20.477-7.812-28.286 0-7.813 7.809-7.813 20.473 0 28.282L456.161 237H216.009c-11.047 0-20 8.953-20 20s8.953 20 20 20h240.152l-31.857 31.859c-7.813 7.809-7.813 20.473 0 28.282A19.937 19.937 0 00438.445 343a19.939 19.939 0 0014.145-5.859l44.787-44.786c19.497-19.496 19.497-51.214 0-70.71z"
        fill={color || theme.colors.primary}
      />
    </Svg>
  );
}

export function Alert({ width, color }: SvgProps) {
  return (
    <Svg width={width || 24} height={width || 24} viewBox="0 0 24 24">
      <Path
        d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 6.375v6.75M12 16.5v1.125"
        stroke={color || theme.colors.primary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
