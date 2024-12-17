import "./Spinner.css";
import spinner from "../../../Assets/Images/spinner.gif";

export function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
            <h1>Generating...</h1>
			<img src={spinner} />
        </div>
    );
}
