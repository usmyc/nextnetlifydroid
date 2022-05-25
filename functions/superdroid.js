exports.handler = async () => {
  console.log("function ran");
  const data = { name: "droid", age: "30", job: "robot" };
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
