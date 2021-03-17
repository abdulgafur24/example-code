import React from "react";
import { ParagraphProps } from "antd/lib/typography/Paragraph";
import cn from "utils/cn";
import "./style.scss";

interface TypographyProps extends ParagraphProps {
  children: React.ReactChild | React.ReactChild[];
  variant:
    | "title1"
    | "title2"
    | "title3"
    | "headline1"
    | "headline2"
    | "headline3"
    | "headline4"
    | "text1"
    | "text2"
    | "text3"
    | "text4";
  color?: string;
}

export default function Typography({
  variant,
  children,
  className,
  color,
  ...other
}: TypographyProps) {
  const cl = cn("Typography");
  const defaultVariants = {
    title1: "h1",
    title2: "h2",
    title3: "h3",
    headline1: "h4",
    headline2: "h5",
    headline3: "h5",
    headline4: "h6",
    text1: "p",
    text2: "p",
    text3: "p",
    text4: "p",
  };

  const Compoent: any = defaultVariants[variant];

  return (
    <Compoent
      {...other}
      className={cl({ variant }, [className])}
      children={children}
      style={{ color }}
    />
  );
}
