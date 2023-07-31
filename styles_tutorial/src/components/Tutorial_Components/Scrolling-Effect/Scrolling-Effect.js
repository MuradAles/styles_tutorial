import "./Scrolling-Effect.css"
export default function Scrolling_Effect() {
    const background_svg = (
        <svg className="APP-BG_Sky" height="200px" width="200px" viewBox="0 0 1000 1000">
            <defs>
                <g id="sun">
                    <rect
                        className="Shape_rect"
                        width="200"
                        height="200" />
                </g>
            </defs>
            <use href="#sun" x="400" y="400" />
        </svg>
    )
    return (
        <div className="SE_div">
            <div className="SE_div_element">
                <h1>Parallax Effect</h1>
                {background_svg}
            </div>
        </div >
    )
}