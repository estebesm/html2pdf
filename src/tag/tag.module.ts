import { Module } from '@nestjs/common';
import { TagService } from 'src/tag/tag.service';
import { TagController } from 'src/tag/tag.controller';

@Module({
  controllers: [TagController],
  providers: [TagService, TagService],
})
export class TagModule {}
