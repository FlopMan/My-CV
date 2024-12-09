"use client";
import { useFormContext, useFieldArray } from "react-hook-form";
// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Iconify from "./iconify";
import RenderComponent from "@/sections/home/components/RenderComponent";
import { Tab, Tabs } from "@mui/material";
import { useCallback, useState } from "react";

export default function RHFRepeaterClone({
  name,
  child,
}: {
  name: string;
  child: any;
}) {
  const [currentTab, setCurrentTab] = useState("item0");
  //
  const handleChangeTab = useCallback((event: any, newValue: any) => {
    setCurrentTab(newValue);
  }, []);
  const { control, getValues } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  const handleAdd = () => {
    append(child);
  };

  const handleRemove = (index: number) => {
    remove(index);
    setCurrentTab(`item${Math.max(0, index - 1)}`);
  };

  return (
    <>
      <Divider sx={{ my: 3, borderStyle: "dashed" }} />
      <Box sx={{ p: 3 }}>
        <Stack spacing={1.5}>
          <Stack
            spacing={3}
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-end", md: "center" }}
          >
            <Button
              size="small"
              color="primary"
              startIcon={<Iconify icon="mingcute:add-line" />}
              onClick={handleAdd}
              sx={{ flexShrink: 0 }}
            >
              Add Item
            </Button>
          </Stack>
          <Tabs
            sx={{ overflow: "auto" }}
            value={currentTab}
            onChange={handleChangeTab}
            className="mb-[1rem]"
          >
            {fields.map((item, index) => (
              <Tab
                key={item.id}
                value={`item${index}`}
                label={`Item ${index + 1}`}
              />
            ))}
          </Tabs>
          {fields.map(
            (item, index) =>
              `item${index}` === currentTab && (
                <Stack key={item.id}>
                  <RenderComponent
                    data={getValues(`${name}[${index}]`)}
                    keyName={`${name}[${index}]`}
                    key={item.id}
                  />
                  <Button
                    sx={{ mt: 2 }}
                    size="small"
                    color="error"
                    startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </Button>
                </Stack>
              )
          )}
        </Stack>
      </Box>
      <Divider sx={{ my: 3, borderStyle: "dashed" }} />
    </>
  );
}
