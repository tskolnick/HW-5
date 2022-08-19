
let t = require( './movie_manager' )
console.log(t)
process.exit()

let album_manager_module = require( './album_manager')


async function test(){


let albums = await album_manager_module.get_albums('albums')
  console.log( 'albums ...')
  console.log( albums )
  
}


test()