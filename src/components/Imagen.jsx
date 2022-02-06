import React from 'react';

const Imagen = ({urlImagen}) => {
    return(
        <div>
            <img src={urlImagen} className='mr-3' alt='' />
        </div>
    );
};

export default Imagen;
