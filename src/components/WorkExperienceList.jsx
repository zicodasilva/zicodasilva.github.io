import React from "react";
import { List, ListItem, Link } from "@mui/material";

import WorkExperienceItem from "./WorkExperienceItem";

function WorkExperienceList(props) {
	return (
		<List dense={false}>
			<ListItem>
				<WorkExperienceItem
					header={`Mar 2023 ${"\u2013"} Present`}
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
					position="Research Assistant"
					description="Part-time research and development work for Dr Amir Patel, on topics closely related to my Master’s thesis. We are currently working together on two research papers about the pose estimation of the cheetah in the wild."
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
					position="Software and DSP Engineer"
					description="Lead engineer on a diverse set of projects, ranging from IoT (Internet of Things), web development, and RADAR signal processing. Experienced in developing client-server architectures that integrate high-performance data processing systems (C++ Linux system), together with browser-based data visualisation dashboards."
				/>
			</ListItem>
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
					position="Student"
					description="Passed with Distinction · Thesis: Monocular 3D Reconstruction of Cheetahs in the Wild. This project explored the use of monocular video to obtain accurate 3D kinematics of the cheetah in its natural habitat. Supervisors: Dr Amir Patel & Dr Fred Nicolls"
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
					position="Student Intern"
					description="Worked on the DIMA Robot, developed by Dr Amir Patel. Implemented an inertial navigation system (INS) for the robot using a Kalman filter and an IMU sensor."
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
					position="Student"
					description="First Class Honours · Computer and Electrical Engineering. Final year thesis: Simultaneous Localisation and Mapping (SLAM) for underground robots with the Kinect camera using computer vision techniques."
				/>
			</ListItem>
		</List>
	);
}

export default WorkExperienceList;
