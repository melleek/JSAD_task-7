class Post {
  title;
  content;
  author;
  likes = 0;

  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
  }

  updateContent(newContent) {
    return (this.content = newContent);
  }

  addLike() {
    this.likes++;
    console.log(`Посту добавлен лайк. Всего лайков: ${this.likes}`);
  }

  deletePost() {
    this.title = null;
    this.content = null;
    this.author = null;
    this.likes = 0;
  }

  displayPost() {
    if (this.content && this.title && this.author) {
      console.log(
        `Пост: ${this.title}\nАвтор: ${this.author}\nТекст: ${this.content}\nЛайков: ${this.likes}`
      );
    } else {
      console.log("Пост был удален.");
    }
  }
}
const post1 = new Post(
  "Мой первый пост",
  "Это мой первый пост в социальной сети!",
  "Иван Иванов"
);

post1.displayPost();

post1.addLike();

post1.updateContent("Обновленный текст моего первого поста.");

post1.displayPost();

post1.deletePost();
post1.displayPost();
