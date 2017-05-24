let DashboardData = {
  orderNumber : 10,
  orderCost: 1000000000,
  orderType: 3,
  orderData: [50, 15, 15],
  costData: [5000000, 3000000, 3000000]
};

const DashboardStore = (state = [], action) => {
  switch (action.type){
    case 'LOAD':
      return state;
    default:
      return state;

  }
};

const DashboardState = DashboardStore(DashboardData, 'LOAD');
export default DashboardState;






