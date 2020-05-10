import { combineReducers } from 'redux';

const bookReducer = () => {
    return [
        {title:'Introduccion general a la critica de la economia politica', author:'Karl Marx', editorial:'Siglo Veintiuno Editores', pages:123},
        {title:'C++ Crash Course: a Fast Paced Introduction', author:'Josh Lospinoso', editorial:'No Starch Press', pages:733},
        {title:'Introduction to Algorithms, Third Edition', author:'Thomas H. Cormen et al', editorial:'MIT Press', pages:1292},
        {title:'El proceso', author:'Franz Kafka', editorial:'Seix Barrial', pages:254},
        {title:'El cuaderno dorado', author:'Doris Lessing', editorial:'Santillana Ediciones Generales', pages:789}
    ]
}

const selectedBookReducer = (selectedBook=null, action) => {
    if (action.type === 'BOOK_SELECTED') {
        return action.payload;
    };
    return selectedBook;
};

export default combineReducers({
    books: bookReducer,
    selectedBook: selectedBookReducer
});