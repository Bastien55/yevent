class EvenementService implements IEventService{

    private readonly _listAllEvents: Evenement[]

    getEventById(id: number): Evenement {
        return this._listAllEvents.find((even) => even.id === id);
    }

    getEvents(): Evenement[] {
        return this._listAllEvents;
    }

    constructor() {
        this._listAllEvents = [
            new Evenement(1, "Event 1", "Music Concert", 200, 50, new Place("USA", "New York", "10001", 123, "Broadway St"), new Date("2024-06-01")),
            new Evenement(2, "Event 2", "Art Exhibition", 150, 30, new Place("France", "Paris", "75001", 45, "Rue de Rivoli"), new Date("2024-06-05")),
            new Evenement(3, "Event 3", "Tech Conference", 300, 100, new Place("Germany", "Berlin", "10115", 78, "Unter den Linden"), new Date("2024-06-10")),
            new Evenement(4, "Event 4", "Food Festival", 500, 200, new Place("Italy", "Rome", "00184", 22, "Via del Corso"), new Date("2024-06-15")),
            new Evenement(5, "Event 5", "Film Screening", 100, 10, new Place("UK", "London", "E1 6AN", 12, "Baker Street"), new Date("2024-06-20")),
            new Evenement(6, "Event 6", "Workshop", 50, 15, new Place("Spain", "Barcelona", "08001", 87, "La Rambla"), new Date("2024-06-25")),
            new Evenement(7, "Event 7", "Charity Run", 1000, 750, new Place("Canada", "Toronto", "M5V 2L3", 101, "Queen Street"), new Date("2024-06-30")),
            new Evenement(8, "Event 8", "Book Fair", 400, 250, new Place("Japan", "Tokyo", "100-0001", 300, "Ginza Street"), new Date("2024-07-01")),
            new Evenement(9, "Event 9", "Marathon", 2000, 1200, new Place("Brazil", "Rio de Janeiro", "22041-001", 76, "Avenida Atlântica"), new Date("2024-07-05")),
            new Evenement(10, "Event 10", "Photography Contest", 80, 20, new Place("Australia", "Sydney", "2000", 56, "George Street"), new Date("2024-07-10")),
            new Evenement(11, "Event 11", "Science Fair", 300, 150, new Place("India", "New Delhi", "110001", 89, "Janpath Road"), new Date("2024-07-15")),
            new Evenement(12, "Event 12", "Gaming Tournament", 500, 400, new Place("South Korea", "Seoul", "04524", 300, "Gangnam Road"), new Date("2024-07-20")),
            new Evenement(13, "Event 13", "Dance Competition", 250, 100, new Place("Mexico", "Mexico City", "06000", 55, "Reforma Avenue"), new Date("2024-07-25")),
            new Evenement(14, "Event 14", "Language Workshop", 40, 10, new Place("Russia", "Moscow", "101000", 98, "Arbat Street"), new Date("2024-08-01")),
            new Evenement(15, "Event 15", "Meditation Retreat", 60, 20, new Place("Thailand", "Bangkok", "10110", 33, "Sukhumvit Road"), new Date("2024-08-10"))
        ];
    }
}