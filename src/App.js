import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Subnavbar from "./components/Subnavbar";
import Logo from "./components/Logo";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import Overview from "./pages/Overview";
import Info from "./Sections";
import Announcement from "./Sections/Announcement";
import Announce from "./Sections/Announce";
import Entrance from "./Sections/Entrance";


function App() {
	return (
		<>
			<Router>
			<Switch>
					<Route path="/overview" exact component={Overview} />
					<Route path="/overview/users" exact component={Overview}/>
				</Switch>
				<Subnavbar />
				<Logo />
				<Navbar />
				<ImageSlider />
				<Info />
				<Announcement />
				<Announce />
				<Entrance/>
				<Footer />
			</Router>
		</>
	);
}

export default App;
