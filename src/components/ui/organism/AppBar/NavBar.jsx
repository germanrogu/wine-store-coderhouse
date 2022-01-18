import React, { useContext } from "react";
import { AppBar, CssBaseline, Grid, Toolbar, Button } from "@mui/material";

import { NavLogo } from "../../atoms/NavLogo/NavLogo";
import logo from "../../../../img/comercio-electronico.png";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { MenuOption } from "../../molecules/MenuOption/MenuOption";
import { makeStyles, withStyles } from "@mui/styles";
import { CartWidget } from "../../atoms/CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    height: "5rem",
    backgroundColor: "black",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  ini: {
    display: "flex",
    alignItems: "center",
  },
}));

const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      color: "white",
      fontSize: "1rem",
    },
  },
}))(Button);

export const NavBar = () => {
  const classes = useStyles();
  const { cartCounter } = useContext(CartContext);

  const pages = [
    "Electronics",
    "Jewelery",
    "Men's clothing",
    "Women's clothing",
  ];
  const settings = ["Perfil", "Configuración", "Cerrar sesión"];

  const handleItem = () => {
    // console.log("Item");
  };

  return (
    <>
      <CssBaseline />

      <AppBar position="static" className={classes.root} elevation={1}>
        <Toolbar disableGutters className={classes.toolbar}>
          <Grid container>
            <Grid item xs={2} className={classes.ini}>
              <NavLogo logo={logo} />
            </Grid>

            <Grid
              item
              xs={5}
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <MenuOption
                icon={<MenuIcon fontSize="large" />}
                tooltip={"Items"}
                items={pages}
              />
            </Grid>

            <Grid
              item
              xs={5}
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page) => (
                <Link
                  to={`/categoria/${page}`}
                  style={{ display: "flex", textDecoration: "none" }}
                  key={page}
                >
                  <ButtonCustom onClick={handleItem}>{page}</ButtonCustom>
                </Link>
              ))}
            </Grid>

            <Grid
              item
              xs={5}
              sx={{ flexGrow: 0, display: "flex", justifyContent: "flex-end" }}
            >
              <Link
                to={`/cart`}
                style={{ display: "flex", textDecoration: "none" }}
              >
                <CartWidget itemNumber={cartCounter()} />
              </Link>
              <MenuOption
                icon={<AccountCircleIcon fontSize="large" />}
                tooltip={"Items"}
                items={settings}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
