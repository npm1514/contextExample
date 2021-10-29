import React, { Component } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import { AccountCircleOutlined, ExpandMoreOutlined, NotificationsNoneOutlined } from '@material-ui/icons';
import { Badge, List, ListItem, Button, ListItemText } from '@material-ui/core';
import { HeaderWrap, LeftSide, RightSide, Name, NotificationBox, BadgeSpan } from './styles/Header';
import Ologo from './images/Ologo';

class Header extends Component {
  static contextType = GeneralContext;
  state = {
    badgeCount: 0,
    promoList: [],
    showNotifications: false
  }
  handleNotifications = () => {
    this.setState({showNotifications: !this.state.showNotifications})
  }
  componentDidMount(){
    fetch('/api/getPromotionEnded')
    .then(res => res.json())
    .then(promoList => {
      this.setState({
        promoList, badgeCount: promoList.length
      })
    });
  }
  render(){
    const { user } = this.context;
    const { badgeCount, promoList, showNotifications } = this.state;
    return (
      <HeaderWrap>
        <LeftSide>
          <a href="/"><Ologo/></a>
          <h5>Promotions</h5>
        </LeftSide>
        <RightSide>
          <AccountCircleOutlined/>
          <Name>
            { user && user.nameID }
            <ExpandMoreOutlined/>
          </Name>
          <BadgeSpan>
            <Badge badgeContent={badgeCount} color="primary" onClick={this.handleNotifications}>
              <NotificationsNoneOutlined/>
            </Badge>
          </BadgeSpan>
          {
            showNotifications && promoList.length ? (
              <NotificationBox>
                <List>
                  {
                    promoList.map((a,i) => {
                      return (
                        <ListItem disablePadding key={i}>
                          <Button href={"/editPromo/" + a.id}>
                            <ListItemText primary={`${a.promoName} is ready to be allocated.`} />
                          </Button>
                        </ListItem>
                      )
                    })
                  }
                </List>
              </NotificationBox>
            ) : null
          }
        </RightSide>
      </HeaderWrap>
    );
  }
}

export default Header;
