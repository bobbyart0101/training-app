export class SetModel {
    id?: number;
    weight: number;
    times: number;
    createdDate: string;
    type?: string;
    user?: string;

    constructor(weight: number, times: number, createdDate: string) {
        this.weight = weight;
        this.times = times;
        this.createdDate = createdDate;
    }
}
