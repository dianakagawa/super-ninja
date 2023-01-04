class Ninja {
  constructor(nombre, salud) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;
  }

  sayName() {
    console.log(`Mi nombre es ${this.nombre}!`);
  }

  showStats() {
    console.log(
      `El ninja ${this.nombre} posee ${this.fuerza} de fuerza, ${this.velocidad} de velocidad y ${this.salud} de salud.`
    );
  }

  drinkSake() {
    this.salud += 10;
  }
}

const ninja1 = new Ninja("Hyabusa", 5);
ninja1.sayName();
ninja1.showStats();

// crear una clase Sensei que hereda de la clase Ninja
class Sensei extends Ninja {
  constructor(nombre) {
    super(nombre, 200);
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;
  }

  speakWisdom() {
    super.drinkSake();
    console.log(
      "Lo que hace un programador en un mes, lo pueden hacer dos programadores en dos meses."
    );
  }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
