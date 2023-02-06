import { ActionType, IRestaurant, IState } from 'types';

const reducer = (state: IState, action: ActionType): IState => {
    switch (action.type) {
        case 'getRestaurants': {
            const restaurants = action.payload as IRestaurant[];
            return { ...state, restaurants: restaurants };
        }
        case 'changeLang': {
            const language = action.payload as string;
            return { ...state, language: language };
        }
        case 'changeCity': {
            const currentCity = action.payload as string;
            return { ...state, currentCity: currentCity };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
