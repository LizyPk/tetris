//movimentação
function keyPressed()
{
  if(keyIsDown(RIGHT_ARROW) || keyIsDown(68))
  {
    tetrimino.right()
  }
  if(keyIsDown(LEFT_ARROW) || keyIsDown(65))
  {
    tetrimino.left()
  }
  if(keyIsDown(UP_ARROW) || keyIsDown(87))
  {
    tetrimino.rotateL()
  }
  if(keyIsDown(DOWN_ARROW) || keyIsDown(83))
  {
    tetrimino.botLimit()
  }
  if(keyIsDown(32))
  {
    tetrimino.perfectDown()
  }
    if(keyIsDown(27))
  {
    if(anyKey == 1)
     {
       anyKey = 2
     }
    else if(anyKey == 2)
     {
       anyKey = 1
     }
  }
}

function DrawBackground()
{
  if(anyKey != 2)
     {
    noStroke();
    fill(25, 200, 148, 150);
    rect(0, 0, width,height);
    fill(255, 255, 255);
    ellipse(random(0,width), random(0,height), 2, 100);
    stroke(1)
     }  
}

function DrawText(points)
{
  noStroke();
    if(anyKey == 0)
     {
      fill(0);
      textAlign(CENTER)
      textSize(35)
      text('PRESS ENTER', windowWidth/2, tamL*numL-190)
      fill(255);
      text('Lizy Novo', windowWidth/2, 450)
     }
  
    else if(anyKey == 1)
     {
      fill(0);
      textAlign(LEFT)
      textSize(20)
      text(points, 365, 116)
      text('points:', 300, 114)
      text('Press P to pause', 277, 200)
      text('Press ESC to Game Over', 277, 220)
      textAlign(CENTER)
      text('Lizy Novo', 375, 500)
     }
  
      else if(anyKey == 2)
     {
      fill(255)
      textAlign(CENTER)
      textSize(45)
      text('PAUSE', windowWidth/2, height*0.5-20)
      textSize(30)
      text('||', windowWidth/2, height*0.5+15)
     }  
  
       else if(anyKey == 3) 
     {
      fill(255)
      textAlign(CENTER, CENTER)
      textSize(45)
      text('GAME OVER', windowWidth/2, height*0.5+35)
      textSize(30)
      text(points, windowWidth/2, height*0.5+75)
      textSize(20)
      
      text('ENTER TO RESTART', windowWidth/2, height*0.5+120)
      text('"C" TO CREDITS', windowWidth/2, height*0.5+142)
      text('Lizy Novo', windowWidth/2, 550)
     }
  
        else if(anyKey == 4)
     {
      fill(255)
      textAlign(CENTER, CENTER)
       
      textSize(45)
      text('CREDITS', windowWidth/2, height*0.5-130)
       
      textSize(30)       
      text('Development:', windowWidth/2, height*0.5-50)
      text('Beta testers:', windowWidth/2, height*0.5+50)

      textSize(20)
      text('Lizy Novo', windowWidth/2, height*0.5-20)
      text('Gabriel Przybysz', windowWidth/2, height*0.5+80)
      text('Guilherme Sehna', windowWidth/2, height*0.5+105)
      text('Paulo Godinho', windowWidth/2, height*0.5+130)
       
      text('ESC TO EXIT', windowWidth/2, height*0.5+180)
     }
  stroke(1)
}