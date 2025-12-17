"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var cors = require('cors');
const express_1 = __importDefault(require("express"));
const mongoose = require("mongoose");
const auth_route_1 = __importDefault(require("./Routes/auth.route"));
const content_route_1 = __importDefault(require("./Routes/content.route"));
const brain_route_1 = __importDefault(require("./Routes/brain.route"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




const app = (0, express_1.default)();
app.use(cors());
mongoose.connect(process.env.MONGODB_URI);
moongoose.then(() => console.log("MongoDB Connected Successfully"))
moongoose.catch(err => console.log("MongoDB Error:", err));
app.use(express_1.default.json());
app.use("/api/v1/auth", auth_route_1.default);
app.use("/api/v1/content", content_route_1.default);
app.use("/api/v1/brain", brain_route_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}/`);
});
