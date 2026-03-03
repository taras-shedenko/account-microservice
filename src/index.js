import "dotenv/config";
import * as db from "./db.js";
import app from "./app.js";

async function bootstrap() {
  await db.connect(process.env.MONGODB_URL);
  const server = app.listen(parseInt(process.env.PORT ?? "3001"), () =>
    console.log("Account app is running"),
  );

  const closeServer = () => {
    if (server) {
      server.close((err) => {
        if (err) console.error(err);
        process.exit(1);
      });
    } else process.exit(1);
  };

  process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception", error.message);
    closeServer();
  });

  process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection\m", reason);
    closeServer();
  });
}

bootstrap();
