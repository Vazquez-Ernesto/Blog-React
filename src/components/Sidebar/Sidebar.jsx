import React from 'react';
import './Sidebar.css';

function Sidebar({ menuItems, onMenuItemClick, currentActiveItemId }) { // Recibe currentActiveItemId como prop
  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => onMenuItemClick(item.id)}
            className={item.id === currentActiveItemId ? 'active' : ''} // Añade la clase 'active' si coincide
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;