import React, { Component } from 'react';

/**
 * Created by alejandrorioscalera
 * On 29/1/18
 *
 * -- SOCIAL NETWORKS --
 *
 * GitHub: https://github.com/clonalejandro or @clonalejandro
 * Website: https://clonalejandro.me/
 * Twitter: https://twitter.com/clonalejandro11/ or @clonalejandro11
 * Keybase: https://keybase.io/clonalejandro/
 *
 * -- LICENSE --
 *
 * All rights reserved for clonalejandro ©clonareact 2017 / 2018
 */

class ClonaLogo extends Component {


    /** SMALL CONSTRUCTORS **/

    render(){
        return this.clonasvg();
    }


    /** REST **/

    /**
     * This function return a svg logo
     * @return {*}
     */
    clonasvg(){
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 460 360" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,460.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M2022 3370 l3 -581 169 -5 c133 -4 171 -2 177 8 10 15 12 908 2 1051
    -7 112 -3 109 -107 77 l-66 -21 -73 21 c-39 12 -80 24 -90 26 -16 5 -17 -25
    -15 -576z"/>
                    <path d="M1181 2606 c2 -2 166 -86 364 -186 198 -100 365 -188 371 -194 12
    -11 144 -424 144 -449 0 -15 -634 -600 -655 -605 -13 -3 41 -62 83 -90 15 -10
    22 -22 19 -34 -4 -14 7 -8 37 19 23 21 111 101 196 179 295 268 345 313 348
    309 6 -6 73 -720 68 -738 -2 -9 0 -17 5 -17 5 0 9 4 9 9 0 6 12 6 32 0 44 -12
    48 -12 41 7 -6 17 57 715 66 726 6 7 38 -21 384 -334 107 -98 199 -178 205
    -178 21 0 91 61 118 104 16 27 47 58 72 72 66 39 49 38 -23 -2 -36 -20 -69
    -34 -74 -32 -5 1 -155 137 -334 301 l-325 297 65 208 c36 114 70 218 76 231 9
    17 111 73 382 210 236 118 362 187 348 189 -11 2 -234 -9 -495 -23 -260 -15
    -504 -26 -543 -26 -38 1 -270 12 -515 26 -486 27 -475 27 -469 21z"/>
                </g>
            </svg>
        );
    }


}

export default ClonaLogo;
