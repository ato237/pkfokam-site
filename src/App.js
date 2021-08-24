import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Subnavbar from "./components/Subnavbar";
import Logo from "./components/Logo";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Router>
				<Subnavbar />
				<Logo />
				<Navbar />
				<ImageSlider />
				<Footer />
			</Router>
		</>
	);
}

export default App;
