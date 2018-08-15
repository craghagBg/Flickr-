import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainContainer />
            </div>
        );
    }
}

export default App;
