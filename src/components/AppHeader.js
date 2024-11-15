import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
  cilBell,
  cilContrast,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilMoon,
  cilSun,
} from '@coreui/icons';

import AppBreadcrumb from './AppBreadcrumb';

const AppHeader = ({ setSidebarShow }) => {
  const [colorMode, setColorMode] = useState('light'); // Local state for color mode

  const headerRef = useRef();


  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0);
    });
  }, []);

    const handleSidebarToggle = () => {
    setSidebarShow((prev) => !prev); // Toggle sidebar visibility
  };

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
      <CHeaderToggler
          onClick={handleSidebarToggle} // Add click handler
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
       
      </CContainer>
      <CContainer className="px-4" fluid>
      <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
