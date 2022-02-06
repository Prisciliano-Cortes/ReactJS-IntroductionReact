import React, { useState } from 'react';

const Listas = () => {

    const estadoInicial = [1,2,3,4,5,6,7,8,9];

    const [lista, setLista] = useState(estadoInicial);

    const EstadoInicial = [
        {id:1, texto:'Texto 1'},
        {id:2, texto:'Texto 2'},
        {id:3, texto:'Texto 3'},
        {id:4, texto:'Texto 4'},
        {id:5, texto:'Texto 5'},
        {id:6, texto:'Texto 6'},
        {id:7, texto:'Texto 7'},
        {id:8, texto:'Texto 8'},
        {id:9, texto:'Texto 9'},
        {id:10, texto:'Texto 10'},
        {id:11, texto:'Texto 11'},
        {id:12, texto:'Texto 12'},
        {id:13, texto:'Texto 13'},
        {id:14, texto:'Texto 14'},
        {id:15, texto:'Texto 15'},
    ]

    const [listaDos, setListaDos] = useState(EstadoInicial);

    const arrayUno = ['Chile', 'Argentina']
    const arrayDos = ['Perú', 'México']

    const Unidos = [...arrayUno, ...arrayDos]

    console.log(Unidos);

    const AgregarElemento = () => {
        setListaDos([
            ...listaDos,
            {id:16, texto:'Texto 16'},
        ])
    }

    return(
        <div>
            <h2>Listas</h2>

            {
                lista.map((item, index) => (
                    <h4 key={index}> { item } </h4>
                ))
            }

            {
                listaDos.map((item) => (
                    <h4 key={item.id}> { item.texto } </h4>
                ))
            }

            <button onClick={() => AgregarElemento()}>Agregar</button>
        </div>
    );
};

export default Listas;
