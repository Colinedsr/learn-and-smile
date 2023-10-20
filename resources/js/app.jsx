require("./bootstrap");
import '../css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import * as React from "react";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

