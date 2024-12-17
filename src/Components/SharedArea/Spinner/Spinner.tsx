import "./Spinner.css";
import spinner from "../../../Assets/Images/spinner.gif";

export function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src={spinner} />
        </div>
    );
}
