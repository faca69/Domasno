import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { Repository } from 'typeorm';
import { ArtistCreateDto } from 'src/DTOs/artist.create.dto';
import { ArtistUpdateDto } from 'src/DTOs/artist.update.dto';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist) private artstRepo: Repository<Artist>,
  ) {}

  async getArtists(): Promise<Artist[]> {
    return this.artstRepo.find();
  }

  async getArtist(id: string): Promise<Artist> {
    return this.artstRepo.findOneByOrFail({ id });
  }

  async createArtist(body: ArtistCreateDto, id: string): Promise<Artist> {
    const newArtist = this.artstRepo.create(body);
    const savedArtist = this.artstRepo.save(newArtist);
    return savedArtist;
  }

  async updateArtist(id: string, body: ArtistUpdateDto): Promise<Artist> {
    const artist = await this.artstRepo.findOneByOrFail({ id });

    const updatedArtist = this.artstRepo.merge(artist, body);

    const savedArtist = this.artstRepo.save(updatedArtist);

    return savedArtist;
  }

  async deleteArtist(id: string): Promise<void> {
    await this.artstRepo.delete(id);
  }
}
