class BookingService implements IBookingService {

    private readonly _reservations: Booking[]

    cancelReservation(reservationId: number): Promise<void> {
        return Promise.resolve(undefined);
    }

    createReservation(userId: number, eventId: number, numberOfTickets: number): Promise<boolean> {
        this._reservations.push(new Booking(userId, eventId, numberOfTickets));
        return Promise.resolve(true);
    }

    getReservations(): Promise<Booking[]> {
        return Promise.resolve(this._reservations);
    }

    constructor() {
        this._reservations = [
            new Booking(101, 1, 2), // User 101 books 2 tickets for Event 1
            new Booking(102, 3, 5), // User 102 books 5 tickets for Event 3
            new Booking(103, 5, 1), // User 103 books 1 ticket for Event 5
            new Booking(104, 7, 4), // User 104 books 4 tickets for Event 7
            new Booking(105, 10, 3) // User 105 books 3 tickets for Event 10
        ];
    }
}