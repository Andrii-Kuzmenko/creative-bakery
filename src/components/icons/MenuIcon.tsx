import { FC } from 'react';

type Props = {
  className?: string;
};

export const MenuIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="8"
    viewBox="0 0 20 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H20V2H0V0ZM0 6H20V8H0V6Z" fill="#1C1A26" />
  </svg>
);
