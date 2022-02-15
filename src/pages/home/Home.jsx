import React from 'react'
import Charts from '../../components/charts/Charts';
import Features from '../../components/homeFeatures/Features';
import WidgetLg from '../../components/widgetlg/WidgetLg';
import WidgetSm from '../../components/widgetsm/WidgetSm';
import {data} from "../../fakeData";
import './Home.css'
function Home() {
	return (
		<div className='home'>
			 <Features />
			 <Charts data={data}/>
			 <div className="homeWidget">
				 <WidgetSm /><WidgetLg/>
			 </div>
		</div>
	)
}

export default Home