import "./assets/css/tailwind.css";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Master from "./layout/Master";
import Application from "./Application";
import {GlobalStateProvider} from "./context/GlobalStateProvider";
const rootApp = document.getElementById('root');
const root = createRoot(rootApp);
root.render(
    <BrowserRouter>
        <GlobalStateProvider>
            <Master>
                <Application/>
            </Master>
        </GlobalStateProvider>
    </BrowserRouter>
);