import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import {ConfiguratorProvider} from "./contexts/Configurator";
import {ConfiguratorProviderRender} from "./contexts/ConfiguratorRender.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ConfiguratorProviderRender>
            {/*<ConfiguratorProvider>*/}
                <App/>
            {/*</ConfiguratorProvider>*/}
        </ConfiguratorProviderRender>
    </React.StrictMode>
)

