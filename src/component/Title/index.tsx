import React from 'react';
import Box from '../../common/material-ui/Box';
import Typography from '../../common/material-ui/Typography';

const Title: React.FC<{}> = () => {
  return (
    <Box width={480} p={1} mb={4}>
      <Typography variant="h4">
        Sign up to set your brand up for success
      </Typography>
    </Box>
  );
};

export default Title;
