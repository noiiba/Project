import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FaGithub } from 'react-icons/fa';
import Logo from '../../assets/4us.png';



export default function Menu() {
  return (
    <>

      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-left">

          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/" className="Links">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/projeto" className="Links">Projeto</Link>

              </li>
              <li class="nav-item">
                <Link to="/equipe" className="Links">Equipe</Link>
              </li>
              <li class="nav-item">
                <Link to="/login" className="Links">Login</Link>
                
              </li>
              <li class="nav-item">
                <Link to="/cadastro" className="Links">Cadastro</Link>
              </li>
              <li className="social"><FaGithub size={30} color="#7c48f5" /></li>

              <li>


              </li>

            </ul>

          </div>
        </nav>

      </header>







    </>
  );
}


