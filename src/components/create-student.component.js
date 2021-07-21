import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import swal from 'sweetalert';
import Row from "react-bootstrap/esm/Row";
import Div from "react-bootstrap/esm/Row";

export default class CreateStudent extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);




        // Setting up state
        this.state = {
            name: '',
            email: '',
            rollno: ''


        }
    }

    onChangeStudentName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeStudentEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeStudentRollno(e) {
        this.setState({ rollno: e.target.value })
    }




    onSubmit(e) {
        e.preventDefault()

        const studentObject = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno
        };

        if (studentObject.name === "") {
            alert("Campo nombre vacio");

        }

        else if (studentObject.email === "") {
            alert("Campo email vacio");

        }

        else if (studentObject.rollno === "") {
            alert("Campo rol vacio");

        }

        else {



            axios.post('http://localhost:4000/students/create-student', studentObject)
                .then(res => console.log(res.data));
            //alert("Se ha registrado satisfactoriamente");

            swal({

                titulo: "!Exito!",
                text: "Datos creados con exito",
                icon: "success",
                buttons: "Aceptar"
                //timer: "50000"

            })

            this.setState({
                name: '',
                email: '',
                rollno: ''
            });

        }

    }








    render() {
        return (<div className="form-wrapper">
            <Div className="col">
                <Row>
                    <Div className="col">
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
                            </Form.Group>

                            <Form.Group controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
                            </Form.Group>

                            <Form.Group controlId="Name">
                                <Form.Label>Roll No</Form.Label>
                                <Form.Control
                                    type="number" value={this.state.rollno}
                                    onChange={this.onChangeStudentRollno}

                                />
                            </Form.Group>

                            <Button variant="danger" size="lg" block="block" type="submit">
                                Create Student
                            </Button>
                        </Form>

                    </Div>

                </Row>
            </Div>
        </div >);
    }
}

