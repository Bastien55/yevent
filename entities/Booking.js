class Booking {
    ID;
    UserID;
    EventID;
    numberOfTickets

    constructor(userID, eventID, ticketsNumber) {
        this.UserID = userID;
        this.EventID = eventID;
        this.numberOfTickets = ticketsNumber;
    }
}