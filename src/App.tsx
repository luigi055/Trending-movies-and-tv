import { useEffect } from "react";
import ApplicationRouter from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";

import { refreshSession } from "services/redux/features/authentication/actions";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(refreshSession());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Router>
			<div className="App">
				<ApplicationRouter />
			</div>
		</Router>
	);
}

export default App;
