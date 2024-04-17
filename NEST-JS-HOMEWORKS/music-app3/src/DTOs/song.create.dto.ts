import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import Genres from 'src/common/genre.enum';
export class SongCreateDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsInt()
  @Min(0)
  duration: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Genres)
  genre: Genres;

  @IsInt()
  @Min(1900)
  releaseDate: number;
}
