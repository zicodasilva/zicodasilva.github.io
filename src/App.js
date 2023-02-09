import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness2Icon from "@mui/icons-material/Brightness2";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
import LightModeIcon from "@mui/icons-material/LightMode";
import DownloadIcon from "@mui/icons-material/Download";
import { Divider, Typography, Link } from "@mui/material";

import { userPrefs } from "./utils";
import WorkExperienceList from "./components/WorkExperienceList";
import ProjectList from "./components/ProjectList";
import PublishedPapersList from "./components/PublishedPapersList";
import "./App.css";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
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
				// height: "100vh",
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
						{`Zico da Silva ${"\u2014"} a software engineer with a particular interest in dynamic motion applications and optimal control and estimation problems.`}
					</Typography>
					<Typography variant="body2" marginTop="15px">
						Preferred languages: C/C++, Python, JavaScript (NodeJS and ReactJS).
					</Typography>
					<Typography variant="body2" marginTop="15px">
						Preferred fields: Computer Vision and Control Theory.
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

export default function ToggleColorMode() {
	const [mode, setMode] = React.useState(userPrefs.get("darkTheme") === "true" ? "dark" : "light");
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[],
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === "light"
						? {
								background: {
									default: "#FFF8E9",
								},
								text: {
									primary: "#000",
								},
						  }
						: {
								background: {
									default: "#121212",
								},
								text: {
									primary: "#FFF8E9",
								},
						  }),
				},
				typography: {
					fontFamily: "Helvetica Neue",
				},
			}),
		[mode],
	);

	React.useEffect(() => {
		userPrefs.set("darkTheme", mode === "light" ? "false" : "true");
	}, [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
