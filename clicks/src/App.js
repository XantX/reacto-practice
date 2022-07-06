import "./App.css";
import freeCodeCampLogo from "./img/freecodeCampLogo.png";

function App() {
	return (
		<div className="App">
			<div className="freecodecamp-logo-contenedor">
				<img
					className="freecodecamp-logo"
					src={freeCodeCampLogo}
					alt="Logo de freeCodeCampo"
				/>
			</div>
		</div>
	);
}

export default App;
