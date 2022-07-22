import React from "react";
import "../styles/boton.css";

function boton({ texto, esBotonDeClic, manejarClic }) {
	return (
		<button
			className={esBotonDeClic ? "boton-click" : "boton-reiniciar"}
			onClick={manejarClic}
		>
			{texto}
		</button>
	);
}

export default boton;
