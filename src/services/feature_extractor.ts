import SpotifyWebApi from "spotify-web-api-node";
//@ts-ignore
import TSNE from "tsne-js";

class Extractor {
  private access = new SpotifyWebApi();
  private model: TSNE;
  private songs: Array<string> = [];

  init() {
    if (process.env.VUE_APP_SPOTI_TKN)
      this.access.setAccessToken(process.env.VUE_APP_SPOTI_TKN);

    this.model = new TSNE({
      dim: 3,
      perplexity: 30.0,
      earlyExaggeration: 5,
      learningRate: 100.0,
      nIter: 1000,
      metric: "manhattan",
    });
  }

  fetchPlaylist(link: string): Promise<Array<string>> {
    const id = link.split("/")[4];
    this.songs = [];

    return new Promise((resolve) => {
      this.access.getPlaylistTracks(id).then(
        (data) => {
          (data.body as any).tracks.items.forEach((song: any) => {
            // ts type error, the server response has different format
            this.songs.push(song.track.id);
          });
          console.log("Totally fetched songs: ", this.songs.length);
          resolve(this.songs);
        },
        (err) => {
          console.log("something went wrong", err);
        }
      );
    });
  }

  extractFeatures(song_ids: string[]): Promise<Array<number[]>> {
    const features: Array<number[]> = [];
    return new Promise((resolve, reject) => {
      this.access.getAudioFeaturesForTracks(song_ids).then((response: any) => {
        response.body.audio_features.forEach((s: any) => {
          features.push([
            s.acousticness,
            s.danceability,
            s.instrumentalness,
            s.energy,
            s.key,
            s.liveness,
            s.loudness,
            s.mode,
            s.speechiness,
            s.tempo,
            s.time_signature,
            s.valence,
          ]);
        });

        resolve(features);
      });
    });
  }

  trainModel(features: any): any {
    this.model.init({ data: features });
    this.model.run();
    // `output` is unpacked ndarray (regular nested javascript array)
    return this.model.getOutputScaled();
  }
}

export { Extractor };
