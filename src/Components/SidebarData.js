import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import PushPinIcon from '@mui/icons-material/PushPin';
import LogoutIcon from '@mui/icons-material/Logout'; 

export const SidebarDataGeneral = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon  />, 
        link: "/home"
    },
    {
        title: 'Tracking',
        icon: <PushPinIcon />,
        link: "/tracking"
    },
    {
        title: 'Calendar',
        icon: <EditCalendarIcon  />,
        link: "/calendar"
    }
];

export const SidebarDataSupport = [
    {
        title: 'Log out',
        icon: <LogoutIcon  />,
        link: "/logout"
    }
];
