import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.png';

const HomeLink = () => (
  <Link
    to="/"
    className="link-back-home"
  >
    <img
      src={logo}
      alt="Joshua"
    />
  </Link>
);

export default HomeLink;
