import React, { useReducer, useEffect } from 'react';
import Header from './components/Header';
import Preview from './components/Preview';
import MediaWrapper from './components/MediaWrapper';

import './App.scss';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const themes = {
    dark: {
        primaryColor: '#520513',
        secondaryColor: '#BA274A',
        backgroundColor: '#220C10',
        primaryText: '#fff',
        // Css filters are used to change img tagged SVG's to their appropriate color. filterClass's value is the
        // class name to apply. See App.scss for filter class declarations
        filterClass: 'white-filter',
    },
    // White theme not decided yet, values are currently used for debugging
    light: {
        backgroundColor: '#fff',
        primaryColor: 'blue',
        secondaryColor: 'yellow',
        primaryText: '#000',
        filterClass: 'black-filter',
    },
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
            <section id='app'>
                <Header />
                <Preview />
                <MediaWrapper />
            </section>
        </ThemeContext.Provider>
    );
}

export default App;

export { ThemeContext };
