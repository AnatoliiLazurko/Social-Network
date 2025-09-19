import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/authorization/login/Login';
import Registration from './components/authorization/registration/Registration';

function App() {
  return (
    <>
      <Routes>

        {/* <Route path="/" element={<Navigate to="/auth/login" />}/> */}
        <Route path="/accounts/signin" element={<Login />} />
        <Route path="/accounts/signup" element={<Registration />} />

      </Routes>
    </>
  );
}

export default App;
