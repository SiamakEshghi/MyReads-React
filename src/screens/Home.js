import React, { Component } from 'react';
import '../css/App.css';
import Shelf from '../components/Shelf';
import { Link } from 'react-router-dom';

class Home extends Component {
    
    render() {
        return (
            <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>

                <div className="list-books-content">
                    <div>
                        <Shelf books={this.props.books.filter((book) => book.shelf === 'currentlyReading')} 
                               shelfTitle='Currently Reading'
                               updateBook={this.props.updateBook}
                               />
                        <Shelf books={this.props.books.filter((book) => book.shelf === 'wantToRead')} 
                               shelfTitle='Want To Read'
                               updateBook={this.props.updateBook}
                               />
                        <Shelf books={this.props.books.filter((book) => book.shelf === 'read')} 
                               shelfTitle='Read'
                               updateBook={this.props.updateBook}
                               />
                    </div>
                </div>

                <div className="open-search">
                    <Link to='search'
                    > Add a book</Link>
                </div>
            </div>
        );
    }
}

export default Home;
