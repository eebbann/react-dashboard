import React from "react";
import "./Feature.css";
import { ArrowDownward, ArrowUpward} from "@material-ui/icons";
function Features() {
	return (
		<div className="features">
			<div className="featuresItem">
				<span className="featureTitle">Revenue </span>
				<div className="featuresMoneyContainer">
					<span className="featuresMoney">$1,000</span>
					<span className="featuresMoneyRate">
						-11.4 <ArrowDownward className="Negative Arrow"/>
					</span>
				</div>
				<span className="featureSub">Compared to last month</span>
			</div>
			<div className="featuresItem">
				<span className="featureTitle">Sales </span>
				<div className="featuresMoneyContainer">
					<span className="featuresMoney">$1,000</span>
					<span className="featuresMoneyRate">
						-11.4 <ArrowDownward className="Negative Arrow"/>
					</span>
				</div>
				<span className="featureSub">Compared to last month</span>
			</div>
			<div className="featuresItem">
				<span className="featureTitle">Profit </span>
				<div className="featuresMoneyContainer">
					<span className="featuresMoney">$1,000</span>
					<span className="featuresMoneyRate">
						21.4 <ArrowUpward className="Positive Arrow"/>
					</span>
				</div>
				<span className="featureSub">Compared to last month</span>
			</div>
		</div>
	);
}

export default Features;
