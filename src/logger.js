import winston from "winston";

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  defaultMeta: {
    service: "account-microservice",
    buildInfo: { version: "1.0.0", nodeVersion: process.version },
  },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.simple(),
        winston.format.colorize(),
      ),
    }),
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp(),
      ),
      filename: "combind.log",
    }),
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp(),
      ),
      level: "error",
      filename: "error.log",
    }),
  ],
});
