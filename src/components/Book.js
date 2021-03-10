import React from 'react';
import { Button, CardImg, CardBody, CardTitle } from 'reactstrap';

function Book({book}) {
    return( 
        <div>
            <div class="thumbnail">
                <CardImg class="left" src={book.volumeInfo.imageLinks === undefined ? "" : book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
            </div>
            <CardBody className="right">
                <h5>{book.volumeInfo.title}</h5>
                <p>{book.volumeInfo.authors}</p>
                <em><p class="author">{book.volumeInfo.publisher}</p></em>
                <a href={book.volumeInfo.previewLink} target="_blank"><Button color="primary">More Info</Button></a>
            </CardBody>
        </div>
    );
}

export default Book;


