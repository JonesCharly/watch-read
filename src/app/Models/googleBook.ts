export interface googleBooks  {
  items: bookItems[]
}

export interface bookItems{
  id: string,
  volumeInfo: bookInfo[],
}

export interface bookInfo {
  title: string,
  subtitle: string,
  pageCount: number,
  imageLink: bookImage[]
}

export interface bookImage {
  // smallThumbnail: string;
  thumbnail: string;
}