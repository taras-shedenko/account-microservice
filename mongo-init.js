db.createUser({
  user: 'accounts',
  pwd: '1234',
  roles: [
    {
      role: 'readWrite',
      db: 'accounts',
    },
  ],
});
