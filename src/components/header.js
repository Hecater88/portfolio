function Header() {
  return (
    <div className="container-header">
      <div className="div-row-header">
        <div className="div-column-header">
          <div className="title">
            <h1>Programador Frontend</h1>
          </div>
          <div className="subtitle">
            <h2>Portfolio de Virgilio Nayal</h2>
          </div>
        </div>
        <nav>
          <ul className="ul-header" id="navigation">
            <li>
              <a href="#mi-experiencia">
                Mi trayectoria
              </a>
            </li>
            <li>
              <a href="#lo-que-se">
                Lo que sé
              </a>
            </li>
            <li>
              <a href="#proyectos">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
