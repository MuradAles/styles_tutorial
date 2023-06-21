// html5 page structure
function PageStructure() {
    return (
        <div className="Page_Structure">
            <header className="S_header">
                Header
            </header>
            <nav className="S_nav">
                Navigation
            </nav>
            <article className="S_article">
                Body
                <section className="S_section">
                    Section 1
                </section>
                <section className="S_section">
                    Section 2
                </section>
            </article>
            <aside>
                Aside
            </aside>
            <footer className="S_footer">
                Footer
            </footer>
        </div>
    )
}

export default PageStructure