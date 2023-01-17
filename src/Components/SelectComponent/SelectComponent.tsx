import React, { useState } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

type SelectComponent = {
  label: string;
  data: any[];
  inputRef: any;
  control: any;
};

export default function SelectComponent({
  label,
  data,
  inputRef,
  control,
}: SelectComponent) {
  const [selectedOption, setSelectedOption] = useState("none");

  const handleTypeSelect = (e: any) => {
    setSelectedOption(e.value);
  };

  return (
    <div className="selectGroup">
      <label className="selectlable">{label}</label>
      <Controller
        name={inputRef}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            options={data}
            value={data.find((c: any) => c.value === value)}
            onChange={(val) => onChange(val.value)}
          />
        )}
        rules={{ required: true }}
      />
      {/* <Select options={data} onChange={handleTypeSelect} /> */}
    </div>
  );
}
