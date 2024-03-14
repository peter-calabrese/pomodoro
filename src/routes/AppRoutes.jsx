import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
