import React from "react";
import env from "@share/env";

const App = () => {
    return (
        <>Hello World. Current environment: {env.APP_ENV}</>
    );
}

export default App;