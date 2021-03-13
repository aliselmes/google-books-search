import React from 'react';
import { CardImg, CardBody } from 'reactstrap';

function Book({book}) {
    return( 
        <div className="row my-2">
            <div className="thumbnail col-6 col-lg-4">
                <CardImg className="left" src={book.volumeInfo.imageLinks === undefined ? "https://via.placeholder.com/150x200?text=No+Image" : book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
            </div>
            <CardBody className="right col-6 col-lg-8">
                <h5>{book.volumeInfo.title}</h5>
                <p>{book.volumeInfo.authors}</p>
                <em><p className="author">{book.volumeInfo.publisher}</p></em>
                <a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">More...</a>
            </CardBody>
        </div>
    );
}

export default Book; 


