class BMW {
  model = "X5";
  color = "black";
  year = 2016;
  mileage = 0;

  paint(newColor) {
    this.color = newColor;
    console.log(`Цвет автомобиля изменен на: ${this.color}`);
  }

  drive(distance) {
    this.mileage += distance;
    console.log(
      `Автомобиль проехал ${distance} km. Общий пробег: ${this.mileage} km.`
    );
  }

  startEngine() {
    console.log(`Двигатель автомобиля ${this.model} запущен`);
  }

  displayInfo() {
    console.log(
      `Модель: ${this.model}\nЦвeт: ${this.color}\nГод выпуска: ${this.year}\nПробег: ${this.mileage} km`
    );
  }
}

const myBMW = new BMW("X5", "Черный", 2020);

myBMW.displayInfo();

myBMW.startEngine();

myBMW.paint("Синий");

myBMW.drive(120);

myBMW.displayInfo();
