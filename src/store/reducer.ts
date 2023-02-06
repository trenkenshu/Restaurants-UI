import { ActionType, IRestaurant, IState } from 'types';

const reducer = (state: IState, action: ActionType): IState => {
    switch (action.type) {
        case 'getRestaurants': {
            const restaurants = action.payload as IRestaurant[];
            return { ...state, restaurants: restaurants };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
