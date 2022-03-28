// MUI imports
import {
  Grid,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  createStyles,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

// use MUI theme secondary color for the avatar background
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: theme.palette.secondary.main,
    },
  })
);

// Pass name, body, count down as props in order to reuse CommentCard component for comment list and top three commentor
export default function CommentCard({ name, body, count }) {
  const classes = useStyles();

  // Get the first and last name initials of the commentor from the commentors name (if the name contains a middle name the initials will be collected from the first and last names only)
  const getInitials = (name) => {
    return name
      .trim()
      .split(" ")
      .filter((name, i, arr) => {
        return i === 0 || arr.length - 1 === i;
      })
      .map((name) => name[0].toUpperCase())
      .join(".");
  };

  return (
    <Grid item style={{ paddingTop: 10, paddingBottom: 10 }}>
      <Card style={{ background: grey[100] }}>
        {name && (
          <CardHeader
            avatar={
              <Avatar className={classes.root}>{getInitials(name)}</Avatar>
            }
            title={name}
          />
        )}
        <CardContent>
          {body && <Typography variant="body2">{body}</Typography>}
          {count && (
            <Typography variant="body1">Number of Comments: {count}</Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
