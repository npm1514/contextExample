import React, { Component, Fragment } from 'react';
import { Paper, Snackbar } from '@material-ui/core';
import { OnePromoInput, CSVUploadDialog } from './';
import Alert from '@material-ui/lab/Alert';
import { GeneralContext } from '../context/GeneralContext';

import { OnePromoBodyWrap } from './styles/OnePromoDialog';

class OnePromoDialog extends Component {
    static contextType = GeneralContext;
    state = {
      established: false,
      eventType: "Percent Off",
      promoCalc: "Product",
      pids: [],
      pidsDisplay: [],
      cids: [],
      cidsDisplay: [],
      tiers: [{
        minPurchase: null,
        rewardIssued: null,
      }],
      id: "",
      promoPercent: null,
      promoName: "",
      promoStart: `${new Date().toISOString().split("T")[0]}T00:00`,
      promoEnd: `${new Date().toISOString().split("T")[0]}T00:00`,
      rewardAllocation: `${new Date().toISOString().split("T")[0]}T00:00`,
      rewardExpiration: `${new Date().toISOString().split("T")[0]}T00:00`,
      alertMessage: "",
      alertSuccess: true,
      status: "Draft",
      currentPromo: {}
    }
    changeState = (e, prop) => {
      let obj = {};
      obj[prop] = e.target.value;
      if(prop == 'pidsDisplay'){
        obj['pids'] = e.target.value.split('\n')
      }
      if(prop == 'promoPercent'){
        if(e.target.value > 50){
          obj[prop] = 50;
        }
        if(e.target.value < 0){
          obj[prop] = 0;
        }
      }
      this.setState(obj)
    }
    changeTier = (e, prop, index) => {
      let tiers = this.state.tiers;
      tiers[index][prop] = e.target.value;
      if(prop == "rewardIssued"){
        if(e.target.value > this.state.tiers[index].minPurchase * .5){
          tiers[index][prop] = this.state.tiers[index].minPurchase * .5;
        }
        if(e.target.value < 0){
          tiers[index][prop] = 0;
        }
      }
      if(prop == "minPurchase"){
        if(e.target.value < 0){
          tiers[index][prop] = 0;
        }
        if(e.target.value > 0 && this.state.tiers[index].rewardIssued > e.target.value * .5 ){
          tiers[index].rewardIssued = e.target.value * .5
        }
      }
      this.setState({tiers})
    }
    addTier = () => {
      let tiers = this.state.tiers;
      if(tiers.length < 4){
        tiers.push({
          minPurchase: null,
          rewardIssued: null,
        })
        this.setState({ tiers })
      }
    }
    removeTier = (index) => {
      let tiers = this.state.tiers;
      tiers.splice(index, index)
      this.setState({ tiers })
    }
    changeAllocation = (e, prop) => {
      let val = new Date(e.target.value);
      let obj = {};
      obj[prop] = e.target.value;
      if(prop == 'rewardAllocation' && val > new Date(this.state.rewardExpiration)){
        obj['rewardExpiration'] = e.target.value;
      }
      if(prop == 'rewardExpiration' && val < new Date(this.state.rewardAllocation)){
        obj['rewardAllocation'] = e.target.value;
      }
      this.setState(obj)
    }
    changeDate = (e, prop) => {
      let val = e.target.value
      let obj = {};
      let mathdate = new Date(val)
      if(mathdate >= new Date(new Date().setDate(new Date().getDate() - 1))){
        if(prop == 'promoStart'){
          obj[prop] = val;
          if(mathdate > new Date(this.state.promoEnd)){
            obj['promoEnd'] = val
          }
          if(mathdate > new Date(this.state.rewardAllocation)){
            obj['rewardAllocation'] = val
          }
          if(mathdate > new Date(this.state.rewardExpiration)){
            obj['rewardExpiration'] = val
          }
        }
        if(prop == 'promoEnd'){
          if(mathdate > new Date(this.state.promoStart)){
            obj[prop] = val;
          }
          if(mathdate > new Date(this.state.rewardAllocation)){
            obj['rewardAllocation'] = val
          }
          if(mathdate > new Date(this.state.rewardExpiration)){
            obj['rewardExpiration'] = val
          }
        }
        if(prop == 'rewardAllocation'){
          if(mathdate > new Date(this.state.promoEnd)){
            obj[prop] = val;
          }
          if(mathdate > new Date(this.state.rewardExpiration)){
            obj['rewardExpiration'] = val
          }
        }
        if(prop == 'rewardExpiration'){
          if(val > new Date(this.state.rewardAllocation)){
            obj[prop] = val;
          }
        }
      }
      this.setState(obj)
    }

    createPromotion = () => {
      let data = {...this.state};
      data.creator = this.context.user.nameID;
      fetch('/api/createPromo', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(resp => {
        this.setMessage("Your promotion was created successfuly!", true)
        window.location.href = "/"
      })
      .catch(err => {
        this.setMessage("Something went terribly wrong!", false)
      })
    }

    updatePromotion = (cancelled) => {
      let data = {...this.state};
      data.status = cancelled ? "Cancelled" : data.status;
      fetch('/api/updatePromo/' + this.state.id, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(resp => {
        this.setMessage("Your promotion was updated successfuly!", true)
        window.location.href = "/"
      })
      .catch(err => {
        this.setMessage("Something went terribly wrong!", false)
      })
    }

    setMessage = (alertMessage, alertSuccess) => {
      this.setState({alertMessage, alertSuccess})
      setTimeout(() => {
        this.setState({alertMessage : "", alertSuccess: true})
      }, 3000)
    }

    csvService = (file) => {
      console.log("get csv service", file)
      let { status } = this.context;

      if(status == "Draft"){
        this.setState({
          pids: ['12345', '23456', '34567'],
          pidsDisplay: `12345
          23456
          34567`,
          tiers: [{
            minPurchase: 100,
            rewardIssued: 10,
          },{
            minPurchase: 1000,
            rewardIssued: 100,
          }]
        })
      }
      if(status == "Scheduled"){
        this.setState({
          cids: ['12345', '23456', '34567'],
          cidsDisplay: `12345
          23456
          34567`
        })
      }

        // changeDisplay(false)
      // })
    }

    componentDidMount(){
      if(this.props.id){
        fetch('/api/getPromo/' + this.props.id)
        .then(res => res.json())
        .then(resp => {
          this.context.changeContext("status", resp.status)
          this.setState({
            ...resp,
            pidsDisplay: resp.pids && resp.pids.join('\n'),
            cidsDisplay: resp.cids && resp.cids.join('\n'),
            currentPromo: resp
          })
        })
        .catch(err => window.location.href = "/")
      } else {
        this.context.changeContext("status", "Draft")
      }
      this.setState({
        established: true
      })
    }

    render(){
      const { established, alertMessage, alertSuccess } = this.state;
      return established ? (
        <OnePromoBodyWrap id="OnePromoDialog">
          <Paper>
            <OnePromoInput {...this.state} {...this} />
            {
              alertMessage ? (
                <Snackbar open={(alertMessage)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                  <Alert variant="filled" severity={alertSuccess ? "success" : "error"}>{alertMessage}</Alert>
                </Snackbar>
              ) : null
            }
            {
              this.context.showCSV ? <CSVUploadDialog csvService={this.csvService}/> : null
            }
          </Paper>
        </OnePromoBodyWrap>
      ) : null;
    }
}

export default OnePromoDialog;
