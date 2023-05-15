import './App.css';
import { useState } from 'react';

function App() {


  return (
    <div className="App">
       <main id="main">
       <header>
       <h1>Practicing CSS</h1>
       </header>
        <p>Let's practice CSS! Here are a range of exercises to help you with those tricky parts of CSS. There are often multiple solutions to a problem, but each task will have one solution for you to take a look at if you're stuck.</p>
       <section>
       <h2 id="centre-label">Centering elements</h2>
        <ul aria-labelledby='centre-label' id="centre-list">
          <li><a href="/margin">Centre with margin</a></li>
          <li><a href="/flexbox">Centre with Flexbox</a></li>
          <li><a href="/position">Centre with position and transform</a></li>
          <li><a href="/examples">See how tasks should look when complete</a></li>
        </ul>
       </section>
       </main>
    </div>
  )
}

export default App
