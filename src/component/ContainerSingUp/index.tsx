import React from 'react';
import Box from '../common/material-ui/Box';
import FormComponent from '../Form/index';
import BoxButtons from '../GoupButton/index';

const SingUpComponent: React.FC<{}> = () => {
  return (
    //title
    <>
    <Box>
      <Box>
        <h1>Sign up to set your brand up for success</h1>
      </Box>
      <BoxButtons />
      {/* //---or */}
      <FormComponent />
    </Box>
    </>
  );
};

export default SingUpComponent;
