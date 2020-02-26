import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Modal,
    Fade,
 } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
      },
    media: {
        height: 200
    },
    modal: {
      margin: 'auto',
      width: '700px',
      height: '600px',
    },
});

function Authors() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
     setOpen(true);
   };

  const handleClose = () => {
     setOpen(false);
   };

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

            <Button variant="contained" color="secondary" onClick={handleOpen}>Watch the video</Button>
             <Modal
               className={classes.modal}
               open={open}
               onClose={handleClose}
             >
               <Fade in={open}>
                 <CardMedia
                    component="iframe"
                    width="560"
                    height="460"
                    image="https://www.youtube.com/embed/6Lbi3ObnBng"
                    title="Contemplative Reptile" />
               </Fade>
             </Modal>
        </Card>
    </div>
  );
}

export default Authors;
