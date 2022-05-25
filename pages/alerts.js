import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  // Button,
  // Card,
  // CardHeader,
  // CardBody,
  // Container,
  // Row,
  // Col,
  Button,
  Modal,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";

function alertSample() {
  const [alert, setalert] = React.useState(false);

  const basicAlert = () => {
    setalert(
      <ReactBSAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Here's a message!"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        btnSize=""
        text="A few words about this sweet alert ..."
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
  };
  const infoAlert = () => {
    setalert(
      <ReactBSAlert
        info
        style={{ display: "block", marginTop: "-100px" }}
        title="Info"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="info"
        confirmBtnText="Ok"
        btnSize=""
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
  };
  const successAlert = () => {
    setalert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Success"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="success"
        confirmBtnText="Ok"
        btnSize=""
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
  };
  const warningAlert = () => {
    setalert(
      <ReactBSAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Warning"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="warning"
        confirmBtnText="Ok"
        btnSize=""
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
  };
  const questionAlert = () => {
    setalert(
      <ReactBSAlert
        custom
        style={{ display: "block", marginTop: "-100px" }}
        title="Question"
        customIcon={
          <div
            className="swal2-icon swal2-question swal2-animate-question-icon"
            style={{ display: "flex" }}
          >
            <span className="swal2-icon-text display-1">?</span>
          </div>
        }
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="default"
        confirmBtnText="Ok"
        btnSize=""
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
  };

  const errorAlert = () => {
    setalert(
      <ReactBSAlert
        custom
        style={{ display: "block", marginTop: "-100px" }}
        title="Error"
        customIcon={
          <div
            className="swal2-icon swal2-question swal2-animate-question-icon border-danger"
            style={{ display: "flex" }}
          >
            <i className="ni ni-fat-remove text-danger display-1"></i>
          </div>
        }
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="danger"
        confirmBtnText="Ok"
        btnSize=""
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <Card>
        <CardHeader>
          <h3 className="mb-0">Sweet alerts</h3>
        </CardHeader>
        <CardBody>
          <Button color="primary" onClick={basicAlert}>
            Basic alert
          </Button>
          <Button color="info" onClick={infoAlert}>
            Info alert
          </Button>
          <Button color="success" onClick={successAlert}>
            Success alert
          </Button>
          <Button color="warning" onClick={warningAlert}>
            Warning alert
          </Button>
          <Button color="default" onClick={questionAlert}>
            Question
          </Button>
          <Button color="danger" onClick={errorAlert}>
            Error
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

alertSample.layout = Admin;

export default alertSample;