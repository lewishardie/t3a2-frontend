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
  
  //----------------------------------------------------------------------------------------
  // const modules= {
  //   toolbar: [
  //     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  //     ['bold', 'italic', 'underline', 'strike'],
  //     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //     ['link', 'image', 'video'] ,
  //     ['clean']
  //   ]
  // }
  // trying to use Quill

// const PostForm = () => {
  // const [content, setContent] = useState("");
  // const [title, setTitle] = useState("");
  // const [category, setCategory ] = useState("")

  // const post = {
  //   title: title,
  //   body: content,
  //   category: category,
  //   author: ''
  // }

  // const history = useHistory();

//--------------------------------------------------------------------------------

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


              {/* <ReactQuill
                placeholder="Text (required)"
                theme="snow"
                name="content"          
                value={value}
                onChange={(value) => setValue(value)}
                modules={modules}
                required
              /> */}
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

