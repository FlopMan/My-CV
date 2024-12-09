// ----------------------------------------------------------------------

export type IFileFilterValue = string | string[] | Date | null;

export type IFileFilters = {
  name: string;
  type: string[];
  startDate: Date | null;
  endDate: Date | null;
};

// ----------------------------------------------------------------------
export type IFolderCreate = {
  id?: string;
  name: string;
  path?: string;
  parentFolderId?: string;
};

export type IFolderManager = {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  path: string;
  totalFiles?: number;
  parentFolderId?: string;
  createdAt: Date | number | string;
  updatedAt: Date | number | string;
};

export type IFileManager = {
  id: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: string;
  url: string;
  path: string;
  size?: number;
  preview?: string;
  type: string;
  createdAt: Date | number | string;
  updatedAt: Date | number | string;
  mime?: string;
};

export type IFile = IFileManager | IFolderManager;
type Role = {
  id: number;
  name: string;
  __entity: string;
};

type Status = {
  id: number;
  name: string;
  __entity: string;
};

type UserEntity = {
  id: string;
  role: Role;
  photo: string | null;
  roleId: number;
  status: Status;
  __entity: string;
  lastName: string;
  createdAt: string;
  deletedAt: string | null;
  firstName: string;
  updatedAt: string;
};

export type FileData = {
  id: string;
  ext: string;
  key: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
  caption: string | null;
  formats: any | null;
  preview: string;
  folderId: string;
  provider: string;
  createdBy: UserEntity;
  previewUrl: string;
  createdById: string;
  alternativeText: string | null;
};
