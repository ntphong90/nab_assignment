import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Get('/')
  getLog(): any {
    this.logService.addEvent('as', 'aas');
  }

  @EventPattern('log')
  addLog(data: any): any {
    console.log();
    const d = JSON.parse(data);
    this.logService.addLog(d.identify, d.query);
  }
}
