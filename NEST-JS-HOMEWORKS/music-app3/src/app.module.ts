import { Module } from '@nestjs/common';
import { DatabaseModule } from './DATABASE/database.module';
import { ArtistsModule } from './artists/artists.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [DatabaseModule, ArtistsModule, SongsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
