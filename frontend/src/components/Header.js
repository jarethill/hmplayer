import React, { useContext } from 'react';
import { ThemeContext } from '../App';

import hmPlayerLogo from '../assets/svg/hmplayer.svg';
import searchIcon from '../assets/svg/search.svg';
import hamburgerMenu from '../assets/svg/hamburger.svg';

// Css filters are used to change img tagged SVG's to their appropriate color. This function is used to provide the correct
// filter depending on users current theme text color
function chooseFilterFromTheme(theme) {
    switch (theme.primaryText) {
        case '#fff':
            return filters.toWhite;
        case '#000':
            return filters.toBlack;
        default:
            return filters.toWhite;
    }
}

// Styles
const headerStyles = {
    width: '100%',
    height: '6em',
};

const headerNavStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
};

const navUlStyles = {
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    margin: '0 1.5em 0 1.5em',
};

const filters = {
    toWhite: {
        filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(157deg) brightness(107%) contrast(102%)',
    },
    toBlack: {
        filter: 'filter: invert(0%) sepia(83%) saturate(7500%) hue-rotate(210deg) brightness(115%) contrast(115%)',
    },
};

export default function Header() {
    const { theme, dispatch } = useContext(ThemeContext);

    const iconStyles = {
        width: '41px',
        height: '41px',
        marginLeft: '1em',
        cursor: 'pointer',
        ...chooseFilterFromTheme(theme),
    };

    return (
        <header id='header' style={{ ...headerStyles, background: theme.primaryColor }}>
            <nav id='header-nav' style={headerNavStyles}>
                <ul style={navUlStyles}>
                    {/* Logo */}
                    <li>
                        <a href='/'>
                            <img src={hmPlayerLogo} alt='hmPlayer Logo' style={chooseFilterFromTheme(theme)} />
                        </a>
                    </li>

                    {/* Right Side Nav */}
                    <li>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <img src={searchIcon} alt='Search Magnifying Glass' style={iconStyles} />
                            <img src={hamburgerMenu} alt='Main Menu' style={iconStyles} />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
