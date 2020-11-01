import React, { useContext } from 'react';
import { ThemeContext } from '../App';

import hmPlayerLogo from '../assets/svg/hmplayer.svg';
import searchIcon from '../assets/svg/search.svg';
import hamburgerMenu from '../assets/svg/hamburger.svg';

export default function Header() {
    const { theme } = useContext(ThemeContext);

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

                    {/* Right Side Nav */}
                    <li>
                        <div id='right-side-nav'>
                            <img src={searchIcon} alt='Search Magnifying Glass' className={theme.filterClass} />
                            <img src={hamburgerMenu} alt='Main Menu' className={theme.filterClass} />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
