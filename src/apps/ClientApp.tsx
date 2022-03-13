import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CommonBaseRoutesInfo, Profile } from "components";

const ClientApp = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<CommonBaseRoutesInfo />}>
					<Route path="profile" element={<Profile />} />
					<Route path="/login" element={<div>test</div>} />
				</Route>
			</Routes>
		</Router>
	);
};

export default ClientApp;
