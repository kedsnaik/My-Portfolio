import React,{Component} from 'react';
import './Nav.css';
import "./backbtn.js";
import Tilt from 'react-tilt';

function Nav({page,logoClick,funcNav}){
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         nav : "normal"
    //     };
    // }
    // render({page,logoClick,backToHome}){

    return(
        <div className = "Nav">
            <div className = "logo">
                <svg onClick = {logoClick} version="1.0" xmlns="http://www.w3.org/2000/svg" className = "svgFile1" width="95px" height="95px" viewBox="0 0 1720 1590" preserveAspectRatio="xMidYMid meet">
                    <g id="layer101" fill="#484848" stroke="none">
                    <path d="M702 1445 c-282 -64 -492 -323 -492 -609 0 -100 22 -190 70 -286 82 -163 197 -259 390 -326 77 -27 262 -27 340 0 85 29 180 76 180 89 0 7 -114 126 -252 265 l-253 252 123 122 c67 67 122 128 122 135 0 19 -144 16 -180 -3 -14 -7 -79 -67 -145 -133 l-119 -121 237 -238 c130 -130 237 -240 237 -244 0 -13 -130 -20 -196 -9 -263 41 -464 305 -424 557 6 36 14 73 19 82 52 110 72 142 113 187 148 162 392 209 585 112 l63 -31 40 44 c22 24 39 49 37 55 -5 16 -82 55 -161 82 -90 31 -241 39 -334 18z"/>
                    <path d="M1002 1067 c-127 -127 -232 -237 -232 -242 0 -6 51 -62 114 -124 l115 -114 80 -5 c131 -7 131 -7 -2 126 l-117 117 144 144 144 144 25 -40 c108 -171 75 -424 -75 -589 -27 -28 -48 -56 -47 -60 0 -5 21 -26 45 -48 l43 -38 56 58 c50 52 111 157 145 249 31 84 37 215 14 318 -29 129 -154 337 -203 337 -9 0 -121 -105 -249 -233z"/>
                    </g>
                </svg>
            </div>
            
            <div className = "links">
                
                <div className = "NavLinks">
                {/* <div className = "backBtn" onClick = {backToHome}> */}
                    
                {/* <Tilt className="Tilt" options={{ max : 100 }} >
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 3000 1680" preserveAspectRatio="xMidYMid meet">
                        <g id="layer101" fill="#bfbfbf" stroke="none">
                            <path d="M1248 1537 c-28 -13 -616 -584 -645 -626 -30 -45 -33 -86 -9 -124 11 -19 160 -171 330 -338 250 -247 315 -305 342 -310 91 -16 160 77 120 162 -9 19 -104 120 -212 224 -188 182 -195 190 -167 196 15 3 310 3 654 1 435 -2 638 0 667 7 100 27 125 145 44 206 -26 20 -43 20 -713 20 l-686 0 205 205 c112 113 208 215 213 228 22 59 -9 132 -65 152 -36 12 -44 12 -78 -3z"/>
                        </g>
                    </svg>
                </Tilt> */}
                {/* </div >&nbsp;&nbsp;&nbsp;&nbsp; */}
                <section className = "hamburger"  onClick = {funcNav}>
                    <li><i className="fas fa-bars"></i></li>
                </section>
                    <nav className = "mainNav">
                    <li><a id = "Home" className = "cool-link" onClick = {page}>Home</a></li>&nbsp;&nbsp;&nbsp;
                    <li><a id = "About" className = "cool-link" onClick = {page}>About</a></li>&nbsp;&nbsp;&nbsp;
                    <li><a id = "Skills" className = "cool-link" onClick = {page}>Skills</a></li>&nbsp;&nbsp;&nbsp; 
                    <li><a id = "Contact" className = "cool-link" onClick = {page}>Contact</a></li>&nbsp;&nbsp;&nbsp;
                    <li><a id = "Blog" className = "cool-link" target = "_blank" style = {{textDecoration: "none", textEmphasis: "none", color : "#4a4a4a"}} href = "https://medium.com/kedar-naik" alt = "My Medium Blog">Visit Blog</a></li>
                    </nav>
                </div>
                
            </div>
        </div>
    );
    // }
}

export default Nav;