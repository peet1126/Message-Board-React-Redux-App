import { useSelector } from "react-redux";

// MUI imports
import { Grid, Typography } from "@material-ui/core";

// files
import CommentCard from "./CommentCard";

export default function TopThreeCommenters() {
  // set comments from the store with useSelector
  const comments = useSelector((state) => state.comments);

  // Massage the comments array to get an array of the top three commentors arranged by commenter name in descending order of comment count.
  const topThreeCommentors = (objectArray) => {
    // Set an empty object
    let data = {};

    // create new arrays with the name as the key
    objectArray.map((comment) => {
      /// if the array of objects with "name" as key doesn't exist, create it
      if (data[comment.name] === undefined) {
        data[comment.name] = [];
      }

      /// push all the data into the relevant dictionary
      return data[comment.name].push({ ...comment });
    });

    // now data is arranged by commenter name (and all their other data)
    // console.log("DATA", data);

    // use Object.value on the newly created object to turn it into a workable map of arrays to return to UI
    // sort the data alphabetically for the case when two of the top three commentors have the same number of comments.
    data = Object.values(data).sort((a, b) => (a[0].name < b[0].name ? -1 : 1));

    // sort by array length to order the commentors in descending order of comment count
    data = data.sort((a, b) => (a.length > b.length ? -1 : 1));

    // filter out all commentors who are not one of the top three commentors
    data = data.filter((comment, i) => i < 3);

    // console.log("DATA 2", data);

    return data;
  };

  const topThreeSorted = topThreeCommentors(comments);

  return (
    <div>
      <Grid
        item
        container
        direction="column"
        xs={12}
        justifyContent="flex-start"
      >
        <Typography variant="h4">Top Three Commentors:</Typography>
        {topThreeSorted &&
          topThreeSorted.map((group) => (
            <CommentCard
              name={group[0].name}
              count={group.length}
              key={group[0].id}
            />
          ))}
      </Grid>
    </div>
  );
}
