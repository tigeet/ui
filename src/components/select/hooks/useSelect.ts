import { SelectContext } from "../providers/selectProvider";
import useStrictContext from "@/hooks/useStrictContext";

const useSelect = () => {
  return useStrictContext(SelectContext, "Select Context");
};

export default useSelect;
