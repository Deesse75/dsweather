import { HereDataInitial } from "../context/here.context";

export type HereActionType = {
    type: string;
    payload: any;
};

export const HereReducer = (state = HereDataInitial, action: HereActionType) => {
    switch (action.type) {
        case "SET_LOCATION":
            return {
                ...state,
                location: action.payload,
            };
        default:
            return state;
    }
};