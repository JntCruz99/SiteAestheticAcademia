import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbarPrincipal">
            <nav className="navbar navbar-expand-lg navbar-white  bg-white ">
                <div className="container-fluid">
                    <h1><Link to={`/`} ><img src="src\img\logo.png" alt="" className="logo " /></Link></h1>
                    <div className="collapse navbar-collapse position-absolute top-1 end-0" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button class="button-92 " role="button"><img src="src\img\icon-aluno.png" alt="" /></button>
                            </li>
                            <li className="nav-item">
                                <button class="button-92" role="button"><img src="src\img\icons8-professor.png" alt="" /></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav class="navbar2 navbar-expand-lg">
                <div class="container-fluid2">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link to={`/`} class="nav-link active" aria-current="page" href="#">Home</Link> 
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Planos</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Estrutura</a>
                            </li>
                            <li class="nav-item">
                            <a  class="nav-link" href="#">Equipe</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Coaches</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Downloads</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Navbar