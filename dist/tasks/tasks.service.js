"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [
            {
                id: 1,
                name: 'Potentilla gracilis Douglas ex Hook. var. fastigiata (Nutt.) S. Watson',
                status: false,
                email: 'bmcginty0@adobe.com',
                gender: 'Female',
            },
            {
                id: 2,
                name: 'Dubautia imbricata H. St. John & G.D. Carr',
                status: true,
                email: 'dmcadam1@yahoo.com',
                gender: 'Male',
            },
            {
                id: 3,
                name: 'Hypotrachyna oostingii (J.P. Dey) Hale',
                status: false,
                email: 'jpickburn2@usnews.com',
                gender: 'Male',
            },
            {
                id: 4,
                name: 'Orthothecium Schimp.',
                status: false,
                email: 'ltylor3@adobe.com',
                gender: 'Male',
            },
            {
                id: 5,
                name: 'Quercus gambelii Nutt. var. gambelii',
                status: true,
                email: 'lscherme4@scientificamerican.com',
                gender: 'Male',
            },
            {
                id: 6,
                name: 'Astragalus accidens S. Watson var. accidens',
                status: true,
                email: 'caymerich5@usnews.com',
                gender: 'Male',
            },
        ];
    }
    getAllTasks() {
        return this.tasks;
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map