namespace incorrect {
  class Book {
    private currentPage = 1;

    constructor(
      private readonly title: string,
      private readonly author: string
    ) {}

    public turnPage() {
      this.currentPage++;
    }

    public printCurrentPage(): string {
      return "page content";
    }
  }
  // If you need new html print or xml etc. You need to change Book class
}

namespace correct {
  class Book {
    private currentPage = 1;

    constructor(
      private readonly title: string,
      private readonly  author: string)
    {}

    public turnPage() {
      this.currentPage++;
    }
  }

  interface Printer {
    print: (content: string) => string;
  }

  class PlainTextPrinter implements Printer {
    public print(content: string) {
      return content;
    }
  }

  class HtmlPrinter implements Printer {
    public print(content: string) {
      return `<p>${content}</p>`;
    }
  }
  //  If you need new printer you can create new class which implements Printer interface
}
