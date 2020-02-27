import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
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
 import { Trans } from 'react-i18next';
import Directors from '../../locales/en/translation.json'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
      },
    media: {
        height: 200,
        'background-size':'contain'
    },
    modal: {
      margin: 'auto',
      width: '700px',
      height: '600px',
    },
});

interface PROPS {
    director: string
}

function InfoCard(props: PROPS) {
  const {director} = props;
  const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key];
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
     setOpen(true);
   };

  const handleClose = () => {
     setOpen(false);
   };

  const classes = useStyles();

  return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={getKeyValue(director)(Directors).img[0]}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    <Trans>
                        tr:{director}.name
                    </Trans>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Trans>
                        tr:{director}.date
                    </Trans>
                    <Trans>
                        tr:{director}.description
                    </Trans>
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Trans>
                        in:LEARN MORE
                    </Trans>
                </Button>
                <Button variant="contained" color="secondary" onClick={handleOpen}>Watch the video</Button>
            </CardActions>

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
  );
}

export default InfoCard;
