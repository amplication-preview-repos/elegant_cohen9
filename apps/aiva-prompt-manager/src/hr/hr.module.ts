import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HrModuleBase } from "./base/hr.module.base";
import { HrService } from "./hr.service";
import { HrController } from "./hr.controller";
import { HrResolver } from "./hr.resolver";

@Module({
  imports: [HrModuleBase, forwardRef(() => AuthModule)],
  controllers: [HrController],
  providers: [HrService, HrResolver],
  exports: [HrService],
})
export class HrModule {}
