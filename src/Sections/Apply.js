import React, { useEffect } from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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
    item2: {
        background: "#2E3192",

    order:3,
    [theme.breakpoints.down("sm")]: {
      order: (isRight) => (isRight ? 3 : 2),
    },
  },
    item3: {
      background: "#2E3192",
    order: (isLeft) => (isLeft ? 3 : 2),
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
    root: {
        
        marginBottom:"80px",
      background: "#1E2061",
    flexGrow: 1,
    padding: "80px",
    [theme.breakpoints.down("sm")]: {
      padding: "25px",
    },
  },
  programs: {
      color: "white",
      fontSize: "60px",
    maxWidth:"300px",
    paddingBottom: "2px",
    width: "100%",
    margin: "45px",
  },
  img: {
    width: "100%",
  },
  title: {
    fontFamily: "Roboto, sans-serif",

    maxWidth: "1000px",
    fontSize: "100px",
    color: "#1E2061",
    marginLeft: "auto",
    [theme.breakpoints.down("lg")]: {
      transition: "0.2s ease-in-out",
      maxWidth: "1000px",
      fontSize: "70px",
    },
    [theme.breakpoints.down("md")]: {
      transition: "0.2s ease-in-out",
      maxWidth: "1000px",
      fontSize: "45px",
    },
    [theme.breakpoints.down("sm")]: {
      transition: "0.2s ease-in-out",
      maxWidth: "1000px",
      fontSize: "50px",
    },
  },
    text: {
        background: "#2E3192",
    fontFamily: "Roboto, sans-serif",
    maxWidth: "1000px",
    fontSize: "20px",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      maxWidth: "1000px",
    },
  },
  button: {
    padding: "20px 61px 20px 61px",
    margin: "60px",
    marginLeft: "0",
    fontWeight: 1000,
    backgroundColor: "#FFA500",
    color: "black",
    lineHeight: 1,
    "&:hover": {
      backgroundColor: "#E42D22",
      color: "white",
    },
  },
  [theme.breakpoints.down("sm")]: {
    transition: "0.2s ease-in-out",
    maxWidth: "1000px",
    padding: "20px 61px 20px 61px",
  },
}));

export default function Apply({ button, Img, heading, text, title, isLeft }) {
  const classes = useStyles(isLeft);
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
        }}
      >
      
      </div>
      <Grid container item spacing={6}>
        <Grid
          className={classes.item3}
          justifyContent="center"
          spacing={0}
          item
          xs={12}
          md={6}
          lg={6}
        >
          <Grid item>
            <Box order={2}>
              <Typography
                className={classes.programs}
                gutterBottom
                variant="h4"
                component="h2"
              >
                Apply To PKFOKAM TODAY
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid className={classes.item2} item xs={12} md={6} lg={6}>
              <h1 className={classes.title}>{heading}</h1>
              <p className={classes.text}>
                Every year, hundreds of students – including a
                record 274 degree-credit students – choose The Pkfokam
                institure of Excellence for a multitude of reasons that can be
                summed up as one: opportunity. Providing a quality, accessible
                education, regardless of background or means, has been CUNY’s
                mission since 2006.
              </p>
              <Button className={classes.button}>APPLY NOW</Button>
        </Grid>
      </Grid>
    </div>
  );
}
