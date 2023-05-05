import React from 'react'; //Line of code that allow me to use react
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){
	return(
		<div className='contenedor-testimonio'>
			<img 
				className='imagen-testimonio'
				src={require(`../img/testimonio-${props.image}.jpg`)}
				alt='Foto de Entrenador'/>
				<div className='contenedor-texto-testimonio'>
					<p className='nombre-testimonio'><b>{props.name}</b> in <b>{props.region}</b></p>
					<p className='cargo-testimonio'><b>{props.position}</b></p>
					<p className='texto-testimonio'>"{props.phrase}"</p>
				</div>
		</div>
	);
}

export default Testimonio; //We will use export function to make aware other files that Testimonio exists an be able to import this file to other files.