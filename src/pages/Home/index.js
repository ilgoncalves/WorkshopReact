import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import { callApi, api_key } from '../../services/api'
import SearchBar from '../../components/SearchBar'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



const styles = {
  container: {
    display: 'flex',
    padding: 0,
    margin: 0,
    flexDirection: 'column',
  },
  gridlist: {
    paddingLeft: 40,
    paddingRight: 40
  }
};

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      textToSearch: ''
    }
  }

  componentWillMount() {
    this.getPhotos()
  }
  getPhotos = async () => {

    let response = await callApi({
      endpoint: '/get',
      method: 'GET',
      params: {

      }
    })
    console.log('RESPOSTA API ', response)
    this.setState({
      photos: [...this.state.photos, ...response.data]
    })
    console.log('PHOTOS', this.state.photos)
  }

  searchPhotos = async (query) => {
    let response = await callApi({
      endpoint: '/search/photos',
      method: 'GET',
      params: {
        query: query,
        client_id: api_key,
        per_page: 100
      }
    })
    console.log('RESPOSTA API BUSCAR FOTOS', response.data.results)
    this.setState({
      photos: [...this.state.photos, ...response.data.results]
    })
    console.log('PHOTOS', this.state.photos)
  }
  render() {

    const { classes } = this.props
    return (
      <Container
        className={classes.container}
      >
        <SearchBar
          onPress={() => {
            this.setState({ photos: [] })
            this.searchPhotos(this.state.textToSearch)
          }}
          onChangeText={(text) => this.setState({ textToSearch: text })}
          buttonTitle='Pesquisar'
        />

        <GridList className={classes.gridlist} cellHeight={160} cols={2}>
          {
            this.state.photos.map((value, i) => (
              <GridListTile
                key={i}
                cols={(value.width > value.height) ? 2 : 1}
                rows={(value.height > value.width) ? 2 : 1}
              >
                <img src={value.urls.regular} />
              </GridListTile>
            ))
          }


        </GridList>


      </Container>
    );
  }
}

//Essa funcao comentada é a funcao responsavel para fazer a navagecao para outrarota
// this.props.history.push('./outrarota')

export default withStyles(styles)(Home)
