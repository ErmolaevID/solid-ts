namespace incorrect {
  interface CloudProvider {
    storeFile(fileName: string): void;
    getFile(fileName: string): File;
    createServer(region: string): void;
    listServers(region: string): string[];
    getCDNAddress(): string;
  }

  class Amazon implements CloudProvider{
    public storeFile(fileName: string): void {
      // ...
    }

    public getFile(fileName: string): File {
      // ...
    }

    public createServer(region: string): void {
      // ...
    }

    public listServers(region: string): string[] {
      // ...
    }

    public getCDNAddress(): string {
      // ...
    }
  }

  class Dropbox implements CloudProvider {
    public getFile(fileName: string): File {
      // ...
    }

    public storeFile(fileName: string): void {
      // ...
    }

    public listServers(region: string): string[] {
      // no implementation
    }

    public createServer(region: string): void {
      // no implementation
    }

    public getCDNAddress(): string {
      // no implementation
    }
  }
  // Dropbox has methods that do not and cannot be implemented
}

namespace correct {
  interface CloudHostingProvider {
    createServer(region: string): void;
    listServers(region: string): string[];
  }

  interface CDNProvider {
    getCDNAddress(): void;
  }

  interface CloudStorageProvider {
    storeFile(fileName: string): void;
    getFile(fileName: string): File;
  }

  class Amazon implements CloudHostingProvider, CDNProvider, CloudStorageProvider{
    public storeFile(fileName: string): void {
      // ...
    }

    public getFile(fileName: string): File {
      // ...
    }

    public createServer(region: string): void {
      // ...
    }

    public listServers(region: string): string[] {
      // ...
    }

    public getCDNAddress(): string {
      // ...
    }
  }

  class Dropbox implements CloudStorageProvider {
    public getFile(fileName: string): File {
      // ...
    }

    public storeFile(fileName: string): void {
      // ...
    }
  }
}

// The example is taken from: https://refactoring.guru/design-patterns/book (eng)
//                            https://refactoring.guru/ru/design-patterns/book (rus)
