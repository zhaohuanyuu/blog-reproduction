import { Attributes, AriaAttributes, DOMAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicAttributes extends Attributes {
      sx?: any
    }
  }
}

declare module "React" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    sx?: any
  }
}

declare module "theme-ui" {
  interface Theme {
    prism?: any
  }
}
