import React from 'react';

const Saludo = (props) => {
    return( 
        <div>
            <h4>Saludos a {props.persona}</h4>
            <p>{props.edad}</p>
        </div>
    );
};

export default Saludo;
