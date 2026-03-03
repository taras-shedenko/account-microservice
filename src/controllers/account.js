import * as services from "../services/account.js";
import { logger } from "../logger.js";

export const getAllAccount = async (req, res) => {
  logger.info("getAllAccount");
  const result = await services.getAllAccount();
  res.send(result);
};

export const getAccountById = async (req, res) => {
  const id = req.params.id;
  logger.info("getAccountById", { id });
  const result = await services.getAccountById(id);
  res.send(result);
};

export const createAccount = async (req, res) => {
  const { name, number, type, status, fraudCount } = req.body;
  const account = { name, number, type, status, fraudCount };
  logger.info("createAccount", { account });
  const result = await services.createAccount(account);
  res.status(201).json(result);
};

export const updateAccountById = async (req, res) => {
  const id = req.params.id;
  const { name, number, type, status, fraudCount } = req.body;
  const account = { name, number, type, status, fraudCount };
  logger.info("updateAccountById", { id, account });
  const result = await services.updateAccountById(id, account);
  res.send(result);
};

export const deleteAccountById = async (req, res) => {
  const id = req.params.id;
  logger.info("deleteAccountById", { id });
  await services.deleteAccountById(id);
  res.sendStatus(204);
};
