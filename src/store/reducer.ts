import { ActionType, IState } from 'types';

const reducer = (state: IState, action: ActionType): IState => {
    switch (action.type) {
        case 'getRestaurants': {
            const restaurants = action.payload;
            const newState = { ...state, restaurants: restaurants };
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        }
        case 'getRestaurant': {
            const restaurant = action.payload;
            const newState = { ...state, currentRestaurant: restaurant };
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        }
        case 'changeLang': {
            const language = action.payload;
            const newState = { ...state, language: language };
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        }
        case 'changeCity': {
            const currentCity = action.payload;
            const newState = { ...state, currentCity: currentCity };
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        }
        case 'changeTheme': {
            const theme = action.payload;
            const newState = { ...state, theme: theme };
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        }
        case 'updateUser': {
            const user = action.payload;
            const newState = { ...state, user: { ...state.user, ...user } };
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        }
        default: {
            console.log('defaul reducer');
            return state;
        }
    }
};

export default reducer;
