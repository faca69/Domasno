import { IsString } from 'class-validator';
import { Country } from 'src/common/country.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({
    enum: Country,
    enumName: 'country',
  })
  country: Country;
}
