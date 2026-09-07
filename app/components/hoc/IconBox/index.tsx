import React, { HTMLAttributes, ReactElement, SVGProps } from "react";

interface IconBoxProps extends HTMLAttributes<HTMLDivElement> {
  color: ColorType;
  children: ReactElement;
}

export const COLOR = {
    RED: 'text-red-600 hover:border-red-300 hover:bg-red-50',
    BLUE: 'text-blue-600 hover:border-blue-300 hover:bg-blue-50',
    GREEN: 'text-green-600 hover:border-green-300 hover:bg-green-50',
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
