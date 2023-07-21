import "./Shapes.css"
function Shape() {
    return (
        <div className="Shape">
            <p>circle</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 1000 1000">
                <circle
                    className="Shape_circle"
                    cx="500"
                    cy="500"
                    r="100" />
            </svg>
            <p>rect</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 1000 1000">
                <rect
                    className="Shape_rect"
                    x="400"
                    y="400"
                    width="200"
                    height="200" />
            </svg>
            <p>ellipse</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 1000 1000">
                <ellipse
                    className="Shape_ellipse"
                    cx="500"
                    cy="500"
                    rx="120"
                    ry="70" />
            </svg>
            <p>path</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 1000 1000">
                <path d="M250 10 L100 200 L400 200 Z" />
            </svg>
            <p>line</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 1000 1000">
                <line
                    className="Shape_line"
                    x1="100"
                    y1="100"
                    x2="900"
                    y2="900" />
            </svg>
            <p>polyline</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 1000 1000">
                <polyline
                    className="Shape_polyline"
                    points="200,100 500,900 900,200 700,100" />
            </svg>
            <p>tspan</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 1000 1000">
                <text x="100" y="200" fontSize="100px">Text: </text>
                <text x="200" y="300" fill="rgb(121,0,121)" fontSize="100px" transform="rotate(30)">WWW.JavaTPoin</text>
                <text>
                    <tspan x="10" y="100" fontWeight="bold" fontSize="70px"> This is Simple Easy learning. </tspan>
                </text>
            </svg>
            <p>strokeLinecap</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 1000 1000">
                <g>
                    <text x="50" y="100" fontSize="100px">Using stroke-linecap: </text>
                    <path strokeLinecap="square" strokeWidth="30"
                        stroke="blue" d="M 50 200 L 900 200" />
                    <path strokeLinecap="round" strokeWidth="30"
                        stroke="orange" d="M 50 300 L 900 300" />
                    <path strokeLinecap="butt" strokeWidth="30"
                        stroke="red" d="M 50 400 L 900 400" />
                </g>
            </svg>
            <p>strokeDasharray</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 1000 1000">
                <g>
                    <text x="50" y="100" fontSize="100px">Using stroke-dasharray: </text>
                    <path strokeWidth="30"
                        stroke="orange" d="M 50 300 L 900 300"
                        strokeDasharray="10,10" />
                    <path strokeWidth="30"
                        stroke="red" d="M 50 400 L 900 400"
                        strokeDasharray="20, 10, 5, 5, 5, 10" />
                </g>
            </svg>
            <p>defs</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 300 300">
                <defs>
                    <g id="shape">
                        <rect x="40" y="40" width="40" height="40" />
                        <circle cx="40" cy="40" r="40" />
                    </g>
                </defs>
                <use href="#shape" x="40" y="40" />
                <use href="#shape" x="160" y="40" />
            </svg>
            <p>symbol</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 300 300">
                <symbol id="shape1">
                    <g fill="blue" stroke="red">
                        <rect x="40" y="40" width="40" height="40" />
                        <circle cx="40" cy="40" r="40" />
                    </g>
                </symbol>
                <use href="#shape1" x="50" y="30" />
            </svg>
            <p>pattern</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 300 300">
                <defs>
                    <pattern id="pattern1" patternUnits="userSpaceOnUse"
                        x="0" y="0" width="100" height="100"
                        viewBox="0 0 3 4" >
                        <path d="M 0 0 L 3 0 L 1.5 3 z" fill="orange" stroke="green" />
                    </pattern>
                </defs>
                <g>
                    <text x="30" y="40" >Triangle using the Pattern </text>
                    <rect x="0" y="100" width="300" height="300" stroke="orange"
                        strokeWidth="3" fill="url(#pattern1)" />
                </g>
            </svg>
            <p>clipPath</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 300 300">
                <defs>
                    <clipPath id="clip">
                        <rect x="15" y="15" width="40" height="40" />
                    </clipPath>
                </defs>
                <circle cx="50" cy="50" r="30" clipPath="url(#clip)" />
            </svg>
            <p>Mask</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 300 300">
                <defs>
                    <mask id="mask1" x="0" y="0" width="100" height="100" >
                        <rect x="0" y="0" width="100" height="100"
                            stroke="none"
                            fill="#ffffff" />
                    </mask>
                </defs>
                <rect x="1" y="1" width="200" height="200"
                    stroke="none"
                    fill="#0000ff"
                    mask="url(#mask1)" />
            </svg>
            <p>Time</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 300 300">
                <circle cx="60" cy="60" r="30"
                    fill="blue"
                    fillOpacity=".6"
                    stroke="black" >
                    <animate id="p1" attributeName="r" attributeType="XML"
                        from="30" to="10" begin="0s" dur="3s" fill="freeze" />
                </circle>
                <circle cx="120" cy="60" r="10"
                    fill="red"
                    fillOpacity=".5"
                    stroke="black">
                    <animate attributeName="r" attributeType="XML"
                        begin="p1.end" dur="3s" from="10" to="30" fill="freeze" />
                </circle>
            </svg>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 300 300">
                <rect x="10" y="10" width="200" height="40"
                    stroke="black" fill="green"
                    fillOpacity="0.5">
                    <animate attributeName="width" attributeType="XML"
                        begin="0s" dur="15s" end="10s"
                        from="10" to="200" fill="freeze" />
                </rect>
            </svg>
            <p>Animation</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 300 300">
                <circle cx="30" cy="60" r="30"
                    fill="purple"
                    fillOpacity=".4"
                    stroke="black">
                    <animate id="circle-anim" attributeName="cx" attributeType="XML"
                        begin="0s" dur="6s" repeatCount="4"
                        from="60" to="260" fill="freeze" />
                </circle>
                <circle cx="250" cy="150" r="30"
                    fill="green"
                    fillOpacity=".4"
                    stroke="black">
                    <animate attributeName="cx" attributeType="XML"
                        begin="circle-anim.repeat(1)+.5s" dur="8s" repeatDur="12s"
                        from="250" to="60" fill="freeze" />
                </circle>
            </svg>
            <p>set</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 300 300">
                <rect x="50" y="40" width="60" height="60"
                    fill="purple"
                    fillOpacity=".4"
                    stroke="black">
                    <animate attributeName="width" attributeType="XML"
                        begin="0s" dur="4s" from="60" to="0" fill="freeze" />
                    <animate attributeName="height" attributeType="XML"
                        begin="0s" dur="4s" from="60" to="0" fill="freeze" />
                </rect>
                <text textAnchor="middle" x="60" y="60"
                    visibility="hidden">
                    <set attributeName="visibility" attributeType="CSS"
                        to="visible" begin="4.5s" dur="1s" fill="freeze" />
                    All gone!
                </text>
            </svg>
            <p>animateTransform</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 300 300">
                <rect x="10" y="10" height="100" width="100"
                    stroke="black"
                    fill="purple"
                    strokeWidth="2">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                        begin="0s" dur="5s" from="0 60 60 " to="360 60 60" />
                </rect>
            </svg>
            <p>animateMotion</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 300 300">
                <g>
                    <rect x="0" y="0" width="30" height="30"
                        fill="gray"
                        stroke="black" />
                    <circle cx="30" cy="30" r="15"
                        fill="red"
                        stroke="black" />
                    <animateMotion from="-20,-20" to="300,300" dur="4s" fill="freeze" repeatCount="indefinite" />
                </g>
            </svg>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 100 100">
                <path d="M20,25 
                    C20,15 50,15 50,25
                    C50,35 80,35 80,25
                    C80,15 50,15 50,25
                    C50,35 20,35 20,25"
                    fill="none" stroke="black" strokeWidth="2" />
                <path d="M-5,-5 L5,-5 L5,5 L-5,5z"
                    fill="yellow"
                    stroke="black">
                    <animateMotion
                        path="M20,25 
                        C20,15 50,15 50,25
                        C50,35 80,35 80,25
                        C80,15 50,15 50,25
                        C50,35 20,35 20,25"
                        dur="6s" repeatCount="indefinite" />
                </path>
            </svg>
            <p>Link in SVG</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 200 200">
                <a href="https://www.javatpoint.com/">
                    <text x="60" y="40" fontSize="18pt">Dog</text>
                </a>
                <a href="https://www.javatpoint.com/">
                    <circle cx="50" cy="80" r="20" fill="red" />
                    <rect x="90" y="60" width="40" height="40" fill="green" />
                </a>
            </svg>
            <p>Filters</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 200 200">
                <defs>
                    <filter id="blurFilter" x="0" y="0">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                    </filter>
                </defs>
                <rect
                    width="120"
                    height="120"
                    x="20"
                    y="20"
                    stroke="green"
                    strokeWidth="10"
                    fill="purple"
                    filter="url(#blurFilter)"
                />
            </svg>
            <p>feOffset</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 200 200">
                <defs>
                    <filter id="bob1" x="0" y="0" width="200%" height="200%">
                        <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
                        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                </defs>
                <rect x="10" y="10" width="90" height="90" stroke="blue" strokeWidth="3" fill="purple" filter="url(#bob1)" />
            </svg>
            <p>feOffset</p>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 200 200">
                <filter id="T1">
                    <feTurbulence baseFrequency=".06" type="fractalNoise" />
                </filter>
                <rect x="0" y="0" height="150" width="150" filter="url(#T1)" />
            </svg>
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 200 200">
                <filter id="T3">
                    <feTurbulence baseFrequency=".02" numOctaves="1" seed="11" />
                </filter>
                <rect x="0" y="0" height="150" width="150" filter="url(#T3)" />
            </svg>
        </div >
    )
}

export default Shape