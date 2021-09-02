import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import tony from "../components/Images/tony.jpg";
import { Button, Card } from "@material-ui/core";
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
    fontWeight:1000,
    borderColor: "#E42D22",
    color: "black",
    lineHeight:1,
    "&:hover": {
      backgroundColor: '#E42D22',
      color: "white"
    }
  },
}));

export default function Announcement() {
  const classes = useStyles();

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
        <Grid justifyContent="center" spacing={0} item xs={6}>
          <Card elevation={0}>
            <img className={classes.img} src={tony} />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card elevation={0}>
            <h1 className={classes.title}>The Best Student ATO Bradley</h1>
            <p className={classes.text}>
              ATO Bradley is a Junior year student in Pkfokam institute and
              there is honestly nothing more to say about him. He is just an
              amazing young man with extremely big brains. Only he knows
            </p>
            <Button className={classes.button}>Read More About ATO</Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
