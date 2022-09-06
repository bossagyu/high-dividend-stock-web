import React from "react";
import axios from "axios";

// const baseURL = "https://jsonplaceholder.typicode.com/users";
const baseURL = "http://localhost:8080/greeting";


class Header extends React.Component {
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(baseURL)
          .then(res => {
            const persons = res.data;
            console.log(persons);
            this.setState({ persons });
          })
      }
    
      render() {
        return (
          <ul>
            <li>{this.state.persons.content}</li>
          </ul>
        )
    }
 }

export default Header;