import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator({
  Search : SearchScreen,
},
{
  initialRouteName : 'Search',
  // options for every different screen , global 
  defaultNavigationOptions: {
    title: 'Just Zara'
  }
});

export default createAppContainer(navigator);