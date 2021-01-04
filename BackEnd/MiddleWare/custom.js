const custom = async (schema) => {
  const data = await schema.find();
  let id;
  if (data.length > 0) {
    id = data[data.length - 1].customID
      ? data[data.length - 1].customID + 1
      : 1;
  } else {
    id = 1;
  }
  return id;
};

module.exports = custom;
