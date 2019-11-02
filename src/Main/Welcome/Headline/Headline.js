import React from 'react';

const Headline = () => {
  return (
    <div className="text-wrap">
      <svg viewBox="0 0 500 80">
        <pattern
          id="p-img"
          viewBox="0 0 300 100"
          patternUnits="userSpaceOnUse"
          width="200%"
          height="200%"
          x="-60%"
          y="-10%"
        >
          <image
            xlinkHref="http://giphygifs.s3.amazonaws.com/media/NEVT1WQFlHec8/giphy.gif"
            width="300"
            height="200"
          />
        </pattern>
        <text
          textAnchor="middle"
          x="50%"
          y="50%"
          dy=".35em"
          className="img-layer"
        >
          Justin Tester
        </text>
        <linearGradient id="gr-overlay" x1="0" y1="0" x2="100%" y2="100%">
          <stop stopColor="hsla(50, 100%, 70%, 0.5)" offset="10%" />
          <stop stopColor="hsla(200, 100%, 60%, 0.5)" offset="50%" />
          <stop stopColor="hsla(320, 100%, 50%, 0.5)" offset="90%" />
        </linearGradient>
        <text
          textAnchor="middle"
          x="50%"
          y="50%"
          dy=".35em"
          className="gradient-layer"
        >
          Justin Tester
        </text>
      </svg>
    </div>
  );
}

export default Headline;