const http = require("http");
const server = http.createServer((req, res) => {
  var mysql = require("mysql");
  // 因为当前的node后台服务是依赖于数据库服务的，mariadb服务在docker-compose.yml中的服务名字是db,
  // 所以这里的host也是db而不能是其他，例如localhost
  var connection = mysql.createConnection({
    host: "db",
    user: "root",
    password: "123456",
    database: "test",
  });

  connection.connect();
  connection.query(
    "SELECT 1 + 1 AS solution",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
      res.setHeader("Content-Type", "text/html;charset=utf8");
      res.end(`接受到了nginx转发的请求,数据库读取数据为${results[0].solution}`);
    }
  );
  connection.end();
});

server.listen(3000, function () {
  console.log("server is running on 3000!");
});
