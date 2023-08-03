export default function About() {
    const logo = (
        <svg className="Shape_svg" width="300px" height="300px" viewBox="0 0 1000 1000">
            <rect
                className="Shape_rect"
                x="400"
                y="400"
                width="200"
                height="200" />
        </svg>
    )
    return (
        <div className="About">
            <p>This website is a tutorial that provides instructions on using CSS, HTML, and JavaScript to create stylish designs for your website. It also serves as a helpful cheatsheet for quick reference and reminders.</p>
            <p>Let me show you what kind of things you will learn here.</p>
            <p>Add animation of something cool</p>
            {logo}
        </div>
    )
}