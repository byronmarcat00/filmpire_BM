import React, { useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import { ColorModeContext } from "../utils/ToggleColorMode";

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);

  useEffect(() => {
    alanBtn({
      key: "8d89db36bee784fd0853f2894954c94f2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, mode }) => {
        if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        }
      },
    });
  }, []);
};

export default useAlan;
