import _ from 'lodash';
let authors = require('./authorData').authors;

let _generatedId = function(author) {
    return author.firstName.toLowerCase() + '_' + author.lastName.toLowerCase();
};

let _clone = function(item) {
    return JSON.parse(JSON.stringify(item));
};

let AuthorApi = {
    getAllAuthors: function() {
        return _clone(authors);
    },
    getAuthorById: function(id) {
        let author = _.find(authors, { id: author.id });
        return _clone(author);
    },
    saveAuthor: function(author) {
        if (author.id) {
            let existingAuthorIndex = _.indexOf(authors, _.find(authors, { id: author.id }));
            authors.splice(existingAuthorIndex, 1, author);
        } else {
            author.id = _generatedId(author);
            authors.push(author);
        }
        return _clone(author);
    },
    updateAuthor: function(id, author) {
        authors[_.indexOf(authors, _.find(authors, { id: id }))] = author;
    },
    deleteAuthor: function(id) {
        _.remove(authors, { id: id });
    }
};

export default AuthorApi;
