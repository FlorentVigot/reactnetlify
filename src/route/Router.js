import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import JsxExemple from "../components/JsxExemple";
import Card from "../components/Card";
import NotFound from "./NoMatch";

const Routeur = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={JsxExemple} />
            <Route exact path="/card" component={Card} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
);
export default Routeur