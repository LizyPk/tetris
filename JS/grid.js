tamC = 25 //tamanho coluna
tamL = 25 //tamanho linha
numC = 10 //número de colunas
numL = 20 //número de linhas
points = 0

grid = []

function automateDown()
{
  s = second()
  if(lastSecond !== s) 
  {
  lastSecond = s
  tetrimino.botLimit()
  }
}

for (let i = 0; i<numL; i++)
  {
    grid.push([])
  }


function drawGrid()
{

  for(let c = 0; c< numC; c++)
    {
      for(let l = 0; l<numL; l++)
        {
          fill(grid[c][l]||100)
          PaintCell(c,l)
        }
    }
}

function cleanGrid()
{
  for(let c = 0; c < numC; c++)
    {
      for(let l = 0; l< numL; l++)
        {
          grid[c][l] = undefined
          c==numC-1
        }
    }
}

function getLines()
{
  let lines = []
  for(let l = 0; l<numL;l++)
    {
      for(let c = 0; c<numC; c++)
        {
          if(grid[c][l]!=undefined)
            {
              if(c==numC-1)
                {
                  catMeow.play()
                  lines.push(l)
                  catMeow.setVolume(0.4)
                  points = points + 10
                  print(points)
                }
              continue
            }
          break
        }
    }
  return lines
}

      
      
function erasedLines()
  {
   let lines = getLines()
   if(lines.length == 0)
   {
     return
   }
    for(let i of lines)
      {
        for(let l = i; l>=0; l--)
          {
            for(let c = 0; c<numC; c++)
              {
                if(l==0)
                  {
                    grid[c][l] = undefined
                    continue
                  }
                grid[c][l] = grid[c][l-1]
              }
          }
      }
  }
      
function storeTetrimino(tetrimino)
{
  let map = tetrimino.mapTransform()
  for (let e of map)
    {
      grid[e.x][e.y] = 'white'
    }
  erasedLines()
}

//pintar célula
function PaintCell(x,y)
{
  rect (tamC*x+10, tamL*y+10, tamC, tamL)
}