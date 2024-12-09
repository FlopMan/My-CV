"use client";
import { useState, useCallback, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Box, Stack, IconButton, ListItemText } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { m, AnimatePresence } from "framer-motion";
import { useFormContext } from "react-hook-form";

import { UploadProps } from "./types";
import FileThumbnail, { fileData } from "../file-thumbnail";
import Iconify from "../iconify";
import { fData } from "@/utils/format-number";

// ----------------------------------------------------------------------

export default function MultiFilePreviewDrag({
  thumbnail,
  files,
  onRemove,
  sx,
  name,
}: UploadProps) {
  const { getValues, setValue } = useFormContext();
  const dataInit = getValues(name!) || [];

  // Thêm một state để lưu trữ bản sao của dataInit
  const [items, setItems] = useState(dataInit);

  // Cập nhật items khi dataInit thay đổi
  useEffect(() => {
    setItems(dataInit);
  }, [dataInit]);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;

      // Nếu không có điểm đến, thoát khỏi hàm
      if (!destination) return;

      // Nếu vị trí thả không thay đổi, không làm gì
      if (source.index === destination.index) return;

      // Sao chép mảng items hiện tại
      const updatedItems = Array.from(items);

      // Di chuyển phần tử từ source.index sang destination.index
      const [movedItem] = updatedItems.splice(source.index, 1);
      updatedItems.splice(destination.index, 0, movedItem);

      // Cập nhật state và form với danh sách mới
      setItems(updatedItems);
      setValue(name!, updatedItems, { shouldDirty: true });

      console.log("Updated positions:", updatedItems);
    },
    [items, setValue, name]
  );

  return (
    <AnimatePresence initial={false}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="ROW" direction="horizontal">
          {(providedParent) => (
            <Box
              flexDirection={"row"}
              display={"flex"}
              ref={providedParent.innerRef}
              {...providedParent.droppableProps}
            >
              {items.map((file: any, index: number) => (
                <Draggable
                  key={file?.id || index} // Sử dụng `file.id` nếu có, hoặc fallback về `index`
                  index={index}
                  draggableId={String(file?.id || index)} // Đảm bảo `draggableId` là chuỗi duy nhất
                >
                  {(provided) => {
                    const { key, name = "", size = 0 } = fileData(file);
                    const isNotFormatFile = typeof file === "string";
                    const isThumbnail = !!thumbnail;
                    return (
                      <Stack
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        flexDirection={"row"}
                      >
                        {isThumbnail ? (
                          <Stack
                            key={key || index}
                            component={m.div}
                            alignItems="center"
                            display="inline-flex"
                            justifyContent="center"
                            sx={{
                              m: 0.5,
                              width: 80,
                              height: 80,
                              borderRadius: 1.25,
                              overflow: "hidden",
                              position: "relative",
                              border: (theme) =>
                                `solid 1px ${alpha(
                                  theme.palette.grey[500],
                                  0.16
                                )}`,
                              ...sx,
                            }}
                          >
                            <FileThumbnail
                              tooltip
                              imageView
                              file={file}
                              sx={{ position: "absolute" }}
                              imgSx={{ position: "absolute" }}
                            />

                            {onRemove && (
                              <IconButton
                                size="small"
                                onClick={() => onRemove(file)}
                                sx={{
                                  p: 0.5,
                                  top: 4,
                                  right: 4,
                                  position: "absolute",
                                  color: "common.white",
                                  bgcolor: (theme) =>
                                    alpha(theme.palette.grey[900], 0.48),
                                  "&:hover": {
                                    bgcolor: (theme) =>
                                      alpha(theme.palette.grey[900], 0.72),
                                  },
                                }}
                              >
                                <Iconify
                                  icon="mingcute:close-line"
                                  width={14}
                                />
                              </IconButton>
                            )}
                          </Stack>
                        ) : (
                          <Stack
                            key={key || index}
                            component={m.div}
                            spacing={2}
                            direction="row"
                            alignItems="center"
                            sx={{
                              my: 1,
                              py: 1,
                              px: 1.5,
                              borderRadius: 1,
                              border: (theme) =>
                                `solid 1px ${alpha(
                                  theme.palette.grey[500],
                                  0.16
                                )}`,
                              ...sx,
                            }}
                          >
                            <FileThumbnail file={file} />

                            <ListItemText
                              primary={isNotFormatFile ? file : name}
                              secondary={isNotFormatFile ? "" : fData(size)}
                              secondaryTypographyProps={{
                                component: "span",
                                typography: "caption",
                              }}
                            />

                            {onRemove && (
                              <IconButton
                                size="small"
                                onClick={() => onRemove(file)}
                              >
                                <Iconify
                                  icon="mingcute:close-line"
                                  width={16}
                                />
                              </IconButton>
                            )}
                          </Stack>
                        )}
                      </Stack>
                    );
                  }}
                </Draggable>
              ))}
              {providedParent.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </AnimatePresence>
  );
}
