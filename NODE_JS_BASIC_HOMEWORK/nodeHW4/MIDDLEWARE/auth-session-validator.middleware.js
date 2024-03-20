const validateAuthSession = (req, res, next) => {
  console.log(req.session.isLoggedIn ? "IS AUTH" : "NOT AUTH");

  const isLoggedIn = req.session.isLoggedIn;

  if (isLoggedIn) {
    next();
  } else {
    res.status(403).send({ message: "Forbidden" });
  }
};

export default validateAuthSession;
