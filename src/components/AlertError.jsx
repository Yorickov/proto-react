import React from 'react';

const AlertError = ({ message, retry }) => (
  <div className="error">
    <span>{message}</span>
    {retry ? (
      <ion-icon name="reload-circle" onClick={retry} />
    ) : null}
  </div>
);

export default AlertError;
