import React from "react";
import "./Navbar.css";
import { NotificationsNone,Language , Settings } from "@material-ui/icons";

function Navbar() {
	return (
		<div className="topBar">
			<div className="topBarWrapper">
				<div className="topLeft">
					<span className="logo">My_Dashboard</span>
				</div>
				<div className="topRight">
					<div className="topBarIconContainer">
						<NotificationsNone/>
						<span className="topIconBadge">3</span>
					</div>
					<div className="topBarIconContainer">
						<Language/>
					</div>
					<div className="topBarIconContainer">
						<Settings/>
					</div>
					<img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="avatar" className="avatar" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
