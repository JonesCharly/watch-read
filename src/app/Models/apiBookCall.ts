export interface ResponseBookApi<Book> {
  code: number;
  data: Book;
}

export interface ResponseBook extends ResponseBookApi<ResponseBook>{
  results: BookItem[];
}

export interface BookItem {
  id: number;
  title: string;
  images: any[];
}