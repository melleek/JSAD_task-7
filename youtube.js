class YouTubeVideo {
  #title;
  #likes = 0;
  #dislike = 0;
  #views = 0;

  constructor(title) {
    this.#title = title;
    this.#likes++;
    this.#dislike++;
    this.#views++;
  }

  like() {
    console.log(
      `Видео "${this.#title}" получило лайк! Общее количество лайков: ${
        this.#likes
      }`
    );
  }

  dislike() {
    console.log(
      `Видео "${this.#title}" получило дизлайк! Общее количество дизлайков: ${
        this.#dislike
      }`
    );
  }

  addView() {
    console.log(
      `Видео "${this.#title}" просмотрено! Общее количество просмотров: ${
        this.#views
      }`
    );
  }

  getInfo() {
    return `Видео:" ${this.#title}"\nЛайков: ${this.#likes}\nДизлайков: ${
      this.#dislike
    }\nПросмотров: ${this.#views}`;
  }
}

const myVideo = new YouTubeVideo("Урок JavaScript");

myVideo.like();

myVideo.dislike();

myVideo.addView();

console.log(myVideo.getInfo());
