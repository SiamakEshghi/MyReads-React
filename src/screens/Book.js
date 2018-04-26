import React , { Component } from 'react';
import BoockShelfChanger from '../components/BookShelfChanger';
import * as BooksAPI from '../utils/BooksAPI';

class Book extends Component {
    changeShelf = (e) => {
        const shelf = e.target.value;
        BooksAPI.update(this.props.item, shelf)
        .then(this.props.updateBook(this.props.item, shelf));
      }

    render() {
        const { imageLinks } = this.props.item
 
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imageLinks ? `url("${imageLinks.thumbnail}")` : '' }}></div>
                        <BoockShelfChanger changeShelf={this.changeShelf} shelf={this.props.item.shelf}/>
                    </div>
                <div className="book-title">{this.props.item.title}</div>
                <div className="book-authors">{this.props.item.authors}</div>
            </div>
        );
    }
}

export default Book;

