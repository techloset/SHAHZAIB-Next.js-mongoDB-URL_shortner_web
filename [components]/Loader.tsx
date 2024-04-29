import React from "react";

export default function () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <circle
        fill="none"
        stroke-opacity="1"
        stroke="#4E2BFF"
        stroke-width=".5"
        cx="100"
        cy="100"
        r="0"
      >
        <animate
          attributeName="r"
          calcMode="spline"
          dur="2"
          values="1;80"
          keyTimes="0;1"
          keySplines="0 .2 .5 1"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="stroke-width"
          calcMode="spline"
          dur="2"
          values="0;25"
          keyTimes="0;1"
          keySplines="0 .2 .5 1"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="stroke-opacity"
          calcMode="spline"
          dur="2"
          values="1;0"
          keyTimes="0;1"
          keySplines="0 .2 .5 1"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    //   <linearGradient id="a12">
    //     <stop offset="0" stop-color="#4C3AFF" stop-opacity="0"></stop>
    //     <stop offset="1" stop-color="#4C3AFF"></stop>
    //   </linearGradient>
    //   <circle
    //     fill="none"
    //     stroke="url(#a12)"
    //     stroke-width="18"
    //     stroke-linecap="round"
    //     stroke-dasharray="0 44 0 44 0 44 0 44 0 360"
    //     cx="100"
    //     cy="100"
    //     r="70"
    //     transform-origin="center"
    //   >
    //     <animateTransform
    //       type="rotate"
    //       attributeName="transform"
    //       calcMode="discrete"
    //       dur="1.1"
    //       values="360;324;288;252;216;180;144;108;72;36"
    //       repeatCount="indefinite"
    //     ></animateTransform>
    //   </circle>
    // </svg>
  );
}
