import React ,{FC, useState} from 'react';
import Box from '../../common/Box';
import TextField from '../../common/TextField'

interface InputProps {
    input:string | number | null
}



const InputComponent:FC =() =>{

    return(
        <>
        <form>
        <Box pt={1} pl={1} display="flex" flexDirection="column">
            <TextField label="Full Name" id="standard-size-small" defaultValue="Placeholder" size="small" />

            <TextField label="Active" id="standard-size-small" defaultValue="Placeholder" size="small" >  </TextField>
            <TextField error id="standard-error-helper-text" label="Error" placeholder="Placeholder" helperText="Incorrect entry."
        />
            </Box>
        </form>
        </>
    );
} 

export default InputComponent;