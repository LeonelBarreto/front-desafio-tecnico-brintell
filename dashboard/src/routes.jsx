import { Route, Routes } from 'react-router-dom';
import Main from './pages/Home';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
        </Routes>
    )
};