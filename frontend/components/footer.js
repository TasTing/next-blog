import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Toolbar, Grid, Container, Box  } from "@material-ui/core";
import Link from "next/link";
import { getStrapiMedia } from "../lib/media";
import Stargazer from "./projectSource";
import OpenWeather from "./openweather";


const Copyright = () => {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        TLOG
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    color:"wheat",
  },
}));

const Footer = ({ global, categories }) => {
  const classes = useStyles();
  const backgroundImage = getStrapiMedia(global.defaultSeo.shareImage)
  return (
    <footer className={classes.footer} style={{backgroundImage:`url(${backgroundImage})`,backgroundSize: 'cover'}}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={3}>
            <Container>
              {
                categories.map((category => (
                  <Link as={`/category/${category.slug}`} href={`/category/${category.id}`} key={category.id}>
                    <a className="nav-link">{category.name.toUpperCase()}</a>
                  </Link>
                )))
              }
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container>
              <Typography variant="h6" align="center" gutterBottom>
                {global.siteName}
              </Typography>
              <Typography variant="subtitle1" align="center" component="p">
                {global.defaultSeo.metaDescription}
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant={"h6"} align={"center"}>More Resources:</Typography>
            <Box display='flex' alignItems={'center'} justifyContent="center">
              <Stargazer/>
            </Box>
            <Box>
              <Typography variant="subtitle1" align="center" component="p">
                <a href="https://pngtree.com/free-backgrounds">FREE BACKGROUNDS</a>
              </Typography>
            </Box>
            <Box>
              <OpenWeather/>
            </Box>
          </Grid>
        </Grid>
        <Copyright/>
      </Container>
    </footer>
  );
};

export default Footer;
