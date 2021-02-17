import React from 'react';
import Box from '../../common/Box';
import ContainerBtn from '../ContainerBtn';
import TypographyComponents from '../DefaultText';
import InputComponent from '../Input';

const StoryBook = () => {
  return (
    <>
      <Box pt={1} pl={1} display="flex" flexDirection="column">
        <ContainerBtn text="Sing Up" />
      </Box>
      <Box pt={1} pl={1} display="flex" flexDirection="column">
        <InputComponent />
      </Box>
      <Box pt={1} pl={1} display="flex" flexDirection="column">
        <TypographyComponents text="Typography" />
      </Box>
    </>
  );
};

export default StoryBook;
