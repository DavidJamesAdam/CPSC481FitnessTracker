import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--community: Inter;
--input-field-label: Roboto;

/* font sizes */
--font-size-3xl: 22px;
--input-field-label-size: 9px;
--font-size-13xl: 32px;
--font-size-5xl: 24px;
--body-1-size: 12px;
--font-size-lg: 18px;
--font-size-xl: 20px;
--font-size-base: 16px;
--community-size: 14px;

/* Colors */
--black: #000;
--color-gainsboro: #d9d9d9;
--white: #fff;
--gray: #a6a6a6;
--color-dimgray-100: #666;
--color-dimgray-200: #534e4e;
--color-dodgerblue: #2f80ed;
--color-darkslategray: #323d5d;
--color-crimson: #ed2f2f;
--color-slategray-100: #757d91;
--color-slategray-200: #757d90;
--color-whitesmoke: #f8f8f8;
--color-lightgray: #d4d2d2;

/* Gaps */
--gap-9xs: 4px;
--gap-11xl: 30px;
--gap-3xs: 10px;
--gap-6xs: 7px;
--gap-sm: 14px;
--gap-21xl: 40px;

/* Paddings */
--padding-8xs: 5px;
--padding-3xs: 10px;
--padding-mini: 15px;
--padding-5xs: 8px;
--padding-base: 16px;
--padding-10xs: 3px;
--padding-6xs: 7px;
--padding-xl: 20px;
--padding-31xl: 50px;

/* Border radiuses */
--br-8xs: 5px;
--br-9xs: 4px;
--br-31xl: 50px;
--br-xl: 20px;
--br-10xs: 3px;

/* Effects */
--shadow: 0px 3px 6px rgba(0, 0, 0, 0.04), 0px 0px 3px rgba(0, 0, 0, 0.17);
}
`;
