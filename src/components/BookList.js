import React from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions'

class BookList extends React.Component {
    renderList(){
        return this.props.books.map((book) => {
            return(
                <div className="item" key={book.title}>
                        <div className="right floated content">
                            <button
                                className="ui button primary"
                                onClick={() => this.props.selectBook(book)}
                                >
                                Select
                            </button>
                        </div>
                <div className="content">{book.title}</div>
                    </div>
            );
        })
    }

    render(){
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { books: state.books }
}

export default connect(mapStateToProps, { selectBook })(BookList);
