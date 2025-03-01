export const apiKeyAuth = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res
      .status(403)
      .json({ success: false, message: "API Key is required" });
  }

  req.apiKey = apiKey;
  next();
};
