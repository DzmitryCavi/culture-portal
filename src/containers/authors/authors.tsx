import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
 } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
      },
    media: {
        height: 200
    },
});
function Authors() {
  const classes = useStyles();
  return (
    <div>
        <span>Search</span>
        <TextField />
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://minsknews.by/wp-content/uploads/2020/02/Boris-Luczenko-e1580914632504.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Barys Lucenka
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    16.09.1937 - 05.02.2020
                    Belarusian theater director, People’s Artist of Belarus 1995.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
    </div>
  );
}

export default Authors;
