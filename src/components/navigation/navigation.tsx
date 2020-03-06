import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  Divider,
  ListItem,
  Button,
  FormControl,
  NativeSelect,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import StyleIcon from '@material-ui/icons/Style';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import GroupIcon from '@material-ui/icons/Group';
import TimelapseIcon from '@material-ui/icons/Timelapse';

import { useTranslation, Trans } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      'text-decoration': 'none',
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
);

export default function Navigation() {
  const classes = useStyles();
  const hystory = useHistory();
  console.log(hystory.location.pathname.substr(1));

  const { i18n } = useTranslation();
  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
    console.log(i18n.language);
  };

  const [state, setState] = React.useState({
    menu: false,
  });
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, menu: open });
  };

  const handleLangChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    changeLanguage(event.target.value as string);
  };

  const pageNames = ['Home', 'Authors', 'Styleguide', 'Team', 'Worklog'];
  const icons = [
    <AccountBalanceIcon key="HomeIcon" color="primary" />,
    <RecentActorsIcon key="AuthorsIcon" color="primary" />,
    <StyleIcon key="StyleguideIcon" color="primary" />,
    <GroupIcon key="TeamIcon" color="primary" />,
    <TimelapseIcon key="WorklogIcon" color="primary" />,
  ];

  const sideList = () => (
    <div
      className={'list'}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pageNames.map((text, index) => (
          <ListItem button key={text}>
            <Link to={`/${text}`}>
              <Button startIcon={icons[index]} fullWidth={true} color="primary">
                <Trans>{text}</Trans>
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Trans>
              {pageNames.indexOf(hystory.location.pathname.substr(1)) !== -1 && hystory.location.pathname.substr(1) !== "Home"
                ? hystory.location.pathname.substr(1)
                : ' '}
            </Trans>
          </Typography>
          <FormControl className={classes.input}>
            <NativeSelect
              id="demo-customized-select-native"
              // value='en'
              onChange={handleLangChange}
              // input={<BootstrapInput />}
            >
              <option value={'ru'}>Ru</option>
              <option value={'en'}>En</option>
              <option value={'be'}>Be</option>
            </NativeSelect>
          </FormControl>
        </Toolbar>
      </AppBar>
      <Drawer open={state.menu} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}
