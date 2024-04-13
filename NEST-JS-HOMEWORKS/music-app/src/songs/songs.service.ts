import { Injectable } from "@nestjs/common";

export interface Song {
  song__id: number;
  name: string;
  duration: number;
  genre: string;
  releaseDate: number;
}

@Injectable()
export class SongsService {
  private songs: Song[] = [];

  //* GET ALL
  getAllSongs() {
    return this.songs;
  }

  //* GET SONG BY ID

  getSongById(songId: number): any {
    return this.songs.find((song) => song.song__id === songId);
  }

  //^ CREATE SONG

  createSong(songData: any): any {
    const song: Song = {
      ...songData,
      song__id: this.songs.length + 1,
    } satisfies Song;

    this.songs.push(song);
  }

  //~ UPDATE SONG

  updateSong(songId: number, updateData: any) {
    this.songs = this.songs.map((song) => {
      if (song.song__id === songId) {
        return {
          ...song,
          ...updateData,
        };
      }
      return song;
    });
  }

  //! DELETE SONG
  deleteSong(songId: number) {
    const index = this.songs.findIndex((song) => song.song__id === songId);
    if (index !== -1) {
      this.songs.splice(index, 1);
    }
  }

  // -------------------- B O N U S ---------------------

  //* GET ALL SONGS BY GENRE

  getAllSongsByGenre(genre: string): Song[] {
    return this.songs.filter((song) => song.genre === genre);
  }
}
