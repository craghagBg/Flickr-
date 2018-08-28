import React, {Component} from 'react';
import './App.scss';
import Header from "./Components/Header";
import Main from "./Components/Main";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;
