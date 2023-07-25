"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";

import { useAppContextState } from "@contexts/AppContext";
import { Loader } from "./Loader";

const App = () => {
  const { isLoading } = useAppContextState();

  const Map = useMemo(
    () =>
      dynamic(() => import("@components/Map"), {
        loading: () => <Loader />,
        ssr: false,
      }),
    []
  );

  return (
    <>
      isLoading && <Loader /> // TODO: create a global loader
      <Map />
    </>
  );
};

export default App;
