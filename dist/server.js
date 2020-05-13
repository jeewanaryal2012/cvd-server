"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes/routes");
const PORT = process.env.PORT || 4040;
routes_1.default.listen(PORT, function () {
    console.log('Express server listening on port: ' + PORT);
});
//# sourceMappingURL=server.js.map