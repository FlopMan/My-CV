/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useStore from "@/app/(store)/store";
import { Box, Tab, Tabs } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import ColorPicker from "react-pick-color";
import RenderComponent from "./RenderComponent";
import SettingOnOff from "./SettingOnOff";
import ICPen from "@/components/icons/ICPen";
import ICPlatter from "@/components/icons/ICPlatter";
import ICAdvance from "@/components/icons/ICAdvance";
import { cn } from "@/lib/utils";
import { ContainerAccordion } from "./ContainerAccordion";
const TABS = [
  {
    value: "one",
    icon: <ICPen className="size-[1.11111rem]" />,
    label: (
      <span className="tabLabel font-roboto text-[1.11111rem] font-medium leading-normal text-[#98A2B3] capitalize">
        Nội dung
      </span>
    ),
  },
  {
    value: "two",
    icon: <ICPlatter className="size-[1.11111rem]" />,
    label: (
      <span className="tabLabel font-roboto text-[1.11111rem] font-medium leading-normal text-[#98A2B3] capitalize">
        Style
      </span>
    ),
  },
  {
    value: "three",
    icon: <ICAdvance className="size-[1.11111rem]" />,
    label: (
      <span className="tabLabel font-roboto text-[1.11111rem] font-medium leading-normal text-[#98A2B3] capitalize">
        Nâng cao
      </span>
    ),
  },
];
const ContainerEdit = () => {
  const { currentKey } = useStore((state) => state);
  const { getValues, setValue } = useFormContext();
  const [currentTab, setCurrentTab] = useState("one");

  //
  const dataField = useMemo(() => {
    return getValues(currentKey);
  }, [currentKey]);

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      setCurrentTab(newValue);
    },
    []
  );

  const TABS_LATEST = !dataField?.color ? [TABS[0], TABS[2]] : TABS;
  return (
    <div>
      <Tabs
        className="!flex !h-[2.84722rem] !p-[0.42rem_0.56rem] border-b border-solid border-[#EAECF0]"
        value={currentTab}
        onChange={handleChangeTab}
      >
        {TABS_LATEST.map((tab) => (
          <Tab
            key={tab.value}
            icon={tab.icon}
            label={tab.label}
            value={tab.value}
            iconPosition="start"
            className={cn(
              "!flex !items-center !py-0 !px-[0.56rem] !h-[calc(2.84722rem-0.42rem*2)] !min-h-[calc(2.84722rem-0.42rem*2)]",
              currentTab === tab.value &&
                "[&_span.tabLabel]:text-primary-900 [&_svg_path]:stroke-black"
            )}
          />
        ))}
      </Tabs>

      {TABS_LATEST.map((tab) => {
        if (tab.value === currentTab && currentTab === "one") {
          return (
            <RenderComponent
              key={tab.value}
              data={dataField}
              keyName={currentKey}
            />
          );
        }
        if (
          tab.value === currentTab &&
          currentTab === "two" &&
          dataField?.color
        ) {
          return (
            <Box
              key={tab.value}
              sx={{
                p: 2,
                borderRadius: 1,
                bgcolor: "background.neutral",
              }}
            >
              <ColorPicker
                color={dataField?.color}
                onChange={(color) =>
                  setValue(`${currentKey}.color`, color.hex, {
                    shouldDirty: true,
                  })
                }
              />
            </Box>
          );
        }
        if (tab.value === currentTab && currentTab === "three") {
          return <SettingOnOff key={tab.value} />;
        }
      })}
    </div>
  );
};

export default ContainerEdit;
