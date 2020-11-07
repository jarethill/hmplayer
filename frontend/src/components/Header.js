import React, { useContext } from 'react';
import { ThemeContext } from '../App';

import hmPlayerLogo from '../assets/svg/hmplayer.svg';
import searchIcon from '../assets/svg/search.svg';
import hamburgerMenu from '../assets/svg/hamburger.svg';
import profileIcon from '../assets/svg/user-o.svg';

export default function Header() {
    const { theme } = useContext(ThemeContext);

    // Color for search icon inside search bar
    // Might refactor into theme context if other themes need seperate color
    const searchIconFilter = {
        '--filter-color': 'invert(80%) sepia(0%) saturate(1388%) hue-rotate(149deg) brightness(89%) contrast(71%)',
    };

    return (
        <header id='header' style={{ background: theme.primaryColor }}>
            <nav id='header-nav'>
                <ul>
                    {/* Logo */}
                    <li>
                        <a href='/'>
                            <img src={hmPlayerLogo} alt='hmPlayer Logo' className={theme.filterClass} />
                        </a>
                    </li>

                    {/* Search Bar */}
                    <li>
                        <div id='search-bar' style={searchIconFilter}>
                            <input type='text' placeholder='Search' />
                        </div>
                    </li>

                    {/* Category Nav */}
                    <li>
                        <nav id='category-nav'>
                            <ul>
                                <li>
                                    <a href='/'>TV Shows</a>
                                </li>
                                <li>
                                    <a href='/'>Movies</a>
                                </li>
                                <li>
                                    <a href='/'>My List</a>
                                </li>
                            </ul>
                        </nav>
                    </li>

                    {/* Right Side Nav */}
                    <li>
                        <div id='right-side-nav'>
                            <img
                                src={searchIcon}
                                alt='Search Magnifying Glass'
                                className={`${theme.filterClass} search-icon`}
                            />
                            <img src={profileIcon} alt='Profile' className={`${theme.filterClass} profile-icon`} />
                            <img src={hamburgerMenu} alt='Main Menu' className={theme.filterClass} />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
