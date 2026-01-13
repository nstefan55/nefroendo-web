export const metadata = {
  title: "Program | NefroEndo 2026",
  description: "Program konferencije NefroEndo 2026",
};

const ProgramPage = () => {
  const schedule = [
    {
      day: "Prvi dan - 11. rujan 2026.",
      sessions: [
        {
          time: "09:00 - 09:30",
          title: "Registracija i dobrodošlica",
          speaker: "",
        },
        {
          time: "09:30 - 10:30",
          title: "Uvodna predavanja",
          speaker: "Prof.dr.sc. Nikolina Bašić Jukić",
        },
        { time: "10:30 - 11:00", title: "Pauza za kavu", speaker: "" },
        {
          time: "11:00 - 12:30",
          title: "Sekcija 1: Nefrologija",
          speaker: "Razni predavači",
        },
        { time: "12:30 - 14:00", title: "Ručak", speaker: "" },
        {
          time: "14:00 - 16:00",
          title: "Sekcija 2: Endokrinologija",
          speaker: "Razni predavači",
        },
      ],
    },
    {
      day: "Drugi dan - 12. rujan 2026.",
      sessions: [
        {
          time: "09:00 - 10:30",
          title: "Sekcija 3: Klinički slučajevi",
          speaker: "Razni predavači",
        },
        { time: "10:30 - 11:00", title: "Pauza za kavu", speaker: "" },
        {
          time: "11:00 - 12:30",
          title: "Panel diskusija",
          speaker: "Moderator: dr.sc. Vesna Furić Čunko",
        },
        { time: "12:30 - 14:00", title: "Ručak", speaker: "" },
        { time: "14:00 - 16:00", title: "Radionice", speaker: "" },
      ],
    },
    {
      day: "Treći dan - 13. rujan 2026.",
      sessions: [
        {
          time: "09:00 - 10:30",
          title: "Sekcija 4: Nove metode liječenja",
          speaker: "Razni predavači",
        },
        { time: "10:30 - 11:00", title: "Pauza za kavu", speaker: "" },
        { time: "11:00 - 12:00", title: "Zaključna rasprava", speaker: "" },
        {
          time: "12:00 - 12:30",
          title: "Zatvaranje konferencije",
          speaker: "",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-bg py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            Program konferencije
          </h1>
          <div className="accent-line mb-12" />

          <div className="space-y-8">
            {schedule.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="bg-white rounded-xl shadow-card p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold text-primary mb-6">
                  {day.day}
                </h2>

                <div className="space-y-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <div
                      key={sessionIndex}
                      className="flex flex-col md:flex-row gap-4 pb-4 border-b border-gray-200 last:border-0"
                    >
                      <div className="md:w-40 flex-shrink-0">
                        <span className="inline-block bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-lg font-semibold text-sm">
                          {session.time}
                        </span>
                      </div>

                      <div className="flex-grow">
                        <h3 className="font-semibold text-lg text-neutral-text mb-1">
                          {session.title}
                        </h3>
                        {session.speaker && (
                          <p className="text-neutral-secondary text-sm">
                            {session.speaker}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-secondary mb-6">
              Program je podložan promjenama. Pratite nas za najnovije
              informacije.
            </p>
            <a href="/registracija" className="btn btn-primary">
              Registrirajte se
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
