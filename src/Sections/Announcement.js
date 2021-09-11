import React, { useEffect } from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import tony from "../components/Images/tony.jpg";
import { Box, Button, Card } from "@material-ui/core";
import "aos/dist/aos.css";
import Aos from "aos";

// eslint-disable-next-line
const theme = createTheme({
	breakpoints: {
		values: {
			xs: 800,
			xx: 400,
			sm: 600,
			med: 1366,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: "30px",
	},
	programs: {
		paddingBottom: "2px",
		width: "100%",
		margin: "45px",
		borderBottom: "1px solid #E42D22",
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	img: {
		width: "100%",
	},
	title: {
		maxWidth: "1000px",
		fontSize: "80px",
		color: "#1E2061",
		marginLeft: "auto",
		[theme.breakpoints.down("lg")]: {
			transition: "0.2s ease-in-out",
			maxWidth: "1000px",
			fontSize: "60px",
		},
		[theme.breakpoints.down("md")]: {
			transition: "0.2s ease-in-out",
			maxWidth: "1000px",
			fontSize: "45px",
		},
		[theme.breakpoints.down("sm")]: {
			transition: "0.2s ease-in-out",
			maxWidth: "1000px",
			fontSize: "40px",
		},
	},
	text: {
		maxWidth: "1000px",
		fontSize: "30px",
		color: "#000",
		[theme.breakpoints.down("md")]: {
			fontSize: "30px",
			maxWidth: "1000px",
		},
	},
	button: {
		padding: "20px 61px 20px 61px",
		margin: "60px",
		marginLeft: "0",
		border: " 3px solid",
		fontWeight: 1000,
		borderColor: "#E42D22",
		color: "black",
		lineHeight: 1,
		"&:hover": {
			backgroundColor: "#E42D22",
			color: "white",
		},
	},
	[theme.breakpoints.only("xx")]: {
		transition: "0.2s ease-in-out",
		maxWidth: "1000px",
		padding: 0,
	},
}));

export default function Announcement({ button, heading, text, title,button2, heading2, text2, title2 }) {
	const classes = useStyles();
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className={classes.root}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					textAlign: "center",
					alignItems: "center",
				}}>
				<Typography
					className={classes.programs}
					gutterBottom
					variant="h4"
					component="h2">
					{title}{title2}
				</Typography>
			</div>
			<Grid container item spacing={6}>
				<Grid
					order={2}
					justifyContent="center"
					spacing={0}
					item
					xs={12}
					md={6}
					lg={6}>
					<Grid item>
            <Box order={2}>
						<img
							data-aos="fade-right"
							className={classes.img}
							src={tony}
							alt="yosai"
						/>
            </Box>
					</Grid>
				</Grid>
				<Grid order={1} item xs={12} md={6} lg={6}>
          <Box order={1}>
					<Card elevation={0}>
						<h1 className={classes.title}>{heading}</h1>
						<p className={classes.text}>{text}</p>
						<Button className={classes.button}>{button}</Button>
					</Card>
          </Box>
				</Grid>
			</Grid>
		</div>
	);
}
