import React from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        NavLink
    } from "react-router-dom";
import Comentario from './components/Comentario';
import Contador from './components/Contador';
import Crud from './components/Crud';
import Eventos from './components/Eventos';
import Formulario from './components/Formulario';
import Listas from './components/Listas';
import Nosotros from './components/Nosotros';
import Parrafo from "./components/Parrafo";
import Saludo from './components/Saludo';
import User from './components/User';
import Variables from './components/Variables';

function App() {
    return (
        <Router>
            <div className="container mt-5">
                <div className="btn-group">
                    <NavLink to="/" className="btn btn-dark" activeClassName="active">
                        Inicio
                    </NavLink>

                    <Link to="/comentario" className="btn btn-dark">
                        Comentario
                    </Link>

                    <Link to="/contador" className="btn btn-dark">
                        Contador
                    </Link>

                    <Link to="/crud" className="btn btn-dark">
                        Crud
                    </Link>

                    <Link to="/eventos" className="btn btn-dark">
                        Eventos
                    </Link>

                    <Link to="/formulario" className="btn btn-dark">
                        Formulario
                    </Link>

                    <Link to="/listas" className="btn btn-dark">
                        Listas
                    </Link>

                    <Link to="/nosotros" className="btn btn-dark">
                        Nosotros
                    </Link>

                    <Link to="/parrafo" className="btn btn-dark">
                        Parrafo
                    </Link>

                    <Link to="/saludo" className="btn btn-dark">
                        Saludo
                    </Link>

                    <Link to="/variables" className="btn btn-dark">
                        Variables
                    </Link>
                </div>

                <hr />

                <Switch>
                    <Route path="/nosotros/:id">
                        <User />
                    </Route>
                    
                    <Route path="/comentario">
                        <Comentario 
                            urlImagen='https://picsum.photos/64'
                            persona='Prisciliano'
                            texto='Que onda'
                        />
                        <Comentario 
                            urlImagen='https://picsum.photos/64'
                            persona='Efren'
                            texto='Buenos días'
                        />
                        <Comentario
                            urlImagen='https://picsum.photos/64'
                            persona='Tecla'
                            texto='Saludos a todos'
                        />
                    </Route>

                    <Route path="/contador">
                        <Contador />
                    </Route>

                    <Route path="/crud">
                        <Crud />
                    </Route>

                    <Route path="/eventos">
                        <Eventos />
                    </Route>

                    <Route path="/formulario">
                        <Formulario />
                    </Route>

                    <Route path="/listas">
                        <Listas />
                    </Route>

                    <Route path="/nosotros">
                        <Nosotros />
                    </Route>

                    <Route path="/parrafo">
                        <Parrafo />
                    </Route>

                    <Route path="/saludo">
                        <Variables />
                    </Route>

                    <Route path="/variables">
                        <Saludo persona='Prisciliano' edad={24} />
                        <Saludo persona='Efren' edad={19} />
                        <Saludo persona='Tecla' edad={44} />
                        <Saludo persona='Moises' edad={44} />
                    </Route>

                    <Route path="/" exact>
                        Pagina principal
                    </Route>
                </Switch>  
            </div>
        </Router>
    );
}

export default App;