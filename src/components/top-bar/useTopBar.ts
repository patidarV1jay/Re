import { ChangeEvent, useState } from "react";

const useTopBar = () => {
  const [name, setName] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleInput = () => {
    setName("");
  };

  return {
    name,
    handleChange,
    handleInput,
  };
};

export default useTopBar;
