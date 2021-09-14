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
  return (
    <>
      <h2>Home</h2>
      <h3>No shift here for getCLS to report</h3>
      <p>But the plugin is including other routes</p>
    </>
  )
}

function PageOne() {
  const arr = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      <h2>Page One</h2>
      {arr.map(i => (
        <div className="random" key={i}>
          <img src={`https://picsum.photos/200/300?random=${i}`} alt="random pic" />
          <p>{i}. I am a caption</p>
        </div>
      ))}
      <h3>Footer text</h3>
    </>
  );
}

function PageTwo() {
  const arr = [11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  return (
    <>
      <h2>Page Two</h2>
      {arr.map(i => (
        <div className="random" key={i}>
          <img src={`https://picsum.photos/200/300?random=${i}`} alt="random pic" />
          <p>{i}. I am a caption</p>
        </div>
      ))}
      <h3>Footer text</h3>
    </>
  );
}
