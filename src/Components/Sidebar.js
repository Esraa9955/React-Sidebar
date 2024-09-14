import React from 'react';
import '../App.css';
import { SidebarDataGeneral, SidebarDataSupport } from './SidebarData';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      
      <div className='logo'>
        <img src='https://images.stockcake.com/public/a/6/4/a64fb0c0-c80f-4cae-bfd5-ce5b8f574eb2_large/stormy-rear-view-stockcake.jpg' alt='Caltrac Logo' className='logo-image' />
        <h1 className='logo-text'>CALTRAC</h1>
      </div>

     
      <div className='sidebar-section'>
        <h2 className='section-title'>GENERAL</h2>
        <ul className='SidebarList'>
          {SidebarDataGeneral.map((val, key) => {
            return (
              <li className='SidebarItem' id={window.location.pathname === val.link ? "active" : ""} key={key} onClick={() => window.location.pathname = val.link}>
                <div id='icon'>{val.icon}</div>
                <div id='title'>{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>

      
      <div className='sidebar-section'>
        <h2 className='section-title'>SUPPORT</h2>
        <ul className='SidebarList'>
          {SidebarDataSupport.map((val, key) => {
            return (
              <li className='SidebarItem' id={window.location.pathname === val.link ? "active" : ""} key={key} onClick={() => window.location.pathname = val.link}>
                <div id='icon'>{val.icon}</div>
                <div id='title'>{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
