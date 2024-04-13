import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { SongsService } from "./songs.service";
import { Song } from "./songs.service";
import { NotFoundException } from "@nestjs/common";

@Controller("songs")
export class SongsController {
  constructor(private readonly songService: SongsService) {}

  @Get()
  getAllSongs(): Song[] {
    return this.songService.getAllSongs();
  }
  // -------------------- B O N U S ---------------------

  @Get("byGenre")
  getAllSongsByGenre(@Query("genre") genre: string): Song[] {
    return this.songService.getAllSongsByGenre(genre);
  }

  @Get(":songId")
  getSongById(@Param("songId") songId: string): Song | undefined {
    const song = this.songService.getSongById(Number(songId));
    if (!song) {
      throw new NotFoundException("Song not found");
    }

    return song;
  }

  @Post()
  createSong(@Body() body: any): Song[] {
    return this.songService.createSong(body);
  }

  @Put(":songId")
  updateSong(@Body() body: any, @Param("songId") songId: string): any {
    return this.songService.updateSong(Number(songId), body);
  }

  @Delete(":songId")
  deleteSong(@Param("songId") songId: number): any {
    return this.songService.deleteSong(Number(songId));
  }
}
