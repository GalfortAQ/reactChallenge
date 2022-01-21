
import Enunciado from '../assets/Enunciado.pdf';

function Home() {
  return (
    <section className="App-content">
      <h3 className="home-title">Haciendo uso de la API de Rick y Morty deberá desarrollar:</h3>
      <ul>
        <li>Barra de Búsqueda</li>
        <ul type="square">
          <li>por personaje</li>
          <li>por ubicación</li>
          <li>por episodio</li>
        </ul>
        <li>Comparativa de personajes</li>
        <li>Detalle de episodios</li>
        <li>Agregar un personaje</li>
      </ul>
      <h3 className="home-title">Links útiles:</h3>
      <ul>
        <li>
          <a className="App-link"
              href={Enunciado}
              target="_blank" rel="noopener noreferrer">
            Consigna completa (versión PDF)
          </a>
        </li>
          <ul type="square">
            <li>
              Tip: podes visualizarlo también en el README.md del proyecto
            </li>
          </ul>
        <li>
          <a className="App-link"
              href="https://rickandmortyapi.com/"
              target="_blank" rel="noopener noreferrer">
            API Rick y Morty
          </a>
        </li>
        <li>
          <a className="App-link"
              href="https://es.reactjs.org/"
              target="_blank" rel="noopener noreferrer">
            Documentación oficial de React
          </a>
        </li>
      </ul>
      <h3 className="home-title">Queda a su criterio la posibilidad de utilizar:</h3>
      <ul>
        <li>Frameworks de CSS (ej: Bootstrap, MaterialUI u otros)</li>
        <li>Un componente de terceros para renderizado de tablas</li>
        <li>Una biblioteca http para comunicación con APIs (ej: Axios, Fetch u otros)</li>
      </ul>
    </section>
  );
}

export default Home;