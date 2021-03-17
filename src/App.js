import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Form, Button, FormGroup, Input, Card } from 'reactstrap';
import Book from './components/Book';

function App() {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey] = useState(process.env.REACT_APP_API_KEY);



  function handleChange(event) {

    const book = event.target.value;
    setBook(book); 

  }

  function handleSubmit(event) {

    event.preventDefault();

    if (!book) {
      alert("Please enter something in the search bar!")
    }
    
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
      .then(data => {
        if (!data) {
          throw new Error(`HTTP error! status: ${data.statusCode}`);
        } else {
          console.log(data.data.items);
          setResult(data.data.items);
        }
      })
      .catch(error => {
        console.log('There has been a problem with your GET operation: ' + error.message);  
      })

  }

  const directory = result && result.map(book => {
      return(
        <Card id="book-card" key={book.id} className="col-12 col-lg-4 m-3 ">
            <Book book={book}/>
        </Card>
      );
  });
  
  return (
    <div className="container pt-5 ml-0 mr-0 justify-content-center">
      <div className="row"> 
        <div className="col text-center" id="searchbar">
          <h1 className="mb-4">Book Finder</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input 
                type="search" 
                name="search" 
                id="search" 
                className="form-control"  
                placeholder="Search for Books" 
                onChange={handleChange} 
              />
            </FormGroup>
            <Button type="submit" color="primary" className="mt-3">Search</Button>
          </Form>
        </div>
      </div>

      <div className="row mt-5 justify-content-center">
        {!directory ? <h3>No Books Found! Please try a different search.</h3> : directory}
      </div>
    </div>
  );
}


export default App;
