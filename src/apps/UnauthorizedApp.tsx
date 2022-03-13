import { Auth } from "components";
import { useAuth } from "hooks";

const UnauthorizedApp = () => {
	const { handleLogin } = useAuth();
	return <Auth onLogin={handleLogin} />;
};

export default UnauthorizedApp;
