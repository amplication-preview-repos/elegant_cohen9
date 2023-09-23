import { HrWhereInput } from "./HrWhereInput";
import { HrOrderByInput } from "./HrOrderByInput";

export type HrFindManyArgs = {
  where?: HrWhereInput;
  orderBy?: Array<HrOrderByInput>;
  skip?: number;
  take?: number;
};
