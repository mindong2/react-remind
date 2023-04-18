import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
    borderColor: string;
    hoverColor: string;
    btnImg : string;
  }
}
