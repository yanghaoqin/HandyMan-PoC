import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


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
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    required
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    required
                    id="customer-password"
                    label="Password"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    required
                    id="confirm-password"
                    label="Confirm Password"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="expertise-needed"
                    label="Expertise Needed?"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="phone-number"
                    label="Phone Number"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="address"
                    label="Address"
                    className={classes.textField}
                    margin="normal"
                />
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields); 