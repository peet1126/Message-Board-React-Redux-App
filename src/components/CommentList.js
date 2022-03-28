import { useSelector } from "react-redux";

// MUI imports
import { Grid, Typography } from "@material-ui/core";

// files
import CommentCard from "./CommentCard";

// list all the comments by mapping through the comments in the redux store
export default function CommentList() {
  // set comments from the store with useSelector
  const comments = useSelector((state) => state.comments);

  return (
    <>
      <Grid item container direction="column" xs={12}>
        <Typography variant="h4">Comments:</Typography>
        {comments &&
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              name={comment.name}
              body={comment.comment}
            />
          ))}
      </Grid>
    </>
  );
}
