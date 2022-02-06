import React, { Fragment, useState } from 'react';

const Formulario = () => {

    const [fruta, setFruta] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [lista, setLista] = useState([]);

    const guardardatos = (e) => {
        e.preventDefault();

        if (!fruta.trim()) {
            console.log("Esta vacío la fruta");
            return;
        }
        if (!descripcion.trim()) {
            console.log("Esta vacío la descripción");
            return;
        }

        console.log('Procesando datos' + ' ' + fruta + ' ' + descripcion);

        setLista([
            ...lista,
            {nombraFruta: fruta, nombreDescripcion: descripcion}
        ])
        e.target.reset();
        setFruta('');
        setDescripcion('');
    }

    return(
        <Fragment>
            <h4>Formulario</h4>

            <form onSubmit={ guardardatos }>
                <input 
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange={ (e) => setFruta(e.target.value) }
                />

                <input 
                    type="text"
                    placeholder="Ingrese Descripción"
                    className="form-control mb-2"
                    onChange={ (e) => setDescripcion(e.target.value) }
                />

                <button className="btn btn-primary btn-block" type="submit">
                    Agregar
                </button>
            </form>

            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                            {item.nombraFruta} - {item.nombreDescripcion}
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    );
};

export default Formulario;
