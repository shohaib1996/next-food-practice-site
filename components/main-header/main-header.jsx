

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoImage from '@/assets/logo.png'
import classes from "./main-header.module.css"
import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link'


function MainHeader() {

    return (
        <>
            <MainHeaderBackground></MainHeaderBackground>
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImage.src} alt='logo' width={100} height={100} priority />
                    Nextlavel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader