import * as React from 'react';
import { useState } from 'react';
import { User_Context } from './User_Context';
import { User_Card } from './User_Card';
import { Grid, styled } from '@mui/material';

const User_Manager_Container = styled(Grid)`
  background-color: green;
`;

export const User_Manager = () => {
  const [user_name, set_user_name] = useState('Default User Name');

  return (
    <User_Manager_Container>
      <User_Context.Provider value={{ user_name, set_user_name }}>
        <User_Card />
      </User_Context.Provider>
    </User_Manager_Container>
  );
};

const DEFAULT_USER = {
  user_name: 'Obi Wan',
};
