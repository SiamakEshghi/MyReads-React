import React, { Component } from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf';


class Search extends Component {
    constructor(){
        super();
        this.state = { 
            query: ''
        }
    }
    componentWillMount(){
        this.props.searchForBook([]);
    }
    

    updateQuery = (query) => {
        this.setState({ query: query});
       if(query !== '') {
            BooksAPI.search(query)
            .then((books) => this.props.searchForBook(books))
        } else {
            this.props.searchForBook([])
        }
    }

    render(){
        console.log(this.props.books)
        const { query }= this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link to='/' 
                      className="close-search"  
                >Close</Link>
                <div className="search-books-input-wrapper">
                    <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    />

                </div>
                </div>
                <div className="search-books-results">
                <div className="list-books-content">
                    <div>
                        <Shelf books={this.props.books} 
                               shelfTitle=''
                               updateBook={this.props.updateBook}
                        />
                    </div>
                </div>
                </div>
            </div>
        );
    }

}

export default Search;