import React from 'react';

export const stream = {
  subscribe(channel, listener) {
    const match = channel.match(/price-(\d+)/);

    if (match) {
      setInterval(() => {
        listener({
          id: parseInt(match[1], 10),
          price: Math.round((Math.random() * 10 + 30)),
        });
      }, 500);
    }
  },
};

export const StoreContext = React.createContext();

export const connect = (mapStateToProps, mapDispatchToProps) => (
  (WrappedComponent) => (
    (props) => (
      <StoreContext.Consumer>
        {(store) => {
          const stateToProps = mapStateToProps ? mapStateToProps(store.getState()) : {};
          const dispatchToProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {};
          return (
            <WrappedComponent
              {...props}
              {...stateToProps}
              {...dispatchToProps}
            />
          );
        }}
      </StoreContext.Consumer>
    )));
