import { useState } from 'react';
import './App.css';
import NevBar from './components/NevBar';
import TextForm from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <NevBar name="TextUtils3" mode={mode} onToggle={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact  path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
