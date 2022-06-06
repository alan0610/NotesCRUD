import './App.css';
import CompShow from './components/Show';
import CompCreate from './components/Create'
import CompUpdate from './components/Update'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShow />} />
          <Route path='/create' element={ <CompCreate />} />
          <Route path='/update/:id' element={ <CompUpdate />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
