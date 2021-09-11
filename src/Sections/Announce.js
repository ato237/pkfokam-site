import React,{useEffect} from "react";
import { makeStyles,createTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import tony from "../components/Images/tony.jpg";
import { Button, Card } from "@material-ui/core";
import "aos/dist/aos.css"
import Aos from "aos";

// eslint-disable-next-line
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 800,
      sm: 600,
      med:1366,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

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
    transform: "translateY(-50%)"

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
    marginLeft:"auto",
    [theme.breakpoints.down('lg')]: {
      transition:"0.2s ease-in-out",
      maxWidth: "1000px",
    fontSize: "60px",
    },
    [theme.breakpoints.down('md')]: {
      transition:"0.2s ease-in-out",
      maxWidth: "1000px",
    fontSize: "45px",
    
    },
    [theme.breakpoints.down('md')]: {
      transition:"0.2s ease-in-out",
      maxWidth: "1000px",
    fontSize: "25px",
    
    },
  },
  text: {
    maxWidth: "1000px",
    fontSize: "30px",
    color: "#000",
    [theme.breakpoints.down('md')]: {
      fontSize:"20px",
      maxWidth:"1000px"
    },
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

export default function Annocunce() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({duration:2000})
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
      <Grid container spacing={1}>
        <Grid container justifyContent="center" spacing={0} item     xs={12}
              md={6}
              lg={6}
            
             >
          <Grid item>
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
        <Grid item  xs={12}
              md={6}
              lg={6}>
           <Card elevation={0}>
            <img data-aos="fade-right" className={classes.img} src={tony} alt="yosai" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
