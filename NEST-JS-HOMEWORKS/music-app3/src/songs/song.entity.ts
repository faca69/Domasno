import { IsNotEmpty, IsString } from 'class-validator';
import { Country } from 'src/common/country.enum';
import Genres from 'src/common/genre.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: String,
  })
  @IsString()
  name: string;

  @Column()
  duration: number;

  @Column({
    enum: Genres,
    enumName: 'genres',
  })
  genre: Genres;

  @Column()
  releaseDate: number;
}
