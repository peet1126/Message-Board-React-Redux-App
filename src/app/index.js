import React from "react";

import "app/App.css";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import CommentList from "components/CommentList";
import TopThreeCommenters from "components/TopThreeCommenters";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "64px",
    paddingTop: "30px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Header />

      <CommentModal />

      <Container maxWidth="lg" className={classes.container}>
        <Grid
          item
          xs={12}
          container
          spacing={2}
          wrap="wrap-reverse"
          justifyContent="space-between"
        >
          <Grid item xs={12} lg={6}>
            <CommentList />
          </Grid>
          <Grid item xs={12} lg={5}>
            <TopThreeCommenters />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
