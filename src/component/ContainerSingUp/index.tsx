import React from 'react';
import Box from '../../common/material-ui/Box';
import FormComponent from '../Form/index';
import BoxButtons from '../GoupButton/index';
import Divider from '../../common/material-ui/Divider';

const SingUpComponent: React.FC<{}> = () => {
  return (
    //title
    <>
      <Box>
        <Box>
          <h1>Sign up to set your brand up for success</h1>
        </Box>
        <BoxButtons />
        <Box>
          <Divider variant="middle" />
          <p>or</p>
          <Divider variant="middle" />
        </Box>
        <FormComponent />
      </Box>
    </>
  );
};

export default SingUpComponent;
