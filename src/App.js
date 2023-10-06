import './App.css';

import Onclick from './eventhandlers/Onclick';

import Onchange from './eventhandlers/Onchange';

import Onsubmit from './eventhandlers/Onsubmit';

function App() {
  return (
    <div className="App">
      <Onclick/>
      <Onchange />
      <Onsubmit />
    </div>
  );
}

export default App;

// Step 1: Create Button
// Step2: create click event in button
// Step 3: Create button by using arrow function 
// Step 4 : in Click TO Pass input in function