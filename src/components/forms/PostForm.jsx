import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom'

// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.snow.css'


//Define Form
export const PostForm = () => {
  
  const [postData, setPostData ] = useState({
    title: '',
    content: '',
    author: '',
  });

  // handle on change for 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
};

  // Define Submit Handler
  function handleSubmit(e) {
    e.preventDefault();

    console.log(postData)
  }

  return (
    
    <Container >
      <Row className="justify-content-center">
        <Col >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="">Title</Form.Label>
              <Form.Control 
                  type="text" 
                  placeholder="Enter Title" 
                  name="title"
                  value={postData.title}
                  onChange={handleChange}
                  required
                />

            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as='textarea'
                type="text"
                placeholder="Text (required)"
                name="content"
                value={postData.content}
                onChange={handleChange}
              />

            </Form.Group>

            <div className="d-flex gap-4 align-items-center justify-content-end pb-4">

              <Button type="button" className="" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" className="" variant="primary">
                Post
              </Button>
            </div>

          </Form>
        </Col>
      </Row>
    </Container>
  )
}


export default PostForm

