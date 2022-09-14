exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } 
  res.status(403).send('로그인이 필요합니다.');
};

exports