import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import {Button} from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px 50px',
    },
    heading: {
        color: 'rgb(0,85,255)',
        textDecoration: 'none',
    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    toolbarButton:{
        paddingRight:20
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        textDecoration: 'none'
    },
}));