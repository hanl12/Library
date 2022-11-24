const BASE_URL = "https://image.tmdb.org/t/p/w200";

export const parseData = (data: any, searchType: "google" | "movieDb") => {
  switch (searchType) {
    case "google":
      return data.items.map((book: any) => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          publishedDate: book.volumeInfo.publishedDate,
          image: book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.smallThumbnail
            : "http://books.google.com/books/content?id=8bZ5gd9zPYkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          description: book.volumeInfo.description && book.volumeInfo.description.substr(0, 50),
        };
      });
      break;
    case "movieDb":
      return data.results.map((movie: any) => {
        return {
          id: movie.id,
          title: movie.original_title,
          publishedDate: movie.release_date,
          image:
            BASE_URL +
            (movie.poster_path
              ? movie.poster_path
              : "/8xrMNIpXSoIYbXNoZOVx05v7ypR.jpg"),
          description: movie.overview.substr(0, 50),
        };
      });
      break;
    default:
      break;
  }
};
