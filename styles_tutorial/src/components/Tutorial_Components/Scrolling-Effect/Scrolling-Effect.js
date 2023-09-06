import "./Scrolling-Effect.css"
export default function Scrolling_Effect() {
    const sun_svg = (
        <svg className="moon_svg border_blue" height="300px" width="300px" viewBox="0 0 1000 1000">
            <defs>
                <g id="moon">
                    <circle cx="500" cy="500" r="400" fill="orange" />
                </g>
            </defs>
            <use href="#moon" />
        </svg>
    )
    const mountains = (
        <svg className="mountains_svg border_blue" height="300px" width="300px" viewBox="0 0 100 100">
            <defs>
                <g id="mountains">
                    <path
                        d=" M0 90 
                            C10 80 20 80 10 80
                            Z"
                        fill="blue"
                        stroke="black"
                        strokeWidth="10" />
                </g>
            </defs>
            <use href="#mountains" />
        </svg>
    )
    return (
        <div className="SE_div">
            <div className="SE_div_element">
                <h1>Parallax Effect</h1>
                {sun_svg}
                {mountains}
            </div>
        </div >
    )
}