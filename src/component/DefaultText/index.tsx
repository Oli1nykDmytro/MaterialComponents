import React, { FC } from 'react';
import Box from '../../common/Box';
import Typography from '../../common/Typography'
import { TypographyProps } from '@material-ui/core/Typography';


interface PropTypography {
    variant?:"h1" |"h2" | "h3" | "h4" | "h5" | "h6",
    text:string,
}



const TypographyComponents: FC<PropTypography> =(props)=>{
    const {text} = props;

    return(
        <>
          <Box pt={1} pl={1} display="flex" flexDirection="column">
                <Typography variant="h1"> {text} </Typography>  
                <Typography variant="h2"> {text} </Typography>  
                <Typography variant="h3"> {text} </Typography>  
                <Typography variant="h4"> {text} </Typography>  
                <Typography variant="h5"> {text} </Typography>  
                <Typography variant="h6"> {text} </Typography>  
                <Typography variant="h6"> {text} </Typography>  
                <Typography variant="h6"> {text} </Typography>  
            </Box>
        </>
    );
}

export default TypographyComponents;