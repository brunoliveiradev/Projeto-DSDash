import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <div className="container py-5">
        <div className="jumbotron bg-info">
          <h1 className="display-4 text-secondary d-flex justify-content-center">STAR WARS DASH</h1>
          <p className="lead text-white">Analise o desempenho das missoes dos Jedis por diferentes perspectivas</p>
          <hr />
          <p className="text-white">Este app web consiste em exibir um dashboard a partir de dados fornecidos por um back end construido com Spring Boot.</p>
          <div className="d-flex justify-content-center py-2">
            <Link className="btn btn-lg btn-warning btn-block" to="/dashboard">
              Acessar Dashboard
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;