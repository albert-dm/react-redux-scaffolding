import React from "react";
import { ErrorMessageModel } from "../../models/errorMessage.model"

export interface IApp {
  error?: ErrorMessageModel;
  isLoading: Boolean;
}

const App: React.SFC<IApp> = ({ error, isLoading }) => {
  return (
    <>
      <div>
        {error ? (
          <h1>{JSON.stringify(error)}</h1>
        ) : isLoading ? (
          <h1>Loading...</h1>
        ) : (
              <h1>Seja bem vindo</h1>
            )}
      </div>
    </>
  );
};

export { App };
