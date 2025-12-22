"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const contentTypes = ["video", "article", "image"];
const contentSchema = zod_1.z.object({
    link: zod_1.z.string(),
    type: zod_1.z.enum(contentTypes),
    title: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()),
    userId: zod_1.z.string(),
});
const linkSchema = zod_1.z.object({
    hash: zod_1.z.string(),
    userId: zod_1.z.string(),
});
const tagSchema = zod_1.z.object({
    title: zod_1.z.string(),
});
const userSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
});
