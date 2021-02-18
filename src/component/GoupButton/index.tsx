import React from 'react';
import Button from '../common/material-ui/Button';
import ButtonGroup from '../common/material-ui/ButtonGroup';

const BoxBotton: React.FC<{}> = () => {
  return (
    <ButtonGroup color="primary">
      <Button>Sign up with Google</Button>
      <Button>Sign up with Microsoft</Button>
    </ButtonGroup>
  );
};

export default BoxBotton;
