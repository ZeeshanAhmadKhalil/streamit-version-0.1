
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {Table, Row} from 'react-bootstrap'
import { Form } from "react-bootstrap";

// import { motion } from 'framer-motion';

function Dashboard() {
    return (
        <div className="container dashboard-container">
            <div className="blue-div"></div>
            <div className="white-div">

                <div className="form-div">
                <div className="user-details-input">
                <Form>

            <Form.Group className="" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Channel Name</Form.Label> */}
             
              <TextField id="outlined-basic" sx={{width: "40vw", borderColor: "yellow"}} label="Name" variant="outlined" />
              {/* <Form.Control type="email" placeholder="" /> */}
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
{/*                     
 <TextField  size="small"  style={{ width: "40rem" }}
                        className='searchbox' /> */}

                </div>
            </div>
            </div>
             
        </div>
    )
}

export default Dashboard
