import Promo  from '../models/Promo';
const createData = (rewardAllocation, rewardExpiration, promoName, promoStart, promoEnd, pids, tiers, promoPercent, creator, status) => {
  return new Promo({ rewardAllocation, rewardExpiration, promoName, promoStart: new Date(promoStart).toISOString(), promoEnd: new Date(promoEnd).toISOString(), pids, tiers, promoPercent, creator, status, eventType: "Percent Off" })
}
export default [
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'Super Something Sale', 'Apr 5, 2021', 'Apr 15, 2021', [
      '1234'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 25, 'Nick', 'Scheduled'
  ),
  createData(
    '2021-12-06T12:30', '2021-12-10T13:30',
    'Lots of Lanterns Sale', 'Jun 15, 2021', 'Jun 19, 2021', [
      '1234','2345'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }, {
      minPurchase: 2000,
      rewardIssued: 20,
    }], 5, 'Steve', 'Reward In Progress'
  ),
  createData(
    '2021-04-06T12:30', '2021-12-10T13:30',
    'Serious Sail Sale', 'Aug 10, 2021', 'Aug 15, 2021', [
      '1234', '2345', '4567', '67890', '567890', '456789', '4567890', '5467568'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 35, 'Bob', 'Scheduled'
  ),
  createData(
    '2021-03-06T12:30', '2021-12-10T13:30',
    'On Sale Awnings', 'Sept 15, 2021', 'Oct 15, 2021', [
      '1234', '2345', '4567', '4657890'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }, {
      minPurchase: 3000,
      rewardIssued: 30,
    }], 25, 'Kirk', 'Promotion Ended'
  ),
  createData(
    '2020-11-06T12:30', '2021-12-10T13:30',
    'Pre Black Friday Sale', 'Sept 15, 2021', 'Oct 15, 2021', [
      '1234', '2345', '4567', '45647', '4657890'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 15, 'Nick', 'Rewards Completed'
  ),
  createData(
    '2020-11-06T12:30', '2021-12-10T13:30',
    'Black Friday Sale', 'Nov 20, 2021', 'Nov 25, 2021', [
      '1234', '2345', '4567', '45647', '4657890'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }, {
      minPurchase: 4000,
      rewardIssued: 40,
    }], 15, 'Tom', 'Rewards Completed'
  ),
  createData(
    '2021-06-06T12:30', '2021-12-10T13:30',
    "Black Friday's Back", 'Dec 15, 2021', 'Dec 23, 2021', [
      '1234', '2345'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 6, 'Ned', 'Promotion Ended'
  ),
  createData(
    '2021-06-06T12:30', '2021-12-10T13:30',
    'Christmas Day Sale', 'Dec 25, 2021', 'Dec 25, 2021', [
      '1234', '2345'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }, {
      minPurchase: 2000,
      rewardIssued: 20,
    }, {
      minPurchase: 3000,
      rewardIssued: 30,
    }], 9, 'Ned', 'Scheduled'
  ),
  createData(
    '2021-07-06T12:30', '2021-12-10T13:30',
    'Christmas in July', 'Jul 24, 2021', 'Jul 26, 2021', [
      '1234'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 25, 'Tom', 'Reward In Progress'
  ),
  createData(
    '2021-07-06T12:30', '2021-12-10T13:30',
    'For No Reason Sale', 'Feb 1, 2021', 'Feb 5, 2021', [
      '1234'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 25, 'Matt', 'Live'
  ),
  createData(
    '2021-07-06T12:30', '2021-12-10T13:30',
    'A Lot of Things On Sale', 'Oct 20, 2021', 'Oct 25, 2021', [
      '1234', '2345', '4567', '372389', '3892898', '382980', '9090', '09090'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 25, 'Matt', 'Live'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'Doorbuster', 'Jan 19, 2021', 'Jan 21, 2021', [
      '1234', '2345', '4567', '372389', '3892898', '382980', '9090', '09090'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 6, 'Dennis', 'Cancelled'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'Rugs Rebate', 'May 4, 2021', 'May 9, 2021', [
      '1234', '2345', '4567', '372389', '3892898', '382980', '9090'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 25, 'Dennis', 'Cancelled'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'Super Something Sale', 'Apr 5, 2021', 'Apr 15, 2021', [
      '1234'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 10, 'Nick', 'Scheduled'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'Lots of Lanterns Sale', 'Jun 15, 2021', 'Jun 19, 2021', [
      '1234', '2345'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 10, 'Steve', 'Reward In Progress'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'Serious Sail Sale', 'Aug 10, 2021', 'Aug 15, 2021', [
      '1234', '2345', '4567', '67890', '567890', '456789', '4567890', '5467568'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 18, 'Bob', 'Reward In Progress'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'On Sale Awnings', 'Sept 15, 2021', 'Oct 15, 2021', [
      '1234','2345','4567','4657890'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 18, 'Kirk', 'Rewards Completed'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'Pre Black Friday Sale', 'Sept 15, 2021', 'Oct 15, 2021', [
      '1234','2345','4567','45647','4657890'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 25, 'Nick', 'Rewards Completed'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'Black Friday Sale', 'Nov 20, 2021', 'Nov 25, 2021', [
      '1234','2345','4567','45647','4657890'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 19, 'Tom', 'Promotion Ended'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    "Black Friday's Back", 'Dec 15, 2021', 'Dec 23, 2021', [
      '1234','2345'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 19, 'Ned', 'Promotion Ended'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'Christmas Day Sale', 'Dec 25, 2021', 'Dec 25, 2021', [
      '1234','2345'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 12, 'Ned', 'Scheduled'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'Christmas in July', 'Jul 24, 2021', 'Jul 26, 2021', [
      '1234'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 13, 'Tom', 'Scheduled'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'For No Reason Sale', 'Feb 1, 2021', 'Feb 5, 2021',  [
      '1234'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 25, 'Matt', 'Live'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'A Lot of Things On Sale', 'Oct 20, 2021', 'Oct 25, 2021', [
      '1234','2345','4567', '372389', '3892898', '382980', '9090', '09090'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 14, 'Matt', 'Live'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'Doorbuster', 'Jan 19, 2021', 'Jan 21, 2021', [
      '1234','2345','4567', '372389', '3892898', '382980', '9090', '09090'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 14, 'Dennis', 'Cancelled'
  ),
  createData(
    '2021-11-06T12:30', '2021-12-10T13:30',
    'Rugs Rebate', 'May 4, 2021', 'May 9, 2021', [
      '1234','2345','4567', '372389', '3892898', '382980', '9090'
    ], [{
      minPurchase: 1000,
      rewardIssued: 10,
    }], 9, 'Dennis', 'Cancelled'
  ),
]
