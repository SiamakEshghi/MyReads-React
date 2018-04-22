import React, { Component } from 'react';


class BookShelfChanger extends Component {
    render(){
        console.log(this.props.shelf)
        return (
            <div className="book-shelf-changer">
                <select onChange={this.props.changeShelf} defaultValue={this.props.shelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none"  >None</option>
                </select>
            </div>
        );
    }
    
}

export default BookShelfChanger;