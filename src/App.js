import "./App.css";
import loadingsgv from "./assets/svg/loading.svg";

import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonlistPage from "./pages/PokemonListPage";
import OptionButton from "./components/OptionButton";

import "./App.css";
import { PokemonInfo } from "./pages/PokemonInfo";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Link to="/">
					<OptionButton text="Inicio"></OptionButton>
				</Link>
				<Link to="/list">
					<OptionButton text="Listado"></OptionButton>
				</Link>
				<Link to="/dashboard">
					<OptionButton text="dashboard"></OptionButton>
				</Link>

				<Suspense fallback={loadingsgv}>
					<Switch>
						<Route exact path="/">
							<h1>Inicio</h1>
						</Route>
						<Route path="/list">
							<h1>Poke List</h1>
							<PokemonlistPage></PokemonlistPage>
						</Route>
						<Route path="/dashboard">
							<h1>Dashboard List</h1>
						</Route>
						<Route path="/pokemon/:id">
							<PokemonInfo></PokemonInfo>
						</Route>
					</Switch>
				</Suspense>
			</Router>
		</React.Fragment>
	);
}

export default App;
