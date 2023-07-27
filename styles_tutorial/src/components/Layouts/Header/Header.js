import "./Header.css"
export default function Header() {
    const logo = (
        <svg height="75px" width="75px" viewBox="0 0 100 100">
            <rect x="40px" y="40px" fill="blue" height="20px" width="20px" />
        </svg>
    )
    return (
        <header className="Header">
            {logo}
            <p>See2C</p>
            <p>See3C</p>
            <p>See4C</p>
        </header>
    )
}