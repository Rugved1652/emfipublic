import React, { useState } from "react";
import Select from "react-select";

type SelectComponent = {
  label: string;
  data: any[];
};

export default function SelectComponent({ label, data }: SelectComponent) {
  const [selectedOption, setSelectedOption] = useState("none");

  const handleTypeSelect = (e: any) => {
    setSelectedOption(e.value);
  };

  return (
    <div className="selectGroup">
      <label className="selectlable">{label}</label>
      <Select options={data} onChange={handleTypeSelect} />
    </div>
  );
}
