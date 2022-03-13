import { IProfile, IUser } from "types/interfaces";
import * as fakes from "utils";
import { safeFetch } from "./wrapper";

export const API = {
	checkAuth(): Promise<IProfile | null> {
		return fakes.checkAuth(1000);
		//   return safeFetch(
		//     constructUrl("/check_auth"),
		//     "POST",
		//     aborts.CHECK_AUTH_CONTROLLER
		//   );
	},
	login({ login, password }: IUser): Promise<IProfile | null> {
		return fakes.checkUser(login, password, 1000);
	},
};
