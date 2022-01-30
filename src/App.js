import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container-header">
          <div class="div-row-header">
            <div class="div-column-header">
              <div class="title">
                <h1>Programador Frontend</h1>
              </div>
              <div class="subtitle">
                <h2>Portfolio de Virgilio Nayal</h2>
              </div>
            </div>
            <ul class="ul-header" id="navigation">
              <li>
                <a href="#mi-experiencia" target="_self">
                  Mi experiencia
                </a>
              </li>
              <li>
                <a href="#lo-que-se" target="_self">
                  Lo que sé
                </a>
              </li>
              <li>
                <a href="#proyectos" target="_self">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" target="_self">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section>
        <h3>Sobre mí</h3>
        <p>
          Hola, me llamo Virgilio. Soy de Marbella aunque no lo parezca, porque
          mis padres son de origen Filipino. Soy programador Frontend desde
          2017. Tengo 27 años y desde que conocí la programación, quiero dedicar
          mi vida en ello y tengo como objetivo en convertirme en un programador
          ejemplar.
        </p>

        <p>
          Este sitio está hecho con{" "}
          <a href="https://es.reactjs.org/" target="_self">
            React
          </a>
          , es una librería de JavaScript para crear interfaces de usuario de
          forma sencilla. Aunque mi portfolio es una Landing Page, sé que no es
          lo más óptimo para crear este tipo de páginas pero tengo como{" "}
          <strong>proyecto personal</strong> añadir algunos juegos sencillos
          para probar si funcionan con esta biblioteca y así aprovecho a hacer
          mi portfolio mientras tanto.
        </p>

        <h3 id="mi-experiencia">Mi experiencia</h3>
        <p>
          Acabé mi carrera de Sistema de Telecomunicaciones sin saber realmente
          a qué dedicarme, en su dia eché curriculums por todos lados para
          encontrar urgentemente un trabajo, una empresa pequeñita{" "}
          <a
            href="https://www.linkedin.com/company/inmo.design/about/"
            target="_self"
          >
            Inmo.Design
          </a>{" "}
          aceptó enseñarme a programar porque necesitaban ayuda, la empresa se
          dedicaban a hacer páginas web para la mayoria de las inmobiliarias en
          Marbella.{" "}
          <strong>
            Desde entonces me enamoré de la programación y supe que queria
            dedicarme a ello
          </strong>
          .
        </p>

        <p>
          Así que decidí hacer un master de diseño y desarrollo de videojuegos
          en{" "}
          <a href="https://evadformacion.com/" target="_self">
            EVAD
          </a>
          , para aprender sobre todo como era la programación aplicado en los
          videojuegos. Esta formación me enseñó muchísimo, a parte de saber lo
          que implica crear un videojuego, me mostró que el mundo de la
          programación hay que ser <strong>autodidacta</strong> y{" "}
          <strong>tener muchas ganas de aprender.</strong>
        </p>
        <p>
          Con el master hice una prácticas en{" "}
          <a
            href="https://www.linkedin.com/company/bambo-studio/about/"
            target="_self"
          >
            Bambo Studio
          </a>
          , me enseñaron a hacer juegos móviles y la importancia de{" "}
          <strong>diseñar una interfaz intuitiva</strong>. Y posteriormente
          nuestro trabajo final de master tuvo la oportunidad de entrar en{" "}
          <a href="https://www.playstationtalents.es/" target="_self">
            Plasytation Talents
          </a>
          , un programa de Sony Playstation para ayudar a grupos Indies a sacar
          adelante videojuegos. Aquí aprendí a{" "}
          <strong>trabajar en equipo</strong> y{" "}
          <strong>leer mucha documentación</strong>. Pero desgradaciadamente
          tuve que abandonar el proyecto por dificultades económicas.
        </p>
        <p>
          Tuve la suerte de que{" "}
          <a
            href="https://www.linkedin.com/company/isabellatech"
            target="_self"
          >
            IsabellaTech
          </a>{" "}
          me contratara como diseñador Frontend para desarrollar los diseños de
          todos los proyectos de la empresa. Durante los 2 años que estuve no
          paré de hacer proyectos. De esta experiencia aprendí la{" "}
          <strong>
            optimización del código y la escalabilidad de un proyecto, predecir
            tiempos y planificar tareas
          </strong>
          .
        </p>

        <h3 id="lo-que-se">Lo que sé</h3>
        <ul>
          <li>
            Soy desarrollador <strong>frontend</strong>. Solía utilizar PHP,
            porque era el idioma con el que me enseñaron a desorrollar páginas
            web con{" "}
            <a href="https://wordpress.com/es/" target="_self">
              WordPress
            </a>
            , pero aproximadamente llevo tres años dedicados a{" "}
            <strong>React y JavaScript.</strong>
          </li>
          <li>
            Uso <strong>Git</strong> con{" "}
            <a href="https://github.com/" target="_self">
              GitHub
            </a>
            , para controlar los proyectos y a su vez para tener una
            visualización fácil de los archivos.
          </li>
          <li>
            Soy partidario en hacer un <strong>código limpio y legible</strong>.
            Un buen código es aquel que se pueda leer como un libro sin utilizar
            comentarios. Siempre busco lo mejor del proyecto para su{" "}
            <strong>optimización y escalabilidad</strong>.
          </li>
          <li>
            Normalmente me decanto por crear las hojas de estilo manualmente
            con/sin{" "}
            <a href="https://sass-lang.com/" target="_self">
              Sass
            </a>
            . Pero actualmente estoy explorando{" "}
            <a href="https://tailwindcss.com/" target="_self">
              Tailwind
            </a>
            . Tengo que decir que es bastante cómodo.
          </li>
          <li>
            Estoy familiarizado a conectar <strong>APIs</strong>. Es una de las
            cosas que me enseñeraon al principio, el saber{" "}
            <strong>conectar y controlar</strong> los datos recibidos. Cuando
            conocí React y su <strong>Server Side Rendering</strong> explotó mi
            cerebro.
          </li>
          <li>
            Tengo experiencia con{" "}
            <a href="https://frontity.org//" target="_self">
              Frontity
            </a>
            , un framework hecho en React especialmente diseñado para WordPress.
            El framework consume de la <strong>REST API</strong> de{" "}
            <a href="https://wordpress.com/es/" target="_self">
              WordPress.com
            </a>
            .
          </li>
        </ul>

        <h3 id="proyectos">Algunos proyectos profesionales</h3>
        <ul>
          <li>
            <a href="https://churreriaramon.es/" target="_self">
              https://churreriaramon.es/
            </a>
            : Web de la churreria mas famosa de Marbella. Desarrollé el proyecto
            junto con{" "}
            <a href="https://felipefg.com/" target="_self">
              Felipe
            </a>
            , para mejorar la marca de la churrería.
          </li>
          <li>
            <a href="https://incotex.es/" target="_self">
              https://incotex.es/
            </a>
            : actualización de diseño web para una empresa de extintores,
            actualmente está algo cambiada pero sigue utilizando la estructura
            que diseñé en su dia.
          </li>
          <li>
            <a href="https://bombeosmarbella.com/" target="_self">
              https://bombeosmarbella.com/
            </a>
            : diseño y desarrollo de una página web para una empresa de bombeos
            de hormigón en Marbella.
          </li>
          <li>
            <a href="https://abogadospericia.com/" target="_self">
              https://abogadospericia.com/
            </a>
            : este fue otro proyecto para mejorar el diseño de una página de
            abogados.
          </li>

          <li>
            <a href="https://mobiliariofactory.com/" target="_self">
              https://mobiliariofactory.com/
            </a>
            : proyecto de una tienda de muebles online, desarrollado en menos de
            2 meses con mis compañeros{" "}
            <a
              href="https://www.linkedin.com/in/alejandro-villalobos-trujillo-38b97a163/"
              target="_self"
            >
              Alejandro
            </a>{" "}
            y{" "}
            <a href="https://www.linkedin.com/in/husseincak/" target="_self">
              Hussein
            </a>
            .
          </li>
          <li>
            <a href="https://isabellatech.es/" target="_self">
              https://isabellatech.es/
            </a>
            : actualización de la página web con React que antiguamente estaba
            con Wordpress.
          </li>
          <li>
            <a href="https://www.maspropertymarbella.com/" target="_self">
              https://www.maspropertymarbella.com/
            </a>
            : proyecto grande con React para una de la empresa mas ambiciosa de
            Marbella. Tardamos mucho en hacer este proyecto porque esta empresa
            tiene miles de propiedades, nos pedian un sistema de usuario con
            privilegios y algunas funciones especiales.
          </li>
        </ul>
        <h3 id="contacto">Contacto</h3>
        <ul>
          <li>
            <a href="mailto:virgilionayal@gmail.com" target="_self">
              <strong>Email</strong>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/virgilionayal/" target="_self">
              <strong>Linkedin</strong>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/virgilionayal" target="_self">
              <strong>Twitter</strong>
            </a>
          </li>
        </ul>

        <h3>Lo que estoy haciendo ahora</h3>
        <ul>
          <li>
            <a href="https://github.com/Hecater88/TowerDefense" target="_self">
              Tower Defense (en proceso)
            </a>
            : Un tower defense 3D y 2D con Unity.
          </li>
          <li>
            <a
              href="https://github.com/Hecater88/TheHouseIsLava"
              target="_self"
            >
              The House Is Lava (en proceso)
            </a>
            : Un juego en primera persona donde el suelo de tu casa es lava.
          </li>
        </ul>
        <h3>Mis aficiones</h3>
        <ul>
          <li>Videojuegos, sobre todo en diseñar y desarrollar videojuegos.</li>
          <li>
            Juegos de mesa, porque humillar a tu rival en persona es mas
            gratificante.
          </li>
          <li>Pesca, es un hobbie para gente tranquila como yo.</li>
          <li>Calistenia, se puede hacer ejercicio sin gastar ni un duro.</li>
        </ul>
      </section>

      <footer>
        <div class="container-footer">
          <div class="div-row-footer">
            <ul class="ul-footer">
              <li>
                <a href="https://github.com/Hecater88" target="_self">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    class="icon"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/virgilionayal" target="_self">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    class="icon"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/virgilionayal/"
                  target="_self"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin"
                    class="icon"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
