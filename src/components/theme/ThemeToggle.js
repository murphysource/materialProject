import React, { useContext } from "react";
import { ThemeContext } from "./SetThemeProvider";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(10),
    height: "2.5rem",
    width: "2.5rem",
  },
  icon: {
    fontSize: "1.25rem",
  },
}));

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const classes = useStyles();

    return (
      <Tooltip
        title={"Toggle theme"}
        placement="right"
        TransitionComponent={Zoom}
      >
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          aria-label={"Toggle theme"}
          className={classes.iconButton}
        >
          {theme === "light" ? (
              <Brightness4Icon className={classes.icon} />
          ) : (
              <Brightness7Icon className={classes.icon} />
          )}
        </IconButton>
      </Tooltip>
    );
};