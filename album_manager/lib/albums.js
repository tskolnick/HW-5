const fs = require( 'fs' )
const path = require( 'path')
const album = require( './album.js' )



async function get_albums(root_folder) {
  let all_dir_entries = await fs.promises.readdir(  root_folder, { withFileTypes: true } )
  
  let folders = all_dir_entries.filter( 
    dir_entry => dir_entry.isDirectory() )

  let album_list = folders.map( 
      folder => album.create_album(root_folder + '/' + folder.name )   )

  console.log( 'a')
 let album_promises =  album_list.map( a =>  { 
     return a.load()       
    }
  )

  await Promise.all( album_promises )
  return album_list
  
}
 

module.exports.get_albums = get_albums 