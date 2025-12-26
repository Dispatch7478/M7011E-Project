# Bracket Service Schema

## Database: `bracket_db`

### `matches` Table
Stores the nodes of the bracket tree.

```sql
CREATE TABLE matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tournament_id UUID NOT NULL,
    
    -- Structure Info
    round INT NOT NULL,              -- 1 = Round of 16, 2 = Quarterfinals, etc.
    match_number INT NOT NULL,       -- Horizontal order (1, 2, 3, 4...)
    next_match_id UUID,              -- The ID of the match the winner advances to (NULL for Final)
    
    -- Participant Info
    player1_id UUID,                 -- NULL if waiting for previous round
    player2_id UUID,                 -- NULL if waiting OR if it's a Bye
    
    -- State
    winner_id UUID,                  -- Set when match is over
    score VARCHAR(50),               -- e.g., "3-1", "2-0"
    status VARCHAR(20) DEFAULT 'scheduled' -- scheduled, in_progress, completed
);