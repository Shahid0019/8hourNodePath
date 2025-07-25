const authorize = (req, res , next )=>{
  const {user } = req.query;
    if(user === 'john') {
      req.user = { name: 'john', id: 3 };
      next();
      return;
    }
else {
    res.status(401).send('Unauthorized Access');
    return;
}
    console.log('authorize middleware');
    next();
}

module.exports = authorize;