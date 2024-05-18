import { ReactNode, memo } from "react";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler;
  placeholder?: string;
  icon?: ReactNode;
};
const Search = ({ icon }: Props) => {
  return (
    <div>
      {icon && <span>{icon}</span>}
      <input></input>
      <button></button>
    </div>
  );
};
export default memo(Search);
