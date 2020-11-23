namespace incorrect {
  class Book {
    private _title: string;
    private _author: string;
    private _currentPage: number;

    public get title(): string { return this._title; }
    public get author(): string { return this._author; }
    public get currentPage(): number { return this._currentPage; }

    constructor(title: string, author: string) {
      this._title = title;
      this._author = author;
      this._currentPage = 1;
    }

    public turnPage() {
      this._currentPage++;
    }
        
    public printCurrentPage() {
      return "page content";
    }
  }
  // If you need new html print or xml etc. You need to change Book class 
}

namespace correct {
  class Book {
    private _title: string;
    private _author: string;
    private _currentPage: number;

    public get title(): string { return this._title; }
    public get author(): string { return this._author; }
    public get currentPage(): number { return this._currentPage; }


    constructor(title: string, author: string) {
      this._title = title;
      this._author = author;
      this._currentPage = 1;
    }

    public turnPage(): void {
      this._currentPage++;
    }
  }

  interface Printer {
    print(content: string): string;
  }
  
  class PlainTextPrinter implements Printer {
    public print(content: string): string {
      return content;
    }
  }
  class HtmlPrinter implements Printer {
    public print(content: string): string {
      return `<p>${content}</p>`;
    }
  }
  //  If you need new printer you can create new class which implements Printer
}
