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



        this.onChangeDocenteName = this.onChangeDocenteName.bind(this);
        this.onChangeDocenteEmail = this.onChangeDocenteEmail.bind(this);
        this.onChangeDocenteRollno = this.onChangeDocenteRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {

            nameDocente: '',
            emailDocente: '',
            rollnoDocente: ''


        }
    }






    //Docente

    onChangeDocenteName(e) {
        this.setState({ nameDocente: e.target.value })
    }

    onChangeDocenteEmail(e) {
        this.setState({ emailDocente: e.target.value })
    }

    onChangeDocenteRollno(e) {
        this.setState({ rollnoDocente: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

        console.log("llego a onsubmit");

        const docenteObject = {
            name: this.state.nameDocente,
            email: this.state.emailDocente,
            rollno: {
                num: this.state.rollnoDocente
            }
        };

        if (docenteObject.name === "") {
            alert("Campo nombre vacio");

        }

        else if (docenteObject.email === "") {
            alert("Campo email vacio");

        }

        else if (docenteObject.rollno === "") {
            alert("Campo rol vacio");

        }

        else {



            axios.post('http://localhost:4000/docente/create-docente', docenteObject)
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
                nameDocente: '',
                emailDocente: '',
                rollnoDocente: ''
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
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={this.state.nameDocente}
                                    onChange={this.onChangeDocenteName} />
                            </Form.Group>

                            <Form.Group controlId="Email">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={this.state.emailDocente}
                                    onChange={this.onChangeDocenteEmail} />
                            </Form.Group>

                            <Form.Group controlId="Name">
                                <Form.Label>Rol</Form.Label>
                                <Form.Control
                                    type="number" value={this.state.rollnoDocente}
                                    onChange={this.onChangeDocenteRollno}

                                />
                            </Form.Group>

                            <Button variant="danger" size="lg" block="block" type="submit">
                                Guardar
                            </Button>
                        </Form>
                    </Div>
                </Row>
            </Div>
        </div >);
    }
}

