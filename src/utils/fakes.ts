import { IProfile, ISelectValue, IUser } from "types/interfaces";

export const FakeUser: IProfile = {
	id: 1,
	isAdmin: false,
	login: "test",
	name: "test",
	fullName: "test",
	type: { id: 0, value: "test" },
	district: { id: 0, value: "test" },
	educationLicense: true,
	medicineLicense: false,
	innovationGround: true,
	supervisor: "test",
	responsible: "test",
};

export async function checkAuth(ms: number): Promise<IProfile | null> {
	return new Promise((resolve) => setTimeout(() => resolve(FakeUser), ms));
}

export async function checkUser(
	login: IUser["login"],
	password: IUser["password"],
	ms: number
): Promise<IProfile | null> {
	return new Promise((resolve) =>
		setTimeout(
			() => resolve(login === "test" && password === "test" ? FakeUser : null),
			ms
		)
	);
}
