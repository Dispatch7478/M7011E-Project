## Create Tournament

**Topic/Routing Key:** `events.tournament.created`

**JSON Payload:**
```json
{
  "event_type": "TournamentCreated",
  "payload": {
    "id": "uuid-1234-5678",
    "organizer_id": "user-uuid-9999",
    "name": "Winter Championship 2025",
    "description": "The biggest Rocket League event of the winter!",
    "game": "Rocket League",
    "format": "single-elimination",
    "start_time": "2025-12-20T18:00:00Z",
    "min_teams": 2,
    "max_teams": 16
  },
  "timestamp": "2025-12-08T14:30:00Z"
}