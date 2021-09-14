import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import WebVitalsBar from "./WebVitalsBar";

function App() {
  return (
    <Router>
      <WebVitalsBar />  

      <nav className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Page1</Link>
          </li>
          <li>
            <Link to="/page2">Page2</Link>
          </li>
        </ul>
      </nav>

      <div className="App">
        <Switch>
          <Route path="/page1">
            <PageOne />
          </Route>
          <Route path="/page2">
            <PageTwo />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function PageOne() {
  return (
    <>
      <h2>Page One</h2>
      <div className="strawberry"></div>
      <h3>Strawberry</h3>
    </>
  );
}

function PageTwo() {
  const arr = [0,1,2,3,4,5,6,7,8,9]
  return (
    <>
      <h2>Page Two</h2>
      {arr.map(i => <div key={i} className="dragon"></div>)}
      <h3>Dragon</h3>
    </>
  );
}
