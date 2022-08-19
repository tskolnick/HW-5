var fs = require('fs');  
var util = require('util')
const express = require('express');
const movie_manager = require( './movie_manager' )

const app = express();

app.get('/', (req, res) => {
  res.send(`
           <a href="moviesby">moviesby</a>
           <br>        
           `)
});

app.get('/moviesby', async (req, res, next) => {
   res.setHeader('Content-Type', 'application/json');

    directors  = await movie_manager.get_directors( 'moviesby')

    director_names = directors.map( d => d.name )
  
    res.send( JSON.stringify( director_names ))
    }
  )

app.get('/moviesby/:director', (req, res, next) => {
  fs.promises.readdir( `moviesby/${req.params.director}` )
  .then( file_names => {
    res.send( JSON.stringify(file_names) )
  })
  .catch( err =>
    next( err )
  )
}
  )


app.post('/moviesby/:director/:movie', (req, res, next) => {

  fs.promises.writeFile(`moviesby/${req.params.director}/${req.params.movie}.txt` , req.params.movie )
    .then(
        x => {
        res.send( 
          `movie is ${req.params.movie} by ${req.params.director}`
          )
          }
      ) 
    .catch( err =>
    next( err )
  )


}
  )


app.listen(3000, () => {
  console.log('server started');
});
    
 