import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

const App = () => {
	return (
		<Canvas>
			<ambientLight intensity={1} />
			<Experience />
		</Canvas>
	);
}

export default App;