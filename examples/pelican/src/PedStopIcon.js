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
        viewBox="0 0 312 693"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        {...props}
    >
        <g transform="matrix(1,0,0,1,-541.372,-178.354)">
            <g transform="matrix(4.16667,0,0,4.16667,0,0)">
                <path
                    style={{ fill: lit ? '#f33' : '#888' }}
                    d="M167.26,42.805C178.064,42.805 182.963,56.04 176.047,63.231C175.184,64.098 174.752,65.102 174.752,66.395C174.752,68.27 175.904,69.993 177.775,70.567L188.291,74.598C190.455,75.462 192.184,77.04 193.047,79.2L203.996,105.094C205.004,107.684 205.004,110.559 203.852,113.149L194.488,134.153C194.199,134.727 194.199,135.449 194.488,136.02L196.648,141.489C197.516,143.645 195.207,145.516 193.336,144.653C192.473,144.364 191.896,143.789 191.463,142.93L188.291,137.172C187.715,136.164 187.572,134.871 188.004,133.864L195.641,110.848C195.928,109.84 195.783,108.688 195.352,107.684L188.729,94.305C187.572,92.149 184.115,92.719 183.973,95.169L181.813,123.508L188.004,199.172C188.148,200.035 188.584,200.899 189.447,201.188L195.496,204.207C196.359,204.641 196.936,205.504 196.936,206.364C196.936,207.805 195.783,208.957 194.344,208.957L194.057,208.957L194.199,208.957L177.631,207.086C176.48,206.942 175.615,205.938 175.473,204.785L167.26,142.496L159.191,204.785C159.047,205.938 158.184,206.942 157.031,207.086C140.463,208.957 140.32,208.957 140.32,208.957C138.879,208.957 137.729,207.805 137.729,206.364C137.729,205.504 138.303,204.641 139.168,204.207L145.219,201.188C146.084,200.899 146.516,200.035 146.66,199.172L152.855,123.508L150.691,95.169C150.547,92.719 147.092,92.149 145.939,94.305L139.313,107.684C138.879,108.688 138.736,109.84 139.023,110.848L146.66,133.864C147.092,134.871 146.947,136.164 146.371,137.172L143.199,142.93C142.768,143.789 142.191,144.364 141.328,144.653C139.168,145.66 137.152,143.356 138.016,141.489L140.176,136.02C140.463,135.449 140.463,134.727 140.176,134.153L130.813,113.149C129.66,110.559 129.66,107.684 130.668,105.094L141.615,79.2C142.48,77.04 144.068,75.462 146.371,74.598L156.887,70.567C158.76,69.993 159.912,68.27 159.912,66.395C159.912,65.102 159.48,64.098 158.615,63.231C151.699,56.04 156.6,42.805 167.26,42.805Z"
                />
            </g>
        </g>
    </svg>
);
