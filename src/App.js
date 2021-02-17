import "./App.css";
import loadingsgv from "./assets/svg/loading.svg";

import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonlistPage from "./pages/PokemonListPage";

import "./App.css";
import PokemonInfoPage from "./pages/PokemonInfoPage";
import { PokemonHomePage } from "./pages/PokemonHomePage";
import { PokemonSearchPage } from "./pages/PokemonSearchPage";
import { PokemonTypePage } from "./pages/PokemonTypePage";
import { Loading } from "./components/Loading";

function App() {
	return (
		<React.Fragment>
			<Router>
				<nav
					className="navbar navbar-expand-lg navbar-light "
					style={{ backgroundColor: "white" }}
				>
					<div className="container-fluid">
						<span className="navbar-brand mx-auto ">
							<span style={{ color: "transparent", userSelect: "none" }}>
								--------
							</span>
							<strong>
								<Link style={{ textDecoration: "none", color: "black" }} to="/">
									POKEDEX
								</Link>
							</strong>
							<span style={{ color: "transparent", userSelect: "none" }}>
								--
							</span>
						</span>

						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarText"
							aria-controls="navbarText"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarText">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
								<li className="nav-item mx-auto">
									<Link className="nav-link" activeClassName="active" to="/">
										Home
									</Link>
								</li>
								<li className="nav-item mx-auto">
									<Link
										className="nav-link "
										activeClassName="active"
										to="/list"
									>
										PokeList
									</Link>
								</li>
								<li className="nav-item mx-auto">
									<Link
										className="nav-link"
										activeClassName="active"
										to="/search"
									>
										Search
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<Suspense fallback={<Loading></Loading>}>
					<Switch>
						<Route exact path="/">
							<div className="container">
								<PokemonHomePage />
							</div>
						</Route>
						<Route path="/list">
							<div className="container">
								<PokemonlistPage></PokemonlistPage>
							</div>
						</Route>
						<Route path="/search" exact>
							<PokemonSearchPage></PokemonSearchPage>
						</Route>
						<Route path="/search/:search" exact>
							<PokemonSearchPage></PokemonSearchPage>
						</Route>
						<Route path="/pokemon/:id">
							<PokemonInfoPage></PokemonInfoPage>
						</Route>
						<Route path="/type/:id">
							<PokemonTypePage></PokemonTypePage>
						</Route>
					</Switch>
				</Suspense>
			</Router>
		</React.Fragment>
	);
}

export default App;
