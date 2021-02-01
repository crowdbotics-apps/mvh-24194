import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps199506Navigator from '../features/Maps199506/navigator';
import Additem199505Navigator from '../features/Additem199505/navigator';
import Maps199501Navigator from '../features/Maps199501/navigator';
import UserProfile199497Navigator from '../features/UserProfile199497/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps199506: { screen: Maps199506Navigator },
Additem199505: { screen: Additem199505Navigator },
Maps199501: { screen: Maps199501Navigator },
UserProfile199497: { screen: UserProfile199497Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
