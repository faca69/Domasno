import { Injectable } from "@nestjs/common";

interface Artist {
  artist__id: number;
  name: string;
  age: number;
  country: string;
}

@Injectable()
export class ArtistsService {
  //?    simulating a database
  private artists: Artist[] = [
    {
      name: "Travis Scott",
      age: 20,
      country: "USA",
      artist__id: 1,
    },
    {
      name: "Drake",
      age: 30,
      country: "USA",
      artist__id: 2,
    },
  ];

  //* GET ALL

  getAllArtists() {
    return this.artists;
  }
  //* GET BY ID

  getArtistById(artistId: number) {
    return this.artists.find((artist) => artist.artist__id === artistId);
  }

  //^ CREATE
  createArtist(artistData: any) {
    const artist = {
      ...artistData,
      artist__id: this.artists.length + 1,
    } satisfies Artist;

    this.artists.push(artist);
  }

  //~ UPDATE
  updateArtist(artistId: number, updateData: any): any {
    this.artists = this.artists.map((artist) => {
      if (artist.artist__id === artistId) {
        return { ...artist, ...updateData };
      }
      return artist;
    });
  }

  //! DELETE

  deleteArtist(artistId: number) {
    const index = this.artists.findIndex(
      (artist) => artist.artist__id === artistId
    );
    if (index !== -1) {
      this.artists.splice(index, 1);
    }
  }
}
