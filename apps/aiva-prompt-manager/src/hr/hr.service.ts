import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HrServiceBase } from "./base/hr.service.base";

@Injectable()
export class HrService extends HrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
