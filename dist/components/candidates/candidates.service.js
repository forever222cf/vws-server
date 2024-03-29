"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let CandidatesService = class CandidatesService {
    constructor(candidateModel) {
        this.candidateModel = candidateModel;
    }
    async create(createCandidateDto) {
        const createdCandidate = new this.candidateModel(Object.assign(Object.assign({}, createCandidateDto), { code: '0' }));
        try {
            let isPhoneExist = await this.candidateModel.exists({ phone: createCandidateDto.phone });
            let isEmailExist = await this.candidateModel.exists({ email: createCandidateDto.email });
            if (isPhoneExist) {
                return Promise.reject('Phone number exists!');
            }
            if (isEmailExist) {
                return Promise.reject('Email exists!');
            }
            return await createdCandidate.save();
        }
        catch (error) {
            console.log('Create Candidate Error:', error);
        }
    }
    async getAll() {
        return await this.candidateModel.find().exec();
    }
};
CandidatesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('candidate')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], CandidatesService);
exports.CandidatesService = CandidatesService;
//# sourceMappingURL=candidates.service.js.map