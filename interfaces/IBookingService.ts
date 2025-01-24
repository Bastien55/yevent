interface IBookingService {
    createReservation(userId: number, eventId: number, numberOfTickets: number) : Promise<boolean>
    cancelReservation(reservationId: number) : Promise<void>
    getReservations() : Promise<Booking[]>
}