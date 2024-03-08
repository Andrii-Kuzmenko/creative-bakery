import { FC } from 'react';

type Props = {
  className?: string;
};

export const CookieIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.9422 9.99259C17.209 9.95939 15.002 7.73912 15.002 4.99816C12.261 4.99816 10.041 2.79156 10.0074 0.0588002C8.94261 -0.102915 7.85394 0.0705187 6.8934 0.559572L4.19302 1.93533C3.22092 2.43072 2.43068 3.22123 1.93561 4.19349L0.564523 6.88406C0.0679844 7.85879 -0.107312 8.96566 0.0637442 10.0461L0.535617 13.0253C0.706504 14.1047 1.21462 15.1023 1.98717 15.8753L4.12662 18.0143C4.89673 18.7847 5.89098 19.2914 6.96684 19.4619L9.96331 19.9365C11.0379 20.1069 12.1391 19.9322 13.109 19.4381L15.8094 18.0627C16.7814 17.5672 17.5716 16.7768 18.0668 15.8046L19.4379 13.114C19.9285 12.1515 20.1023 11.0602 19.9422 9.99259ZM6.87504 14.3745C6.18481 14.3745 5.62505 13.8148 5.62505 13.1246C5.62505 12.4343 6.18481 11.8746 6.87504 11.8746C7.56527 11.8746 8.12503 12.4343 8.12503 13.1246C8.12503 13.8148 7.56527 14.3745 6.87504 14.3745ZM8.12503 8.12466C7.4348 8.12466 6.87504 7.56491 6.87504 6.87468C6.87504 6.18446 7.4348 5.62471 8.12503 5.62471C8.81526 5.62471 9.37503 6.18446 9.37503 6.87468C9.37503 7.56491 8.81526 8.12466 8.12503 8.12466ZM14.375 13.1246C13.6848 13.1246 13.125 12.5648 13.125 11.8746C13.125 11.1844 13.6848 10.6246 14.375 10.6246C15.0652 10.6246 15.625 11.1844 15.625 11.8746C15.625 12.5648 15.0652 13.1246 14.375 13.1246Z"
      fill="#F9512E"
    />
  </svg>
);
