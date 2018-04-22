import React from 'react'
import './css/App.css'
import { Route } from 'react-router-dom';

import * as BooksAPI from './utils/BooksAPI';
import Search from './screens/Search';
import Home from './screens/Home';


class App extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
    searchedBooks: []
  }

  componentDidMount() {
     this.fetchBooks()
  }

  fetchBooks= () => {
    BooksAPI.getAll()
    .then((books) => { 
    this.setState({books});
   })
  }

  // closeSearch = () => {
  //   this.setState({ showSearchPage: false })
  // }
  // openSearch = () => {
  //   this.setState({ showSearchPage: true });
  // }
  
  updateBook = (item, newShelf) => {
    this.setState((currentState) => (
      currentState.books.map((b) => (
        b.shelf = item.id === b.id ? newShelf : b.shelf
      ))
    ))
  }

  searchForBook = (searches) => {
    console.log(`search: ${searches.length}`)
    this.setState((currentState) => 
        currentState.searchedBooks = searches.length > 0 ? searches : [] 
                )
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        {/* {this.state.showSearchPage ? (
          <Search 
            books={this.state.searchedBooks}
            backTapped={this.closeSearch}
            searchForBook={this.searchForBook}
            updateBook={this.fetchBooks}
          />
        ) : (<Home 
              searchTapped={this.openSearch} 
              books={this.state.books}
              updateBook={this.updateBook}
              />     
        )} */}
        <Route exact path='/' render={() => (
          <Home 
          books={this.state.books}
          updateBook={this.updateBook}
          />
        )} />
        <Route  path='/search' render={( {history} ) => (
          <Search 
          books={this.state.searchedBooks}
          searchForBook={this.searchForBook}
          updateBook={this.fetchBooks}
        />
        )} />

      </div>
    )
  }
}

export default App
