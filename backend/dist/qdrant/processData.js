"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processContent = void 0;
const processContent = (data) => {
    const { title, tags, _id } = data;
    const tagTitles = tags.map(tag => tag.title);
    return {
        title,
        contentId: _id.toString(),
        tagTitles,
    };
};
exports.processContent = processContent;
