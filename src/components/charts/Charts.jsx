import React from 'react'
import "./Chart.css"
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Charts({data}) {

	// responsive chart recharts
	return (
		<div className='charts'>
				<h3 className='chartTitle'>
					Users Analytics
         </h3>
				  <ResponsiveContainer width="100%" aspect={4 / 1} >
					<LineChart data={data}>
						<XAxis dataKey="name" stroke='#555' /> 
						<Line type="monotone" dataKey="users" stroke="#8884d8" />
						<Tooltip/>
						 <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
						<Legend  />   
						
					</LineChart>

					</ResponsiveContainer>
		</div>
	)
}

export default Charts;