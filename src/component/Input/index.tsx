import { colors } from 'material-ui/styles';
import React, { FC, useState } from 'react';
import Box from '../../common/Box';
import TextField from '../../common/TextField';


type Colors = string 

interface InputType {
  color1?:'secondary' | 'primary' 
  input1: string;
  input2: string;
  input3: string;
}

const InputComponent: FC<{}> = () => {
//   const [color1, setColor1] = useState('primary');
  return (
    <>
      <Box pt={1} pl={1} display="flex" flexDirection="column">
        <p> Default Name</p>
        <b> Full name</b>
        <TextField variant="filled" />
      </Box>
      <Box pt={1} pl={1} display="flex" flexDirection="column">
        <p> Active</p>
        <b> Email Address</b>
        <TextField variant="outlined" />
      </Box>
      <Box pt={1} pl={1} display="flex" flexDirection="column">
        <p> Error</p>
        <b> Password (8 characters)</b>
        <TextField
          size="medium"
          required
          color='secondary'
          variant='outlined'
        //   onInput ={(e:any) => e.target.value.length > 8 && setColor1('secondary')}
          />
      </Box>
    </>
  );
};

export default InputComponent;
