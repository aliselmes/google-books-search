import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

function App() {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyAQExnFmul1cmlhA8WHA9MYPQ79TA68WMQ");

  function handleChange(event) {

    const book = event.target.value;
    setBook(book);

  }

  function handleSubmit(event) {

    event.preventDefault();
    
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
    .then(data => {
      console.log(data.data.items);
      setResult(data.data.items);
    })

  }

  return (
    <div className="container mt-5">
      <div className="row"> 
        <div className="col">
          <h1>Book Finder</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input 
                type="text" 
                name="text" 
                id="text" 
                className="input-control"  
                placeholder="Search for Books" 
                autoComplete="off" 
                onChange={handleChange} 
              />
            </FormGroup>
            <Button type="submit" color="danger" className="mt-3">Search</Button>
          </Form>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          {result.map(book =>(
            <a href={book.volumeInfo.previewLink} target="_blank">
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} key={book.id}/>
            </a>  
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
