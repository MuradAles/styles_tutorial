import "./Shapes.css"
function Shape() {
    return (
        <div className="Shape">
            <svg className="Shape_svg" width="200px" height="200px" viewBox="0 0 1000 1000">
                <circle
                    className="Shape_circle"
                    cx="500"
                    cy="500"
                    r="100" />
                <rect
                    className="Shape_rect"
                    x="50"
                    y="50"
                    width="200"
                    height="200" />
                <ellipse
                    className="Shape_ellipse"
                    cx="700"
                    cy="100"
                    rx="120"
                    ry="70" />
                <line
                    className="Shape_line"
                    x1="100"
                    y1="100"
                    x2="400"
                    y2="200" />
                <polyline
                    className="Shape_polyline"
                    points="500,10 200,300 210,200" />

                <path d="M250 10 L100 200 L400 200 Z" />
            </svg>
        </div>
    )
}

export default Shape