import NavigationContext from "../context/navigation";
import { useContext } from "react";

function useNavi() {
  return useContext(NavigationContext);
}

export default useNavi;
