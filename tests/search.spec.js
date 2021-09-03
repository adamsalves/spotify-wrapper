import chai, { expect } from "chai";
import { it } from "mocha";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require("node-fetch");

import SpotifyWrapper from "../src/index";

describe("Search", () => {
  let spotify;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: "foo",
    });

    fetchedStub = sinon.stub(global, "fetch");
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe("smoke tests", () => {
    it("should exist the spotify.search.albums method", () => {
      expect(spotify.search.albums).to.exist;
    });

    it("should exist the spotify.search.artists method", () => {
      expect(spotify.search.artists).to.exist;
    });

    it("should exist the spotify.search.tracks method", () => {
      expect(spotify.search.tracks).to.exist;
    });

    it("should exist the spotify.search.playlists method", () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe("spotify.search.artists", () => {
    it("should call fetch function", () => {
      const artists = spotify.search.artists("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("should call fetch with the correct URL", () => {
      const artists = spotify.search.artists("Incubus");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=artist"
      );
    });
  });

  describe("spotify.search.albums", () => {
    it("should call fetch function", () => {
      const albums = spotify.search.albums("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("should call fetch with the correct URL", () => {
      const albums = spotify.search.albums("Incubus");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=album"
      );
    });
  });

  describe("spotify.search.tracks", () => {
    it("should call fetch function", () => {
      const tracks = spotify.search.tracks("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("should call fetch with the correct URL", () => {
      const tracks = spotify.search.tracks("Incubus");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=track"
      );
    });
  });

  describe("spotify.search.playlists", () => {
    it("should call fetch function", () => {
      const playlists = spotify.search.playlists("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("should call fetch with the correct URL", () => {
      const playlists = spotify.search.playlists("Incubus");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=playlist"
      );

      const playlists2 = spotify.search.playlists("Green Day");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Green Day&type=playlist"
      );
    });
  });
});
