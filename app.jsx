import React from "react";
import ReactDOM from "react-dom";

import { TypeaheadInput } from "./components/typeahead-input";

const App = () => {
    return (<TypeaheadInput />)
}

ReactDOM.render(<App />, document.getElementById("root"));