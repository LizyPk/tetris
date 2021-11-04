  //sentido Horário
p5.Vector.prototype.girar90gHor = function()
{
  this.set(this.y, -this.x)
  return this
}

p5.Vector.prototype.girar90gAHor = function()
{
  this.set(-this.y, this.x)
  return this
}