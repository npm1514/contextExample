import React, { Component, Fragment } from 'react';
import { NavWrap, NavH2, styles } from './styles/Nav';
import { GlobalH2 } from './styles/Global';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { GeneralContext } from '../context/GeneralContext';

class Nav extends Component {
    static contextType = GeneralContext;

    showTitle(){
      const { status } = this.context;
      if(status == "Home"){
        return "Promotions";
      } else if(status == "Draft"){
        return "New Promotion - Draft";
      } else {
        return "Promotion Details - " + status;
      }
    }
    render(){
      const { pidupload, pidtemplate, cidupload, cidtemplate, caseoriginal, back, newPromo } = this.props.classes;
      const { changeContext, status } = this.context;
      return (
          <NavWrap>
            <GlobalH2 id="navTitle">{this.showTitle()}</GlobalH2>
            <div>
              { status == "Home" ? (
                <a id="newPromoButton" href="/newPromo"><Button variant="contained" color="primary" classes={{root: newPromo}}>New Promotion</Button></a>
              ) : null }
              { status == "Draft" || status == "Scheduled" ? (
                <Fragment>
                  <Button
                    id="file-upload-input-for"
                    title="Upload Product IDs"
                    component="span"
                    variant="outlined"
                    classes={{root: pidupload}}
                    onClick={() => changeContext("showCSV", true)}
                  >Upload Product IDs</Button>
                <a download target="_blank" href="/csvdownload/Promotion_ProductIDs_Template.csv">
                  <Button
                    id="file-upload-input-for"
                    title="Download Product ID CSV"
                    component="span"
                    variant="outlined"
                    classes={{root: pidtemplate}}
                  >Template</Button>
                </a>

                </Fragment>
              ) : null }
              { status == "Promotion Ended" || status == "Reward In Progress" ? (
                <Fragment>
                  <Button
                    id="file-upload-input-for"
                    title="Upload Customer IDs"
                    component="span"
                    variant="outlined"
                    classes={{root: cidupload}}
                    onClick={() => changeContext("showCSV", true)}
                  >Upload Customer IDs</Button>
                  <a download target="_blank" href="/csvdownload/Assign_Rewards_CustomerIDs_Template.csv">
                    <Button
                      id="file-upload-input-for"
                      title="Download Customer ID CSV"
                      component="span"
                      variant="outlined"
                      classes={{root: cidtemplate}}
                    >Template</Button>
                  </a>
                </Fragment>
              ) : null }
              { status != "Home" ? (
                <a id="cancelButton" href="/">
                  <Button variant="contained" classes={{root: back}}>Back</Button>
                </a>
              ) : null}
            </div>
          </NavWrap>
      );
    }
}

export default withStyles(styles)(Nav);
