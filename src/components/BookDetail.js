import React from 'react'
import { connect } from 'react-redux';

const BookDetail = ({ book }) => {
    if (!book){
        return <div> Select a Book </div>

    }
    return(
        <div>
            <h3>Details for:</h3>
            <p>Title: {book.title}</p>
            <p>Author:{book.author}</p>
            <p>Editorial: {book.editorial}</p>
            <p>Paginas: {book.pages}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { book: state.selectedBook }
};

export default connect(mapStateToProps)(BookDetail)