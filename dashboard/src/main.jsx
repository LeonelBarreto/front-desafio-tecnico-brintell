import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import './styles/main.css';
import {ToastContainer} from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
    		<MainRoutes />
			<ToastContainer/>
    	</BrowserRouter>
  	</React.StrictMode>
);