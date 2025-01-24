interface IEventService {
    getEvents(): Evenement[]
    getEventById(id: number): Evenement
}