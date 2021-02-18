import React from 'react';
import Box from '../../common/material-ui/Box';
import Button from '../../common/material-ui/Button';

const BoxBotton: React.FC<{}> = () => {
  return (
    <Box
      pl={1}
      color="primary"
      width={550}
      display="flex"
      justifyContent="space-between"
    >
      <Button>Sign up with Google</Button>
      <Button>Sign up with Microsoft</Button>
    </Box>
  );
};

export default BoxBotton;
