import React from 'react';
import Imagen from './Imagen';

const Comentario = (props) => {
    return( 
        <div className='media'>
            <Imagen urlImagen={props.urlImagen} />
            <div className='media-body'>
                <h5 className='mt-0'>{props.persona}</h5>
                <p>{props.texto}</p>
            </div>
        </div>
    );
};

export default Comentario;
