import { useHistory } from "react-router-dom";

export const Navigation = (props) => {
  const _history = useHistory();
  const navigationBtnAction = (event, path) => {
    _history.replace("/");
    // event.preventDefault()
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img className="img-logo" src="/img/coachw.png" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#features"
                className="page-scroll"
                onClick={navigationBtnAction}
              >
                accueil
              </a>
            </li>
            {/* <li>
              <a href='#about' className='page-scroll' onClick={navigationBtnAction}>
                Qui Sommes Nous 
              </a>
            </li> */}
            <li>
              <a
                href="#services"
                className="page-scroll"
                onClick={navigationBtnAction}
              >
                Catégories
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="page-scroll"
                onClick={navigationBtnAction}
              >
                Equipe
              </a>
            </li>
            <li>
              <a
                href="#partenaires"
                className="page-scroll"
                onClick={navigationBtnAction}
              >
                Nos partenaires
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
                onClick={navigationBtnAction}
              >
                Nous Contacter
              </a>
            </li>
            <li>
              <a href="#services" className="btn btn-custom btn-lg page-scroll">
                Devenir Formateur
              </a>
            </li>
            <li>
              <a href="#services" className="btn btn-custom btn-lg page-scroll">
                Certificat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
