import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import tony from "../components/Images/tony.jpg";
import yosai from "../components/Images/yosai.jpg";

import { Card } from "@material-ui/core";
import "aos/dist/aos.css";
import Aos from "aos";


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: "100px",
	},
	programs: {
		borderBottom: "1px solid #E42D22",
		paddingBottom: "2px",
		width: "60%",
		margin: "45px",
		fontSize: "50px",
		textAlign: "center",
		color: "#3B3D99",
		fontWeight: 800,
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
	},
	text: {
		maxWidth: "1000px",
		fontSize: "20px",
		color: "#000",
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
	pos: {
		position: "relative",
		bottom: "350px",
		left: "350px",
	},
}));

export default function Entrance() {
	const classes = useStyles();
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className={classes.root}>
			<Typography
          className={classes.programs}
          gutterBottom
          variant="h4"
          component="h2"
        >
          PKFokam The PLACE TO BE
        </Typography>
			<Grid justifyContent="center" container spacing={3}>
				<Grid spacing={0} item xs={12} md={6} lg={4}>
					<Card elevation={0}>
						<img
							data-aos="fade-right"
							className={classes.img}
							src={tony}
							alt="yosai"
						/>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Card elevation={0}>
						<img className={classes.img} src={yosai} alt="yosai" />
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Card elevation={0}>
						<img className={classes.img} src={tony} alt="yosai" />
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
