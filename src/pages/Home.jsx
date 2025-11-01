import React, {useEffect, useRef} from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Brightness2Icon from "@mui/icons-material/Brightness2";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
import LightModeIcon from "@mui/icons-material/LightMode";
import DownloadIcon from "@mui/icons-material/Download";
import { Divider, Typography, Link } from "@mui/material";

import WorkExperienceList from "../components/WorkExperienceList";
import ProjectList from "../components/ProjectList";
import PublishedPapersList from "../components/PublishedPapersList";
import { ColorModeContext } from "../App";
import "../App.css";

export function Home() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);

	const onDownload = () => {
		const link = document.createElement("a");
		link.download = "zico_cv.pdf";
		link.href = "zico_cv.pdf";
		link.click();
	};
	return (
		<Box
			sx={{
				bgcolor: "background.default",
				color: "text.primary",
				width: "100%",
				minHeight: "100vh",
			}}
		>
			<header>
				<IconButton
					sx={{ ml: 1 }}
					onClick={colorMode.toggleColorMode}
					color="inherit"
					style={{ float: "right" }}
				>
					{theme.palette.mode === "dark" ? <LightModeIcon /> : <Brightness2Icon />}
				</IconButton>
				<IconButton sx={{ ml: 1 }} onClick={onDownload} color="inherit" style={{ float: "right" }}>
					<DownloadIcon />
				</IconButton>
			</header>
			<div className="main-component">
				<div className="left-pane">
					<Typography variant="h5">About</Typography>
					<Divider flexItem />
					<Typography variant="body2" marginTop="15px">
						{`Zico da Silva ${"\u2014"} a software engineer with a particular interest in robotics and digital signal processing (DSP).`}
					</Typography>
					<Typography variant="body2" marginTop="15px">
						I am not bound to a specific domain; instead, I let my interest in engineering and mathematics lead me to various applications. I would like to be involved in more projects that have a direct social and environmental impact. Therefore, I am currently open to technical roles that directly contribute to environmental sustainability or community building.
					</Typography>
					<Typography variant="body2" marginTop="15px">
						Preferred languages: Rust, C/C++, Python, and JavaScript (NodeJS and ReactJS).
					</Typography>
					<Typography variant="body2" marginTop="15px">
						Preferred fields: Software development, DSP, embedded systems, machine learning, and control theory.
					</Typography>
					<br />
					<Typography variant="h5">Published Works</Typography>
					<Divider flexItem />
					<PublishedPapersList />
					<Typography variant="h5" style={{ marginTop: "7px" }}>
						Contact
					</Typography>
					<Divider flexItem />
					<br />
					{/* <Typography variant="body2">
						<Link2 to="/blog" style={{ textDecoration: "none", color: "inherit" }}>
							→ Blog
						</Link2>
					</Typography> */}
					<Typography variant="body2">
						→ Email:{" "}
						<Link href="mailto:zicods7@gmail.com" target="_blank" color="text.primary">
							zicods7@gmail.com
						</Link>
					</Typography>
					<Typography variant="body2">
						→ GitHub:{" "}
						<Link href="https://github.com/zicodasilva" target="_blank" color="text.primary">
							zicodasilva
						</Link>
					</Typography>
					<Typography variant="body2">
						→ LinkedIn:{" "}
						<Link href="https://www.linkedin.com/in/zicoengineer/" target="_blank" color="text.primary">
							zicoengineer
						</Link>
					</Typography>
				</div>
				<div className="center-pane">
					<Typography variant="h5">Experience</Typography>
					<Divider flexItem />
					<WorkExperienceList />
				</div>
				<div className="right-pane">
					<Typography variant="h5">Projects</Typography>
					<Divider flexItem />
					<ProjectList />
				</div>
			</div>
		</Box>
	);
}
