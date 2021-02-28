import { Route, Switch } from "react-router-dom";

import Navigation from "./component/Navigation"

import Home from "./endpoint/Home"
import About from "./endpoint/About"
import Contact from "./endpoint/Contact"

const App = () => {
	return (
		<>
		<Navigation/>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
		</Switch>
		</>
	);
}

export default App