import React, { Component } from 'react'
import {Modal, ModalBody, ModalFooter,ModalHeader} from "reactstrap"
import { Form, Label, FormGroup, Input } from 'reactstrap';


export default class FormComponent extends Component {
    constructor(props){
        super(props);
        this.state = { 
            name:"",
            surname:"",
            mail:"",
        };
    }

    onSubmit(){
        this.props.addUser(
            this.state.name, 
            this.state.surname, 
            this.state.mail,
        );
        this.props.hide();
    }

    componentDidMount(){
        console.log(this.props.user);
    }

  render() {
      return( 
          <Modal fade={false} isOpen={this.props.visible}>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>
                  <Form>
                    <FormGroup>
                        <Label for="name">Name </Label>
                        <Input onChange={(e)=> this.setState({name:e.target.value})} id="name"name="name"type="text"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="surname">Surname</Label>
                          <Input onChange={(e) => this.setState({ surname: e.target.value })} id="surname" name="surname" type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Mail</Label>
                          <Input onChange={(e) => this.setState({ mail: e.target.value })} id="mail" name="mail" type="mail" />
                    </FormGroup>
                    </Form>
              </ModalBody>
              <ModalFooter>
                  <button className='btn btn-success' onClick={()=>this.onSubmit()}>Add</button>
                  <button className='btn btn-danger' onClick={()=> this.props.hide()}>Cancel</button>
              </ModalFooter>
          </Modal>
      );
  }
}
