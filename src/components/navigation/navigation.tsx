import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton, 
    Drawer, 
    List, 
    Divider, 
    ListItem, 
    ListItemIcon, 
    ListItemText,
    FormControl,
    NativeSelect

} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
      }
    }
  })
);



export default function Navigation() {
  const classes = useStyles();
  const [lang, setLang] = React.useState("");
  const [state, setState] = React.useState({
    menu: false
  });
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, menu: open });
  };

  const handleLangChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };

  const sideList = () => (
    <div
      className={"list"}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "Authors", "Styleguide","test"].map((text, index) => (
          <ListItem button key={text}>       
            <Link to={`/${text}`}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
            Home
          </Typography>
          <FormControl className={classes.input}>
            <NativeSelect
              id="demo-customized-select-native"
              value={lang}
              onChange={handleLangChange}
              // input={<BootstrapInput />}
            >
              <option value={'Ru'}>Ru</option>
              <option value={'En'}>En</option>
              <option value={'Be'}>Be</option>
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
