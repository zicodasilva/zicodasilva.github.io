import React from "react";
import { List, ListItem, Link } from "@mui/material";

import WorkExperienceItem from "./WorkExperienceItem";

function WorkExperienceList(props) {
	return (
		<List dense={false}>
			<ListItem>
				<WorkExperienceItem
					header={`2021 ${"\u2013"} 2023`}
					title={
						<Link
							href="http://www.aru.uct.ac.za/"
							// underline="hover"
							target="_blank"
							color="text.primary"
						>
							African Robotics Unit
						</Link>
					}
					description="Completed an MSc programme at the University of Cape Town (part time). A full dissertation on the topic: Monocular 3D Reconstruction of Cheetahs in the Wild. Supervisors: Dr Amir Patel and Dr Fred Nicolls."
				/>
			</ListItem>
			<ListItem>
				<WorkExperienceItem
					header={`Feb 2016 ${"\u2013"} Present`}
					title={
						<Link
							href="https://www.peralex.com/"
							// underline="hover"
							target="_blank"
							color="text.primary"
						>
							Peralex Electronics
						</Link>
					}
					description="Remote software and DSP (digital signal processing) engineer. He
										has worked as the sole engineer on a diverse set of projects, ranging from IoT
										(Internet of Things), web development, and radar signal processing."
				/>
			</ListItem>
			<ListItem>
				<WorkExperienceItem
					header={`Nov 2014 ${"\u2013"} Feb 2015`}
					title={
						<Link
							href="http://www.aru.uct.ac.za/"
							// underline="hover"
							target="_blank"
							color="text.primary"
						>
							African Robotics Unit
						</Link>
					}
					description="Worked on the DIMA Robot, developed by Dr Amir Patel, at the University of Cape Town.
								Implemented an Inertial Navigation Control System for the robot."
				/>
			</ListItem>
			<ListItem>
				<WorkExperienceItem
					header={`2012 ${"\u2013"} 2015`}
					title={
						<Link
							href="http://www.uct.ac.za/"
							// underline="hover"
							target="_blank"
							color="text.primary"
						>
							University of Cape Town
						</Link>
					}
					description="BSc Electrical and Computer Engineering, graduating with a First-Class honours."
				/>
			</ListItem>
		</List>
	);
}

export default WorkExperienceList;
