import "./App.css";
import { ErrorsList, InfosList, Preloader } from "components";
import { ErrorsProvider } from "contexts/ErrorsContext";
import { InfosProvider } from "contexts/InfosContext";
import { useAuth } from "hooks";
import { lazy, Suspense } from "react";

const ClientApp = lazy(() => import("apps/ClientApp"));
const AdministratorApp = lazy(() => import("apps/AdministratorApp"));

function App() {
	const { isAdmin } = useAuth();

	return (
		<ErrorsProvider>
			<InfosProvider>
				<ErrorsList />
				<InfosList />

				<Suspense fallback={<Preloader />}>
					{isAdmin ? <AdministratorApp /> : <ClientApp />}
				</Suspense>
			</InfosProvider>
		</ErrorsProvider>
	);
}

export default App;
