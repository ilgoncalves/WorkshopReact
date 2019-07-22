import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import TextField from '@material-ui/core/TextField';

import { callApi, api_key } from '../../services/api'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 0
  },
  gridList: {
    width: 500,
    height: 450,
  },
  textField: {
    display: 'flex',
    flex: 1
  },
  button: {
    height: 56,
    marginLeft: 12,
    marginTop: 4

  },
  searchBar: {

    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20
  },
  gridContainer: {
    paddingLeft: 20,
    paddingRight: 20
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      photos: [],
      toSearch: ''
    })
  }
  componentWillMount() {
    this._getPhotos()
  }

  _getPhotos = async () => {
    // for (let i = 0; i < 4; i++) {
    const { photos } = this.state

    let response = await callApi({
      endpoint: '/photos',
      method: 'GET',
      params: {

        client_id: api_key,
        per_page: 20
      }

    })
    console.log(response)

    this.setState({
      photos: [...photos, ...response.data]
    })

    // }


  }
  _searchPhotos = async (query) => {
    let response = await callApi({
      endpoint: '/search/photos',
      method: 'GET',
      params: {
        query: query,
        client_id: api_key,
        per_page: 100
      }
    })
    const { photos } = this.state
    this.setState({
      photos: [...photos, ...response.data.results]
    })
    console.log(response)
  }
  render() {
    const { classes } = this.props

    //Essa funcao comentada é a funcao responsavel para fazer a navagecao para outrarota
    // this.props.history.push('./outrarota')
    return (
      <Container
        className={classes.container}
      >
        <div
          className={classes.searchBar}
        >
          <TextField
            id="outlined-with-placeholder"
            label="Pesquisar"
            placeholder="Pesquise um tema para fotos que deseja ver."
            className={classes.textField}
            margin="normal"
            variant='outlined'
            onChange={(event) => {
              console.log(event.target.value)
              this.setState({ toSearch: event.target.value })
            }}
          />
          <Button
            onClick={() => {
              this.setState({ photos: [] })
              this._searchPhotos(this.state.toSearch)
            }}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Pesquisar
          </Button>
        </div>

        <GridList className={classes.gridContainer} cellHeight={400} cols={2}>
          {this.state.photos.map((item, i) => (
            <GridListTile key={`photo-${i}`} cols={(item.width > item.height) ? 2 : 1} rows={(item.width > item.height) ? 1 : 2}>
              <img src={item.urls.regular} alt={item.alt_description} />
            </GridListTile>
          ))}
        </GridList>
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
)(Home)
