import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView7106Navigator from '../features/CalendarView7106/navigator';
import EmailAuth7105Navigator from '../features/EmailAuth7105/navigator';
import Messaging7104Navigator from '../features/Messaging7104/navigator';
import CalendarView7103Navigator from '../features/CalendarView7103/navigator';
import EmailAuth7102Navigator from '../features/EmailAuth7102/navigator';
import Messaging7101Navigator from '../features/Messaging7101/navigator';
import EmailAuth7099Navigator from '../features/EmailAuth7099/navigator';
import BlankScreen47093Navigator from '../features/BlankScreen47093/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
CalendarView7106: { screen: CalendarView7106Navigator },
EmailAuth7105: { screen: EmailAuth7105Navigator },
Messaging7104: { screen: Messaging7104Navigator },
CalendarView7103: { screen: CalendarView7103Navigator },
EmailAuth7102: { screen: EmailAuth7102Navigator },
Messaging7101: { screen: Messaging7101Navigator },
EmailAuth7099: { screen: EmailAuth7099Navigator },
BlankScreen47093: { screen: BlankScreen47093Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
