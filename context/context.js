import React, { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data/Medicines";

const ContextP = createContext();

export const PracticeProvider = ({ children }) => {
    const [buyData, setBuyData] = useState([]);

    const [medicineData, setMedicine] = useState(data);

    if (medicineData)
        return (
            <ContextP.Provider
                value={{ medicineData, setMedicine, buyData, setBuyData }}
            >
                {children}
            </ContextP.Provider>
        );
};

export const useStateContext = () => useContext(ContextP);
