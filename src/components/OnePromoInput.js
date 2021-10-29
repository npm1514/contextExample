import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, Paper, Button, Select, MenuItem, FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import { GlobalH2 } from './styles/Global';
import { FlexWrap } from './styles/OnePromoDialog';
import { styles, Form, VerifyDialogWrap, VerifyDialogBox, ButtonContainer } from './styles/OnePromoInput';
import { GeneralContext } from '../context/GeneralContext';


class OnePromoDialog extends Component {
    static contextType = GeneralContext;
    state = {
      progress: 0,
      submitPopup: false,
      cancelPopup: false
    }

    submitPromotion = (e) => {
      e.preventDefault();
      this.setState({
        submitPopup: true
      })
    }

    render(){
      const { eventType, pidsDisplay, tiers, changeTier, addTier, removeTier, promoName, promoStart, promoEnd, rewardAllocation, rewardExpiration, changeState, changeDate, promoCalc, promoPercent, createPromotion, creator, id, updatePromotion, cidsDisplay, changeAllocation, classes: {
        formControl, selectMenu, radio, createPromoBtn
      } } = this.props;
      const { status } = this.context;

      let pideditable = status == "Scheduled" || status == "Draft";
      let cideditable = status == "Promotion Ended" || status == "Reward In Progress";
      let postpromo = status == "Promotion Ended" || status == "Reward In Progress" || status == "Rewards Completed";
      return (
        <Fragment>
        <Form onSubmit={this.submitPromotion}>
          <Toolbar style={{background: "#F9FAFB", display: "block", padding: "24px"}} id="newPromoInput">
            <FlexWrap>
              <div className="fieldDiv">
                <h4>Creator</h4>
                <p>{creator || this.context.user.nameID}</p>
              </div>
              <div className="fieldDiv">
                <h4>Promotion Name</h4>
                { pideditable ? (
                  <input placeholder="Promotion Name" required value={promoName} onChange={(e) => changeState(e,"promoName")}/>
                ) : (
                  <p>{promoName}</p>
                )}
              </div>
              { id ? (
                <div className="fieldDiv">
                  <h4>Promotion ID</h4>
                  <p>{id}</p>
                </div>
              ) : null }
              <div className="fieldDiv">
                <h4>Event Type</h4>
                { pideditable ? (
                  <FormControl required variant="outlined" className={formControl}>
                    <Select value={eventType} onChange={(e) => changeState(e,"eventType")} classes={{select: selectMenu}}>
                      <MenuItem value={"Percent Off"}>% Off Site Sale</MenuItem>
                      <MenuItem value={"Dollar Off"}>$ Off Site Sale</MenuItem>
                      <MenuItem value={"Daily Deal"}>Daily Deal</MenuItem>
                      <MenuItem value={"Bundle"}>Bundle</MenuItem>
                      <MenuItem value={"Reward"}>Reward</MenuItem>
                      <MenuItem value={"Map Promotion"}>Map Promotion</MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <p>{eventType}</p>
                )}

              </div>
              <div className="fieldDiv">
                <h4>Promotion Start</h4>
                { pideditable ? (
                  <input
                    required
                    type="datetime-local"
                    min={`${new Date().toISOString().split("T")[0]}T00:00`}
                    value={promoStart}
                    onChange={(e) => changeDate(e,"promoStart")}
                  />
                ) : (
                  <p>{promoStart}</p>
                )}
                <h4>Promotion End</h4>
                { pideditable ? (
                  <input
                    required
                    type="datetime-local"
                    min={promoStart}
                    value={promoEnd}
                    onChange={(e) => changeDate(e,"promoEnd")}
                  />
                ) : (
                  <p>{promoEnd}</p>
                )}

              </div>
              <div className="fieldDiv">
                <h4>Promotional Calculation</h4>
                { pideditable ? (
                  <FormControl required component="fieldset">
                    <RadioGroup classes={{root: radio}} aria-label="Promotional Calculation" value={promoCalc} onChange={(e) => changeState(e,"promoCalc")}>
                      <FormControlLabel value="Product" control={<Radio />} label="Product" />
                      <FormControlLabel value="AOS" control={<Radio />} label="AOS" />
                    </RadioGroup>
                  </FormControl>
                ) : (
                  <p>{promoCalc}</p>
                )}

              </div>
              <div className="fieldDiv">
                <h4>Reward Allocation</h4>
                { pideditable ? (
                  <input
                    required
                    type="datetime-local"
                    min={`${new Date(promoEnd).toISOString().split("T")[0]}T00:00`}
                    value={rewardAllocation}
                    onChange={(e) => changeAllocation(e,"rewardAllocation")}
                  />
                ) : (
                  <p>{rewardAllocation}</p>
                )}
                <h4>Reward Expiration</h4>
                { pideditable ? (
                  <input
                    required
                    type="datetime-local"
                    min={rewardAllocation}
                    value={rewardExpiration}
                    onChange={(e) => changeAllocation(e,"rewardExpiration")}
                  />
                ) : (
                  <p>{rewardExpiration}</p>
                )}

              </div>
            </FlexWrap>
          </Toolbar>
          <Toolbar style={{flexGrow: 2, display: "block", padding: "24px"}}>
            <FlexWrap>
              <div className="fieldDiv">
                <h4>Product IDs</h4>
                <textarea
                  disabled={!pideditable}
                  required
                  value={pidsDisplay}
                  onChange={(e) => changeState(e,"pidsDisplay")}
                  placeholder={`12345789\n12345788\n23445777`}
                />
              </div>
              {
                promoCalc == "AOS" ? (
                  <div className="fieldDiv">
                    {
                      tiers.map((tier, index) => {
                        return (
                          <FlexWrap key={index} style={{marginBottom: "12px"}}>
                            <div className="fieldDiv">
                              <h4>Minimum Purchase $</h4>
                              <input
                                disabled={!pideditable}
                                required
                                type="number"
                                value={tier.minPurchase}
                                onChange={(e) => changeTier(e,"minPurchase", index)}
                                placeholder={`10`}
                              />
                            </div>
                            <div className="fieldDiv">
                              <h4>Reward Issued $</h4>
                              <input
                                disabled={!pideditable}
                                required
                                type="number"
                                value={tier.rewardIssued}
                                max={tier.minPurchase*.5}
                                onChange={(e) => changeTier(e,"rewardIssued", index)}
                                placeholder={`15`}
                              />
                            </div>
                            { index != 0 && pideditable ? (
                              <Button onClick={() => removeTier(index)}>Delete</Button>
                            ) : null }
                          </FlexWrap>
                        )
                      })
                    }
                    <br/>
                    { pideditable ? (
                      <Button variant="outlined" onClick={addTier}>Add Tier</Button>
                    ) : null }
                  </div >
                ) : (
                  <div className="fieldDiv">
                    <h4>Promotion %</h4>
                    <input
                      required
                      disabled={!pideditable}
                      type="number"
                      value={promoPercent}
                      max={50}
                      onChange={(e) => changeState(e,"promoPercent")}
                      placeholder={`15`}
                    />
                  </div>
                )
              }
              {
                postpromo ? (
                  <div className="fieldDiv">
                    <h4>Customer IDs</h4>
                    <textarea
                      disabled={status == "Rewards Completed"}
                      required
                      value={cidsDisplay}
                      onChange={(e) => changeState(e,"cidsDisplay")}
                      placeholder={`12345789\n12345788\n23445777`}
                    />
                  </div>
                ) : null
              }
            </FlexWrap>
          </Toolbar>
          <Toolbar style={{background: "#F9FAFB"}}>
            <ButtonContainer>
              { status == "Draft" ? (
                <Button type="submit" variant="contained" color="primary" classes={{root: createPromoBtn}}>Create Promotion</Button>
              ) : null }
              { cideditable || status == "Scheduled" ? (
                <Button onClick={() =>{updatePromotion()}} variant="contained" color="primary" classes={{root: createPromoBtn}}>Save Promotion</Button>
              ) : null }
              { status == "Scheduled" ? (
                <Button variant="contained" onClick={() => this.setState({ cancelPopup: true })} classes={{root: createPromoBtn}}>Cancel Promotion</Button>
              ) : null}
            </ButtonContainer>
          </Toolbar>
        </Form>
        {
          this.state.submitPopup ? (
            <VerifyDialogWrap>
              <VerifyDialogBox>
                <h2>Is all of the information correct?</h2>
                <Button variant="contained" onClick={() => this.setState({ submitPopup: false })} classes={{root: createPromoBtn}}>Back</Button>
                <Button variant="contained" color="primary" onClick={createPromotion} classes={{root: createPromoBtn}}>Submit</Button>
              </VerifyDialogBox>
            </VerifyDialogWrap>
          ) : null
        }
        {
          this.state.cancelPopup ? (
            <VerifyDialogWrap>
              <VerifyDialogBox>
                <h2>Are you sure you want to cancel this promotion?</h2>
                <Button variant="contained" onClick={() => this.setState({ cancelPopup: false })} classes={{root: createPromoBtn}}>Back</Button>
                <Button variant="contained" color="primary" onClick={() => {updatePromotion("CANCEL")}} classes={{root: createPromoBtn}}>Yes</Button>
              </VerifyDialogBox>
            </VerifyDialogWrap>
          ) : null
        }
        </Fragment>
      );
    }
}


export default withStyles(styles)(OnePromoDialog);
