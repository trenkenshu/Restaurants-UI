import { createContext, Dispatch, FC, useMemo, useReducer } from 'react';
import { ActionType, IState } from 'types';
import initialState from './initalState';
import reducer from './reducer';

type StoreContextProps = {
    children: React.ReactNode;
};

type ContextStateType = {
    state: IState;
    dispatch: Dispatch<ActionType>;
};

export const AppContext = createContext({} as ContextStateType);

const StoreContext: FC<StoreContextProps> = ({ children }) => {
    const loadedState = localStorage.getItem('state') || JSON.stringify(initialState);
    const [state, dispatch] = useReducer<React.Reducer<IState, ActionType>>(reducer, JSON.parse(loadedState));

    // const contextState: ContextStateType = useMemo(() => {
    //     return {
    //         state,
    //         dispatch,
    //     };
    // }, [state]);

    const contextState: ContextStateType = {
        state,
        dispatch,
    };

    return <AppContext.Provider value={contextState}>{children}</AppContext.Provider>;
};

export default StoreContext;
