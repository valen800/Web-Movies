import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop";

//Pages
import Error404 from "./pages/error404";
import Home from "./pages/home";
import Movie from "./pages/movie";
import NewMovies from "./pages/new-movies";
import PopularMovies from "./pages/popular-movies";
import Search from "./pages/search";

function App() {
  const { Header, Content } = Layout;

  // Switch para cargar la primera pagina que encuentre si no carga dos parecidas por ejemplo
  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/new-movies" exact={true}>
              <NewMovies />
            </Route>
            <Route path="/popular-movies" exact={true}>
              <PopularMovies />
            </Route>
            <Route path="/search" exact={true}>
              <Search />
            </Route>
            <Route path="/movie/:id" exact={true}>
              <Movie />
            </Route>
            <Route path="*" exact={true}>
              <Error404 />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
