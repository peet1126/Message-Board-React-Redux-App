import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

// MUI imports
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";

// files
import { commentAdded } from "store/slices/comments";
import {
  closeCommentsModal,
  getViewCommentsModalOpen,
} from "store/slices/view";

// styles for positioning the popup Add A Comment modal
const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

// styles for the Add A Comment form card/box
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  minWidth: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

// modal popup for adding a new comment. The new comments are dispatched to the redux store
const CommentModal = () => {
  // use component state for form input instead of redux global state
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const isOpen = useSelector(getViewCommentsModalOpen);
  const handleClose = () => dispatch(closeCommentsModal());

  const classes = useStyles();

  // on submit dispatch action to add a new comment. Use component state to populate name and comment values. Use nanoid() to create a unique ID
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      commentAdded({
        id: nanoid(),
        name,
        comment,
      })
    );
    setName("");
    setComment("");
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="Add A Comment"
      aria-describedby="Add a comment as a user to see it listed in the comments"
    >
      <Box sx={style}>
        <Typography variant="h6">Add A Comment</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name:"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Comment:"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" color="primary" variant="contained">
                Add Comment
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default CommentModal;
