import React from 'react';
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu';

import './sidebar.sass';

const Sidebar = () => (
  <Menu disableAutoFocus>
    <Link className="menu-item" to="/">
      Home
    </Link>
    <Link className="menu-item" to="/about">
      About
    </Link>
    <Link className="menu-item" to="/contact">
      Contact
    </Link>
  </Menu>
);

export default Sidebar;
