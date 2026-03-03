import Account from "../models/account.js";

export const getAllAccount = async () => {
  const result = await Account.find({});
  return result.map(accountForResponse);
};

export const getAccountById = async (id) => {
  const result = await Account.findById(id);
  return result && accountForResponse(result);
};

export const createAccount = async (account) => {
  const result = await Account.create(account);
  return accountForResponse(result);
};

export const updateAccountById = async (id, account) => {
  await Account.findByIdAndUpdate(id, account);
  const result = await Account.findById(id);
  return accountForResponse(result);
};

export const deleteAccountById = (id) => Account.findByIdAndDelete(id);

const accountForResponse = ({
  id,
  name,
  number,
  type,
  status,
  fraudCount,
}) => ({
  id,
  name,
  number,
  type,
  status,
  fraudCount,
});
