import React, { Component } from 'react';

import Container from '@material-ui/core/Container';

import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import { connect } from 'react-redux'

const styles = {

};

class OutraRota extends Component {
  render() {


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
