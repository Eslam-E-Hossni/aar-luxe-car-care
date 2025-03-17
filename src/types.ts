import type React from "react";

export interface IBaseButton {
  type: "button" | "submit";
  children: React.ReactNode;
  className?: string;
  theme?: "primary" | "secondary" | "navigate" | "filter";
  hasIcon?: boolean;
  href?: string;
  size?: "header" | "hero" | "contact" | "footer";
  handler?: () => void;
}
