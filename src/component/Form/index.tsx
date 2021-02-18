import * as React from 'react';
import { Formik, Form, Field } from 'formik';

import * as yup from 'yup';
import TextField from '../../common/material-ui/TextField';
import Button from '../../common/material-ui/Button';
import Box from '../../common/material-ui/Box';
import Checkbox from '../../common/material-ui/Checkbox';

interface ValuesInput {
  fullName: string;
  email: string;
  password: string;
}

const FormComponent: React.FC<{}> = () => {
  const initialValues: ValuesInput = { fullName: '', email: '', password: '' };
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };


  const style = {
    background: 'green',
    color: 'white',
    width:270,
    height: 50,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };


  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
        }}
        validationSchema={yup.object({
          fullName: yup.string().required(),
          email: yup.string().email('Not Correct').required(),
          password: yup.string().min(8).required(),
        })}
      >
        <Form >
          
          <Box width={550} mb={2} p={1} display="flex" flexDirection="column">
            <Box mb={2}>
            <label >First Name</label>
            <TextField style = {{width: 550,height:50}} variant="filled" fullWidth={true}/>
            </Box>
            <Box mb={2}>
            <label htmlFor="firstName">Email</label>
            <TextField style = {{width: 550,height:50}} variant="filled" type="email" />
            </Box>
            <Box mb={2}>
            <label htmlFor="firstName">Password</label>
            <TextField style = {{width: 550, height:50}} variant="filled" type="password" />
            </Box>
          </Box>

          <Box display="flex" width={570}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <p>
              Creating an account means you’re okay with our{' '}
              <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a>,
              and our default <a href="#">Notification Settings</a>.
            </p>
          </Box>

          <Button style={style}  type="submit" color="default">
            Sing Up
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
