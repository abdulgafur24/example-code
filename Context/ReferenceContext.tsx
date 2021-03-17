import React, { createContext, useState } from "react";
import {
  IRefineries,
  IProducts,
  IHolders,
  IStations,
  IOilbases,
  IRegions,
} from "constants/types";

interface ReferenceContextProps {
  refineries: IRefineries[];
  setRefineries: (refineries: IRefineries[]) => void;
  products: IProducts[];
  setProducts: (products: IProducts[]) => void;
  holders: IHolders[];
  setHolders: (holders: IHolders[]) => void;
  stations: IStations[];
  setStations: (stations: IStations[]) => void;
  oilbases: IOilbases[];
  setOilbases: (oilbases: IOilbases[]) => void;
  regions: IRegions[];
  setRegions: (regions: IRegions[]) => void;
}

export const ReferenceContext = createContext({} as ReferenceContextProps);

interface ReferenceProviderProps {
  children: React.ReactChild;
}

export const ReferenceProvider = ({ children }: ReferenceProviderProps) => {
  const [refineries, setRefineries] = useState([] as IRefineries[]);
  const [products, setProducts] = useState([] as IProducts[]);
  const [holders, setHolders] = useState([] as IHolders[]);
  const [stations, setStations] = useState([] as IStations[]);
  const [oilbases, setOilbases] = useState([] as IOilbases[]);
  const [regions, setRegions] = useState([] as IRegions[]);

  return (
    <ReferenceContext.Provider
      value={{
        refineries,
        setRefineries,
        products,
        setProducts,
        holders,
        setHolders,
        stations,
        setStations,
        oilbases,
        setOilbases,
        regions,
        setRegions,
      }}
    >
      {children}
    </ReferenceContext.Provider>
  );
};
