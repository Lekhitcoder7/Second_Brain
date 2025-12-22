"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const search = async (req, res) => {
    try {
        const { query } = req.body;
        // Abhi simple dummy response
        // Baad me tum yahan DB / Qdrant logic daal sakte ho
        return res.status(200).json({
            success: true,
            message: "Search working",
            query,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Search failed",
        });
    }
};
exports.search = search;
