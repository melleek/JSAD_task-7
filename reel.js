class Reel {
  title;
  duration;
  likes = 0;
  views = 0;

  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }

  like() {
    this.likes++;
    console.log(
      `Рилс "${this.title}" получил лайк! Общее количество лайков: ${this.likes}`
    );
  }

  addView() {
    this.views++;
    console.log(
      `Рилс "${this.title}" просмотрен! Общее количество просмотров: ${this.views}`
    );
  }

  getInfo() {
    return `Рилс: ${this.title}\nДлительность: ${this.duration} секунд\nЛайков: ${this.likes}\nПросмотров: ${this.views}`;
  }
}

const myReel = new Reel("Мой первый рилс", 30);

myReel.like();

myReel.addView();

console.log(myReel.getInfo());
