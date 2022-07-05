import React, { useState }from 'react';
import './Formulario.css';
import { Formik } from 'formik';

const Formulario = () => {
    
    const [formularioEnviado, setFormularioEnviado] = useState(false);
	return (
        
        <Formik 
            initialValues={{
                nombre: '',
                apellido: '',
                email: ''
            }}
            validate={(valores) => {
            const errors = {};
            //Nombres
            if (!valores.nombre) {
                errors.nombre = 'Por favor ingresa un nombre requerido';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errors.nombre = 'El Nombre solo puede contener letras';
            }

            //Apellidos
            if (!valores.apellido) {
                errors.apellido = 'Por favor ingresa un apellido requerido';
            }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
                errors.apellido = 'El Apellido solo puede contener letras';
            }

            //Email
            if (!valores.email) {
                errors.email = 'Por favor ingresa un correo electronico requerido';
            }else if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                errors.email = 'El Correo solo puede tener a-z, 0-9, @, ., -';
            }

            return errors;
            }}

                onSubmit={({onSubmit}) => {
                    onSubmit();
                setFormularioEnviado (true);

                setTimeout(() => setFormularioEnviado(false) ,3000);
            }}
        >
        
        { ( {errors, values, touched, handleSubmit, handleChange, handleBlur} ) => (


            <form className='formulario' onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                    type="text"
                    id="nombre"
                    name='nombre'
                    placeholder='John'
                    value={values.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}

                    />
                    { touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input 
                    type="text"
                    id="apellido"
                    name='apellido'
                    placeholder='Deep'
                    value={values.apellido}
                    onChange={handleChange}
                    onBlur={handleBlur}

                    />
                    { touched.apellido && errors.apellido && <div className='error'>{errors.apellido}</div>}
                </div>

                <div>
                    <label htmlFor="correo">Correo</label>
                    <input
                    type="email"
                    id="correo"
                    name='correo'
                    placeholder='correo@gmail.com'
                    value={values.correo}
                    onChange={handleChange}
                    onBlur={handleBlur}

                    />
                     { touched.correo && errors.correo && <div className='error'>{errors.correo}</div>}
                </div>
                <button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}

            </form>
        )}
        
        </Formik>
    )
}
 
export default Formulario;