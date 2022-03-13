import { PasswordHiddenIcon, PasswordShownIcon } from "assets/icons";
import { InputHTMLAttributes, ReactNode, useState } from "react";
import { H1 } from "../H1/H1";
import styles from "./Input.module.scss";

interface Props {
	heading?: string | ReactNode;
	error?: {
		exist: boolean;
		text: string;
	};
}

export const Input = (props: Props & InputHTMLAttributes<HTMLInputElement>) => {
	const { heading, error, type, placeholder, onChange, ...rest } = props;

	const [isHidden, setIsHidden] = useState(true);

	const handleNewMode = () => {
		setIsHidden(!isHidden);
	};

	return (
		<div className={styles.wrapper}>
			{heading && <H1>{heading}</H1>}
			<input
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				className={styles.input}
				{...rest}
			/>
			<div className={styles.icon}>
				{isHidden ? (
					<PasswordHiddenIcon onClick={() => handleNewMode()} />
				) : (
					<PasswordShownIcon onClick={() => handleNewMode()} />
				)}
			</div>
		</div>
	);
};
