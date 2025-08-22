"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
//bai10
class Account {
    constructor(id, initialBalance) {
        this.id = id;
        this._balance = initialBalance;
        this.createdAt = new Date();
    }
}
exports.Account = Account;
