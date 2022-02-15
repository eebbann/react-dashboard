import React from 'react'
import "./WidgetSm.css"

function WidgetSm() {
	return (
		<div className='widgetSm'>
			 <div className="widgetSmTitle">New Users</div>
			 <ul className="widgetSmList">
				 <li className="widgetSmListItem">
					 {/* profile I**/}
					 <img className="widgetSmListItemImg" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mm&r=g" alt="profile"/>
					 <div className="widgetSmListItemInfo">
						 <span className="widgetSmListItemName">E Emmanuel</span>
						 <span className="widgetSmListItemJob">software developer</span>
				    </div>
				 </li>
				 </ul>
					  
		</div>
	)
}

export default WidgetSm