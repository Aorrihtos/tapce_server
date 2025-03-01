export const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({
      status: "failed",
      error: "No authorization token was provided",
    });
  }

  let error;
  let key;
  try {
    key = atob(req.headers.authorization);
  } catch (err) {
    error = err;
  }

  if (key !== process.env.API_KEY || error) {
    return res.status(403).json({
      status: "failed",
      error: "Invalid API Key",
    });
  }

  next();
};
