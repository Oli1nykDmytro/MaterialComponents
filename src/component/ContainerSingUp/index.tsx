import React from 'react';
import Box from '../../common/material-ui/Box';
import FormComponent from '../Form/index';
import BoxButtons from '../GoupButton/index';
import Lines from '../Lines'
import Title from '../Title'
const SingUpComponent: React.FC<{}> = () => {
  return (
    //title
    <>
      <Box ml={6} >
        <Title/>
        <BoxButtons />
        <Lines/>
        <FormComponent />
      </Box>
    </>
  );
};

export default SingUpComponent;
