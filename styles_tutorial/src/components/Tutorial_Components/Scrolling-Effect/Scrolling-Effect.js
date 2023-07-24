import "./Scrolling-Effect.css"
export default function Scrolling_Effect() {
    return (
        <div className="SE_div">
            <p>Parallax Effect </p>
            <svg className="APP-BG_Sky" height="100%" width="100%" viewBox="0 0 1000 1000">
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
        </div >
    )
}