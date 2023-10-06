class Rectangle{
    constructor(height,width){
      this.height=height;
      this.width=width;
      document.write(`Height : ${this.height} <br> Width : ${this.width} <br>`)
    }
    
    area(){
        document.write("Area of Rectangle = "+this.height*this.width+"<br>")
    }
    perimeter(){
      
      document.write("Perimeter of the Rectangle = "+(2*this.height)+(2*this.width)+"<br><br>")
  }
  
  }
  
  let one=new Rectangle(prompt("enter the height"),prompt("enter the width"));
  one.area()
  one.perimeter()
  let two =new Rectangle(prompt("enter the height"),prompt("enter the width"));
  two.area()
  two.perimeter()