import React from 'react';

export default ({ lit, ...props }) => (
    <svg
        style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: '1.41421',
        }}
        version="1.1"
        viewBox="0 0 416 693"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        {...props}
    >
        <g transform="matrix(1,0,0,1,-488.629,-1014.5)">
            <g transform="matrix(4.16667,0,0,4.16667,0,0)">
                <path
                    style={{ fill: lit ? '#4e9' : '#888' }}
                    d="M160.488,253.551C160.488,247.942 164.955,243.481 170.428,243.481C176.047,243.481 180.516,247.942 180.516,253.551C180.516,256.141 179.504,258.871 178.352,261.321C177.775,262.469 177.488,263.621 177.488,264.918C177.488,268.801 180.229,273.832 184.26,274.551C195.928,277.715 205.291,291.817 210.768,301.598C212.783,305.192 213.791,309.364 213.791,313.535L213.791,332.668C213.791,334.539 212.207,336.125 210.336,336.125C208.32,336.125 206.736,334.539 206.736,332.668L206.736,320.012C206.736,314.399 204.428,309.078 200.396,305.192L191.463,296.563C191.031,296.278 190.6,295.989 190.023,295.989C189.016,295.989 188.148,296.707 188.004,297.711C184.691,313.969 186.131,330.801 192.184,346.625L216.676,397.836C216.963,398.555 217.107,399.418 217.107,400.281C217.107,402.727 215.668,404.742 213.215,405.606L200.396,409.633C199.387,409.922 198.236,409.055 198.236,408.047C198.236,407.473 198.523,406.899 198.955,406.614L204.141,402.871C205.004,402.153 205.58,401.289 205.58,400.137C205.58,399.418 205.436,398.989 205.004,398.414L182.963,363.313C180.084,358.852 178.064,354.25 176.768,349.067L140.463,407.906C139.744,409.055 138.592,409.778 137.295,409.778C136.145,409.778 135.135,409.344 134.412,408.481L123.752,396.395C123.463,396.11 123.32,395.676 123.32,395.25C123.32,394.383 124.039,393.664 125.047,393.664C125.191,393.664 125.48,393.664 125.623,393.809L131.1,395.821C131.676,396.11 131.82,396.11 132.396,396.11C133.691,396.11 134.844,395.387 135.424,394.242L138.879,388.051L154.729,351.516C161.064,336.41 162.076,319.867 157.896,304.188C157.752,303.614 157.32,303.18 156.744,303.18C156.313,303.18 156.023,303.469 155.736,303.758C146.803,314.977 134.557,321.594 120.295,322.746C118.711,322.746 117.271,321.449 117.271,320.012C117.271,318.86 118.135,317.707 119.287,317.422C134.699,312.961 146.516,300.735 150.404,285.196L151.557,281.602C151.988,279.875 153.576,278.723 155.447,278.723C160.199,278.582 164.379,275.559 165.387,270.668C165.963,266.93 165.963,266.641 165.963,266.641C165.963,265.778 165.244,265.059 164.236,265.059C164.236,265.059 163.947,265.059 163.371,265.203L162.939,265.203C161.641,265.203 160.488,264.051 160.488,262.758L160.488,253.551Z"
                />
            </g>
        </g>
    </svg>
);