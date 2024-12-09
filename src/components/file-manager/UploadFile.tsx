"use client";

import * as React from "react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Iconify from "../builder/hook-form/iconify";
import { Button } from "@mui/material";
import FileService from "@/services/file";

interface FileWithPreview extends File {
  preview?: string;
}

type Props = {
  onSave: () => void;
};
export default function UploadFile({ onSave }: Props) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { handleSubmit } = useForm();

  const { uploadMultipleFile } = FileService;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((previousFiles) => [
      ...previousFiles,
      ...acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
  });

  const removeFile = (name: string) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
  };

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      files.forEach((value: any) => {
        formData.append("file[]", value);
      });
      const res = await uploadMultipleFile(formData);
      if (res?.data?.CODE === 0) {
        onSave();
      }
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
    }
  };

  // Cleanup previews on unmount
  React.useEffect(() => {
    return () =>
      files.forEach((file) => URL.revokeObjectURL(file.preview || ""));
  }, [files]);

  return (
    <Card className="w-full max-w-md mx-auto bg-white">
      <CardHeader>
        <CardTitle className="text-black">Upload Files</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              isDragActive ? "border-primary bg-primary/10" : "border-gray-200"
            }`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-4">
              <div>
                <p className="text-lg font-medium">Drop or Select file</p>
                <p className="text-sm text-gray-500">
                  Drop files here or click{" "}
                  <span className="text-blue-500 cursor-pointer">browse</span>{" "}
                  thorough your machine
                </p>
              </div>
            </div>
          </div>

          {files.length > 0 && (
            <div className="space-y-2">
              {files.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center gap-2 p-2 border rounded-lg"
                >
                  <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <img
                      src={file.preview}
                      alt={file.name}
                      className="max-w-full max-h-full object-contain"
                      onLoad={() => {
                        URL.revokeObjectURL(file.preview || "");
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate text-black">
                      {file.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => removeFile(file.name)}
                  >
                    <Iconify icon="mingcute:close-line" />
                  </Button>
                </div>
              ))}

              <div className="flex justify-between items-center pt-4">
                <Button
                  variant="contained"
                  startIcon={<Iconify icon="eva:cloud-upload-fill" />}
                  type="submit"
                >
                  {"Upload"}
                </Button>

                {files.length > 0 && (
                  <Button
                    color="error"
                    variant="outlined"
                    size="small"
                    onClick={removeAll}
                  >
                    Remove All
                  </Button>
                )}
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
