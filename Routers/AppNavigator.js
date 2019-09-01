import { createStackNavigator, createAppContainer } from 'react-navigation';
import Page from "./Page"
import BloodBank from "./BloodBank"
// import HelpDesk from "./HelpDesk"
import ViewProfile from './ViewProfile'

import Login from ".//Account/Login"
import Signup from ".//Account/Signup"
import Page2 from ".//Page2"


import DonorForm from ".//Donor/DonorForm"


const MainNavigator = createStackNavigator({
  Login:
    { screen: Login },

  Signup: {
    screen: Signup
  },

  Page2:{
    screen:Page2 },

  Page:
    { screen: Page },

  DonorForm: {
    screen: DonorForm
  },

  BloodBank: {
    screen: BloodBank
  },
  // HelpDesk: {
  //   screen: HelpDesk
  // },
  ViewProfile: {
    screen: ViewProfile
  },
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
}
);

const App = createAppContainer(MainNavigator);

export default App;
