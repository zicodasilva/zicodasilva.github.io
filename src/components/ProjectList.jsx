import React from "react";
import { List, ListItem, Link } from "@mui/material";

import ProjectItem from "./ProjectItem";

function ProjectList(props) {
	return (
		<List dense={false}>
			<ListItem>
				<ProjectItem
					title={
						<Link
							href="https://github.com/African-Robotics-Unit/AcinoSet"
							// underline="hover"
							target="_blank"
							color="text.primary"
						>
							AcinoSet
						</Link>
					}
					description="A Contribution towards the first cheetah running dataset, AcinoSet, was made. The paper, 'Improving 3D Markerless Pose Estimation of Animals in the Wild using Low-Cost Cameras', was published in IROS 2022 for this work. Skills required to accomplish this project: application development (Python), trajectory optimisation (Pyomo and IPOPT), and pose estimation (DeepLabCut). "
				/>
			</ListItem>
			<ListItem>
				<ProjectItem
					title="Telemetry Device"
					description="An energy-efficient telemetry device that captures environmental data for post-processing and visualisation using a central server. The details cannot be disclosed. Around 1000 devices are deployed in the field and have been operating for over five years. The skills required to accomplish this project: embedded programming (C and C++), web development (NodeJS, JavaScript, HTML, CSS), and mobile development (React Native)."
				/>
			</ListItem>
			<ListItem>
				<ProjectItem
					title="Passive Radar Visualisation"
					description="A web application used to visualise live aircraft flights using passive radar and an extended Kalman filter. The application uses CesiumJS for 3D geospatial visualisation in the browser and allows an operator to obtain metadata about each flight detected. The skills required to accomplish this project: web development (NodeJS, JavaScript, HTML, CSS)."
				/>
			</ListItem>
			<ListItem>
				<ProjectItem
					title="In-house Management System"
					description="A web application used to facilitate product and project management at Peralex Electronics. The details cannot be disclosed. The platform serves around 50 employees and has been in operation for more than a year. The skills required to accomplish this project: full stack web development (ReactJS, NodeJS, PostgreSQL) and Docker."
				/>
			</ListItem>
		</List>
	);
}

export default ProjectList;
