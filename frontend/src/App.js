import React, { useReducer, useEffect } from 'react';
import Header from './components/Header';
import Preview from './components/Preview';
import MediaWrapper from './components/MediaWrapper';

import './styles/App.scss';
import './styles/MediaQueries.scss';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const themes = {
    maroon: {
        primaryColor: '#520513',
        secondaryColor: '#BA274A',
        backgroundColor: '#220C10',
        primaryText: '#fff',
        secondaryText: '#fff',
        // Css filters are used to change img tagged SVG's to their appropriate color. filterClass's value is the
        // class name to apply. See App.scss for filter class declarations
        filterClass: 'white-filter',
    },
    skyblue: {
        backgroundColor: '#0F4258',
        primaryColor: '#07A0C3',
        secondaryColor: '#16D4FF',
        primaryText: '#fff',
        secondaryText: '#fff',
        filterClass: 'white-filter',
    },
    green: {
        backgroundColor: '#286A37',
        primaryColor: '#87FF74',
        secondaryColor: '#B8FFAC',
        primaryText: '#0D0D0D',
        secondaryText: '#fff',
        filterClass: 'black-filter',
    },
};

function reducer(state, action) {
    const { theme } = action;

    switch (theme) {
        case 'maroon':
            return themes.maroon;
        case 'skyblue':
            return themes.skyblue;
        case 'green':
            return themes.green;
        default:
            throw new Error();
    }
}

const ThemeContext = React.createContext();

function App() {
    const [theme, dispatch] = useReducer(reducer, themes.skyblue);

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
