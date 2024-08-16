import * as React from 'react';
import Svg, { Rect, Path, G, Defs, RadialGradient, Stop, ClipPath } from 'react-native-svg';

const FlameStarSvg = () => {
    return (
        <Svg width={85} height={28} viewBox="0 0 85 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x={0.5} width={84} height={28} rx={14} fill="#E3E3E4" />
            <Rect x={2.5} y={2} width={40} height={24} rx={12} fill="#fff" />
            <Path transform="translate(14.5 6)" fill="#fff" d="M0 0H16V16H0z" />
            <Path
                d="M20.078 12.66c-.02 0-.034 0-.048-.014-.47-.623-.588-1.696-.616-2.104-.007-.08-.097-.121-.166-.083-1.453.813-2.802 2.744-2.802 4.605 0 3.207 2.224 5.895 6.054 5.895 3.588 0 6.054-2.768 6.054-5.892 0-4.086-2.916-6.791-5.514-8.016-.07-.034-.146.025-.139.097.34 2.204-.124 4.595-2.826 5.518l.003-.007z"
                fill="url(#paint0_radial_2_41)"
            />
            <G clipPath="url(#clip0_2_41)">
                <Path
                    d="M63.112 7.66l2.06 4.173 4.607.674-3.333 3.246.787 4.587-4.12-2.167-4.12 2.167.786-4.587-3.333-3.246 4.607-.674 2.06-4.173z"
                    fill="#BFBFC0"
                    stroke="#BFBFC0"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
            <Defs>
                <RadialGradient
                    id="paint0_radial_2_41"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(12.1085 0 0 13.9177 22.5 20.959)"
                >
                    <Stop stopColor="#EC537E" />
                    <Stop offset={1} stopColor="#FD267D" />
                </RadialGradient>
                <ClipPath id="clip0_2_41">
                    <Path fill="#fff" transform="translate(54.5 6)" d="M0 0H16V16H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default FlameStarSvg;
