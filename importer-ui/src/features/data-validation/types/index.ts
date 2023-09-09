import { ColDef } from "ag-grid-community";
import { Upload, UploadRow } from "../../../api/types";

export type DataValidationProps = {
  upload: Upload;
  reload: () => void;
  close: () => void;
  onSuccess: (data: any, error: string | null) => void;
  showImportLoadingStatus?: boolean;
};

export type TableProps = {
  rowData: UploadRow[];
  columnDefs: ColDef[];
  defaultColDef: ColDef;
  cellClickedListener: (event: any) => void;
  theme: "light" | "dark";
};
