import React, { Component } from 'react';
import { Header, Nav, OnePromoDialog } from '../components';
import { OnePromoPageWrapper } from './styles/OnePromoPage';
import { PageWrapper } from './styles/Global';

class OnePromoPage extends Component {
    render(){
      return (
        <PageWrapper>
          <Header/>
          <OnePromoPageWrapper>
            <Nav />
            <OnePromoDialog id={this.props.data.id} />
          </OnePromoPageWrapper>
        </PageWrapper>
      );
    }
}

export default OnePromoPage;
