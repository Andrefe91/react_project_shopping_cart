import "./root.css";
import { Outlet } from "react-router-dom";

//Components
import Navbar from "../navbar/Navbar";

export default function Root() {
	return (
		<>
            <Navbar />
			<div className="main-container">
				<Outlet />
			</div>
		</>
	);
}
