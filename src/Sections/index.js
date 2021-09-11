import React from "react";
import { makeStyles,createTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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

// eslint-disable-next-line
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      med:1366,
      md: 1004,
      lg: 1280,
      xl: 1920,
    },
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0px",
    position: "relative",
    right: "20px",
    padding: "20px"
  
  },
  paper: {},
  control: {},
  pors: {
    width: "400px",
    boxShadow: "none",
    [theme.breakpoints.up('md')]: {
      transition:"0.1s ease-in-out",
      width:"300px",
    },
    [theme.breakpoints.up('sm')]: {
      transition:"0.1s ease-in-out",
      width:"250px",
    },
  },
  programs: {
    borderBottom: "1px solid #E42D22",
    paddingBottom: "2px",
    width: "20%",
    margin: "105px",
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
  // eslint-disable-next-line
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

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
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
          <Link to ='/computer-engineering' className={classes.link}>
            <Grid item >
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
