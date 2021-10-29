import React, { Component } from 'react';
import { ListPage } from '../pages';
import Provider from '../context/GeneralContext';

class Root extends Component {
    render() {
        const { data }= this.props;
        return (
          <Provider user={{nameID: data.user}}>
            <ListPage data={{...data}}/>
          </Provider>
        )
    }
}

export default Root;
