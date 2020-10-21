import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Toolbar, Grid } from "@material-ui/core";
import Link from "next/link";

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
    backgroundColor:'#212529',
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    color:"wheat",
  },
}));

const Footer = ({ global, categories }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
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
            <Typography variant="h6" align="center" gutterBottom>
              {global.siteName}
            </Typography>
            <Typography variant="subtitle1" align="center" component="p">
              {global.defaultSeo.metaDescription}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant={"h6"} align={"center"}>More Resources:</Typography>
            <Typography variant="subtitle1" align="center" component="p">
              <a href="https://pngtree.com/free-backgrounds">free background photos from pngtree.com</a>
            </Typography>
          </Grid>
        </Grid>
        <Copyright/>
      </Container>
    </footer>
  );
};

export default Footer;
