import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from './song.entity';
import { SongCreateDto } from 'src/DTOs/song.create.dto';
import { SongUpdateDto } from 'src/DTOs/song.update.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
  }),
)
@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get('/')
  getSongs(): Promise<Song[]> {
    return this.songsService.getSongs();
  }

  @Get('/:id')
  getSong(@Param('id') id: string): Promise<Song> {
    return this.songsService.getSong(id);
  }

  @Post('/')
  createSong(@Body() body: SongCreateDto): Promise<Song> {
    return this.songsService.createSong(body);
  }

  @Put('/:id')
  updateSong(
    @Body() body: SongUpdateDto,
    @Param('id') id: string,
  ): Promise<Song> {
    return this.songsService.updateSong(body, id);
  }

  @Delete('/:id')
  deleteSong(@Param('id') id: string): Promise<void> {
    return this.songsService.deleteSong(id);
  }
}
