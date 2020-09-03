import React from "react";
import axios from "axios";
import { Container, Form, Col } from "react-bootstrap";
import DefaultImg from "../../Pages/Home/Images/placeholder.png";

const API_URL = "http://localhost:9890";

class AdminCreateBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadImage: DefaultImg,
    };
  }

  uploadImage(e) {
    let imageFormObj = new FormData();

    imageFormObj.append("imageName", "blog-" + Date.now());
    imageFormObj.append("imageData", e.target.files[0]);

    this.setState({ uploadImage: URL.createObjectURL(e.target.files[0]) });

    axios
      .post(`${API_URL}/image/uploadimage`, imageFormObj)
      .then((data) => {
        if (data.data.success) {
          alert("Image has been successfully uploaded");
        }
      })
      .catch((err) => {
        alert("Error while uploading image.");
      });
  }

  render() {
    return (
      <Container className="admin-create-blog">
        <Form>
          <Form.Control size="lg" type="text" placeholder="Title" />
          <Form.Row>
            <Col sm={12} lg={8}>
              <Form.File
                id="exampleFormControlFile1"
                label="Image"
                id="upload-image-form"
                onChange={(e) => this.uploadImage(e)}
              />
            </Col>
            <Col sm={12} lg={4} style={{ textAlign: "center" }}>
              <img
                src={this.state.uploadImage}
                alt="upload-preview"
                id="upload-image"
              />
            </Col>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default AdminCreateBlog;
