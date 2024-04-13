import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArtistsModule } from "./artists/artists.module";
import { SongsModule } from "./songs/songs.module";

@Module({
  imports: [ArtistsModule, SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
