import { Hr as THr } from "../api/hr/Hr";

export const HR_TITLE_FIELD = "id";

export const HrTitle = (record: THr): string => {
  return record.id?.toString() || String(record.id);
};
