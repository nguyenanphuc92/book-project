import React, { Component } from 'react';
import BookList from './BookList';
import NewBooks from './NewBooks';
import Carousels from '../Base/Carousels/Carousels';

class Main extends Component {
    
    render() {
        return (
            <div>
                <Carousels></Carousels>
                <BookList></BookList>
                <NewBooks></NewBooks> 
            </div>
        );
    }
}

export default Main;