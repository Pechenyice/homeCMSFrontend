import { Button, H1, Input, Text } from "components/kit";
import { useAuth, useErrors } from "hooks";
import { ChangeEvent, useState } from "react";
import { IInputsState } from "types/interfaces";
import { textInputValidator, validateAll } from "utils";
import styles from "./Auth.module.scss";

export const Auth = () => {
	const { handleLogin } = useAuth();
	const { addError } = useErrors();

	const [inputs, setInputs] = useState<IInputsState>({
		login: {
			value: "",
			validator: textInputValidator,
			error: {
				exist: false,
				text: "",
			},
		},
		password: {
			value: "",
			validator: textInputValidator,
			error: {
				exist: false,
				text: "",
			},
		},
	});

	const formIsValid = Object.values(inputs).every(
		(val) => val.value && !val.error.exist
	);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const [key, value] = [e.target.name, e.target.value];

		setInputs({
			...inputs,
			[key]: {
				...inputs[key],
				value,
			},
		});
	};

	const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
		const [key, value] = [e.target.name, e.target.value];

		const validationResult = inputs[key].validator(value);

		setInputs({
			...inputs,
			[key]: {
				...inputs[key],
				value,
				error: {
					exist: !validationResult.success,
					text: validationResult.text,
				},
			},
		});
	};

	const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
		const key = e.target.name;

		setInputs({
			...inputs,
			[key]: {
				...inputs[key],
				error: {
					exist: false,
					text: "",
				},
			},
		});
	};

	const handleAuthTry = () => {
		const validationSuccess = validateAll(
			Object.values(inputs).map((val) => ({
				value: val.value,
				validator: val.validator,
			}))
		);
		if (!validationSuccess) {
			addError("Проверьте поля на правильность");
			return;
		}
		handleLogin({ login: inputs.login.value, password: inputs.password.value });
	};

	return (
		<div className={styles.wrapper}>
			<H1 className={styles.heading}>Вход</H1>
			<Input
				placeholder="Введите логин"
				name={"login"}
				value={inputs.login.value}
				error={inputs.login.error}
				onChange={handleChange}
				onBlur={handleBlur}
				onFocus={handleFocus}
				heading="Логин"
				className={styles.firstInput}
			/>
			<Input
				type="password"
				name={"password"}
				value={inputs.password.value}
				error={inputs.password.error}
				onChange={handleChange}
				onBlur={handleBlur}
				onFocus={handleFocus}
				placeholder="Введите пароль"
				heading="Пароль"
				className={styles.lastInput}
			/>
			<Button onClick={handleAuthTry} disabled={!formIsValid}>
				<Text isMedium>Войти</Text>
			</Button>
		</div>
	);
};
