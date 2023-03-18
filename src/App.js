import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import PeopleComponent from './components/PeopleComponent';
import PlanetComponent from './components/PlanetComponent';
function App() {
  return (
    <BrowserRouter>
    <h1>Luke API Walker</h1>
    <Form/>
    <Routes>
      <Route path='/people/:id' element={<PeopleComponent />} />
      <Route path='/planets/:id' element={<PlanetComponent />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
