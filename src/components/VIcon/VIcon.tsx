import React from "react";

import { Icons } from "../../assets/icons";
import VIconView from "./VIcon.view";

type Props = {
  name: Icons;
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  onClick?: (e: React.MouseEvent<SVGElement>) => void;
};

const VIcon: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <VIconView
      name={props.name}
      color={props.color}
      width={props.width}
      height={props.height}
      onClick={props.onClick}
      className={props.className}
    ></VIconView>
  );
};

VIcon.displayName = "VIcon";
VIcon.defaultProps = {};

export default VIcon;
