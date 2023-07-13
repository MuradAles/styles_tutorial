// html5 page structure
import Carousel from "./Carousel";
import "./PageStructure.css"
function PageStructure() {
    const dataContainer = [
        <div className="html_structure_1">
            <header className="S_header">
                Header 1
            </header>
            <nav className="S_nav">
                Navigation
            </nav>
            <article className="S_article">
                Article
                <section className="S_section">
                    Section 1
                </section>
                <section className="S_section">
                    Section 2
                </section>
            </article>
            <aside className="S_aside">
                Aside
            </aside>
            <footer className="S_footer">
                Footer
            </footer>
        </div>,
        <div className="html_structure_2">
            <header className="S_header">
                Header 2
            </header>
            <nav className="S_nav">
                Navigation
            </nav>
            <article className="S_article">
                Article
                <section className="S_section">
                    Section 1
                </section>
                <section className="S_section">
                    Section 2
                </section>
            </article>
            <aside className="S_aside">
                Aside
            </aside>
            <footer className="S_footer">
                Footer
            </footer>
        </div>,
        <div className="html_structure_3">
            <header className="S_header">
                Header 3
            </header>
            <nav className="S_nav">
                Navigation
            </nav>
            <article className="S_article">
                Article
                <section className="S_section">
                    Section 1
                </section>
                <section className="S_section">
                    Section 2
                </section>
            </article>
            <aside className="S_aside">
                Aside
            </aside>
            <footer className="S_footer">
                Footer
            </footer>
        </div>
    ];
    return (
        <div className="Page_Structure">
            <Carousel dataContainer={dataContainer} />
        </div>
    )
}

export default PageStructure