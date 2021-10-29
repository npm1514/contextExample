import React, { Component, createContext } from 'react';

export const GeneralContext = createContext();

class Provider extends Component {
  state = {
    showCSV: false,
    user: this.props.user,
    status: "Home"
  }
  changeContext = (prop, val) => {
    let obj = {};
    obj[prop] = val;
    this.setState(obj);
  }
  render() {
    return (
      <GeneralContext.Provider value={{...this.state, changeContext: this.changeContext}}>
        {this.props.children}
      </GeneralContext.Provider>
    );
  }
}

export default Provider;
