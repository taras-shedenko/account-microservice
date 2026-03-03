import Joi from "joi";

const take = (obj, keys) =>
  Object.assign(
    {},
    ...keys.filter((key) => key in obj).map((key) => ({ [key]: obj[key] })),
  );

const validate = (schema) => (req, res, next) => {
  const compiledSchema = Joi.compile(schema).prefs({
    errors: { label: "key" },
    abortEarly: false,
  });
  const { error, value } = compiledSchema.validate(
    take(req, Object.keys(schema)),
  );
  if (error) {
    const errorMessage = error.details.map((d) => d.message).join(", ");
    return res.status(400).send(errorMessage);
  }
  Object.assign(req, value);
  next();
};

export default validate;
