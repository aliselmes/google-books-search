import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, Button } from 'reactstrap';

function Book({book}) {
    return( 
        <Card>
            <CardImg top src={book.volumeInfo.imageLinks === undefined ? "" : book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
            <CardBody>
                <CardTitle>{book.title}</CardTitle>
                <CardText>
                    <p>{book.volumeInfo.authors}</p>
                    <p>{book.volumeInfo.publisher}</p>
                </CardText>
                <a href={book.volumeInfo.previewLink} target="_blank"><Button>More Info</Button></a>
            </CardBody>
        </Card>
    );
}

export default Book;