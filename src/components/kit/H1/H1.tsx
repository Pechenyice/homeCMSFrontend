import { FC, ReactNode } from "react";
import { combineClasses } from "utils";
import styles from "./H1.module.scss";

interface Props {
	classes?: string[];
}

export const H1: FC<Props> = (props) => {
	const { children, classes = [] } = props;

	return (
		<h1 className={combineClasses(styles.styled, ...classes)}>{children}</h1>
	);
};
