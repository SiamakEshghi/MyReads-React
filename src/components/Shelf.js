import React, { Component } from 'react';
import Book from '../screens/Book';

class Shelf extends Component{
    render(){
        return(
          <div className="bookshelf" >
              <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
              
              <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.books.map((book) => (
                      <li key={book.id}>
                        <Book item={book} updateBook={this.props.updateBook}/>
                      </li>
                    ))}
                  </ol>
              </div>
          </div>
        );
    }
}

export default Shelf;