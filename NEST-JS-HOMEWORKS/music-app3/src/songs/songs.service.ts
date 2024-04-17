import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './song.entity';
import { Repository } from 'typeorm';
import { SongCreateDto } from 'src/DTOs/song.create.dto';
import { SongUpdateDto } from 'src/DTOs/song.update.dto';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song) private songRepository: Repository<Song>,
  ) {}

  async getSongs(): Promise<Song[]> {
    return this.songRepository.find();
  }

  async getSong(id: string): Promise<Song> {
    return this.songRepository.findOneByOrFail({ id });
  }

  async createSong(body: SongCreateDto): Promise<Song> {
    const newSong = this.songRepository.create(body);

    return this.songRepository.save(newSong);
  }

  async updateSong(body: SongUpdateDto, id: string): Promise<Song> {
    const song = await this.songRepository.findOneByOrFail({ id });
    const updatedSong = this.songRepository.merge(song, body);

    return this.songRepository.save(updatedSong);
  }

  async deleteSong(id: string): Promise<void> {
    await this.songRepository.delete(id);
  }
}
