import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { RouteConfig } from '@nestjs/platform-fastify';
import { FastifyReply } from 'fastify';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @RouteConfig({ output: 'hello world' })
  @Get()
  findAll(@Res() response: FastifyReply) {
    // setCookie does not exist on type
    response.setCookie('key', 'value');
  }
}
