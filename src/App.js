import React, {useState} from 'react';
import logo from './logo.svg';
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
    console.log(book);

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
    </div>
  );
}

export default App;
