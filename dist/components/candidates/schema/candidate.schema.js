"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.CandidateSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    code: String
});
//# sourceMappingURL=candidate.schema.js.map