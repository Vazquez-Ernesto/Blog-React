// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import content from './components/Content/content.jsx'; // Importa el objeto 'content' desde content.js
import './App.css';






const menuItems = [
  { id: 'history-react', label: 'Historia de React' },
  { id: 'react-info', label: '¿Qué es React?' },
  { id: 'what-can-we-do', label: '¿Qué podemos hacer?' },
  { id: 'components', label: 'Componentes' },
  { id: 'jsx', label: 'JSX' },
  { id: 'hooks', label: 'Hooks' },
  { id: 'props', label: 'Props' },
  { id: 'state', label: 'Estado' },
  { id: 'lifecycle', label: 'Ciclo de Vida' },
  { id: 'events', label: 'Eventos' },
  { id: 'forms', label: 'Formularios' },
  { id: 'lists-keys', label: 'Listas y Keys' },
  { id: 'react-router', label: 'React Router' },
  { id: 'fetching-data', label: 'Peticiones HTTP' },
  { id: 'conditional-rendering', label: 'Renderizado Condicional' }, // Nueva sección "Renderizado Condicional"
  { id: 'composition-vs-inheritance', label: 'Composición vs. Herencia' }, // Nueva sección "Composición vs. Herencia"
  { id: 'refs-in-react', label: 'Refs en React' }, // Nueva sección "Refs en React"
  { id: 'error-boundaries', label: 'Error Boundaries' }, // Nueva sección "Error Boundaries"
  { id: 'Portals-in-react', label: 'Portales en React' }, // Nueva sección "Portales en React"
];

function App() {
  const [currentContentId, setCurrentContentId] = useState('react-info');

  const handleMenuItemClick = (id) => {
    setCurrentContentId(id);
  };

  const renderContent = () => {
    return content[currentContentId] || content['react-info'];
  };

  return (
    <div className="app-container">
      <Sidebar
        menuItems={menuItems}
        onMenuItemClick={handleMenuItemClick}
        currentActiveItemId={currentContentId}
      />
      <div className="main-content">
      <h1>Ernesto Vázquez</h1> <a href="https://www.linkedin.com/in/ernestoavazquez/" target="_blank">LinkedIn</a>  <a href="https://github.com/Vazquez-Ernesto" target="_blank">GitHub</a>  <a href="https://vazquez-ernesto.github.io/-Portafolio-QA-Automation/" target="_blank">Portafolio</a>

        <h2>Blog de React</h2>
        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;