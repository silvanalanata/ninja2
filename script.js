
function Ninja (nombre){

    this.nombre = nombre
    this.vida = 100
    this.velocidad  = 3
    this.fuerza = 1

   
    this.sayname = function(){
        console.log("el nombre de mi ninja es "+ this.nombre)

    }
    this.showStates = function(){
        console.log("Nombre: "+ this.nombre + "vida: " + this.vida + "velocidad: " + this.velocidad + "fuerza: "+ this.fuerza)

    }
    this.drinkSake = function(){
        let vidaTotal= this.vida +10
        console.log("vida: " +  vidaTotal)

    }
    this.punch = function(golpeado){
        console.log(this.nombre + " golpe a " + golpeado.nombre + " y perdio 5 vida")

    }
    this.kick = function(golpeado){
        let vidaTotal_ = this.fuerza * 15
        console.log(golpeado.nombre + "perdio 15 de vida porque "+ this.nombre + "tiene 1 punto de fuerza")

    }

}
let blueNinja = new Ninja("Goemon")
let redNinja = new Ninja("Bill Gates")
redNinja.punch(blueNinja)
blueNinja.kick(redNinja)