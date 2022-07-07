import "./App.css";
import freeCodeCampLogo from "./img/freecodeCampLogo.png";
import Boton from './components/Boton';

function App() {
	const manejarClic = () => {
		console.log("Click")	
	}
	const reiniciarContador = () => {
		console.log("Reiniciar");	
	}

	return (
		<div className="App">
			<div className="freecodecamp-logo-contenedor">
				<img
					className="freecodecamp-logo"
					src={freeCodeCampLogo}
					alt="Logo de freeCodeCampo"
				/>
			</div>
			<div className="contenedor-principal">
				<Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic} />
				<Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador}/>
			</div>
		</div>
	);
}

export default App;
