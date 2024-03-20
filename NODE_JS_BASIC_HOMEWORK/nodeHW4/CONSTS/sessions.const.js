import session from "express-session";

export const authSession = session({
  secret: "xdr5rfct6ytgyu78uhbhjui8ijnjik",
  name: "user_id",
  cookie: {
    maxAge: 10 * 60 * 60 * 1000,
  },

  saveUninitialized: true,
  resave: true,
});
