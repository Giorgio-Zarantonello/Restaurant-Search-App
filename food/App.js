import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const navigator = createStackNavigator({
  Search : SearchScreen,  
  resultShow : ResultShowScreen
},
{
  initialRouteName : 'Search',
  // options for every different screen , global 
  defaultNavigationOptions: {
    title: 'Just Zara' , 
  }
});

export default createAppContainer(navigator);