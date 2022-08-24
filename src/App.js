import './App.css';
import React, { useState } from 'react';

function App() {
  const [header, setHeader] = useState('Hello World!');
  return (
    <div className="App">
      <h1>{header}</h1>
      <button onClick={() => {setHeader('Hello Galaxy!')}}>Click me</button>
      <Links/>
      {/* <Forms/> */}
      <PersonList/>
    </div>
  );
}

const Links = () => {
  return (
    <ul>
      <li><a href="/guides/overview/why-cypress.html" className="main-nav-link active"> Guides</a></li>
      <li><a href="/api/api/table-of-contents.html" className="main-nav-link "> API</a></li>
      <li><a href="/plugins/" className="main-nav-link "> Plugins</a></li>
      <li><a href="/examples/examples/recipes.html" className="main-nav-link "> Examples</a></li>
      <li><a href="/faq/questions/using-cypress-faq.html" className="main-nav-link "> FAQ</a></li>
      <li>
          <a href="https://github.com/cypress-io/cypress" aria-label="GitHub repo" className="main-nav-link"><i className="fa fa-github"></i></a>
      </li>
    </ul>
  )
}

const Forms = () => {
  return (
    <form action="select">
      <input type="radio" id="male" name="gender" value="male"/>
      <label>Male</label>
      <input type="radio" id="female" name="gender" value="female"/>
      <label>Female</label>
      <input type="radio" id="other" name="gender" value="other"/>
      <label>Other</label>
      <input type="submit" value="submit"/>
    </form>
  )
}

function PersonList() {
  return <div>Bob Smith</div>;
}

export default App;
