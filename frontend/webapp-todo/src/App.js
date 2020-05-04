import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Link, Switch, BrowserRouter, Route } from "react-router-dom";
import { HomeContainer } from "container/Home";

const initialState = {};
const store = createStore(() => initialState);

function App() {
  const micomponente = () => (
    <article>
      this is an article and THIS IS A <Link to="/hello">REDIRECT</Link>
    </article>
  );
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={HomeContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
