const fs = require('fs')
const path = require('path')


class Album {
  constructor(album_path) {
    this.name = path.basename(album_path);
    this.path = album_path;
    this.photos = [];
  }

  async load() {
    let dir_entries = await fs.promises.readdir(
      this.path, { withFileTypes: true }
    )
    let files = dir_entries.filter( dir_entry => dir_entry.isFile )
    this.photos = files.map( de => de.name )
   }

}

module.exports.create_album = function(album_path) {
  return new Album(album_path)
}