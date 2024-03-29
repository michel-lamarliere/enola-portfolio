import React from "react";

import { getServiceSvgStyles } from "pages/services/utils/getServiceSvgStyles";
import { ServiceSvgProps } from "pages/services/types/serviceSvgProps";

export const PackagingSvg = ({ useAltColor }: ServiceSvgProps) => {
  const { colorOneStyles, colorTwoStyles } = getServiceSvgStyles(useAltColor);

  return (
    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82">
      <g id="iv-logo">
        <g id="packaging">
          <path
            id="second-color"
            className={colorOneStyles}
            d="M77.64,25.45c-9.95-2.53-22.03-.81-38.59,4.74-19.39,6.5-28.2,7.33-38.04,3.88l1.02,34.99c0,6.59,5.34,11.93,11.93,11.93h53.16c7.73,0,14.01-6.22,14.1-13.94,.1-9.63,.14-26.41-.2-32.02-.23-3.76-3.36-9.59-3.36-9.59Z"
          />
          <g id="main-color">
            <rect
              className={colorTwoStyles}
              x="11.77"
              y="1.15"
              width="59.23"
              height="11.85"
              rx="4.08"
              ry="4.08"
            />
            <rect
              className={colorTwoStyles}
              x="1"
              y="42.87"
              width="80"
              height="23.7"
            />
          </g>
          <path
            id="stroke"
            d="M73.99,21.78c-3.16-1.66-5.17-4.7-5.43-8.05,1.99-.66,3.45-2.52,3.45-4.73V5c0-2.76-2.24-5-5-5H15c-2.76,0-5,2.24-5,5v4c0,2.21,1.45,4.07,3.45,4.73-.26,3.35-2.28,6.39-5.43,8.05C3.07,24.38,0,29.46,0,35.04v31.96c0,8.27,6.73,15,15,15h52c8.27,0,15-6.73,15-15v-31.96c0-5.58-3.07-10.66-8.01-13.26ZM12,9V5c0-1.65,1.35-3,3-3h52c1.65,0,3,1.35,3,3v4c0,1.65-1.35,3-3,3H15c-1.65,0-3-1.35-3-3Zm-3.05,14.55c3.73-1.96,6.16-5.56,6.51-9.55h51.09c.35,3.99,2.78,7.58,6.51,9.55,.03,.01,.05,.03,.08,.05-10.69-1.15-22.27,.74-34.47,5.67-12.93,5.23-25.22,6.58-36.55,4.03,.56-4.13,3.07-7.77,6.83-9.75Zm58.05,56.45H15c-6.98,0-12.67-5.53-12.97-12.43H79.97c-.3,6.9-6,12.43-12.97,12.43Zm13-14.43H2v-21.7H80v21.7Zm0-23.7H2v-6.56c3.75,.82,7.59,1.25,11.52,1.25,8.28,0,16.95-1.82,25.9-5.44,13.23-5.34,25.67-7.04,36.97-5.06,2.28,2.38,3.61,5.57,3.61,8.98v6.83Z"
          />
        </g>
      </g>
    </svg>
  );
};
