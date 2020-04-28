import React from "react";
import "./App.css";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Link, Switch, BrowserRouter, Route} from 'react-router-dom'
import { IoIosAddCircle } from 'react-icons/io'

const initialState = {}
const store = createStore(() => initialState)

function App() {
  const micomponente = () => (<article> this is an article and THIS IS A <Link to='/hello'>REDIRECT</Link></article>)
  const micomp2 = () => (<> <IoIosAddCircle size="50px"/> Hello world in react router</>)
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route path='/hello' component={micomp2}/>
            <Route path='/' component={micomponente} />
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
