module.exports = function solveSudoku(matrix) {
  while (matrix.some( l => l.some( p => p===0 ) ))  
    for (let y=0; y<9; y++)                         
      for (let x=0; x<9; x++)
        if (matrix[y][x]===0) {                  
          let p = [true,true,true,true,true,      
                     true,true,true,true,true];
          for (let i = 0; i<9; i++) {              
              p[matrix[y][i]] = false;             
              p[matrix[i][x]] = false;              
          }
          for (let i=3*~~(x/3); i<3*(~~(x/3)+1); i++)   
            for (let j=3*~~(y/3); j<3*(~~(y/3)+1); j++) 
                p[matrix[j][i]] = false;                 
            if (p.reduce( (p,c) => p+(c?1:0) ) === 1) 
              matrix[y][x] = p.indexOf(true);         
          }
  return matrix;
}