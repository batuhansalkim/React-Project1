import React, { Component } from 'react';
import {Navbar,NavbarBrand} from "reactstrap";
import UserListComponent from "../component/UserListComponent";
import { v4 as uuidv4 } from 'uuid';


export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[
                {
                    id: uuidv4(),
                    name:"Batuhan",
                    surname:"Salkım",
                    mail:"batu@gmail.com"
                },
                {
                    id: uuidv4(),
                    name: "Tuna",
                    surname: "Salkım",
                    mail: "tuna@gmail.com"
                },
                {
                    id: uuidv4(),
                    name: "Mustafa",
                    surname: "Salkım",
                    mail: "mustafa@gmail.com"
                },
                {
                    id: uuidv4(),
                    name: "Necla",
                    surname: "Salkım",
                    mail: "necla@gmail.com"
                },
                {
                    id: uuidv4(),
                    name: "Mert",
                    surname: "Tunca",
                    mail: "mert@gmail.com"
                },
            ]
        };
        this.addUser = this.addUser.bind(this);
    }


    addUser = (name, surname, mail) => {
        if((name, surname, mail)){
            const users = [...this.state.users];
            users.push({
                id:uuidv4(),
                name:name,
                surname: surname,
                mail:mail,
            });
            this.setState({users});
        }
        else{
            alert("Lütfen bütün alanları doldurunuz!!");
        }
    }

    
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
            <div className="container">
                <NavbarBrand href="/">React-intro</NavbarBrand>
            </div>
        </Navbar>
        <UserListComponent users={this.state.users} addUser={this.addUser}/>
      </div>
    );
  }
}
