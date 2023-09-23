import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HrService } from "./hr.service";
import { HrControllerBase } from "./base/hr.controller.base";

@swagger.ApiTags("hrs")
@common.Controller("hrs")
export class HrController extends HrControllerBase {
  constructor(
    protected readonly service: HrService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
