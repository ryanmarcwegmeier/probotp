import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {
    NavLink
  } from "react-router-dom";



const styles = theme => ({ 
    navlinks:{
        color:'white',
    },
  });


class Appbar extends React.Component {

    render() {
        const {classes} = this.props;
        
        return (

            <div className={"row"}>
                <AppBar position="static">
                    <Toolbar>

                        <Typography variant="h6" className={"col"}>
                            Pokemon Revolution Online 
                        </Typography>

                        <Typography variant="h6" align="center" className={"col"}>
                                <NavLink activeStyle={{fontWeight:'bold', textDecoration:'underline white'}} exact to="/" style={{ textDecoration: 'none', marginLeft:'8px', marginRight:'8px'}}> <span className={classes.navlinks}>Bot</span></NavLink>

                                <NavLink activeStyle={{fontWeight:'bold', textDecoration:'underline white'}} exact to="/maps" style={{ textDecoration: 'none', marginLeft:'8px', marginRight:'8px'}}> <span className={classes.navlinks}>Maps</span></NavLink>

                                <NavLink activeStyle={{fontWeight:'bold', textDecoration:'underline white'}} exact to="/pokemons" style={{ textDecoration: 'none', marginLeft:'8px', marginRight:'8px'}}> <span className={classes.navlinks}>Pokemons</span></NavLink>
                        </Typography>
                        <Typography className={"col"}> &nbsp; </Typography>
                        

                   

                    
                    </Toolbar>
                </AppBar>
            </div>

        );
    }
}


export default withStyles(styles)(Appbar);