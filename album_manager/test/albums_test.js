const assert = require('assert');

let album_manager_module = require('../../album_manager')



async function test() {

  let albums = await album_manager_module.get_albums('albums')
  console.log(albums)
  
  assert(  albums.length >= 3)
}


test()