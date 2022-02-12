import './SideBar.css'
import { AttachMoney, BarChart, Chat, DynamicFeed, Email, Home, Person, Report, Storefront, Timeline, TrendingUp, Work } from '@material-ui/icons';
function SideBar() {
	return (
		<div className="sideBar">
			<div className="sideBarWrapper">
				<div className="sideBarMenu">
					<h3 className="sideBarTitle">DASHBOARD</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem active">
						<Home className="fontIcon"/>
							Home
						</li>
						<li className="sideBarListItem">
							<Timeline className="fontIcon" />
							Analytics
						</li>
						<li className="sideBarListItem">
							<TrendingUp className="fontIcon"/>
							Sales
						</li> 
					</ul>
				 </div>
				<div className="sideBarMenu">
					<h3 className="sideBarTitle">QUICK LINKS</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem ">
						<Person className="fontIcon"/>
							Users
						</li>
						<li className="sideBarListItem">
							<Storefront className="fontIcon"/>
							Products
						</li>
						<li className="sideBarListItem">
							<AttachMoney className="fontIcon"/>
							Transactions
						</li>
						<li className="sideBarListItem">
							<BarChart className="fontIcon"/>
							Reports
						</li>
					</ul>
				</div>
				<div className="sideBarMenu">
					<h3 className="sideBarTitle">Updates</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem">
						<Email className="fontIcon"/>
							Notification
						</li>
						<li className="sideBarListItem">
							<DynamicFeed className="fontIcon"/>
							Feedback
						</li>
						<li className="sideBarListItem">
							<Chat className="fontIcon"/>
							Message
						</li>
					</ul>
				</div>
				<div className="sideBarMenu">
					<h3 className="sideBarTitle">Admins</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem ">
						<Work className="fontIcon"/>
							Manage
						</li>
						<li className="sideBarListItem">
							<Timeline className="fontIcon"/>
							Analytics
						</li>
						<li className="sideBarListItem">
							<Report className="fontIcon"/>
							Reports
						</li>
					</ul>
				</div>


			</div>
		</div>
	);
}

export default SideBar