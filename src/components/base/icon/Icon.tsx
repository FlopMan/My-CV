"use client";
import React, { CSSProperties } from "react";

import styles from "./icon.module.scss";
import Image from "next/image";

export interface IIConProps {
  className?: string;
  size?: number;
  color?: string;
  url: string;
  style?: CSSProperties;
  height?: number;
  onClick?: (event?: React.MouseEvent<HTMLSpanElement>) => void;
}
export const Icon = React.forwardRef<HTMLSpanElement, IIConProps>(
  ({ size = 14, className, onClick, height, color, url, style }, ref) => (
    <Image
      onClick={onClick}
      className={`${styles.icon} ${className}`}
      src={url}
      alt="icon"
      width={40}
      height={40}
    />
  )
);

Icon.displayName = "Icon";
