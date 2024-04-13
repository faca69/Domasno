import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ArtistsService } from "./artists.service";

@Controller("artists")
export class ArtistsController {
  constructor(private readonly artistService: ArtistsService) {}

  @Get()
  getAllArtists(): any {
    return this.artistService.getAllArtists();
  }

  @Get(":artistId")
  getArtistById(@Param("artistId") artistId: string): any {
    return this.artistService.getArtistById(Number(artistId));
  }

  @Post()
  createArtist(@Body() body: any) {
    return this.artistService.createArtist(body);
  }

  @Put(":artistId")
  updateArtist(@Body() body: any, @Param("artistId") artistId: string): any {
    return this.artistService.updateArtist(Number(artistId), body);
  }

  @Delete(":artistId")
  deleteArtist(@Param("artistId") artistId: string): any {
    return this.artistService.deleteArtist(Number(artistId));
  }
}
