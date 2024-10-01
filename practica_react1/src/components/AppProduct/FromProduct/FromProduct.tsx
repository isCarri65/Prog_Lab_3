import { Form } from "react-bootstrap"

export const FromProduct = () =>{
   return(
      <Form className="p-4 border rounded m-3">
         
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      </Form>
   )
}