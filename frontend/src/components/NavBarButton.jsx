import React from 'react';

const NavBarButton = ({ label, name }) => {
  return (
    <a href={`#${label}`} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
      {name}
    </a>
  );
};

export default NavBarButton;