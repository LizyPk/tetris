Z = 0
S = 1
J = 2
L = 3
T = 4
O = 5
I = 6

function tetraMap(type)
{
  switch(type)
    {
      case Z: return [v(0 , 0), v(-1,-1), v( 0,-1), v( 1, 0)]
      case S: return [v(0 , 0), v( 0,-1), v( 1,-1), v(-1, 0)]
      case J: return [v(0 , 0), v(-1,-1), v(-1, 0), v( 1, 0)]
      case L: return [v(0 , 0), v(-1, 0), v( 1,-1), v( 1, 0)]
      case T: return [v(0 , 0), v(-1, 0), v( 0,-1), v( 1, 0)]
      case O: return [v(0 , 0), v( 0,-1), v( 1,-1), v( 1, 0)]
      case I: return [v(0 , 0), v( 1, 0), v( 2, 0), v(-1, 0)]
    }
}

function tetraColor(type)
{
  switch(type)
    {
      case Z: return color(117, 230, 212)
      case S: return color(230, 132, 117)
      case J: return color(230, 117, 165)
      case L: return color(206, 230, 117)
      case T: return color(149, 238, 200)
      case O: return color(230, 212, 117)
      case I: return color(230, 117, 117)
    }
}

class Tetrimino{
  
  constructor(type)
  {
   this.restart()
  }
  
   drawTetrimino()
  { 
  if(!this.map)
  fill(tetraColor(this.type))
  for (let mino of this.map)
  {
     PaintCell(mino.x + this.x, mino.y + this.y)
  }
    this.drawSpectrum()
 }

  perfectDown()
  { 
    this.x = this.spectrum.x
    this.y = this.spectrum.y
    storeTetrimino(this)
    this.restart()
  }
  
  gameOver()
  {
    if(this.spectrum.y == 1)
      {
        anyKey = 3
      }
  }
  
  clone()
  {
    let clon = new Tetrimino()
    clon.x = this.x
    clon.y = this.y
    clon.map = this.map
    return clon
  }
  
  calcSpectrum()
  {
    this.spectrum = this.clone()
    while(this.spectrum._botLimit())
      {
       continue 
      }
  }
    
  drawSpectrum()
    {
      this.calcSpectrum()
      fill(255,100)
      let mapT = this.spectrum.mapTransform()
        for(let mino of mapT)
          {
            PaintCell(mino.x,mino.y)
          }
    }
  
  colisionGrid()
  {
    let mapT = this.mapTransform()
    
    for(let e of mapT)
      {
        if(grid[e.x][e.y] != undefined)
          {
            return true
          }
      }
    return false
  }
  
  movimentError()
  {
    if(!this.onGrid())
      {
        return true
      }
    if(this.colisionGrid())
      {
        return true
      }
    return false
  }
  
  restart()
  {
    this.x = 4
    this.y = 1
    this.type = floor(random(7))
    this.map = tetraMap(this.type)
  }
  
//checagem se está fora do tabuleiro
 left()
{
  this.x--
  if(this.movimentError())
  {
    this.right()
  }
}

 right()
{
  this.x++
  if(this.movimentError())
  {
    this.left()
  }
}

 topLimit()
  {
  this.y--
  }

  _botLimit()
  {
    this.y++
  if(this.movimentError())
  {
    this.topLimit()
    return false
    anyKey = anyKey+1
  }
    return true
}
  
 botLimit()
{
  if(!this._botLimit())
    {
      storeTetrimino(this)
      this.restart()
    }
}
  

 rotateL()
{
  for(let mino of this.map)
    {
      mino.girar90gHor()
    }
  if(this.movimentError())
  {
    this.rotateR()
  }
}

 rotateR()
{
  for(let mino of this.map)
    {
      mino.girar90gAHor()
    }
  if(this.movimentError())
  {
    this.rotateL()
  }
}



 onGrid()
{
  let mapT = this.mapTransform()
  for(let e of mapT)
  {
    if(e.x < 0)
    {
      return false
    }
    if(e.x >= numC)
    {
      return false
    }
    if(e.y >= numL)
    {
      return false
    }
  }
  return true
  
}

 mapTransform()
 {
  let mapT = []
  for (let mino of this.map)
    {
      mapT.push(v(mino.x + this.x, mino.y + this.y))
    }
  return mapT
 }
}

function v(x,y)
{
  return createVector(x,y)
}

