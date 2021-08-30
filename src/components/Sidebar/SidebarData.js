import React from "react";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Partners",
    path: "/partners",
  },
  {
    title: "Programs",
    path: "/programs",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "MBA",
        path: "/programs/MBA",
      },
      {
        title: "MSSE",
        path: "/programs/MSSE",
      },
      {
        title: "Computer Science",
        path: "/programs/computer-science",
      },
      {
        title: "Information Technology",
        path: "/programs/information-technology",
      },
      {
        title: "Electrical Technology",
        path: "/programs/electrical-engineering",
      },
      {
        title: "Technology",
        path: "/programs/technology",
      },
      {
        title: "Telecomunications Engineering",
        path: "/programs/telecomunication-engineering",
      },
      {
        title: "Mechanical Engineering Technology",
        path: "/programs/mechanical-engineering",
      },
      {
        title: "Economics and Management",
        path: "/programs/economics-and-management",
      },
      {
        title: "Business Excellence",
        path: "/programs/business-excellence",
      },
      {
        title: "Academy",
        path: "/programs/academy",
      },
      {
        title: "CISCO",
        path: "/programs/CISCO",
      },
    ],
  },
  {
    title: "Employees",
    path: "/employees",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "President & VIP",
        path: "/employees/predident&VIP",
      },
      {
        title: "Administration",
        path: "/employees/administration",
      },
      {
        title: "Faculty",
        path: "/employees/faculty",
      },
      {
        title: "Research Center",
        path: "/employees/research-center",
      },
    ],
    },
    {
        title: "Students",
        path: "/students",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: "Rules and Regulations",
            path: "/students/rules-regulations",
          },
          {
            title: "Clubs",
            path: "/students/clubs",
          },
        ],
    },
    {
        title: "Downloads",
        path: "/downloads",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: "Graduate",
            path: "/downloads/graduate",
          },
          {
            title: "undergraduate",
            path: "/downloads/undergraduate",
          },
        ],
    },
    {
        title: "Research",
        path: "/research",
      },
  {
    title: "Facilites",
    path: "/facilites",
    },
    {
        title: "Contacts",
        path: "/contacts",
      },
];
