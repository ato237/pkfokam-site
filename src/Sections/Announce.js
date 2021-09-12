import React, { useEffect } from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import tony from "../components/Images/tony.jpg";
import { Box, Button } from "@material-ui/core";
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
    order: (isLeft) => (isLeft ? 2 : 3),
    [theme.breakpoints.down("sm")]: {
      order: (isRight) => (isRight ? 3 : 2),
    },
  },
  item3: {
    order: (isLeft) => (isLeft ? 3 : 2),
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
  root: {
    flexGrow: 1,
    padding: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "35px",
    },
  },
  programs: {
    fontFamily: "Roboto, sans-serif",

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
  paragraph: {
    fontSize: "18px",
    fontWeight: 500,
    color: "black",
  },
  text: {
    fontFamily: "Roboto, sans-serif",

    maxWidth: "1000px",
    fontSize: "20px",
    color: "#000",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      maxWidth: "1000px",
    },
  },
  length: {
    height: "200px",
  },
  heading: {
    color: "#1E2061",
    fontWeight: 1000,
  },
  button: {
    padding: "20px 61px 20px 61px",
    marginLeft: "60px",
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
  [theme.breakpoints.down("sm")]: {
    transition: "0.2s ease-in-out",
    maxWidth: "1000px",
    padding: "20px 61px 20px 61px",
  },
}));

export default function Announce({
  button,
  heading,
  text,
  title,
  button1,
  heading1,
  text1,
  title1,
  button2,
  heading2,
  text2,
  title2,
  Img,
  Img1,
  Img2,
}) {
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
        }}
      >
        <Typography
          className={classes.programs}
          gutterBottom
          variant="h4"
          component="h2"
        >
          {title}
        </Typography>
      </div>
      <Grid container item spacing={0}>
        <Grid
          className={classes.item3}
          justifyContent="center"
          spacing={0}
          item
          xs={12}
          md={5}
          lg={4}
        >
          <Grid item>
            <Card elevation={0} className={classes.root}>
              <CardActionArea className={classes.pors}>
                <CardMedia
                  className={classes.length}
                  component="img"
                  alt="Contemplative Reptile"
                  image={Img}
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.pors}>
                  <Typography
                    className={classes.heading}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {heading}
                  </Typography>
                  <Typography
                    className={classes.paragraph}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid className={classes.item2} item xs={12} md={5} lg={4}>
          <Card elevation={0} className={classes.root}>
            <CardActionArea className={classes.pors}>
              <CardMedia
                className={classes.length}
                component="img"
                alt="Contemplative Reptile"
                image={Img2}
                title="Contemplative Reptile"
              />
              <CardContent className={classes.pors}>
                <Typography
                  className={classes.heading}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {heading1}
                </Typography>
                <Typography
                  className={classes.paragraph}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {text1}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </Grid>

        <Grid className={classes.item2} item xs={12} md={5} lg={4}>
          <Card elevation={0} className={classes.root}>
            <CardActionArea className={classes.pors}>
              <CardMedia
                className={classes.length}
                component="img"
                alt="Contemplative Reptile"
                image={Img1}
                title="Contemplative Reptile"
              />
              <CardContent className={classes.pors}>
                <Typography
                  className={classes.heading}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {heading2}{" "}
                </Typography>
                <Typography
                  className={classes.paragraph}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {text2}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>
      <Button className={classes.button} size="small" color="primary">
        {button}
      </Button>
    </div>
  );
}
