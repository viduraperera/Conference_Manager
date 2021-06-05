import React, {useState} from "react";
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core";
import useStyles from './navBarStyles'
import {Link} from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const navBar = () =>{
    const classes = useStyles();

//workShop tools
    const [workshop, setWorkshop] = useState(null);
    const handleWorkshop = (event) => {
        setWorkshop(event.currentTarget)
    };

    const approvedWorkshops = () => {
        setWorkshop(null);
    };
    const createWorkshops = () => {
        setWorkshop(null);
    };

//research tools
    const [research, setResearch] = useState(null);
    const handleResearch = (event) => {
        setResearch(event.currentTarget)
    };

    const approvedResearch = () => {
        setResearch(null);
    };
    const createResearch = () => {
        setResearch(null);
    };

//sign IN
    const handleSignIn = () =>{

    }
    return(
        <AppBar className={classes.appBar}  color={"transparent"}>
            <div className={classes.brandContainer}>
                <Typography component={ Link } to={"/"} className={classes.heading} variant={"h4"} align={"center"}>WACM</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                <div>
                    <Button aria-controls={"simple-workshop"} aria-haspopup={"true"} onClick={handleWorkshop}>
                        Workshops
                    </Button>
                    <Menu
                        id="simple-workshop"
                        anchorEl={workshop}
                        keepMounted
                        open={Boolean(workshop)}
                        onClose={onmouseleave}
                    >
                        <MenuItem onClick={approvedWorkshops}>Approved Workshops</MenuItem>
                        <MenuItem onClick={createWorkshops}>Create Workshop</MenuItem>
                    </Menu>
                </div>
                <div>
                    <Button aria-controls={"simple-research"} aria-haspopup={"true"} onClick={handleResearch}>
                        Research
                    </Button>
                    <Menu
                        id="simple-research"
                        anchorEl={research}
                        keepMounted
                        open={Boolean(research)}
                        onClose={onmouseleave}
                    >
                        <MenuItem onClick={approvedResearch}>Approved Research</MenuItem>
                        <MenuItem onClick={createResearch}>Create Research</MenuItem>
                    </Menu>
                </div>
                <div>
                    <Button color={"primary"} onClick={handleSignIn}>
                        Sign In
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default navBar;