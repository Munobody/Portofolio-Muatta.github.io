import React from "react";
import "../../app/css/border.css";

type BorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
    thickness?: number;
  }

const Border = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "magenta",
  speed = "5s",
  thickness = 1,
  children,
  ...rest
}: BorderProps<T>) => {
  const Component = as || "div";

  return (
    <Component 
      className={`star-border-container ${className}`} 
      {...(rest as any)}
      style={{
        padding: `${thickness}px 0`,
        ...(rest as any).style,
      }}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, magenta, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, magenta, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default Border;
