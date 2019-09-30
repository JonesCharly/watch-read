export interface Config {
  code: number;
  data: { results: BookItem[] };
}

export class BookItem {
  id: number;
  title: string;
  thumbnail: Image

  constructor({ thumbnail, ...other }) {
    Object.assign(this, other);
    this.thumbnail = new Image(thumbnail);
  }
}

export class Image {
  path: string;
  extension: string;
  get url() {
    return `${this.path}.${this.extension}`;
  }
  constructor(image) {
    Object.assign(this, image);
  }
}
