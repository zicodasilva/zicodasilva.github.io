import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Divider, Typography } from "@mui/material";

import { userPrefs } from "./utils";
import WorkExperienceList from "./components/WorkExperienceList";
import ProjectList from "./components/ProjectList";
import PublishedPapersList from "./components/PublishedPapersList";
import "./App.css";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	return (
		<Box
			sx={{
				bgcolor: "background.default",
				color: "text.primary",
				width: "100%",
				height: "100vh",
			}}
		>
			<header>
				<IconButton
					sx={{ ml: 1 }}
					onClick={colorMode.toggleColorMode}
					color="inherit"
					style={{ float: "right" }}
				>
					{theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>
			</header>
			<div className="main-component">
				<div className="left-pane">
					<Typography variant="h5">About</Typography>
					<Divider flexItem />
					<Typography variant="body1" marginTop="15px">
						{`Selected works by Zico da Silva ${"\u2014"} software engineer, with particular interest in dynamic motion applications.`}
					</Typography>
				</div>
				{/* <Divider orientation="vertical" flexItem /> */}
				<div className="center-pane">
					<Typography variant="h5">Selected Projects</Typography>
					<Divider flexItem />
					<ProjectList />
					<br />
					<Typography variant="h5">Published Works</Typography>
					<Divider flexItem />
					<PublishedPapersList />
				</div>
				{/* <Divider orientation="vertical" flexItem /> */}
				<div className="right-pane">
					<Typography variant="h5">Experience</Typography>
					<Divider flexItem />
					<WorkExperienceList />
				</div>
			</div>
		</Box>
	);
}

export default function ToggleColorMode() {
	const [mode, setMode] = React.useState(userPrefs.get("darkTheme") === "false" ? "light" : "dark");
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
