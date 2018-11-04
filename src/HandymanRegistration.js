import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SubmitButton from './SubmitButton';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class TextFields extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
            <div className={classes.container} noValidate autoComplete="off">
                <TextField
                    required
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    required
                    id="handyman-password"
                    label="Password"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    required
                    id="handyman-password"
                    label="Confirm Password"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="expertise"
                    label="What's your expertise?"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="phone-number"
                    label="Phone Number"
                    className={classes.textField}
                    margin="normal"
                />
             </div>
             <SubmitButton />
             </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields); 