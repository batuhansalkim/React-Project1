import React, { Component } from 'react';
import {Navbar,NavbarBrand} from "reactstrap";
import UserListComponent from "../component/UserListComponent";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[
                {
                    id: uuidv4(),
                    name:"hkjhsdjkhsjdhjks",
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
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
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
            toast(`"${name}" kullanıcısı eklendi.`)
        }

        else{
            alert("Lütfen bütün alanları doldurunuz!!");
        }
    }


    deleteUser = (obj)=>{
        const users = this.state.users.filter(user=>{
            return user.id !== obj.id
        });
        this.setState({users});
        toast(`"${obj.name}" İsimli kullanıcı Silindi.`)
    };

    editUser = (id,name,surname,mail)=> {
        if(id,name,surname,mail){
            const users = [...this.state.users];
            let updateUsers = users.map(user=>{
                if(user.id === id){
                    user = {
                        id: id,
                        name: name,
                        surname: surname,
                        mail: mail,
                    };
                }
            });
            this.setState({
                users:updateUsers,
            })
        }
    }

  render() {
    return (
      <div>
        <ToastContainer/>
        <Navbar color="light" expand="md" light>
            <div className="container">
                <NavbarBrand href="/">Batuhan Salkım</NavbarBrand>
            </div>
        </Navbar>
        <UserListComponent users={this.state.users} addUser={this.addUser} deleteUser={this.deleteUser}
        editUser={this.editUser}/>
      </div>
    );
  }
}
