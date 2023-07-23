// html5 page structure
import Carousel from "../Carousel/Carousel";
import "./PageStructure.css"
export default function PageStructure() {
    const dataContainer = [
        <div className="html_structure_1">
            <header className="S_header">
                <p className="S_p">Header</p>
            </header>
            <nav className="S_nav">
                <p className="S_p">Navigation</p>
            </nav>
            <article className="S_article">
                <p className="S_p article">Article</p>
                <section className="S_section">
                    <p className="S_p">Section 1</p>
                </section>
                <section className="S_section">
                    <p className="S_p">Section 2</p>
                </section>
            </article>
            <aside className="S_aside">
                <p className="S_p">Aside</p>
            </aside>
            <footer className="S_footer">
                <p className="S_p">Footer</p>
            </footer>
        </div>,
        <div className="html_structure_2">
            <header className="S_header">
                <p className="S_p">Header</p>
            </header>
            <nav className="S_nav">
                <p className="S_p">Navigation</p>
            </nav>
            <article className="S_article">
                <p className="S_p article">Article</p>
                <section className="S_section">
                    <p className="S_p">Section 1</p>
                </section>
                <section className="S_section">
                    <p className="S_p">Section 2</p>
                </section>
            </article>
            <aside className="S_aside">
                <p className="S_p">Aside</p>
            </aside>
            <footer className="S_footer">
                <p className="S_p">Footer</p>
            </footer>
        </div>,
        <div className="html_structure_3">
            <header className="S_header">
                <p className="S_p">Header</p>
            </header>
            <nav className="S_nav">
                <p className="S_p">Navigation</p>
            </nav>
            <article className="S_article">
                <p className="S_p article">Article</p>
                <section className="S_section">
                    <p className="S_p">Section 1</p>
                </section>
                <section className="S_section">
                    <p className="S_p">Section 2</p>
                </section>
            </article>
            <aside className="S_aside">
                <p className="S_p">Aside</p>
            </aside>
            <footer className="S_footer">
                <p className="S_p">Footer</p>
            </footer>
        </div>
    ];
    return (
        <div className="Page_Structure">
            <Carousel dataContainer={dataContainer} />
        </div>
    )
}