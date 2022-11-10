import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <img src=
                       "https://raw.githubusercontent.com/RIAN-DIKA-ERLANGGA/VisualNovel/main/pwl%20new%20logo%20(1)%20(1).png" alt="logo.png"/>
                </NavLogo>
                <Bars />

                <NavMenu>
                    <NavLink
                        to="/"
                        activeStyle={{ color: 'blue' }}
                    >
                        Beranda
                    </NavLink>
                    <NavLink
                        to="/profil"
                        activeStyle={{ color: 'black' }}
                    >
                        Profil
                    </NavLink>
                    <NavLink
                        to="/kelas"
                        activeStyle={{ color: 'black' }}
                    >
                        Kelas
                    </NavLink>
                    <NavLink
                        to="/daftar"
                        activeStyle={{ color: 'black' }}
                    >
                        Daftar
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/masuk">Masuk</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;