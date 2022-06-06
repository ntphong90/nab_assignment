import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LogController } from 'src/log/log.controller';
import { LogService } from 'src/log/log.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logService: LogService) {}
  use(req: Request, res: Response, next: NextFunction) {
    console.log(res.socket.remoteAddress);
    console.log('Request...', req.query);
    // console.log('Responese...', res);
    this.logService.addEvent(
      res.socket.remoteAddress,
      JSON.stringify(req.query),
    );
    next();
  }
}
