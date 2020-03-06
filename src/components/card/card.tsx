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
} from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Trans } from 'react-i18next';
import Directors from '../../locales/en/translation.json';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    height: 600,
    position: 'relative',
    color: 'white',
    background: '#444',
    // display: 'flex',
    // justifySelf: 'center',
  },
  media: {
    height: 380,
    'background-size': 'cover',
  },
  modal: {
    margin: 'auto',
    width: '700px',
    height: '600px',
  },
  buttons: {
    width: '-moz-available',
    position: 'absolute',
    bottom: 0,
  },
  link: {
    color: 'white',
    'text-decoration': 'none',
  },
  cardName: {
    color: '#f2ed83',
  },
});

interface PROPS {
  director: string;
}

function InfoCard(props: PROPS) {
  const { director } = props;
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
      <Link to={`/director/${director}`} className={classes.link}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={getKeyValue(director)(Directors).img[0]}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.cardName}
            >
              <Trans>tr:{director}.name</Trans>
            </Typography>
            <Typography variant="body2" color="inherit" component="p">
              <Trans>tr:{director}.date</Trans>
            </Typography>
            <Typography variant="body2" color="inherit" component="p">
              <Trans>tr:{director}.description</Trans>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className={classes.buttons}>
        <Button
          startIcon={<YouTubeIcon />}
          variant="contained"
          fullWidth={true}
          color="secondary"
          onClick={handleOpen}
        >
          <Trans>in:Watch the video</Trans>
        </Button>
      </CardActions>

      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <Fade in={open}>
          <CardMedia
            component="iframe"
            width="560"
            height="460"
            image="https://www.youtube.com/embed/6Lbi3ObnBng"
            title="Contemplative Reptile"
          />
        </Fade>
      </Modal>
    </Card>
  );
}

export default InfoCard;
