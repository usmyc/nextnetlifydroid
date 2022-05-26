exports.handler = async (event, context) => {
  const guides = [
    { title: "All droid will be ready to all attack", author: "droidkg" },
    {
      title: "Defense system created by opensourceacademy",
      author: "droiddefense",
    },
    {
      title: "Fighting methods",
      author: "droidfighter",
    },
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }
  return {
    statusCode: 401,
    body: JSON.stringify({ mssg: "you must be log in to see this" }),
  };
};
