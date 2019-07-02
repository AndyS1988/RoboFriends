// importing constant variables:
import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
	} from './constants.js'

// declaring initial state for searchRobots reducer:
const initialStateSearch = {
	searchField: ''
}

// declaring reducer searchRobots that receives two params which have declared default values 
export const searchRobots = (state=initialStateSearch, action ={}) => {
	// using a switch method that listens to actions:
	switch(action.type) {
		// in case the action.type is equal to CHANGE_SEARCH_FIELD then return 
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload});
		default:
			return state;
	}
}

// declaring initial state for requestRobots reducer:
const initialStateRobots = {
	isPending: false,
	robots: [],
	errror: ''
}

// declaring reducer requestRobots that receives two params which have declared default values 
export const requestRobots = (state=initialStateRobots, action={}) => {
	//using a switch method that listens to actions:
	switch(action.type) {
		//in case action.type is equal to REQUEST_ROBOTS_PENDING then return:
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, {isPending: true});
		//in case action.type is equal to REQUEST_ROBOTS_SUCCESS then return:
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, {robots: action.payload, isPending: false});
		//in case action.type is equal to REQUEST_ROBOTS_FAILED then return:
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false});
		default:
			return state;
	}
}