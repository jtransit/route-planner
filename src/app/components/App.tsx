"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";

import useAppContextState from "@hooks/useAppContextState";
import { Loader } from "@components/Loader";

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
      {
        isLoading && <Loader /> // TODO: create a global loader
      }
      <Map />
    </>
  );
};

export default App;
