import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Img from "../components/Images/econs.jpg";
import Img2 from "../components/Images/mech.jpg";

import Img3 from "../components/Images/vomp.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0px",
    position: "relative",
    right: "20px",
  },
  paper: {},
  control: {},
  pors: {
    width: "400px",
    boxShadow: "none",
  },
  programs: {
    borderBottom: "1px solid #E42D22",
    paddingBottom: "2px",
    width: "20%",
    margin: "45px",
  },
  heading: {
    color: "#1E2061",
    fontWeight: 1000,
  },
  media: {},
  button: {
    padding: "20px 61px 20px 61px",
    margin: "60px",
    marginLeft: "120px",
    border: " 3px solid",
    fontWeight:1000,
    borderColor: "#E42D22",
    color: "black",
        lineHeight: 1,
    "&:hover": {
      backgroundColor: '#E42D22',
      color: "white"
    }
  },
  paragraph: {
    fontSize: "18px",
    fontWeight: 500,
    color:"black"
  },
  link: {
    textDecoration: "none",
    padding:"20px"
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <>
      <Typography
        className={classes.programs}
        gutterBottom
        variant="h4"
        component="h2"
      >
        Our Programs
      </Typography>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
          <Link to ='/computer-engineering' className={classes.link}>
            <Grid item>
              <Card elevation={0} className={classes.root}>
                <CardActionArea className={classes.pors}>
                  <CardMedia
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
                      Study Computer Engineering
                    </Typography>
                    <Typography
                      className={classes.paragraph}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Come and learn the best course in the world here
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
              </Grid>
            </Link>
            <Link to ='/economics-management' className={classes.link}>
            <Grid item>
              <Card elevation={0} className={classes.root}>
                <CardActionArea className={classes.pors}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={Img2}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      className={classes.heading}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Study Economics and Management
                    </Typography>
                    <Typography
                      className={classes.paragraph}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      This course is trash but you will pass
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
              </Grid>{" "}
            </Link>
            <Link className={classes.link} to ='/mechanical-engineering'>
            <Grid item>
              <Card elevation={0} className={classes.root}>
                <CardActionArea className={classes.pors}>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    alt="Contemplative Reptile"
                    image={Img3}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      className={classes.heading}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Study Mecahnincal Engineering
                    </Typography>
                    <Typography
                      className={classes.paragraph}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Mechanical engineering is another treash course but it is
                      kinda dope
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
              </Grid>
              </Link>
          </Grid>
        </Grid>
        </Grid>
        
      <Button className={classes.button} size="small" color="primary">
        Learn More
      </Button>
    </>
  );
}
