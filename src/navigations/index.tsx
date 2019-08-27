import { createStackNavigator, createAppContainer } from 'react-navigation';
import InicioScreen from '../screen/inicio';
import LendaScreen from '../screen/lenda';
const navigation = createStackNavigator({
	InicioScreen, LendaScreen 
});

export default createAppContainer(navigation);