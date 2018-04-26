import React from 'react'
import './css/App.css'
import { Route } from 'react-router-dom';

import * as BooksAPI from './utils/BooksAPI';
import Search from './screens/Search';
import Home from './screens/Home';


class App extends React.Component {
  state = {
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

  
  updateBook = (item, newShelf) => {
    this.setState((currentState) => (
      currentState.books.map((b) => (
        b.shelf = item.id === b.id ? newShelf : b.shelf
      ))
    ))
  }

  searchForBook = (searches) => {
    searches.map((book) => (
      this.state.books.map((b) => (
        (b.id === book.id) && (book.shelf = b.shelf)
      ))   
    ));
    this.setState({searchedBooks: (searches && searches.length > 0) ? searches : [] })
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
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
