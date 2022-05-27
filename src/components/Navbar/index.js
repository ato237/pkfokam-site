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
							<NavLinksDrop to="/programs/MBA">MABA</NavLinksDrop>
							<NavLinksDrop to="/programs/MSSE">MSSE</NavLinksDrop>
							<NavTitle>UnderGraduate Programs</NavTitle>
							<NavLinksDrop to="/programs/computer-science">Computer Science</NavLinksDrop>

							<NavLinksDrop to="/programs/information-technology">Information Technology</NavLinksDrop>

							<NavLinksDrop to="/programs/electrical-engineering">Electrical Technology</NavLinksDrop>

							<NavLinksDrop to="/programs/technology">Technology</NavLinksDrop>

							<NavLinksDrop to="/programs/telecomunication-engineering">
								Telecomunications Engineering
							</NavLinksDrop>

							<NavLinksDrop to="/programs/mechanical-engineering">
								Mechanical Engineering Technology
							</NavLinksDrop>
							<NavLinksDrop to="/programs/economics-and-management">
								Economics and Management
							</NavLinksDrop>
							<NavTitle>Proffessional Training</NavTitle>
							<NavLinksDrop to="/programs/business-excellence">Business Excellence</NavLinksDrop>
							<NavLinksDrop to="/programs/academy">Academy</NavLinksDrop>
							<NavLinksDrop to="/programs/CISCO">CISCO</NavLinksDrop>
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
							<NavLinksDrop to="/employees/predident&VIP">President & VIP</NavLinksDrop>
							<NavLinksDrop to="/employees/administration">Administration</NavLinksDrop>
							<NavLinksDrop to="/employees/faculty">Faculty</NavLinksDrop>
							<NavLinksDrop to="/employees/research-center">Research Center</NavLinksDrop>
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
							<NavLinksDrop to="/students/rules-regulations">Rules and Regulation</NavLinksDrop>
							<NavLinksDrop to="/students/clubs">Clubs</NavLinksDrop>
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
