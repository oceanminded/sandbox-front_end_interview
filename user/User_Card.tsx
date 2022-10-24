import * as React from 'react';
import { useContext } from 'react';
import { User_Context } from './User_Context';

export const User_Card = () => {
  return (
    <User_Context.Consumer>
      {({ user_name, set_user_name }) => {
        return (
          <div>
            <div>{`${user_name}`}</div>
            <div>
              <button onClick={() => set_user_name('Enrique')}>SAY ME</button>
            </div>
          </div>
        );
      }}
    </User_Context.Consumer>
  );
};
