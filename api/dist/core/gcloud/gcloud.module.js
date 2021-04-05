"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCloudModule = void 0;
const common_1 = require("@nestjs/common");
const gcloud_storage_service_1 = require("./gcloud-storage.service");
const config_1 = require("@nestjs/config");
let GCloudModule = class GCloudModule {
};
GCloudModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot()
        ],
        exports: [
            gcloud_storage_service_1.GCloudStorageService
        ],
        controllers: [],
        providers: [
            gcloud_storage_service_1.GCloudStorageService
        ]
    })
], GCloudModule);
exports.GCloudModule = GCloudModule;
//# sourceMappingURL=gcloud.module.js.map