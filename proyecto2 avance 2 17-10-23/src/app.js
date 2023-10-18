import express from "express";
import path from "path";
import morgan from "morgan";
import router from "./api/routes/usuario";
import React from "react";
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './features/login/login';

const app = express();
const PORT = 5000;

app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")))
app.use("/", router)

app.listen(PORT, () => {
    console.log("App listening on port 5000...")
});

// function App() {
//     return (
//         <BrowserRouter>
//             <Route path="/" exact render={() => <Redirect to="/login" />} />
//             <Route path="/login" component={Login} />
//             {/* More routes */}
//         </BrowserRouter>
//     );
// }

export default App;
