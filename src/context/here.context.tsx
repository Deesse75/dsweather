import { useReducer } from "react";
import { createContext } from "vm";
import { HereReducer } from "../reducer/here.reducer";

const HereDataInitial = {
    location: "",
};

type HereDataType = typeof HereDataInitial;

const HereContext = createContext({
    hereData: HereDataInitial,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch: (_value: HereDataType) => HereDataInitial,
});

const HereContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [hereData, dispatch] = useReducer(HereReducer, HereDataInitial);
    return (
        <HereContext.Provider
        value={{ 
            hereData,
            dispatch,
            }}>
            {children}
        </HereContext.Provider>
    );
};

export { HereContext, HereContextProvider, HereDataInitial};