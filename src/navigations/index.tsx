import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import InicioScreen from '../screen/inicio';
import LendaScreen from '../screen/lenda';
import PatchScreen from '../screen/patch';
import InvocadorScreen from '../screen/invocador';
import AssombrimScreen from '../screen/lendas/assombrim';
import FelpinaScreen from '../screen/lendas/felpina';
import PlumarioScreen from '../screen/lendas/plumario';
import ProtetorScreen from '../screen/lendas/protetor';
import RanzinzimScreen from '../screen/lendas/ranzinzim';
import RapininhaScreen from '../screen/lendas/rapininha';
import RunirimScreen from '../screen/lendas/runirim';
import TalugaScreen from '../screen/lendas/taluga';
import TerritoScreen from '../screen/lendas/territo';


const navigationLendas = createStackNavigator({
	lenda: {
		screen: LendaScreen,
		navigationOptions: {
			title: 'Lendas',
			header: null
		}
	},
	assombrim: {
		screen: AssombrimScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'rgba(255,255,255,0.0)'
			}
		},
	},
	felpina: {
		screen: FelpinaScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'rgba(255,255,255,0.0)'
			}
		},
	},
	plumario: {
		screen: PlumarioScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'rgba(255,255,255,0.0)'
			}
		},
	},
	protetor: {
		screen: ProtetorScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'rgba(255,255,255,0.0)'
			}
		},
	},
	ranzinzim: {
		screen: RanzinzimScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'rgba(255,255,255,0.0)'
			}
		},
	},
	rapininha: {
		screen: RapininhaScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'rgba(255,255,255,0.0)'
			}
		},
	},
	runirim: {
		screen: RunirimScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'rgba(255,255,255,0.0)'
			}
		},
	},
	taluga: {
		screen: TalugaScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'rgba(255,255,255,0.0)'
			}
		},
	},
	territo: {
		screen: TerritoScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'rgba(255,255,255,0.0)'
			}
		},
	},


},
);

const navigationInicio = createBottomTabNavigator({
	inicio: {
		screen: InicioScreen,
		navigationOptions: {
			title: 'Inicio',
			header: null
		}
	},
	lenda: {
		screen: navigationLendas,
		navigationOptions: {
			title: 'Lendas',
			header: null
		}
	},
	patch: {
		screen: PatchScreen,
		navigationOptions: {
			title: 'Patch Notes',
			header: null
		}
	},
	invocador: {
		screen: InvocadorScreen,
		navigationOptions: {
			title: 'Buscar Invocador',
			header: null
		}
	},
}, { initialRouteName: 'inicio' });


export default createAppContainer(navigationInicio);