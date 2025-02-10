import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';




const content = {
  'react-info': (
    <div>
      <h2>¿Qué es React?</h2>
      <p>React es una <strong>biblioteca de JavaScript</strong> para construir <strong>interfaces de usuario interactivas</strong>.</p>
      <p>Imagina que tienes una aplicación web que muestra datos que cambian con el tiempo.  Con React, puedes describir cómo debería verse la interfaz de usuario para cada "estado" de tu aplicación, y React se encarga de actualizar y renderizar eficientemente solo las partes necesarias cuando los datos cambian.</p>
      <p><strong>¿Para qué se usa React?</strong></p>
      <ul>
        <li><strong>Aplicaciones web de una sola página (SPA):</strong> Crea experiencias web rápidas y dinámicas.</li>
        <li><strong>Aplicaciones móviles:</strong> Con <strong>React Native</strong>, usa React para desarrollar apps nativas para iOS y Android.</li>
        <li><strong>Renderizado en el servidor:</strong>  Mejora el SEO y el rendimiento inicial de tu aplicación.</li>
      </ul>

      <h3>Ejemplo básico de un componente React:</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}`}
      </SyntaxHighlighter>
      <p>Este es un <strong>componente React funcional</strong>. Retorna un botón usando <strong>JSX</strong>.  Para mostrarlo, usa <code>&lt;MyButton /&gt;</code>.</p>
      <p>[Más información en la documentación oficial de React](https://react.dev/learn/start-a-new-react-project).</p>
    </div>
  ),
  'components': (
    <div>
      <h2>Componentes en React</h2>
      <p><strong>Los componentes son la base de React.</strong>  Son bloques de construcción <strong>reutilizables e independientes</strong> para tu interfaz de usuario.</p>
      <p>Piensa en ellos como piezas LEGO<sup>®</sup> para construir interfaces.  Cada componente es como una <strong>función de JavaScript</strong> que acepta datos de entrada (<strong>"props"</strong>) y decide qué mostrar en la pantalla (retornando <strong>elementos React</strong>).</p>
      <p><strong>Tipos principales de componentes:</strong></p>
      <ul>
        <li><strong>Componentes Funcionales:</strong>  <em>Más simples y comunes.</em> Funciones de JavaScript que retornan JSX.</li>
        <li><strong>Componentes de Clase:</strong>  <em>Menos comunes en React moderno.</em> Clases de JavaScript (extienden <code>React.Component</code>) con un método <code>render()</code>.</li>
      </ul>
      <h3>Ejemplo de Componente Funcional:</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`function Welcome(props) {
  return <h1>Hola, {props.name}</h1>;
}

function App() {
  return (
    <Welcome name="Sara" />
  );
}`}
      </SyntaxHighlighter>
      <p><code>Welcome</code> es un componente funcional que saluda usando la prop <code>name</code>.  <code>App</code> usa <code>Welcome</code> y le pasa <code>name="Sara"</code>.</p>
      <p>[Más información sobre componentes en la documentación oficial de React](https://react.dev/learn/your-first-component).</p>
    </div>
  ),
  'jsx': (
    <div>
      <h2>JSX: JavaScript XML</h2>
      <p><strong>JSX es una extensión de sintaxis para JavaScript</strong> que se parece a <strong>HTML</strong>.</p>
      <p>No es HTML real, pero te permite <strong>describir la interfaz de usuario de manera declarativa</strong>, como si estuvieras escribiendo HTML, pero con todo el poder de JavaScript.</p>
      <p><strong>JSX se transforma en "elementos React"</strong> que React usa para construir el DOM real.</p>
      <p><em>No es obligatorio usar JSX</em>, pero la mayoría lo prefiere por su legibilidad y facilidad de uso.</p>

      <h3>Ejemplo de JSX:</h3>
      <SyntaxHighlighter language="jsx" style={atomDark}>
{`const element = (
  <h1>
    Hola, JSX!
  </h1>
);`}
      </SyntaxHighlighter>
      <p>Este JSX crea un elemento React <code>h1</code> con el texto "Hola, JSX!".</p>
      <p>[Más información sobre JSX en la documentación oficial de React](https://react.dev/learn/describing-the-ui).</p>
    </div>
  ),
  'hooks': (
    <div>
      <h2>Hooks en React</h2>
      <p><strong>Los Hooks son una característica de React 16.8+ que revolucionó la forma de escribir componentes funcionales.</strong></p>
      <p><em>Antes de los Hooks,</em> el estado y otras características de React solo estaban disponibles en componentes de clase. <strong>Los Hooks permiten usar estado y ciclo de vida <em>dentro de componentes funcionales</em>.</strong></p>
      <p>Son funciones que te permiten "engancharte" a características de React desde componentes funcionales.</p>
      <p><strong>Hooks principales que proporciona React:</strong></p>
      <ul>
        <li><code>useState</code>:  <strong>Añade estado local</strong> a componentes funcionales.</li>
        <li><code>useEffect</code>:  Permite realizar <strong>"efectos secundarios"</strong> (como peticiones a APIs, suscripciones, etc.) en componentes funcionales.</li>
        <li><code>useContext</code>, <code>useReducer</code>, <code>useRef</code>, etc.:  Para casos de uso más avanzados.</li>
        <li><em>¡Y puedes crear tus propios <strong>Hooks personalizados</strong>!</em></li>
      </ul>
      <h3>Ejemplo de useState Hook:</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0); // useState Hook

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}`}
      </SyntaxHighlighter>
      <p><code>useState(0)</code> declara una variable de estado <code>count</code> (inicializada en <code>0</code>) y la función <code>setCount</code> para actualizarla.</p>
      <p>[Más información sobre Hooks en la documentación oficial de React](https://react.dev/learn/state-a-component-memory).</p>
    </div>
  ),
  'history-react': (
    <div>
      <h2>Historia de React</h2>

      <h3>Orígenes en Facebook (2011-2012)</h3>
      <p>React nació en <strong>Facebook</strong> en <strong>2011</strong>.  <strong>Jordan Walke</strong>, un ingeniero de software, lo creó para resolver los retos de las interfaces de usuario dinámicas y complejas de Facebook.</p>
      <p>El prototipo inicial, llamado <strong>"FaxJS"</strong>, se inspiró en <strong>XHP</strong>, una librería HTML para PHP.</p>

      <h3>Adopción en Instagram y Open Source (2012-2013)</h3>
      <p>En <strong>2012</strong>, React empezó a usarse también en <strong>Instagram</strong>. Su éxito interno convenció a Facebook de su potencial.</p>
      <p>En <strong>mayo de 2013</strong>, Facebook tomó la decisión clave de liberar <strong>React como código abierto</strong>, permitiendo que el mundo entero se beneficiara de esta tecnología.</p>

      <h3>Crecimiento y React Native (2014-2015)</h3>
      <p>La comunidad de React creció rápidamente tras su lanzamiento open source.  Desarrolladores de todo el mundo empezaron a adoptarlo y contribuir.</p>
      <p>En <strong>febrero de 2015</strong>, Facebook anunció <strong>React Native</strong>, una extensión de React para construir <strong>aplicaciones móviles nativas</strong> (iOS, Android, UWP).  React Native se hizo open source en marzo de 2015.</p>

      <h3>Popularidad y Ecosistema (2016-Presente)</h3>
      <p>Desde entonces, React se ha consolidado como <strong>una de las bibliotecas de JavaScript más populares</strong> para interfaces de usuario.</p>
      <p>Grandes empresas como <strong>Airbnb, Netflix, Dropbox</strong> y muchas más lo adoptaron, creando un ecosistema robusto con miles de librerías y herramientas.</p>
      <p>[Puedes leer más sobre la historia y el futuro de React en el blog oficial de React](https://reactjs.org/blog/).</p>
    </div>
  ),
  'what-can-we-do': (
    <div>
      <h2>¿Qué podemos hacer con React?</h2>
      <p>React es increíblemente versátil y se utiliza para construir una amplia variedad de aplicaciones web y móviles.  Aquí te mostramos algunas de las cosas más comunes y emocionantes que puedes hacer con React:</p>

      <ul>
        <li><strong>Interfaces de Usuario Dinámicas e Interactivas:</strong>  React facilita la creación de UIs que responden a las acciones del usuario en tiempo real, actualizando solo las partes necesarias de la página de manera eficiente.</li>
        <li><strong>Aplicaciones de una Sola Página (SPA):</strong>  Construye aplicaciones web que se sienten como aplicaciones de escritorio, con navegación fluida y sin recargas de página completas.</li>
        <li><strong>Componentes Reutilizables:</strong>  Crea componentes UI que puedes usar una y otra vez en diferentes partes de tu aplicación, ahorrando tiempo y manteniendo la consistencia.</li>
        <li><strong>Aplicaciones Móviles Nativas con React Native:</strong>  Utiliza tus conocimientos de React para desarrollar aplicaciones para iOS y Android que se comportan y se ven como aplicaciones nativas, no como webs apps dentro de un navegador.</li>
        <li><strong>Sitios Web Estáticos y Blogs:</strong>  Genera sitios web estáticos muy rápidos, ideales para blogs, portafolios o sitios de documentación.</li>
        <li><strong>Aplicaciones Complejas con Gestión de Estado Robusta:</strong>  React se integra muy bien con librerías de gestión de estado como Redux o Context API para construir aplicaciones grandes y complejas con flujos de datos predecibles.</li>
        <li><strong>... ¡y mucho más!</strong>  La comunidad de React es enorme y siempre está creando nuevas librerías y herramientas para extender sus capacidades.</li>
      </ul>

      <h3>Ejemplos de código:</h3>

      <h4>Ejemplo 1: Componente de saludo simple</h4>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`function Saludo(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}

function App() {
  return (
    <Saludo nombre="Usuario" />
  );
}`}
      </SyntaxHighlighter>

      <h4>Ejemplo 2: Lista de elementos</h4>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`function ListaDeCompras() {
  const items = ["Manzanas", "Bananas", "Naranjas"];
  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}`}
      </SyntaxHighlighter>

      <h4>Ejemplo 3:  Contador básico con estado (sin interactividad en vivo)</h4>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>
        Incrementar
      </button>
    </div>
  );
}`}
      </SyntaxHighlighter>


      <p>[Explora más sobre las capacidades de React en la documentación oficial](https://react.dev/learn/thinking-in-react).</p>
    </div>
  ),
  'props': (  <div>
      <h2>Props en React (Propiedades)</h2>
      <p><strong>Las "props" (abreviatura de "properties" o propiedades) son una forma de pasar datos desde un componente padre a un componente hijo en React.</strong></p>
      <p>Piensa en las props como <strong>argumentos de funciones para componentes React</strong>.  Permiten personalizar y configurar los componentes hijos desde el componente padre.</p>
      <p>Las props son <strong>inmutables</strong> desde la perspectiva del componente hijo.  Un componente hijo solo debe <strong>leer</strong> las props que recibe, pero <strong>no modificarlas directamente</strong>.  Si un componente necesita cambiar sus propios datos, debe usar <strong>estado (state)</strong>.</p>

      <h3>Ejemplo de Props:</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`function SaludoPersonalizado(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}

function App() {
  return (
    <div>
      <SaludoPersonalizado nombre="Ana" />
      <SaludoPersonalizado nombre="Carlos" />
    </div>
  );
}`}
      </SyntaxHighlighter>
      <p>En este ejemplo, <code>SaludoPersonalizado</code> es un componente que recibe una prop llamada <code>nombre</code>.  En el componente <code>App</code>, usamos <code>SaludoPersonalizado</code> dos veces, pasando diferentes valores para la prop <code>nombre</code> ("Ana" y "Carlos").</p>
      <p>[Más información sobre props en la documentación oficial de React](https://react.dev/learn/passing-props-to-a-component).</p>
    </div>
  ),
  'state': (  <div>
      <h2>Estado en React (State)</h2>
      <p><strong>El "estado" (state) en React es una forma de gestionar datos que pueden cambiar dentro de un componente y que afectan a lo que se muestra en la interfaz de usuario.</strong></p>
      <p>A diferencia de las props, que son pasadas desde fuera y son inmutables para el componente, <strong>el estado es gestionado *internamente* por el propio componente y puede ser modificado.</strong>  Cuando el estado de un componente cambia, React automáticamente re-renderiza el componente y sus hijos para reflejar los cambios en la UI.</p>
      <p>En componentes funcionales, el estado se gestiona principalmente usando el <strong>Hook `useState`</strong>.</p>

      <h3>Ejemplo de Estado con useState:</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0); // Declaración de estado

  const incrementarContador = () => {
    setContador(contador + 1); // Actualización del estado
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}`}
      </SyntaxHighlighter>
      <p>Aquí, <code>useState(0)</code> inicializa el estado <code>contador</code> con el valor <code>0</code> y devuelve la función <code>setContador</code> para actualizarlo. Al llamar a <code>setContador</code>, React re-renderiza el componente <code>Contador</code>.</p>
      <p>[Más información sobre el estado en la documentación oficial de React](https://react.dev/learn/state-a-component-memory).</p>
    </div>
  ),
  'lifecycle': (  <div>
      <h2>Ciclo de Vida de Componentes en React</h2>
      <p><strong>El "ciclo de vida" de un componente React se refiere a las diferentes etapas por las que pasa un componente desde que se crea y se monta en el DOM, hasta que se actualiza y finalmente se desmonta (se elimina del DOM).</strong></p>
      <p>Entender el ciclo de vida es importante para realizar acciones específicas en momentos clave de la vida de un componente, como:</p>
      <ul>
        <li><strong>Inicialización:</strong> Establecer el estado inicial, configurar timers, etc.</li>
        <li><strong>Actualización:</strong>  Responder a cambios en props o estado, realizar peticiones a APIs, actualizar el DOM, etc.</li>
        <li><strong>Limpieza (Desmontaje):</strong>  Cancelar suscripciones, invalidar timers, liberar recursos, etc.</li>
      </ul>
      <p>En <strong>componentes de clase</strong>, el ciclo de vida se gestionaba con métodos especiales como <code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>, etc.  En <strong>componentes funcionales</strong>, el Hook <code>useEffect</code> es el principal mecanismo para manejar efectos secundarios y simular comportamientos del ciclo de vida.</p>

      <h3>Ejemplo de useEffect (simulando componentDidMount y componentWillUnmount):</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`import React, { useState, useEffect } from 'react';

function EjemploCicloDeVida() {
  const [mensaje, setMensaje] = useState("Componente montado");

  useEffect(() => {
    console.log("Componente montado (similar a componentDidMount)");

    // Función de limpieza (similar a componentWillUnmount)
    return () => {
      console.log("Componente desmontado (similar a componentWillUnmount)");
    };
  }, []); // El array vacío [] indica que este efecto se ejecuta solo una vez al montar y desmontar

  return (
    <p>{mensaje}</p>
  );
}`}
      </SyntaxHighlighter>
      <p>El <code>useEffect</code> con el array de dependencias vacío <code>[]</code> se ejecuta solo una vez al montar el componente y la función de retorno se ejecuta al desmontar, simulando <code>componentDidMount</code> y <code>componentWillUnmount</code> de componentes de clase.</p>
      <p>[Más información sobre el ciclo de vida en la documentación oficial de React](https://react.dev/learn/lifecycle-of-reactive-effects).</p>
    </div>
  ),
  'events': (  <div>
      <h2>Manejo de Eventos en React</h2>
      <p><strong>React permite manejar eventos del DOM de forma declarativa y eficiente.</strong>  En lugar de manipular eventos directamente en el DOM, en React se adjuntan <strong>"event handlers" (manejadores de eventos) a elementos JSX</strong>.</p>
      <p>React sintetiza los eventos para que funcionen de manera consistente en diferentes navegadores y proporciona un sistema de eventos propio que es más eficiente.</p>
      <p>Los nombres de los eventos en React siguen la convención <code>camelCase</code> (ej. <code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>) en lugar de los nombres en minúsculas de HTML (ej. <code>onclick</code>, <code>onchange</code>, <code>onsubmit</code>).</p>

      <h3>Ejemplo de Manejo de Evento onClick:</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`import React, { useState } from 'react';

function BotonInteractivo() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    alert("¡Botón clickeado!");
  };

  return (
    <button onClick={handleClick}> {/* Event handler onClick */}
      Clickeame ({clicks} clicks)
    </button>
  );
}`}
      </SyntaxHighlighter>
      <p>Aquí, la función <code>handleClick</code> se ejecuta cuando se hace clic en el botón.  Se actualiza el estado <code>clicks</code> y se muestra una alerta.</p>
      <p>[Más información sobre manejo de eventos en la documentación oficial de React](https://react.dev/learn/adding-interactivity).</p>
    </div>
  ),
  'forms': ( // Sección "Formularios"
    <div>
      <h2>Formularios en React</h2>
      <p><strong>React facilita la creación y el manejo de formularios interactivos en tus aplicaciones web.</strong>  En React, generalmente se utilizan <strong>componentes controlados</strong> para manejar formularios, lo que significa que el estado del formulario se almacena en el estado del componente React.</p>
      <p>Esto permite un control total sobre los datos del formulario y facilita la validación y otras funcionalidades.</p>

      <h3>Ejemplo de Formulario Controlado Simple:</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`import React, { useState } from 'react';

function FormularioDeNombre() {
  const [nombre, setNombre] = useState('');

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita la recarga de página por defecto
    alert(\`Nombre ingresado: \${nombre}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}`}
      </SyntaxHighlighter>
      <p>En este ejemplo, el valor del input de texto está controlado por el estado <code>nombre</code>. La función <code>handleChange</code> actualiza el estado cada vez que el usuario escribe en el input.</p>
      <p>[Más información sobre formularios en la documentación oficial de React](https://react.dev/learn/managing-form-state).</p>
    </div>
  ),
  'lists-keys': ( // Sección "Listas y Keys"
    <div>
      <h2>Listas y Keys en React</h2>
      <p><strong>En React, es común renderizar listas de elementos dinámicamente.</strong>  Cuando renderizas listas, React necesita una forma de identificar qué elementos han cambiado, se han añadido o se han eliminado.  Aquí es donde entran en juego las <strong>"keys" (claves).</strong></p>
      <p>Las "keys" son atributos que debes añadir a los elementos dentro de un bloque <code>map()</code> al renderizar listas.  Las keys deben ser <strong>únicas entre sus hermanos</strong> (elementos adyacentes en la misma lista) y deben ser <strong>estables</strong> entre re-renderizados.</p>
      <p>Usar keys correctamente ayuda a React a optimizar la re-renderización de listas y a mejorar el rendimiento.</p>

      <h3>Ejemplo de Lista con Keys:</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`function ListaDeTareas(props) {
  const tareas = props.tareas;
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <li key={tarea.id}> {/* Usando tarea.id como key (asumiendo que cada tarea tiene un id único) */}
          {tarea.texto}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const tareasEjemplo = [
    { id: 1, texto: "Hacer la compra" },
    { id: 2, texto: "Lavar el coche" },
    { id: 3, texto: "Pasear al perro" },
  ];

  return (
    <ListaDeTareas tareas={tareasEjemplo} />
  );
}`}
      </SyntaxHighlighter>
      <p>En este ejemplo, asumimos que cada tarea en el array <code>tareas</code> tiene una propiedad <code>id</code> única. Usamos <code>tarea.id</code> como la key para cada elemento <code>&lt;li&gt;</code> en la lista.</p>
      <p>[Más información sobre listas y keys en la documentación oficial de React](https://react.dev/learn/rendering-lists).</p>
    </div>
  ),
  'react-router': ( // Sección "React Router"
    <div>
      <h2>Routing en React con React Router</h2>
      <p><strong>React Router es la librería más popular para añadir navegación y routing a aplicaciones React de una sola página (SPA).</strong>  Permite definir rutas (URLs) para diferentes "páginas" o "vistas" dentro de tu aplicación, sin recargar la página completa del navegador.</p>
      <p>React Router proporciona componentes como <code>BrowserRouter</code>, <code>Route</code> y <code>Link</code> para configurar y gestionar la navegación en tu aplicación React.</p>

      <h3>Ejemplo Básico de React Router:</h3>
      <SyntaxHighlighter language="jsx" style={atomDark}>
{`import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Inicio() {
  return <h2>Inicio</h2>;
}

function AcercaDe() {
  return <h2>Acerca de</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/acerca-de">Acerca de</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
      </Routes>
    </BrowserRouter>
  );
}`}
      </SyntaxHighlighter>
      <p>Este ejemplo muestra cómo configurar rutas básicas con <code>BrowserRouter</code>, <code>Routes</code> y <code>Route</code>, y cómo usar <code>Link</code> para la navegación entre rutas.</p>
      <p>[Más información sobre React Router en la documentación oficial](https://reactrouter.com/en/main/start/tutorial).</p>
    </div>
  ),
  'fetching-data': ( // Sección "Peticiones HTTP"
    <div>
      <h2>Peticiones HTTP en React (Fetching Data)</h2>
      <p><strong>En muchas aplicaciones React, necesitarás obtener datos desde un servidor o una API externa.</strong>  React no proporciona una forma nativa de hacer peticiones HTTP, pero puedes usar APIs estándar de JavaScript como <code>fetch</code> o librerías populares como <code>axios</code>.</p>
      <p>El Hook <code>useEffect</code> es ideal para realizar peticiones HTTP dentro de componentes funcionales, ya que te permite ejecutar "efectos secundarios" (como las peticiones a APIs) después de que React haya renderizado el componente.</p>

      <h3>Ejemplo de Petición HTTP con fetch y useEffect:</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`import React, { useState, useEffect } from 'react';

function ListaDeUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/usuarios'); // Reemplaza con una API real
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const data = await response.json();
        setUsuarios(data);
        setCargando(false);
      } catch (e) {
        setError(e);
        setCargando(false);
      }
    };

    fetchData();
  }, []); // El array vacío [] asegura que el efecto se ejecute solo una vez al montar el componente

  if (cargando) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p>Error al cargar usuarios: {error.message}</p>;
  }

  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.nombre}</li>
      ))}
    </ul>
  );
}`}
      </SyntaxHighlighter>
      <p>Este ejemplo muestra cómo usar <code>fetch</code> y <code>useEffect</code> para obtener datos de una API, manejar estados de carga y error, y mostrar una lista de usuarios.</p>
      <p>[Más información sobre peticiones HTTP en JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).</p>
    </div>
  ),
  'conditional-rendering': ( // Nueva sección "Renderizado Condicional"
    <div>
      <h2>Renderizado Condicional en React</h2>
      <p><strong>El renderizado condicional te permite mostrar diferentes cosas en la interfaz de usuario dependiendo de ciertas condiciones.</strong>  En React, puedes usar JavaScript estándar para implementar el renderizado condicional, como sentencias <code>if</code>, operadores ternarios o operadores lógicos (<code>&&</code>).</p>
      <p>Esto es fundamental para crear interfaces de usuario dinámicas que se adaptan a diferentes estados de la aplicación o a las interacciones del usuario.</p>

      <h3>Ejemplo de Renderizado Condicional con operador ternario:</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`function MensajeDeBienvenida(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <p>¡Bienvenido de vuelta!</p>
      ) : (
        <p>Por favor, inicia sesión.</p>
      )}
    </div>
  );
}

function App() {
  return (
    <MensajeDeBienvenida isLoggedIn={true} />
  );
}`}
      </SyntaxHighlighter>
      <p>En este ejemplo, el componente <code>MensajeDeBienvenida</code> muestra un mensaje diferente dependiendo del valor de la prop <code>isLoggedIn</code>.  Se utiliza el operador ternario <code>? :</code> para renderizar condicionalmente uno u otro párrafo.</p>
      <p>[Más información sobre renderizado condicional en la documentación oficial de React](https://react.dev/learn/conditional-rendering).</p>
    </div>
  ),
  'composition-vs-inheritance': ( // Nueva sección "Composición vs Herencia"
    <div>
      <h2>Composición vs. Herencia en React</h2>
      <p><strong>En React, la composición es el patrón fundamental para reutilizar código entre componentes, en lugar de la herencia.</strong>  La composición permite construir interfaces de usuario complejas combinando componentes más pequeños y reutilizables de una manera flexible y declarativa.</p>
      <p>React favorece la composición "tiene-un" o "usa-un" en lugar de la herencia "es-un". Esto lleva a un código más fácil de entender, mantener y reutilizar.</p>

      <h3>Ejemplo de Composición: Contenedores y Especialización</h3>
      <SyntaxHighlighter language="jsx" style={atomDark}>
{`function Contenedor(props) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      {props.children} {/* Renderiza cualquier cosa que se pase como hijo */}
    </div>
  );
}

function PanelDeInformacion(props) {
  return (
    <Contenedor>
      <h2>{props.titulo}</h2>
      <p>{props.contenido}</p>
    </Contenedor>
  );
}

function App() {
  return (
    <div>
      <PanelDeInformacion titulo="Título del Panel" contenido="Este es el contenido del panel." />
    </div>
  );
}`}
      </SyntaxHighlighter>
      <p>Aquí, <code>PanelDeInformacion</code> *compone* <code>Contenedor</code>. <code>Contenedor</code> es un componente genérico que simplemente renderiza a sus hijos dentro de un <code>div</code> con estilo. <code>PanelDeInformacion</code> lo *especializa* para mostrar un panel con título y contenido.</p>
      <p>[Más información sobre composición vs herencia en React en la documentación oficial](https://react.dev/learn/reusing-logic-with-custom-hooks).</p>
    </div>
  ),
'refs-in-react': ( // Nueva sección "Refs en React"
    <div>
      <h2>Refs en React</h2>
      <p><strong>Los "refs" (referencias) en React proporcionan una forma de acceder directamente a los nodos del DOM o a las instancias de componentes React subyacentes.</strong>  En la mayoría de los casos, debes evitar usar refs para manipulaciones directas del DOM, ya que React está diseñado para manejar las actualizaciones del DOM de manera eficiente.</p>
      <p>Sin embargo, hay casos de uso válidos para los refs, como:</p>
      <ul>
        <li><strong>Gestionar el foco, la selección de texto o la reproducción de medios.</strong></li>
        <li><strong>Activar animaciones imperativas.</strong></li>
        <li><strong>Integrar con bibliotecas DOM de terceros.</strong></li>
      </ul>
      <p>En componentes funcionales, se crean refs usando el Hook <code>useRef</code>.</p>

      <h3>Ejemplo de useRef para enfocar un input de texto:</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
{`import React, { useRef, useEffect } from 'react';

function InputConFoco() {
  const inputRef = useRef(null); // Crea un ref

  useEffect(() => {
    inputRef.current.focus(); // Enfoca el input al montar el componente
  }, []);

  return (
    <input type="text" ref={inputRef} /> {/* Asocia el ref al input */}
  );
}`}
      </SyntaxHighlighter>
      <p>En este ejemplo, <code>useRef(null)</code> crea un ref llamado <code>inputRef</code>.  Luego, en el <code>useEffect</code>, usamos <code>inputRef.current.focus()</code> para enfocar el input de texto cuando el componente se monta.  El ref se asocia al elemento input usando el atributo <code>ref=inputRef</code>.</p>
      <p>[Más información sobre refs en la documentación oficial de React](https://react.dev/learn/manipulating-the-dom-with-refs).</p>
    </div>
  ),
    'error-boundaries': ( // Nueva sección "Error Boundaries"
    <div>
      <h2>Error Boundaries en React</h2>
      <p><strong>Los Error Boundaries son componentes de React que capturan errores de JavaScript en cualquier parte de su árbol de componentes hijo, registran esos errores y muestran una interfaz de usuario de reserva (fallback UI) en lugar del árbol de componentes que falló.</strong></p>
      <p>Los Error Boundaries ayudan a que la aplicación no se "rompa" completamente para el usuario cuando ocurre un error en un componente.  Proporcionan una mejor experiencia de usuario al mostrar un mensaje de error amigable en lugar de una pantalla en blanco o un error críptico.</p>
      <p>Un componente de clase se convierte en un Error Boundary si define uno o ambos de los métodos de ciclo de vida <code>static getDerivedStateFromError()</code> o <code>componentDidCatch()</code>.</p>

      <h3>Ejemplo de Error Boundary:</h3>
      <SyntaxHighlighter language="jsx" style={atomDark}>
{`import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el próximo renderizado muestre la UI de reserva.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de registro de errores
    console.error("Error caught by error boundary", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier UI de reserva personalizada
      return <h2>Algo salió mal.</h2>;
    }

    return this.props.children;
  }
}

function ComponenteQuePuedeFallar() {
  throw new Error("¡Componente que falla intencionalmente!");
  return <p>Este componente fallará</p>; // Esta línea nunca se ejecutará
}

function App() {
  return (
    <ErrorBoundary>
      <ComponenteQuePuedeFallar />
    </ErrorBoundary>
  );
}`}
      </SyntaxHighlighter>
      <p>En este ejemplo, <code>ErrorBoundary</code> es un componente de clase que actúa como un Error Boundary.  Si cualquier componente hijo dentro de <code>ErrorBoundary</code> (en este caso, <code>ComponenteQuePuedeFallar</code>) lanza un error, <code>ErrorBoundary</code> capturará el error y mostrará "Algo salió mal." en lugar del componente fallido.</p>
      <p>[Más información sobre Error Boundaries en la documentación oficial de React](https://react.dev/learn/handling-errors).</p>
    </div>
  ),
  
  'Portals-in-react': ( // Nueva sección "Portales en React"
    <div>
      <h2>Portales en React</h2>
      <p><strong>Los Portales en React proporcionan una forma de renderizar hijos en un nodo del DOM que está fuera de la jerarquía DOM del componente padre.</strong>  Aunque el portal se renderiza en otra ubicación en el DOM, sigue comportándose como un hijo React normal en todos los demás aspectos.  Por ejemplo, mantiene el contexto y se propaga a través del árbol de React normalmente.</p>
      <p>Un caso de uso común para los portales son los <strong>modales, tooltips y notificaciones</strong>.  A veces, quieres que estos elementos se rendericen en la parte superior del DOM (por ejemplo, directamente dentro de <code>&lt;body&gt;</code>) para evitar problemas de estilo o de <code>z-index</code>, incluso si el componente que los crea está anidado profundamente en la estructura de la aplicación.</p>
      <p>Los portales se crean con <code>ReactDOM.createPortal(child, domNode)</code>.</p>

      <h3>Ejemplo de Portal para un Modal:</h3>
      <SyntaxHighlighter language="jsx" style={atomDark}>
{`import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root'); // Asume que tienes un div con id="modal-root" en tu HTML

function Modal(props) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        {props.children}
      </div>
    </div>,
    modalRoot // Renderiza el modal dentro de modal-root
  );
}

function App() {
  return (
    <div>
      <p>Contenido principal de la aplicación.</p>
      <Modal>
        <p>Este es el contenido del modal.</p>
      </Modal>
    </div>
  );
}`}
      </SyntaxHighlighter>
      <p>En este ejemplo, el componente <code>Modal</code> usa <code>ReactDOM.createPortal</code> para renderizar su contenido dentro de un elemento del DOM con el id <code>modal-root</code>.  Aunque <code>&lt;Modal&gt;</code> se usa dentro de <code>&lt;App&gt;</code>, su representación en el DOM estará dentro de <code>#modal-root</code>, que podría estar definido directamente dentro del <code>&lt;body&gt;</code> de tu HTML.</p>
      <p>[Más información sobre Portales en la documentación oficial de React](https://react.dev/learn/escape-hatches#portals).</p>
    </div>
  ),

'thank-you':  // Nueva sección "¡Gracias por visitar!"
    <div>
      <h2>¡Gracias por visitar mi Blog de React!</h2>
      <p>Espero que hayas encontrado útil la información y los ejemplos compartidos en este blog.</p>
      <p>Si tienes alguna pregunta, comentario o sugerencia, no dudes en ponerte en contacto conmigo a través de mis redes sociales (enlaces en el encabezado) o dejar un comentario (si has implementado comentarios en tu blog).</p>
      <p>¡Gracias de nuevo por tu visita y por aprender React conmigo!</p>
      <p>¡Sigue programando y creando cosas increíbles!</p>
    </div>
    
};

export default content;