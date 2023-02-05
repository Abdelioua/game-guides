exports.handler = async (event, context) => {
  console.log("function ran");

  const data = [
    { title: "Beat All zelda Bosses Like a Boss", author: "mario" },
    { title: "Mario Kart Shortcuts You Never Knew Existed", author: "luigi" },
    { title: "Ultimate Street Fighter Guide", author: "Chun-li" },
  ];
  if (!context.clientContext.user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ msg: "You Must Be Logged in!!" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
