import { createStackNavigator, createAppContainer } from 'react-navigation';

import Page from "./Page"
import BloodBank from "./BloodBank"
// import HelpDesk from "./HelpDesk"
import ViewProfile from './ViewProfile'

import Login from ".//Account/Login"
import Signup from ".//Account/Signup"
// import Camera from ".//Account/Camera"


import DonorForm from ".//Donor/DonorForm"


const MainNavigator = createStackNavigator({
  Login:
    { screen: Login },

  Signup: {
    screen: Signup
  },

  // Camera:{
  //   screen:Camera },

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
});

const App = createAppContainer(MainNavigator);

export default App;
