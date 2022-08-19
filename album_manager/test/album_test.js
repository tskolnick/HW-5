let album_module = require( '../lib/album')
const assert = require('assert');

async function test(){
album = album_module.create_album( 'albums/australia2010')
await album.load()
console.log( album.photos )  

 assert( album.photos.length >= 3 )
}


test()