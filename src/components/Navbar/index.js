import React, { useState } from "react";
import {
	NavbarContainer,
	NavbarWrapper,
	NavbarElements,
	NavLinks,
	NavLinksDrop,
	NavTitle,
	DropdownContent,
} from "./NavbarElements";

const Navbar = () => {
	const [openProgram, setOpenPrograms] = useState(false);
	const [openEmployee, setOpenEmployee] = useState(false);

	const [openStudents, setOpenStudents] = useState(false);

	const [openResearch, setOpenResearch] = useState(false);

	const [openDownloads, setOpenDownloads] = useState(false);

	return (
		<>
			<NavbarContainer>
				<NavbarWrapper>
					<NavbarElements>
						<NavLinks to="/">Home</NavLinks>
					</NavbarElements>
					<NavbarElements>
						<NavLinks to="/partners">Partners</NavLinks>
					</NavbarElements>
					<NavbarElements>
						<NavLinks
							to="/programs"
							onMouseEnter={() => setOpenPrograms(true)}
							onMouseLeave={() => setOpenPrograms(false)}>
							Programs
						</NavLinks>
						<DropdownContent
							onMouseEnter={() => setOpenPrograms(true)}
							onMouseLeave={() => setOpenPrograms(false)}
							style={openProgram ? { display: "block" } : { display: "none" }}>
							<NavTitle>Graduate Programs</NavTitle>
							<NavLinksDrop to="/partners">MABA</NavLinksDrop>
							<NavLinksDrop to="/partners">MSSE</NavLinksDrop>
							<NavTitle>UnderGraduate Programs</NavTitle>
							<NavLinksDrop to="/partners">Computer Science</NavLinksDrop>

							<NavLinksDrop to="/partners">Information Technology</NavLinksDrop>

							<NavLinksDrop to="/partners">Electrical Technology</NavLinksDrop>

							<NavLinksDrop to="/partners">Technology</NavLinksDrop>

							<NavLinksDrop to="/partners">
								Telecomunications Engineering
							</NavLinksDrop>

							<NavLinksDrop to="/partners">
								Mechanical Engineering Technology
							</NavLinksDrop>
							<NavLinksDrop to="/partners">
								Economics and Management
							</NavLinksDrop>
							<NavTitle>Proffessional Training</NavTitle>
							<NavLinksDrop to="/partners">Business Excellence</NavLinksDrop>
							<NavLinksDrop to="/partners">Academy</NavLinksDrop>
							<NavLinksDrop to="/partners">CISCO</NavLinksDrop>
						</DropdownContent>
					</NavbarElements>
					<NavbarElements>
						<NavLinks
							onMouseEnter={() => setOpenEmployee(true)}
							onMouseLeave={() => setOpenEmployee(false)}
							to="/employees">
							Employees
						</NavLinks>
						<DropdownContent
							onMouseEnter={() => setOpenEmployee(true)}
							onMouseLeave={() => setOpenEmployee(false)}
							style={openEmployee ? { display: "block" } : { display: "none" }}>
							<NavTitle>Staff</NavTitle>
							<NavLinksDrop to="/partners">President & VIP</NavLinksDrop>
							<NavLinksDrop to="/partners">Administration</NavLinksDrop>
							<NavLinksDrop to="/partners">Faculty</NavLinksDrop>
							<NavLinksDrop to="/partners">Research Center</NavLinksDrop>
						</DropdownContent>
					</NavbarElements>
					<NavbarElements>
						<NavLinks
							onMouseEnter={() => setOpenStudents(true)}
							onMouseLeave={() => setOpenStudents(false)}
							to="/students">
							Students
						</NavLinks>
						<DropdownContent
							onMouseEnter={() => setOpenStudents(true)}
							onMouseLeave={() => setOpenStudents(false)}
							style={openStudents ? { display: "block" } : { display: "none" }}>
							<NavTitle>Admission Info</NavTitle>
							<NavLinksDrop to="/partners">
								Administration and Enrollment
							</NavLinksDrop>
							<NavLinksDrop to="/partners">Rules and Regulation</NavLinksDrop>
							<NavLinksDrop to="/partners">Clubs</NavLinksDrop>
						</DropdownContent>
					</NavbarElements>
					<NavbarElements>
						<NavLinks
							onMouseEnter={() => setOpenDownloads(true)}
							onMouseLeave={() => setOpenDownloads(false)}
							to="/downloads">
							Downloads
						</NavLinks>
						<DropdownContent
							onMouseEnter={() => setOpenDownloads(true)}
							onMouseLeave={() => setOpenDownloads(false)}
							style={openDownloads ? { display: "block" } : { display: "none" }}>
							<NavTitle>Application Forms for Admission</NavTitle>
							<NavLinksDrop to="/partners"> Graduate</NavLinksDrop>
							<NavLinksDrop to="/partners">UnderGraduate</NavLinksDrop>
							<NavTitle>Registration Forms</NavTitle>

							<NavLinksDrop to="/partners">Graduate</NavLinksDrop>
							<NavLinksDrop to="/partners">UnderGraduate</NavLinksDrop>
						</DropdownContent>
					</NavbarElements>
					<NavbarElements>
						<NavLinks
							onMouseEnter={() => setOpenResearch(true)}
							onMouseLeave={() => setOpenResearch(false)}
							to="/research">
							Research
						</NavLinks>
						<DropdownContent
							onMouseEnter={() => setOpenResearch(true)}
							onMouseLeave={() => setOpenResearch(false)}
							style={openResearch ? { display: "block" } : { display: "none" }}>
							<NavTitle>Annual Conference</NavTitle>
							<NavLinksDrop to="/partners">Conference</NavLinksDrop>
						</DropdownContent>
					</NavbarElements>
					<NavbarElements>
						<NavLinks to="/facilities">Facilities</NavLinks>
					</NavbarElements>
					<NavbarElements>
						<NavLinks to="/contacts">Contacts</NavLinks>
					</NavbarElements>
				</NavbarWrapper>
			</NavbarContainer>
		</>
	);
};

export default Navbar;
