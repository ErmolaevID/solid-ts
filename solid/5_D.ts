namespace incorrect {
  class MySqlConnection {/*...*/}

  class Auth {
    connection: MySqlConnection;
    constructor(connection: MySqlConnection) {
      this.connection = connection;
    }
    async authentificate(login: string, password: string) {/*...*/}
  }
  
  // Auth - hight-level module
  // MySqlConnection - low-level module
  // Auth depends on MySqlConnection 
}

namespace correct {
  interface DataBaseConnection {
    connect(host: string, user: string, password: string): void;
  }

  class MySqlConnection implements DataBaseConnection {
    constructor() {/*...*/}
    connect(host: string, user: string, password: string): void {/*...*/}
  }
  class Auth {
    connection: DataBaseConnection
    constructor(connection: DataBaseConnection) {
      this.connection = connection;
    }
    authentificate(login: string, password: string) {/*...*/}
  }
}


// The example is taken from: https://ota-solid.now.sh/lsp