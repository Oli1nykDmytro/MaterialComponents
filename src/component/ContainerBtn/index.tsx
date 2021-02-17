import React, { FC } from 'react';
import ArrayBtn from './Buttons';
import Box from '../../common/Box';

interface PropsButtons {
  text: string;
}

const ContainerBtn: FC<PropsButtons> = (props) => {
  const { text } = props;
  return (
    <>
      <Box
        pt={1}
        pl={1}
        display="flex"
        m={2}
        border="1px solid black"
        color="#0000ff"
      >
        <ArrayBtn text={text} />
        <ArrayBtn text={text} />
        <ArrayBtn text={text} />
      </Box>
    </>
  );
};

export default ContainerBtn;
