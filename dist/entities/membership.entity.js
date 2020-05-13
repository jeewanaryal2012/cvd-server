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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../entities/users.entity");
let MembershipEntity = class MembershipEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], MembershipEntity.prototype, "membershipId", void 0);
__decorate([
    typeorm_1.OneToOne(type => users_entity_1.default, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", Number)
], MembershipEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', width: 100 }),
    __metadata("design:type", String)
], MembershipEntity.prototype, "paidAmount", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', width: 100 }),
    __metadata("design:type", String)
], MembershipEntity.prototype, "paidTimestamp", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', width: 100 }),
    __metadata("design:type", String)
], MembershipEntity.prototype, "isMember", void 0);
MembershipEntity = __decorate([
    typeorm_1.Entity()
], MembershipEntity);
exports.default = MembershipEntity;
// membershipId, userId, paidAmount, paidTimestamp, isMember
//# sourceMappingURL=membership.entity.js.map