import { useContext, useState, Dispatch, SetStateAction } from "react";
import { createContext } from "react";

export type Query = {
  name?: string | null;
  pageNumber: number;
  pageSize: number;
  orderBy?: string | null;
  searchTerm?: string | null;
};

export type QueryContextType = {
  query: Query;
  setQuery: Dispatch<SetStateAction<Query>>;
};

export const QueryContext = createContext<QueryContextType | null>(null);

export const QueryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [query, setQuery] = useState<Query>({
    name: "",
    pageNumber: 1,
    pageSize: 10,
    orderBy: "",
    searchTerm: "",
  });

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};

// Custom hook - useQuery
export const useQueryContext = () => {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("useQuery must be used within a QueryContextProvider");
  }
  return context;
};
