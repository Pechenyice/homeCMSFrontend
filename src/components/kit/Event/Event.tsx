import { HTMLAttributes } from "react";
import { combineClasses } from "utils";
import styles from "./Event.module.scss";

interface Props {
	isError?: boolean;
}

export const Event = (props: HTMLAttributes<HTMLDivElement> & Props) => {
	const { className, children, onClick, isError, ...rest } = props;

	return (
		<div
			className={combineClasses(
				styles.styled,
				isError ? styles.styled_error : styles.styled_info,
				className ?? ""
			)}
			onClick={onClick}
			{...rest}
		>
			{children}
		</div>
	);
};
