//bai10
export class Account {
    public id: string;
    private _balance: number;
    readonly createdAt: Date;

    constructor(id: string, initialBalance: number) {
        this.id = id;
        this._balance = initialBalance;
        this.createdAt = new Date();
    }
}