import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path="*" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
