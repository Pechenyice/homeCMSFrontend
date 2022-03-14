import { useErrors } from "hooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Main = () => {
	const { addError } = useErrors();

	useEffect(() => {
		throw new Error("test");
	}, []);

	return (
		<>
			<div onClick={() => addError("from main")}>main page</div>
			<Link to={"/login"}>to login</Link>
			<Link to={"/404"}>to 404</Link>
		</>
	);
};
