import { LinkHorizontal } from "@vx/shape";

export default function Link({ link }) {
  const color = "#ddd";
  return (
    <LinkHorizontal data={link} stroke={color} strokeWidth="1" fill="none" />
  );
};
