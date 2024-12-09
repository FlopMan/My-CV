"use client";
import { useFormContext, Controller } from "react-hook-form";
// @mui
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useEffect, useRef } from "react";
import useStore from "@/app/(store)/store";

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  isActive?: boolean;
};

export default function RHFTextField({
  name,
  helperText,
  type,
  isActive,
  ...other
}: Props) {
  const { asideEditRef } = useStore((state) => state);

  const { control } = useFormContext();
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Nếu `isActive` là true, cuộn phần tử lên đầu trong giới hạn của section container
    if (isActive && fieldRef.current && asideEditRef) {
      const offsetTop = 10 * 16; // 10rem tính ra px (1rem = 16px)

      // Lấy vị trí của field so với container
      const fieldPosition = fieldRef.current.getBoundingClientRect().top;
      const containerPosition = asideEditRef.getBoundingClientRect().top;

      // Tính toán vị trí cần cuộn trong container để cách top 10rem
      asideEditRef.scrollTop += fieldPosition - containerPosition - offsetTop;
    }
  }, [isActive, asideEditRef]);

  if (!control) return null;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          inputRef={fieldRef}
          fullWidth
          focused={isActive}
          type={type}
          value={type === "number" && field.value === 0 ? "" : field.value}
          onChange={(event) => {
            if (type === "number") {
              field.onChange(Number(event.target.value));
            } else {
              field.onChange(event.target.value);
            }
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
}
