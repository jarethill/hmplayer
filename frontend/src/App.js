import React, { useReducer, useEffect } from 'react';
import Header from './components/Header';
import './App.css';

const themes = {
    dark: {
        primaryColor: '#520513',
        secondaryColor: '#BA274A',
        backgroundColor: '#220C10',
        primaryText: '#fff',
    },
    // White theme not decided yet, values are currently used for debugging
    light: {
        backgroundColor: '#fff',
        primaryColor: 'blue',
        primaryText: '#000',
    },
};

const appStyles = {
    height: '100vh',
};

function reducer(state, action) {
    const { theme } = action;

    switch (theme) {
        case 'dark':
            return themes.dark;
        case 'light':
            return themes.light;
        default:
            throw new Error();
    }
}

const ThemeContext = React.createContext();

function App() {
    const [theme, dispatch] = useReducer(reducer, themes.dark);

    // Set page background when theme changes
    useEffect(() => {
        document.body.style.background = theme.backgroundColor;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            <section id='app' style={appStyles}>
                <Header />
            </section>
        </ThemeContext.Provider>
    );
}

export default App;

export { ThemeContext };
