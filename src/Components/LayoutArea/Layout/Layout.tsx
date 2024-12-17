import { Generator } from "../../AiArea/Generator/Generator";
import { Header } from "../Header/Header";
import "./Layout.css";

export function Layout(): JSX.Element {

    const year = new Date().getFullYear();

    return (
        <div className="Layout">
            <div>
                <header>
                    <Header />
                </header>

                <main>
                    <Generator />
                </main>
            </div>

            <footer>
                <a href="https://liahovitskydavid.web.app" target="_blank">All Rights Reserved {year}© David Liahovitsky - Full Stack Web Developer</a>
            </footer>

        </div>
    );
}
