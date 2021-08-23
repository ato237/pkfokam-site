import React from 'react'
import { NavbarContainer, NavbarWrapper, NavbarElements, NavLinks } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarElements>
                        <NavLinks to ='/'>Home</NavLinks>
                    </NavbarElements>
                    <NavbarElements>
                        <NavLinks to ='/partners'>Partners</NavLinks>
                    </NavbarElements>
                    <NavbarElements>
                        <NavLinks to ='/programs'>Programs</NavLinks>
                    </NavbarElements>
                    <NavbarElements>
                        <NavLinks to ='/employees'>Employees</NavLinks>
                    </NavbarElements>
                    <NavbarElements>
                        <NavLinks to ='/students'>Students</NavLinks>
                    </NavbarElements>
                    <NavbarElements>
                        <NavLinks to ='/downloads'>Downloads</NavLinks>
                    </NavbarElements>
                    <NavbarElements>
                        <NavLinks to ='/research'>Research</NavLinks>
                    </NavbarElements>
                    <NavbarElements>
                        <NavLinks to ='/facilities'>Facilities</NavLinks>
                    </NavbarElements>
                    <NavbarElements>
                        <NavLinks to ='/contacts'>Contacts</NavLinks>
                    </NavbarElements>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    )
}

export default Navbar
