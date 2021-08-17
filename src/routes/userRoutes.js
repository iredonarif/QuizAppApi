const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        authController.signup
    );

    app.post("/api/auth/signin", authController.signin);

    app.get("/api/test/all", userController.allAccess);

    app.get("/api/test/user", [authJwt.verifyToken], userController.userBoard);

    app.get(
        "/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        userController.adminBoard
    );
}