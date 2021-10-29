// import Product from './Product';
function Promo({rewardAllocation = null, rewardExpiration = null, eventType = null, promoCalculation = null, promoPercent = null, promoName = null, promoStart = null, promoEnd = null, pids = [], tiers = [{minPurchase: null, rewardIssued: null}], creator = null, status = "Draft"}) {
  if(promoName != {}){
    let dollarlow = 0;
    let dollarhigh = 0;
    tiers.map(({rewardIssued}, index) => {
      dollarlow = index == 0 ? rewardIssued : dollarlow;
      dollarlow = rewardIssued < dollarlow ? rewardIssued : dollarlow;
      dollarhigh = rewardIssued > dollarhigh ? rewardIssued : dollarhigh;
    })
    let dollarrange = dollarlow != dollarhigh ? `$${dollarlow} - $${dollarhigh}` : `$${dollarlow}`;
    promoStart = promoStart ? promoStart.split('.')[0] : promoStart;
    promoEnd = promoEnd ? promoEnd.split('.')[0] : promoEnd;
    let timerange = promoStart && promoEnd ? promoStart + " - " + promoEnd : null;
    let promopercent = promoPercent ? promoPercent + "%" : 0;
    Object.assign(this, {
      id: Math.floor(Math.random()*10000000),
      promoName,
      eventType,
      promoStart,
      promoEnd,
      rewardAllocation,
      rewardExpiration,
      timerange,
      promoCalculation,
      promopercent,
      dollarData: {
        dollarlow,
        dollarhigh,
        dollarrange
      },
      tiers,
      creator,
      status,
      pids,
      timerange,
      dollarrange,
      skucount: pids.length
    });
  } else {
    this.id = Math.floor(Math.random()*10000000);
  }
}

export default Promo;
