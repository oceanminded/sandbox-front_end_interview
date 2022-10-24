import * as React from 'react';
import { Dispatch, SetStateAction, useState } from 'react';
import { createContext } from 'react';

export const User_Context = createContext({
  user_name: 'Unknown User',
  set_user_name: (state: any) => {},
});

type User_Context = {
  user_name: any;
  // type, you get when hovering over `setState` from `useState`
  set_user_name: Dispatch<SetStateAction<string>>;
};
