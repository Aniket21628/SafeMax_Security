import React from 'react';

const NavBarButton2 = ({ label, name }) => (
  <a
    href={`#${label}`}
    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  >
    {name}
  </a>
);

export default NavBarButton2;