import React from 'react';
import Svg, { Path, SvgProps, Mask, G } from 'react-native-svg';

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

export function HeartIcon({ color, width, height }: SvgParams) {
  return (
    <Svg
      width={width ? width : 22}
      height={height ? height : 20}
      viewBox="0 0 22 20"
      fill="none"
    >
      <Path
        d="M3.545 10.775L11 18.063l7.455-7.288.04-.039a5.068 5.068 0 000-7.288c-2.06-2.013-5.395-2.014-7.455 0l-.04.04-.041-.04c-2.061-2.015-5.396-2.015-7.455 0a5.069 5.069 0 000 7.287l.04.04z"
        stroke={color ? color : theme.colors.grey}
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

export const AlarmIcon = ({ color, width, height }: SvgParams) => (
  <Svg
    width={width ? width : 18}
    height={height ? height : 20}
    viewBox="0 0 18 20"
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2a6.03 6.03 0 00-6.031 6.031v5.25a1 1 0 01-.06.34l-.361 1.004h12.904l-.362-1.005a1 1 0 01-.059-.338v-5.25C15.031 4.7 12.331 2 9 2zM.969 8.031A8.03 8.03 0 019 0a8.031 8.031 0 018.031 8.031v5.076l.785 2.18a1 1 0 01-.941 1.338H1.125a1 1 0 01-.94-1.339l.784-2.179V8.031z"
      fill={color ? color : theme.colors.grey}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.625 14.625a1 1 0 011 1 2.375 2.375 0 104.75 0 1 1 0 112 0 4.375 4.375 0 11-8.75 0 1 1 0 011-1z"
      fill={color ? color : theme.colors.grey}
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
export function ShoeIcon() {
  return (
    <Svg width={24} height={13.94} viewBox="0 0 18 11" fill="none">
      <Path
        d="M11.148 3.452L7.608.355h-2.85v.92l.506 1.08L3.308 3.63 1.246 1.516H0v9.29h18V5.194l-6.852-1.742zm-5.418-.1l.152.326a.884.884 0 01-.315 1.106c-.459.3-.883.246-1.297-.167l-.187-.192L5.73 3.352zM16.91 9.718H1.09V8.629H16.91v1.089zM1.09 7.54V2.915L3.493 5.38l.005.005c.778.778 1.774.894 2.665.31a1.979 1.979 0 00.706-2.478l-.83-1.773H7.2l3.428 3L16.91 6.04v1.5H1.09z"
        fill="#085827"
      />
    </Svg>
  );
}

export function MakeupIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.833 13.776a.469.469 0 00-.625.222l-.078.163a.469.469 0 10.847.403l.077-.163a.469.469 0 00-.221-.625zM6.58 11.06a.469.469 0 00-.662 0 .998.998 0 01-1.41 0 .469.469 0 00-.662.663c.377.377.872.566 1.367.566.496 0 .99-.189 1.368-.566a.469.469 0 000-.663z"
        fill="#085827"
      />
      <Path
        d="M22.377 1.245a4.253 4.253 0 00-5.991-.015A11.276 11.276 0 0014.74.57c-1.9-.595-3.455-.573-3.59-.57-2.542.002-4.759 1.068-5.788 2.784a4.324 4.324 0 00-.34.703c-.484.462-2.67 2.72-2.67 5.925 0 2.133-1.026 3.248-1.638 3.722a.86.86 0 00.106 1.432c.23.13.49.254.74.374.222.106.537.258.69.356v.835a.877.877 0 01-.064.331l-.116.286c-.16.392-.1.84.152 1.178v.102c0 .305.134.586.357.777v.55c0 1.18.959 2.138 2.138 2.138h1.384a.469.469 0 000-.937H4.717a1.203 1.203 0 01-1.201-1.2v-.81a.469.469 0 00-.285-.43l-.02-.01a.085.085 0 01-.052-.078v-.264a.469.469 0 00-.1-.29l-.083-.105a.27.27 0 01-.038-.268l.116-.286a1.81 1.81 0 00.134-.684v-.998c0-.452-.46-.672-1.222-1.038-.2-.096-.406-.195-.588-.292.754-.615 1.911-1.957 1.911-4.391 0-1.762.785-3.23 1.465-4.172.037.816.284 1.67.741 2.525 1.203 2.25 3.297 3.192 4.98 3.95 1.601.72 2.508 1.174 2.515 2.117.005.693-.154 1.203-.474 1.515-.368.36-.858.351-.861.351a.46.46 0 00-.4.183.468.468 0 00-.067.439c.014.04.346.98 1.106 1.898.95 1.146 2.15 1.751 3.486 1.765l1.26 3.691a.469.469 0 10.886-.302l-1.24-3.636c2.338-1.252 3.982-3.196 4.765-5.643.625-1.951.655-4.14.127-6.214a4.253 4.253 0 00.8-6.635zM20.56 13.808c-.736 2.297-2.315 4.106-4.57 5.236-1.14.05-2.134-.42-2.956-1.402a5.977 5.977 0 01-.728-1.111 2.15 2.15 0 00.85-.498c.52-.497.78-1.24.772-2.207-.012-1.59-1.496-2.258-3.067-2.965-1.634-.735-3.486-1.569-4.538-3.537-.654-1.222-.808-2.385-.46-3.404l.005-.011a3.42 3.42 0 01.3-.642C7.027 1.83 8.94.938 11.157.938h.013c.015 0 1.492-.036 3.29.527 2.393.75 4.155 2.146 5.239 4.151 1.369 2.534 1.69 5.597.86 8.192zm.739-6.865a11.741 11.741 0 00-.775-1.772 9.211 9.211 0 00-3.274-3.46 3.315 3.315 0 014.466.197 3.315 3.315 0 01-.417 5.035z"
        fill="#085827"
      />
      <Path
        d="M12.402 21.952l-1.468-2.543-.05-1.736a2.845 2.845 0 00-2.616-2.758 2.6 2.6 0 00-2.548 1.471l-.023.049a2.859 2.859 0 001.018 3.606l1.462.952 1.597 2.766a.468.468 0 10.811-.469l-1.418-2.457.565-.326.565-.326 1.293 2.24a.469.469 0 00.812-.47zm-3.86-1.84l-1.315-.856a1.918 1.918 0 01-.683-2.42l.023-.049a1.66 1.66 0 011.625-.938c.973.08 1.727.875 1.755 1.85l.045 1.576-1.45.837zM13.104 23.2a.472.472 0 00-.662 0 .472.472 0 000 .663.472.472 0 00.662 0 .472.472 0 000-.663zM9.264 2.747a.469.469 0 00-.615-.247c-.827.354-1.423.95-1.679 1.677-.256.73-.16 1.55.279 2.37a.468.468 0 10.826-.442c-.316-.591-.39-1.135-.22-1.617.167-.477.58-.877 1.162-1.126a.469.469 0 00.247-.615zM10.407 2.156h-.026a.469.469 0 00.002.938h.023a.469.469 0 000-.938z"
        fill="#085827"
      />
    </Svg>
  );
}

export function CreamIcon() {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
      <Path
        d="M14.392 12.682V9.72a4.874 4.874 0 00-4.869-4.868H9.34V1.516h1.413c1.232 0 2.39.48 3.262 1.351l.145.145 1.072-1.072-.145-.145A6.089 6.089 0 0010.752 0H4.337v1.516h.859V4.85h-.134A4.874 4.874 0 00.194 9.719v14.584h24v-11.62h-9.802zm0 1.516h8.286v1.516h-8.286v-1.516zM6.712 1.516h1.111V4.85H6.712V1.516zM1.71 22.787V9.72a3.357 3.357 0 013.352-3.353h4.461a3.357 3.357 0 013.353 3.353v13.068H1.71zm20.968 0h-8.286V17.23h8.286v5.557z"
        fill="#085827"
      />
      <Path
        d="M7.913 11.337l-.62-.883c-.827 1.116-2.952 4.278-2.855 5.462.156 3.787 5.553 3.787 5.71 0 .11-.911-1.504-3.572-2.235-4.579zm-.62 5.918a1.34 1.34 0 01-1.34-1.339c0-.36.5-1.452 1.34-2.779.84 1.327 1.339 2.42 1.339 2.78 0 .738-.6 1.338-1.34 1.338z"
        fill="#085827"
      />
    </Svg>
  );
}

export function ManiPedi() {
  return (
    <Svg width={24} height={22} viewBox="0 0 24 22" fill="none">
      <Path
        d="M8.536 6.68v-.983A1.988 1.988 0 006.55 3.711H4.01a1.988 1.988 0 00-1.986 1.986V6.78A5.065 5.065 0 000 10.873v11.003h10.56V10.873c0-1.675-.75-3.214-2.024-4.194zm-5.092-.983c0-.312.254-.566.567-.566h2.54c.311 0 .566.254.566.566v5.38a1.838 1.838 0 01-1.837 1.836 1.838 1.838 0 01-1.836-1.836v-5.38zm5.697 14.76H1.42v-9.584c0-.766.209-1.466.604-2.059v2.263a3.26 3.26 0 003.256 3.256 3.26 3.26 0 003.256-3.256V8.754c.39.614.605 1.346.605 2.119v9.583zM23.532 9.699a1.775 1.775 0 00-1.303-.572h-.944L20.812.656h-5.27l-.473 8.47h-.944a1.776 1.776 0 00-1.765 1.918l.905 10.832h9.824l.905-10.83a1.775 1.775 0 00-.462-1.347zM19.47 2.076l.081 1.465h-2.748l.081-1.465h2.586zM16.723 4.96h2.908l.232 4.166H16.49l.233-4.166zm5.856 5.966l-.796 9.53h-7.212l-.796-9.53a.348.348 0 01.091-.267.348.348 0 01.259-.113H22.229a.349.349 0 01.35.38z"
        fill="#085827"
      />
      <Path
        d="M15.85 17.62h4.686l.454-5.254h-5.594l.454 5.253zm3.592-3.834l-.209 2.413h-2.081l-.209-2.413h2.499z"
        fill="#085827"
      />
    </Svg>
  );
}

export function BabyIcon() {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        d="M20.323 15.309c2.066-.18 3.679-1.595 3.679-3.309 0-1.713-1.613-3.129-3.679-3.309a8.986 8.986 0 00-4.245-4.664C16.026 1.825 14.23 0 12.002 0 9.774 0 7.978 1.823 7.926 4.027A8.985 8.985 0 003.681 8.69C1.615 8.871.002 10.286.002 12c0 1.714 1.614 3.129 3.68 3.309a9.044 9.044 0 003.325 4.12 7.703 7.703 0 00-2.577 3.649.703.703 0 001.336.438c.444-1.354 1.361-2.526 2.6-3.332a8.966 8.966 0 007.4-.06c1.287.808 2.237 2 2.693 3.392a.703.703 0 101.336-.438 7.699 7.699 0 00-2.68-3.728 8.97 8.97 0 003.208-4.041zM22.596 12c0 .821-.774 1.542-1.824 1.81a9.02 9.02 0 000-3.62c1.05.268 1.824.989 1.824 1.81zM12.002 1.406c1.353 0 2.475 1.03 2.648 2.359a4.08 4.08 0 00-3.55 2.877 2.665 2.665 0 01-1.77-2.517c0-1.5 1.199-2.719 2.672-2.719zM1.408 12c0-.821.774-1.542 1.824-1.81a9.02 9.02 0 000 3.62c-1.05-.268-1.824-.989-1.824-1.81zm14.066 6.703c-4.045 2.1-9.08.18-10.631-4.31a7.555 7.555 0 013.319-8.89 4.064 4.064 0 003.409 2.677.703.703 0 00.773-.628 2.662 2.662 0 012.86-2.387c3.437 1.612 5.18 5.57 3.957 9.229a7.618 7.618 0 01-3.687 4.309z"
        fill="#085827"
      />
      <Path
        d="M10.276 11.171a.703.703 0 000-.994 2.577 2.577 0 00-3.646 0 .703.703 0 00.994.994 1.171 1.171 0 011.657 0c.275.275.72.275.995 0zM17.4 10.177a2.577 2.577 0 00-3.645 0 .703.703 0 10.994.994 1.171 1.171 0 011.657 0 .703.703 0 00.995-.994zM13.361 14.878c-.75.75-1.969.75-2.718 0a.703.703 0 00-.994.994 3.332 3.332 0 004.706 0 .703.703 0 10-.994-.994z"
        fill="#085827"
      />
    </Svg>
  );
}

export function DrinksIcon() {
  return (
    <Svg width={20} height={24} viewBox="0 0 20 24" fill="none">
      <Path
        d="M9.522 12.104c0-.99-.244-1.946-.713-2.767l-.11-.194H1.746l-.108.194a5.592 5.592 0 00-.713 2.767c0 2.522 1.605 4.612 3.688 4.958v5.89c-1.201.049-2.096.231-2.096.448 0 .257 1.22.462 2.726.462 1.507 0 2.73-.205 2.73-.462 0-.216-.896-.4-2.098-.448v-5.895c2.062-.368 3.646-2.45 3.646-4.953zm-4.3 4.24c-1.945 0-3.53-1.902-3.53-4.243 0-.78.176-1.532.51-2.193h6.043c.333.66.51 1.415.51 2.193.001 2.342-1.586 4.242-3.532 4.242zM16.882 2.65h-3.057V0h3.057v2.65zm0 3.285v-2.47h-3.057v2.47a3.718 3.718 0 00-2.193 3.39V24h7.442V9.327a3.714 3.714 0 00-2.192-3.391zm1.535 14.323h-6.062v-7.273h6.062v7.273zm-9.981-8.076s-.161 3.846-3.16 3.846c-3 0-3.404-3.846-3.404-3.846h6.564z"
        fill="#085827"
      />
    </Svg>
  );
}

export function ChildIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.627 3.15a.38.38 0 10-.417.636c1.033.679 1.7 1.648 1.935 2.79a5.391 5.391 0 00-.59-.39c-1.125-.638-2.305-.738-3.414-.289-1.557.63-2.327.284-2.77-.031a2.858 2.858 0 01-.369-.315.38.38 0 10-.537.537c.067.068.134.13.202.189-.4.557-1.337.802-1.89.881-.21-.411-.613-1.365-.287-2.1.715-1.608 2.92-2.179 4.59-2.179.794 0 1.588.16 2.298.463a.38.38 0 00.298-.7 6.675 6.675 0 00-2.595-.523c-3.035 0-4.72 1.359-5.285 2.63-.507 1.142.157 2.497.382 2.9l-.031.318a1.384 1.384 0 00-.259 2.682 3.644 3.644 0 001.482 3.258l.08.058a3.315 3.315 0 00-1.92 3.003v4.533c0 .21.17.38.38.38h9.79c.21 0 .38-.17.38-.38v-4.533c0-.65-.189-1.281-.547-1.822a.38.38 0 10-.634.419c.276.416.421.902.421 1.403v2.049h-1.137v-1.424a.38.38 0 10-.76 0v3.528h-5.236v-3.528a.38.38 0 00-.76 0v1.424H13.29v-2.049c0-.997.582-1.884 1.448-2.299.057.341.17.671.334.974a.38.38 0 10.668-.363 2.33 2.33 0 01-.209-.53l.602.437a2.839 2.839 0 003.345 0l.602-.437a2.354 2.354 0 01-2.274 1.758 2.324 2.324 0 01-1.465-.511.38.38 0 10-.474.594 3.119 3.119 0 001.939.677 3.115 3.115 0 003.067-2.599c.112.054.22.116.325.187a.378.378 0 00.527-.102.38.38 0 00-.102-.528 3.3 3.3 0 00-.463-.26l.08-.06a3.644 3.644 0 001.482-3.258c.552-.182.946-.7.946-1.311 0-.702-.526-1.282-1.204-1.37l-.043-.44a.38.38 0 00-.756.072l.299 3.095a2.881 2.881 0 01-1.17 2.598l-1.763 1.28a2.08 2.08 0 01-2.451 0l-1.763-1.28a2.881 2.881 0 01-1.17-2.598l.27-2.79c.581-.088 1.792-.366 2.378-1.198.855.435 1.884.4 3.13-.105.893-.36 1.813-.282 2.734.234a4.692 4.692 0 011.17.932.38.38 0 00.67-.244c0-1.814-.842-3.367-2.372-4.372zm-8.661 6.695a.62.62 0 01.104-1.075l-.104 1.075zm8.217 9.932h1.137v1.344h-1.137v-1.344zm-6.756 0v1.344H13.29v-1.344h1.137zm8.48-10.44a.62.62 0 01-.262.508L22.54 8.77a.622.622 0 01.367.567z"
        fill="#085827"
      />
      <Path
        d="M15.894 9.692a.38.38 0 00-.38.38v.515a.38.38 0 00.76 0v-.515a.38.38 0 00-.38-.38zM20.722 8.558a1.412 1.412 0 00-1.005-.417c-.38 0-.737.148-1.005.417a.38.38 0 10.537.537.657.657 0 01.935 0 .379.379 0 00.537 0 .38.38 0 000-.537zM16.899 8.558a1.412 1.412 0 00-1.005-.417c-.38 0-.737.148-1.005.417a.38.38 0 10.537.537.657.657 0 01.935 0 .379.379 0 00.537 0 .38.38 0 000-.537zM19.717 9.692a.38.38 0 00-.38.38v.515a.38.38 0 10.76 0v-.515a.38.38 0 00-.38-.38zM18.909 12.626a.38.38 0 00-.538 0 .802.802 0 01-1.132 0 .38.38 0 00-.538.537c.305.305.704.457 1.104.457.4 0 .8-.152 1.104-.457a.38.38 0 000-.537zM18.127 9.734a.38.38 0 00-.38.38v.909h-.264a.38.38 0 000 .76h.644c.21 0 .38-.17.38-.38v-1.289a.38.38 0 00-.38-.38zM8.74 10.905c-.258-.258-.6-.4-.965-.4-.364 0-.707.142-.965.4a.38.38 0 10.538.537.6.6 0 01.854 0 .38.38 0 10.538-.537zM5.126 10.905c-.258-.258-.6-.4-.965-.4-.364 0-.707.142-.964.4a.38.38 0 10.537.537.6.6 0 01.855 0 .38.38 0 10.537-.537zM7.026 13.398a.38.38 0 00-.537 0 .737.737 0 01-1.041 0 .38.38 0 00-.538.537c.283.283.659.438 1.058.438.4 0 .776-.155 1.058-.438a.38.38 0 000-.537zM6.225 11.74h-.514a.38.38 0 000 .76h.514a.38.38 0 000-.76z"
        fill="#085827"
      />
      <Path
        d="M11.936 10.133c0-.508-.288-.95-.709-1.173l.493-.677a1.07 1.07 0 00.115-1.074 1.07 1.07 0 00-.873-.636.38.38 0 00-.08.755.315.315 0 01.258.189.315.315 0 01-.034.319l-.823 1.129a.315.315 0 01-.293.13.315.315 0 01-.259-.19l-.58-1.309c.13-.116.234-.259.306-.42l.387.042a.38.38 0 00.08-.756l-.386-.041a1.24 1.24 0 00-1.343-.98l-.58-1.308a1.07 1.07 0 00-.873-.636 1.069 1.069 0 00-.988.438l-.823 1.129a1.07 1.07 0 00-.114 1.074c.158.357.484.595.873.636l1.423.152c.02.098.053.193.095.281-.965.946-2.6 1.872-5.095 1.313a4.047 4.047 0 012.283-2.513.38.38 0 10-.296-.7 4.807 4.807 0 00-2.842 3.501 1.329 1.329 0 00-.3 2.6 3.833 3.833 0 001.57 3.324l.3.218a3.155 3.155 0 00-1.866 2.875v.824a.38.38 0 00.76 0v-.824c0-.925.533-1.749 1.332-2.143a2.965 2.965 0 002.915 2.447c1.192 0 2.263-.71 2.727-1.808a.38.38 0 00-.7-.296A2.198 2.198 0 015.97 17.37a2.203 2.203 0 01-2.14-1.694l.43.313a2.904 2.904 0 003.42 0l.677-.492a2.39 2.39 0 011.86 2.328v3.296H9.181v-2.705a.38.38 0 00-.76 0v2.705H3.514v-2.705a.38.38 0 00-.76 0v2.705H1.721v-1.082a.38.38 0 10-.76 0V21.5c0 .21.17.38.38.38h9.254c.21 0 .38-.17.38-.38v-3.676A3.155 3.155 0 009.11 14.95l.3-.218a3.833 3.833 0 001.57-3.324c.556-.16.957-.67.957-1.275zm-10.896.49a.566.566 0 01.113-1.03l-.113 1.03zm7.285-4.428a.48.48 0 110 .958.48.48 0 010-.958zM7.194 6.17L5.77 6.02a.315.315 0 01-.259-.189.315.315 0 01.034-.319l.823-1.129a.315.315 0 01.293-.13.315.315 0 01.259.189l.58 1.31c-.129.115-.234.258-.306.42zm1.769 7.947l-1.731 1.257a2.144 2.144 0 01-2.527 0l-1.731-1.257A3.07 3.07 0 011.729 11.3l.223-2.015c0-.008.002-.015.003-.022.585.13 1.13.19 1.634.19a5.736 5.736 0 003.382-1.06c.22.267.585.64 1.108.94.198.114.45.033.541-.176a.381.381 0 00-.161-.482 3.341 3.341 0 01-.896-.76c.058-.052.113-.105.167-.157a1.231 1.231 0 00.726.146l.58 1.309a1.07 1.07 0 00.992.642h.02l.16 1.445a3.071 3.071 0 01-1.245 2.816zm1.934-3.494l-.114-1.03a.568.568 0 01.114 1.03z"
        fill="#085827"
      />
    </Svg>
  );
}

export function WomanIcon() {
  return (
    <Svg width={18} height={24} viewBox="0 0 18 24" fill="none">
      <Path
        d="M16.699 17.195c-.317-1.585-1.803-1.855-1.808-1.857l-3.625-.899v-.127h2.77c.57 0 1.034-.465 1.034-1.035V7.995c.047-.196.047-.4 0-.597V5.471a.352.352 0 00-.703 0V6.48a1.825 1.825 0 00-.626-.23.917.917 0 00-.773-.707c-.402-.053-.707-.287-.906-.697a.598.598 0 00-.488-.337.597.597 0 00-.54.243C10.43 5.575 8.75 7.42 5.848 7.42c-.22 0-.37-.01-.422-.013a.93.93 0 00-.984.928v.808a4.77 4.77 0 001.47 3.434c.31.296.65.543 1.015.74v.292H4.171a.332.332 0 01-.332-.332V5.376c0-2.562 2.088-4.672 4.61-4.672h.025c.904.005 1.948.262 2.659.654.45.249.729.05 1.174.05 1.086 0 1.957 1.118 2.061 2.123.001.014.003.073.003.299 0 .34.383.365.352.351a.352.352 0 00.351-.352c0-.062 0-.307-.005-.364-.142-1.398-1.335-2.76-2.762-2.76-.557 0-.644.142-.834.037C10.666.297 9.49.006 8.478.001 5.56-.02 3.136 2.414 3.136 5.376v7.9c0 .572.464 1.036 1.035 1.036h2.756v.127l-3.61.895-.015.004-.264.078a.466.466 0 00-.023.008c-.471.176-1.295.64-1.52 1.771C.424 22.571.468 22.341.466 22.36.337 23.27.794 24 1.892 24h3.802a.352.352 0 100-.703H4.371v-3.316a.352.352 0 10-.703 0v3.316H1.892c-.467 0-.738-.15-.743-.64-.002-.24-.011-.007 1.035-5.325.157-.788.73-1.117 1.066-1.245l.243-.072 2.074-.514c2.307 2.718 2.17 2.574 2.304 2.704.77.75 1.868.698 2.591-.151l2.172-2.551 2.066.512c.06.027 1.088.208 1.31 1.317 1.036 5.272 1.036 5.084 1.034 5.324-.004.48-.264.642-.743.642h-1.763V19.98a.352.352 0 10-.703 0v3.316h-6.5a.352.352 0 000 .704h8.966c.869 0 1.438-.478 1.446-1.34.003-.401-.02-.21-1.048-5.466zm-2.935-10.22c.294.088.52.281.603.52v.403c-.083.24-.31.433-.603.52V6.976zm0 2.23v-.066c.22-.04.424-.118.603-.225v4.363a.332.332 0 01-.332.332h-2.769v-.272a4.655 4.655 0 002.498-4.133zm-7.367 2.864a4.063 4.063 0 01-1.252-2.926c.021-.766-.05-.858.072-.973a.222.222 0 01.167-.061c2.52.152 4.69-.957 6.12-2.812.387.677.953.888 1.373.944a.211.211 0 01.184.208v2.755c0 3.499-4.189 5.227-6.664 2.865zm3.53 5.529c-.49.575-1.176.574-1.665-.003l-.733-.866h3.138l-.74.869zm1.338-1.572H6.933l-.604-.714 1.035-.256a.355.355 0 00.267-.345v-1.088c.967.323 1.989.32 2.932.01.006 1.124-.015 1.098.02 1.198.038.11.129.196.247.225l1.041.258-.606.712z"
        fill="#085827"
      />
    </Svg>
  );
}

export function ManIcon() {
  return (
    <Svg width={22} height={24} viewBox="0 0 22 24" fill="none">
      <Path
        d="M13.346 8.39a.469.469 0 100-.937.469.469 0 000 .938zM8.659 8.39a.469.469 0 100-.937.469.469 0 000 .938zM9.75 11.613c.393.185.814.28 1.252.28.428 0 .842-.091 1.23-.27a.469.469 0 00-.392-.85 1.993 1.993 0 01-.838.182c-.298 0-.586-.064-.853-.19a.469.469 0 10-.4.848z"
        fill="#085827"
      />
      <Path
        d="M21.34 18.974c0-2.578-2.935-4.6-5.452-4.695l-1.283-1.154a6.115 6.115 0 002.512-4.922V5.11c0-2.843-2.32-5.156-5.173-5.156H10.07A5.14 5.14 0 004.93 5.11v3.094c0 1.945.937 3.775 2.48 4.914l-1.293 1.162c-2.51.095-5.452 2.112-5.452 4.695v4.51c0 .26.21.47.469.47H20.87c.26 0 .47-.21.47-.47v-4.51zM9.964 20.859h2.074l.491 2.157H9.46l.505-2.157zm2.114-.937H9.934l-.36-1.12 1.428-.714 1.459.73-.383 1.104zm-1.076-3.243l-1.629-2.606a6.1 6.1 0 003.256.004l-1.627 2.602zm.671.696l2.25-3.601 1.214 1.09-1.544 3.471-1.92-.96zM10.07.89h1.875c2.336 0 4.236 1.892 4.236 4.218v.388l-.88-1.268a.469.469 0 00-.72-.06c-.954.974-2.057 1.41-3.578 1.41-1.52 0-2.624-.436-3.577-1.41a.469.469 0 00-.722.063l-.836 1.225v-.348c0-2.326 1.885-4.218 4.202-4.218zM5.867 8.203V7.12L7.17 5.212c1.043.887 2.276 1.304 3.833 1.304 1.56 0 2.793-.418 3.836-1.307l1.342 1.932v1.062c0 2.807-2.295 5.156-5.173 5.156-2.869 0-5.14-2.341-5.14-5.156zm2.214 5.571l2.25 3.6-1.92.961-1.544-3.47 1.214-1.091zm-6.48 5.2c0-1.931 2.348-3.599 4.4-3.75l1.753 3.94a.47.47 0 00.638.229l.334-.167.38 1.184-.61 2.606H1.601v-4.042zm18.802 4.042H13.49l-.592-2.599.407-1.177.306.153a.47.47 0 00.638-.229l1.754-3.94c2.051.151 4.399 1.819 4.399 3.75v4.042z"
        fill="#085827"
      />
      <Path
        d="M17.096 20.86h-1.875a.469.469 0 000 .937h1.875a.469.469 0 100-.938zM18.945 20.86a.469.469 0 110 .937.469.469 0 010-.938z"
        fill="#085827"
      />
    </Svg>
  );
}

export function LaptopIcon() {
  return (
    <Svg width={24} height={17} viewBox="0 0 24 17" fill="none">
      <Path
        d="M21.262 1.43H2.738a.594.594 0 00-.594.594v10.951c0 .327.267.593.594.593h18.524a.594.594 0 00.594-.593V2.025a.594.594 0 00-.594-.594zm.08 11.545a.08.08 0 01-.08.08H2.738a.08.08 0 01-.08-.08V2.025a.08.08 0 01.08-.08h18.524a.08.08 0 01.08.08v10.95z"
        fill="#085827"
      />
      <Path
        d="M23.615 13.954h-.603V1.742A1.47 1.47 0 0021.544.275H2.456A1.47 1.47 0 00.99 1.742v12.212H.385a.385.385 0 00-.385.385v1.058c0 .688.56 1.247 1.247 1.247h21.506c.688 0 1.247-.56 1.247-1.247V14.34a.385.385 0 00-.385-.385zM1.759 1.742c0-.384.313-.696.697-.696h19.088c.384 0 .697.312.697.696v12.212H1.759V1.742zm9.11 12.982h2.261v.202c0 .09-.073.163-.163.163h-1.934a.164.164 0 01-.163-.163v-.202zm12.36.673a.477.477 0 01-.476.477H1.247a.477.477 0 01-.476-.477v-.673H10.356v.202c0 .373.304.677.678.677h1.933a.678.678 0 00.677-.677v-.202H23.23v.673z"
        fill="#085827"
      />
    </Svg>
  );
}

export function PhoneIcon() {
  return (
    <Svg width={14} height={24} viewBox="0 0 14 24" fill="none">
      <Path
        d="M11.714 0H2.276C1.32 0 .545.775.545 1.731V22.27A1.73 1.73 0 002.276 24h9.438c.956 0 1.731-.775 1.731-1.731V1.731C13.445.775 12.67 0 11.714 0zM5.837 1.023h2.316a.151.151 0 010 .303H5.837a.151.151 0 010-.303zM3.528.66a.242.242 0 110 .483.242.242 0 010-.483zM2.433.515a.386.386 0 110 .773.386.386 0 010-.773zM7.6 23.121H6.391a.693.693 0 110-1.386h1.208a.693.693 0 110 1.386zm5.113-1.934H1.278V2.813h11.434v18.374z"
        fill="#085827"
      />
    </Svg>
  );
}

export function PerfumeIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.5 8.017V6.422c0-.825-.612-1.51-1.406-1.624V2.813h.703a.703.703 0 000-1.407h-.703V.703A.703.703 0 0014.39 0h-2.813a.703.703 0 00-.703.703v.703H4.922a2.581 2.581 0 00-2.578 2.578v.341c-.583.179-1.117.576-1.527 1.15C.29 6.211 0 7.18 0 8.202c0 1.022.29 1.991.817 2.729.57.798 1.383 1.255 2.23 1.255s1.66-.457 2.23-1.255c.526-.738.817-1.707.817-2.729s-.29-1.99-.818-2.729c-.409-.573-.943-.97-1.526-1.149v-.34c0-.647.526-1.172 1.172-1.172h5.953v1.985a1.643 1.643 0 00-1.406 1.624v1.595l-2.273 2.407a8.612 8.612 0 00-2.363 6.227 8.612 8.612 0 002.75 6.067l1.172 1.093c.13.122.301.189.48.189h7.5c.178 0 .349-.067.48-.19l1.17-1.092a8.613 8.613 0 002.75-6.067 8.613 8.613 0 00-2.362-6.227L16.5 8.017zm-11.812.186c0 1.398-.752 2.578-1.641 2.578-.89 0-1.64-1.18-1.64-2.578 0-1.397.75-2.578 1.64-2.578.89 0 1.64 1.18 1.64 2.578zM15.494 9l1.558 1.65a4.898 4.898 0 01-3.737-.364 6.304 6.304 0 00-3.365-.73L10.475 9h5.019zm-1.806-7.594v3.375H12.28V1.406h1.406zm-2.579 4.782h3.75c.13 0 .235.105.235.234v1.172h-4.219V6.422c0-.13.105-.234.234-.234zm6.317 15.502l-.969.904H9.511l-.968-.904a7.393 7.393 0 01-.49-.503h9.862a7.421 7.421 0 01-.49.503zm2.304-5.083a7.235 7.235 0 01-.838 3.174H7.077a7.236 7.236 0 01-.839-3.174 7.214 7.214 0 011.901-5.132 4.899 4.899 0 014.515.052 6.308 6.308 0 005.43.242 7.209 7.209 0 011.646 4.838zM18.14 1.406h1.172a.703.703 0 100-1.406h-1.171a.703.703 0 100 1.406zM23.297 0h-1.172a.703.703 0 000 1.406h1.172a.703.703 0 000-1.406z"
        fill="#085827"
      />
      <Path
        d="M17.666 4.41l1.131.303a.705.705 0 00.862-.498.703.703 0 00-.497-.86L18.03 3.05a.704.704 0 00-.364 1.358zM23.01 4.385l-1.132-.303a.703.703 0 00-.364 1.359l1.132.303a.703.703 0 10.364-1.359z"
        fill="#085827"
      />
    </Svg>
  );
}

export function ClothingIcon() {
  return (
    <Svg width={19} height={24} viewBox="0 0 19 24" fill="none">
      <Path
        d="M7.914 12.49H5.326V.846h1.599A2.713 2.713 0 009.6 3.131c1.35 0 2.471-.992 2.675-2.285h1.6v6.48a.423.423 0 10.846.001v-1.14l.91.455a.421.421 0 00.535-.135l2.032-2.878a.423.423 0 00-.075-.569L14.57.1a.421.421 0 00-.273-.1H4.903c-.104 0-.2.038-.273.1L1.077 3.06a.423.423 0 00-.075.57l2.032 2.877a.423.423 0 00.535.135l.91-.456v6.727c0 .233.19.423.424.423h3.011a.423.423 0 100-.846zm7.77-6.768l-.963-.482V1.327l2.56 2.133-1.596 2.262zM9.6 2.285c-.881 0-1.62-.615-1.813-1.439h3.626A1.865 1.865 0 019.6 2.285zM3.515 5.722L1.92 3.46l2.56-2.133V5.24l-.964.482z"
        fill="#085827"
      />
      <Path
        d="M17.783 8.242H9.274a.423.423 0 00-.423.423v14.912c0 .233.19.423.423.423h3.259c.225 0 .41-.175.423-.4l.573-10.311.573 10.311c.012.224.198.4.422.4h3.259c.234 0 .423-.19.423-.423V8.665a.423.423 0 00-.423-.423zm-.423 1.793h-1.335v-.947h1.335v.947zm-5.482 0v-.947h3.301v.947h-3.3zm-.846-.947v.947H9.697v-.947h1.335zm3.893 14.066l-.575-10.349a.423.423 0 00-.423-.4h-.797a.423.423 0 00-.422.4l-.575 10.349H9.698V10.882h7.662v12.272h-2.435z"
        fill="#085827"
      />
    </Svg>
  );
}

export function ChargerIcon() {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        d="M23.74 6.35H22.34V4.386a.703.703 0 10-1.406 0V6.35H17.25V4.386a.703.703 0 10-1.406 0V6.35h-1.398a.703.703 0 000 1.406h.737l-.018 2.535a2.916 2.916 0 002.917 2.986h.308v5.333a3.989 3.989 0 01-3.985 3.984h-4.104a3.989 3.989 0 01-3.984-3.984v-4.87c1.063-.692 4.115-2.959 4.308-6.265.147-2.524-1.399-4.993-4.596-7.338a.703.703 0 00-.832 0C2.001 2.482.454 4.95.602 7.475c.193 3.306 3.245 5.573 4.308 6.265v4.87A5.397 5.397 0 0010.301 24h4.104a5.397 5.397 0 005.39-5.39v-5.333h.283a2.917 2.917 0 002.917-2.856l.021-2.665h.724a.703.703 0 000-1.406zm-18.127.172a.703.703 0 00-.703.703v4.783c-1.13-.89-2.783-2.533-2.904-4.615-.112-1.914 1.101-3.867 3.608-5.809 2.503 1.94 3.717 3.891 3.608 5.804-.119 2.075-1.774 3.724-2.905 4.617v-4.78a.703.703 0 00-.704-.703zm15.976 3.881a1.503 1.503 0 01-1.511 1.468h-1.996a1.51 1.51 0 01-1.511-1.563l.018-2.552h5.02l-.02 2.647z"
        fill="#085827"
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
