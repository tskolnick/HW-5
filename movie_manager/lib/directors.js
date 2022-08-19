const fs = require( 'fs' )
const path = require( 'path')
const filmography_module = require( './filmography.js' )



async function get_directors(root_folder) {
  let all_dir_entries = await fs.promises.readdir(  root_folder, { withFileTypes: true } )
  
  let folders = all_dir_entries.filter( 
    dir_entry => dir_entry.isDirectory() )

  let director_list = folders.map( 
      folder => filmography_module.create_filmography(root_folder + '/' + folder.name )   )

  console.log( 'a')
 let director_promises =  director_list.map( a =>  { 
     return a.load()       
    }
  )

  await Promise.all( director_promises )
  return director_list
  
}
 

module.exports.get_directors = get_directors 