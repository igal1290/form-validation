import { Routes, Route } from 'react-router-dom';
import Form from './pages/Form';
import Signin from './pages/Signin';
import BackgroundImage from './images/vectorblue.jpg';
import './App.css';

function App() {
  return (
    <>
      <img
        src={BackgroundImage}
        alt="bacgkround"
        className="background__image"
      />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
