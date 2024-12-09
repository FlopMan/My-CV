/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import useStore from "@/app/(store)/store";
import { Switch } from "@mui/material";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

const VIEWPORT = [
  {
    value: "desktop",
    label: "Desktop",
  },
  {
    value: "tablet",
    label: "Tablet",
  },
  {
    value: "mobile",
    label: "Mobile",
  },
];

const SettingOnOff = () => {
  const { getValues, setValue } = useFormContext();

  const { currentKey } = useStore((state) => state);
  const dataField = useMemo(() => {
    return getValues(currentKey);
  }, [currentKey]);

  function handleChangeHidden(value: string) {
    if (dataField?.hidden?.includes(value)) {
      setValue(
        `${currentKey}.hidden`,
        dataField?.hidden?.filter((item: string) => item !== value),
        { shouldDirty: true }
      );
    } else {
      setValue(`${currentKey}.hidden`, [...dataField?.hidden, value], {
        shouldDirty: true,
      });
    }
  }

  return (
    <div className="flex flex-col space-y-[1rem]">
      {VIEWPORT.map((item) => (
        <button key={item.value} onClick={() => handleChangeHidden(item.value)}>
          <span>{item.label}</span>
          <Switch checked={dataField.hidden.includes(item.value)} />
        </button>
      ))}
    </div>
  );
};

export default SettingOnOff;
