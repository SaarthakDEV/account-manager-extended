import { HTMLAttributes, ReactElement } from "react";

interface IconBoxProps extends HTMLAttributes<HTMLDivElement> {
  color: ColorType;
  children: ReactElement;
}

export const COLOR = {
    RED: 'text-red-600 hover:border-red-300 hover:bg-red-50 hover:shadow-md shadow-red-200',
    BLUE: 'text-blue-600 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md shadow-blue-200',
    GREEN: 'text-green-600 hover:border-green-300 hover:bg-green-50 hover:shadow-md shadow-green-200',
} as const

export type ColorType = typeof COLOR[keyof typeof COLOR];

const IconBox = ({
  color,
  children,
  ...restProps
}: IconBoxProps) => {
  return (
    <div className={`cursor-pointer border-2 border-transparent p-1 rounded-md ${color}`} {...restProps}>
      { children }
    </div>
  );
};

export default IconBox;
