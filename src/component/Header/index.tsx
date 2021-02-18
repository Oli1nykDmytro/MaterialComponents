import React from 'react';
import Box from '../../common/material-ui/Box';
import { Link } from 'react-router-dom';

const Header: React.FC<{}> = () => {
  return (
    <Box
      ml={10}
      textAlign="center"
      width={300}
      display="flex"
      justifyContent="space-between"
    >
      <Link to="/sing-up"> Sing-Up</Link>
      <Link to="/story-book">story-book </Link>
    </Box>
  );
};

export default Header;
