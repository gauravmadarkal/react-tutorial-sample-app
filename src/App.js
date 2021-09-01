import './App.css';
import { routes } from './route_config';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				{routes.map(({ component, path }) => (
					<Route path={path} exact>
						{component}
					</Route>
				))}
			</Switch>
		</Router>
	);
}

export default App;
