import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CustomerRegistration from "./CustomerRegistration"
import HandymanRegistration from "./HandymanRegistration"

const styles = theme => ({

    button: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
});


class RegistrationForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type: ""
        }
        this.switchStateToCustomer = this.switchStateToCustomer.bind(this)
        this.switchStateToHandyman = this.switchStateToHandyman.bind(this)
    }

    switchStateToCustomer() {
        this.setState({ type: "Customer" })
    }
    switchStateToHandyman() {
        this.setState({ type: "Handyman" })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button
                    className={classes.button}
                    onClick={this.switchStateToHandyman}
                    disableRipple
                    size="large"
                    variant="contained"
                    color="primary" >
                    Handyman
      </Button>

                <Button
                    className={classes.button}
                    onClick={this.switchStateToCustomer}
                    disableRipple
                    size="large"
                    variant="contained"
                    color="primary" >
                    Customer
      </Button>

                {this.state.type == "Customer" ? <CustomerRegistration /> : null}
                {this.state.type == "Handyman" ? <HandymanRegistration /> : null}

            </div>
        );
    }
}

RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistrationForm);