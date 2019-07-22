import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

const styles = {
  avatar: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  },
  button: {
    backgroundColor: 'blue',
    height: 30,
    width: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

class OutraRota extends Component {
  render() {
    const { classes } = this.props

    return (
      <Container
        style={{
          padding: 0,
          margin: 0,

        }}
      >
        Outra Rota

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  teste: state.reducer.teste
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(OutraRota)
