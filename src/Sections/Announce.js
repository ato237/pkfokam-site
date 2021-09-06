import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import tony from "../components/Images/Djamen.jpg";
import { Button, Card } from "@material-ui/core";
import "aos/dist/aos.css"
import Aos from "aos";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "100px",
  },
  programs: {
    borderBottom: "1px solid #E42D22",
    paddingBottom: "2px",
    width: "30%",
    margin: "45px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  img: {
    width: "100%",
    height: "700px",
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
}));

export default function Announce() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({duration:3000})
  }, [])
  return (
    <div className={classes.root}>
      <Typography
        className={classes.programs}
        gutterBottom
        variant="h4"
        component="h2"
      >
        Success at it's finest
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card elevation={0}>
            <h1 className={classes.title}>Entrance Exam Launched!</h1>
            <p className={classes.text}>
              Djamen Chris is the most intelligent on campus. He has had numeros
              diplomas including the CISCO diploma and he keeps on Chasing them
              bags and them bitches
            </p>
            <Button className={classes.button}>Read More About DJAMEN</Button>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card elevation={0}>
            <img data-aos="fade-left" className={classes.img} src={tony} alt="djamen" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
