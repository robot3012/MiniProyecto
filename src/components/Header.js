import React from 'react'


function Header({ reference1, reference2,reference3 }) {
    return (
        
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark p-2">
                
                <div className="container-fluid">
                    <div className="m-3">
                        <img  className='rounded-circle' src={require('../img/icono1.ico')} alt='icono News Site'/>
                    </div>
                    
                    <a className="navbar-brand position-relative" href="#">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link "  href="#">Política</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Deporte</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Tecnología</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
            
        
        
    );
}
export default Header;
