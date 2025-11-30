const adminAuth = (req, res, next) => {
  const isAuthorized = true;
  if (!isAuthorized) {
    res.status(401).send("Not Authorized!");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const isAuthorized = true;
  if (!isAuthorized) {
    res.status(401).send("Not authorized");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
