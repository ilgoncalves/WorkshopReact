import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import { callApi, api_key } from '../../services/api'
import Button from '@material-ui/core/Button';

const styles = {
    textField: {
        display: 'flex',
        flex: 1,
        borderColor: 'blue'
    },
    container: {

        display: 'flex',
        alignItems: 'center',

    },
    button: {
        marginTop: 6,
        height: 56,
        marginLeft: 12
    }

};

export class Exemplo {

}

class SearchBar extends Component {

    render() {
        const { classes } = this.props
        return (
            <Container
                className={classes.container}
            >
                <TextField
                    onChange={(event) => {
                        this.props.onChangeText(event.target.value)
                    }}
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <Button onClick={this.props.onPress} variant="contained" color="primary" className={classes.button}>
                    {this.props.buttonTitle}
                </Button>
            </Container>
        );
    }
}

// this.props.history.push('./outrarota')

export default withStyles(styles)(SearchBar)
