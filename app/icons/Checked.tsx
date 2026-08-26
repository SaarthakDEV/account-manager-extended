import { SVGProps } from "react";

const Checked = ({ SVG: svgOverrides }: { SVG: SVGProps<SVGSVGElement>}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...svgOverrides}
  >
    <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

export default Checked;
