import { Button } from "@material-ui/core";
import React,{FC} from "react";
import Box from '../../../common/Box'

interface PropsButtons {
    text:string,
}

const ArrayBtn: FC<PropsButtons> = (props) => {
    const  {text} = props
    console.log(text);
    return(
        <>
        <Box color="#0000ff">
          <Button variant="contained">{text}</Button>
          <Button variant="contained">{text}</Button>
          <Button variant="contained">{text}</Button>
        </Box>
        </>
    )
}

export default ArrayBtn;