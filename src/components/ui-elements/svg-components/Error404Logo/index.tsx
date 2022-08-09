import React from "react";

interface Props {
  colorOneClassName: string;
  colorTwoClassName: string;
}

const Error404Logo: React.FC<Props> = (props) => {
  return (
    <svg
      id="icone_error"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <g id="Groupe_51" data-name="Groupe 51" transform="translate(-910 -220)">
        <path
          id="Tracé_75"
          data-name="Tracé 75"
          d="M50,20h0a5,5,0,0,1-5-5V5A5,5,0,0,1,55,5V15a5,5,0,0,1-5,5"
          transform="translate(910 220)"
          className={props.colorTwoClassName}
        />
        <path
          id="Tracé_78"
          data-name="Tracé 78"
          d="M80,50h0a5,5,0,0,1,5-5H95a5,5,0,0,1,0,10H85a5,5,0,0,1-5-5"
          transform="translate(910 220)"
          className={props.colorTwoClassName}
        />
        <path
          id="Tracé_79"
          data-name="Tracé 79"
          d="M0,50H0a5,5,0,0,1,5-5H15a5,5,0,0,1,0,10H5a5,5,0,0,1-5-5"
          transform="translate(910 220)"
          className={props.colorTwoClassName}
        />
      </g>
      <g id="Groupe_50" data-name="Groupe 50" transform="translate(-910 -220)">
        <path
          id="Tracé_76"
          data-name="Tracé 76"
          d="M71.191,28.809h0a5,5,0,0,1,0-7.071l7.071-7.071a5,5,0,1,1,7.071,7.071l-7.071,7.071a5,5,0,0,1-7.071,0"
          transform="translate(910 220)"
          className={props.colorOneClassName}
        />
        <path
          id="Tracé_77"
          data-name="Tracé 77"
          d="M28.809,28.809h0a5,5,0,0,0,0-7.071l-7.071-7.071a5,5,0,0,0-7.071,7.071l7.071,7.071a5,5,0,0,0,7.071,0"
          transform="translate(910 220)"
          className={props.colorOneClassName}
        />
        <path
          id="Tracé_80"
          data-name="Tracé 80"
          d="M50,100H84.948a5.045,5.045,0,0,0,4.369-7.566L71.843,62.168,54.369,31.9a5.045,5.045,0,0,0-8.738,0L28.157,62.168,10.683,92.434A5.045,5.045,0,0,0,15.052,100Z"
          transform="translate(910 220)"
          className={props.colorOneClassName}
        />
      </g>
      <g id="Groupe_49" data-name="Groupe 49" transform="translate(-910 -220)">
        <path
          id="Tracé_81"
          data-name="Tracé 81"
          d="M50,80.083h0a3.775,3.775,0,0,1-3.766-3.523L44.972,57.626A3.774,3.774,0,0,1,48.738,53.6h2.524a3.774,3.774,0,0,1,3.766,4.026L53.766,76.56A3.775,3.775,0,0,1,50,80.083"
          transform="translate(910 220)"
          fill="#fff"
        />
        <path
          id="Tracé_82"
          data-name="Tracé 82"
          d="M53.972,87.659A3.972,3.972,0,1,1,50,83.687a3.972,3.972,0,0,1,3.972,3.972"
          transform="translate(910 220)"
          fill="#fff"
        />
      </g>
      <rect
        id="Rectangle_170"
        data-name="Rectangle 170"
        width="100"
        height="100"
        fill="none"
      />
    </svg>
  );
};

export default Error404Logo;
