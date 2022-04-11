function httpOK(res, data, statusCode) {
  switch (res.req.method) {
    case "POST":
    case "PUT":
      res.status(201);
      break;

    case "GET":
    case "DELETE":
      res.status(200);
      break;
  }

  if (statusCode) {
    res.status(statusCode);
  }

  if (!data) {
    return res.send();
  }

  if (typeof data === "string") {
    return res.send(data);
  }

  return res.json(data);
}

module.exports = {
  httpOK,
};
