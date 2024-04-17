import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
  Param,
  Body,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { Artist } from './artist.entity';
import { ArtistCreateDto } from 'src/DTOs/artist.create.dto';
import { ArtistUpdateDto } from 'src/DTOs/artist.update.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
  }),
)
@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get('/')
  getArtists(): Promise<Artist[]> {
    return this.artistsService.getArtists();
  }

  @Get('/:id')
  getArtist(@Param('id') id: string): Promise<Artist> {
    return this.artistsService.getArtist(id);
  }

  @Post('/')
  createArtist(
    @Body() body: ArtistCreateDto,
    @Param('id') id: string,
  ): Promise<Artist> {
    return this.artistsService.createArtist(body, id);
  }

  @Put('/:id')
  updateArtist(
    @Param('id') id: string,
    @Body() body: ArtistUpdateDto,
  ): Promise<Artist> {
    return this.artistsService.updateArtist(id, body);
  }

  @Delete('/:id')
  deleteArtist(@Param('id') id: string): Promise<void> {
    return this.artistsService.deleteArtist(id);
  }
}
