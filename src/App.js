import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './views/Login/Login.js';
import GameSelector from './views/HomePage/GameSelector.js';
import ModeSelector from './views/HomePage/ModeSelector.js';
import Paper from './components/Onboarding/PaperComponent.js';
import PlayGame from './views/PlayGame.js';

function App() {
    

    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => (
                        <Login />
                    )}
                />
                <Route
                    path="/onboard"
                    exact
                    render={() => (
                        <Paper />
                    )}
                />
                <Route
                    path="/game"
                    exact
                    render={() => (
                        <GameSelector />
                    )}
                />
                <Route
                    path="/mode"
                    exact
                    render={() => (
                        <ModeSelector />
                    )}
                />
                <Route
                    path="/play"
                    exact
                    render={() => (
                        <PlayGame />
                    )}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;