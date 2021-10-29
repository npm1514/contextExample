import React, { Component } from 'react';
import { Header, Nav, PromoList } from '../components';
import { ListPageWrapper } from './styles/ListPage';
import { PageWrapper } from './styles/Global';

class ListPage extends Component {
    render(){
      return (
        <PageWrapper>
          <Header/>
          <ListPageWrapper>
            <Nav/>
            <PromoList/>
          </ListPageWrapper>
        </PageWrapper>
      );
    }
}

export default ListPage;
