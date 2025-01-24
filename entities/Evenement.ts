class Evenement {
    constructor(
        private _id: number,
        private _title: string,
        private _description: string,
        private _capacity: number,
        private _availablePlace: number,
        private _lieu: Place,
        private _date: Date
    ) {}


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get capacity(): number {
        return this._capacity;
    }

    set capacity(value: number) {
        this._capacity = value;
    }

    get availablePlace(): number {
        return this._availablePlace;
    }

    set availablePlace(value: number) {
        this._availablePlace = value;
    }

    get lieu(): Place {
        return this._lieu;
    }

    set lieu(value: Place) {
        this._lieu = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }
}