import React from 'react';
import Box from '../../common/Box';
import ContainerBtn from '../ContainerBtn'
import TypographyComponents from '../DefaultText'
import InputComponent from '../Input'


const StoryBook = () => {

    const sizeText:string[] = ["h1","h2","h3","h4","h5","h6"]
  return (
    <>
      <Box pt={1} pl={1} display="flex" flexDirection="column">
        <ContainerBtn text="Sing Up"/>
      </Box>
      <Box pt={1} pl={1} display="flex" flexDirection="column">
          <InputComponent/>
      </Box>
      <Box pt={1} pl={1} display="flex" flexDirection="column">
          <TypographyComponents text="Typography" />
      </Box>
    </>
  );
};

export default StoryBook;
