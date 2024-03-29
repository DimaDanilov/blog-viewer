import { AnyProps } from "types/AnyProps";

interface DislikeIconProps extends AnyProps {
  color: string;
}

export const DislikeIcon = ({ color, props }: DislikeIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill={color}
    {...props}
  >
    <path d="M240-840h400v520L360-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 1.5-15t4.5-15l120-282q9-20 30-34t44-14Zm480 520v-520h160v520H720Z" />
  </svg>
);
