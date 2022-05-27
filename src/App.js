import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Subnavbar from "./components/Subnavbar";
import Logo from "./components/Logo";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import Overview from "./pages/Overview";
import Announcement from "./Sections/Announcement";
import Announce from "./Sections/Announce";
import Entrance from "./Sections/Entrance";
import { obj1,obj2,obj3, objAnnonce1, objAnnonce2 } from "./Sections/Data";
import Apply from "./Sections/Apply";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/overview" exact component={Overview} />
					<Route path="/overview/users" exact component={Overview} />
				</Switch>
				<Subnavbar />
				<Logo />
				<Navbar />
				<ImageSlider />
				<Announce {...objAnnonce1}/>
				<Announcement {...obj1} />
				<Announcement {...obj2} />
				<Announce {...objAnnonce2} />
	
				<Announcement {...obj3} />
				<Entrance />
				<Apply/>
				<Footer />
			</Router>
		</>
	);
}

export default App;
