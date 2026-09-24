/* =============================================================================
   THE HANDLEY CUP — MATCH BRACKETS & GROUP DATA
   Now covers 18/19 through 25/26, fully (groups + both knockout brackets).
   More seasons added as they're supplied.
   Group standings sorted by points, descending.
   ========================================================================= */

const EVENTS = {
  "18/19": {
    "format": "Straight K.O.",
    "groups": {},
    "groupFixtures": {},
    "cupBracket": {
      "Last 16": [
        {
          "round": "Last 16",
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "winner": "Dale Dennett",
          "winnerId": "dale-dennett",
          "loser": "Curtis Thorpe",
          "loserId": "curtis-thorpe",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Dale Dennett 3-1 Curtis Thorpe"
        },
        {
          "round": "Last 16",
          "player1": "Callum Read",
          "player1Id": "callum-read",
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "winner": "Dan Harrison",
          "winnerId": "dan-harrison",
          "loser": "Callum Read",
          "loserId": "callum-read",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Dan Harrison 3-2 Callum Read"
        },
        {
          "round": "Last 16",
          "player1": "Kieran Fitzgibbon",
          "player1Id": "kieran-fitzgibbon",
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "winner": "Kieran Fitzgibbon",
          "winnerId": "kieran-fitzgibbon",
          "loser": "Nathan Hemmingway",
          "loserId": "nathan-hemmingway",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Kieran Fitzgibbon 3-0 Nathan Hemmingway"
        },
        {
          "round": "Last 16",
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "player2": "Joe Harrington",
          "player2Id": "joe-harrington",
          "winner": "Deck Ingber",
          "winnerId": "deck-ingber",
          "loser": "Joe Harrington",
          "loserId": "joe-harrington",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Deck Ingber 3-1 Joe Harrington"
        },
        {
          "round": "Last 16",
          "player1": "Will Sturla",
          "player1Id": "will-sturla",
          "player2": "Daniel Fingram",
          "player2Id": "daniel-fingram",
          "winner": "Will Sturla",
          "winnerId": "will-sturla",
          "loser": "Daniel Fingram",
          "loserId": "daniel-fingram",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Will Sturla 3-0 Daniel Fingram"
        },
        {
          "round": "Last 16",
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "winner": "Oli Bartlett",
          "winnerId": "oli-bartlett",
          "loser": "Jamie Flint",
          "loserId": "jamie-flint",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Oli Bartlett 3-2 Jamie Flint"
        },
        {
          "round": "Last 16",
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "player2": "Luke Hider",
          "player2Id": "luke-hider",
          "winner": "Todd Haynes",
          "winnerId": "todd-haynes",
          "loser": "Luke Hider",
          "loserId": "luke-hider",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Todd Haynes 3-1 Luke Hider"
        },
        {
          "round": "Last 16",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Luke Gribbin",
          "player2Id": "luke-gribbin",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Luke Gribbin",
          "loserId": "luke-gribbin",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 3-0 Luke Gribbin"
        }
      ],
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "winner": "Dale Dennett",
          "winnerId": "dale-dennett",
          "loser": "Dan Harrison",
          "loserId": "dan-harrison",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Dale Dennett 4-1 Dan Harrison"
        },
        {
          "round": "Quarter-Final",
          "player1": "Kieran Fitzgibbon",
          "player1Id": "kieran-fitzgibbon",
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "winner": "Kieran Fitzgibbon",
          "winnerId": "kieran-fitzgibbon",
          "loser": "Deck Ingber",
          "loserId": "deck-ingber",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Kieran Fitzgibbon 4-1 Deck Ingber"
        },
        {
          "round": "Quarter-Final",
          "player1": "Will Sturla",
          "player1Id": "will-sturla",
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "winner": "Will Sturla",
          "winnerId": "will-sturla",
          "loser": "Oli Bartlett",
          "loserId": "oli-bartlett",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Will Sturla 4-2 Oli Bartlett"
        },
        {
          "round": "Quarter-Final",
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Todd Haynes",
          "loserId": "todd-haynes",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 4-0 Todd Haynes"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "Kieran Fitzgibbon",
          "player2Id": "kieran-fitzgibbon",
          "winner": "Dale Dennett",
          "winnerId": "dale-dennett",
          "loser": "Kieran Fitzgibbon",
          "loserId": "kieran-fitzgibbon",
          "winnerLegs": 5,
          "loserLegs": 3,
          "scoreReconstructed": true,
          "scoreDisplay": "Dale Dennett 5-3 Kieran Fitzgibbon"
        },
        {
          "round": "Semi-Final",
          "player1": "Will Sturla",
          "player1Id": "will-sturla",
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "winner": "Will Sturla",
          "winnerId": "will-sturla",
          "loser": "Charlie Marshall",
          "loserId": "charlie-marshall",
          "winnerLegs": 5,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Will Sturla 5-1 Charlie Marshall"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "Will Sturla",
          "player2Id": "will-sturla",
          "winner": "Will Sturla",
          "winnerId": "will-sturla",
          "loser": "Dale Dennett",
          "loserId": "dale-dennett",
          "winnerLegs": 6,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Will Sturla 6-1 Dale Dennett"
        }
      ]
    },
    "plateBracket": {},
    "conflicts": [],
    "seasonRecap": "16 of Hallam's finest battle it out for the top prize in Hallam Darts — the Handley Cup. 8 seeds, 8 non-seeds, 16 players, straight knockout.<br>\nThorpe, Marshall, Sturla and Fitzgibbon are the top 4 seeds, as banana skins Dennett, Hemmingway and Bartlett look to cause an upset.<br><br>\n<u>Last 16</u> — Thorpe is out! The top seed is gone, Double D into the last 8. Flint falls to the Bomber, and Dan Harrison beats Stealth — 3 seeds fall at the first hurdle.<br>\n<u>Quarters</u> — Dennett carries on his fairytale run with a 4-1 win. The other 3 top seeds do the business, with wins over Ingber, Bartlett and Haynes.<br>\n<u>Semis</u> — 8 legs it took for there to be a winner, Shabba only getting 3, while Dale dares to dream after hitting his 5th double. Sturla has taken apart Charlie in a 5-1 romp.<br>\n<u>Final</u> — Sturla only dropped 4 legs in as many games. A dominant win in the Final over Dale — Will Sturla is your first ever Handley Cup champion.",
    "seasonSummary": "The very first Handley Cup — a straight 16-player knockout won by Will Sturla, who beat Dale Dennett 6-1 in the final to become the tournament's first ever champion."
  },
  "19/20": {
    "format": "Group Stage + K.O.",
    "groups": {
      "Group A": [
        {
          "name": "Charlie Marshall",
          "id": "charlie-marshall",
          "played": 4,
          "points": 8
        },
        {
          "name": "Dale Dennett",
          "id": "dale-dennett",
          "played": 4,
          "points": 6
        },
        {
          "name": "Alex Wright",
          "id": "alex-wright",
          "played": 4,
          "points": 2
        },
        {
          "name": "Deck Ingber",
          "id": "deck-ingber",
          "played": 4,
          "points": 2
        },
        {
          "name": "Nathan Hemmingway",
          "id": "nathan-hemmingway",
          "played": 4,
          "points": 2
        }
      ],
      "Group B": [
        {
          "name": "Dom Tofts",
          "id": "dom-tofts",
          "played": 4,
          "points": 8
        },
        {
          "name": "Oli Gubbins",
          "id": "oli-gubbins",
          "played": 4,
          "points": 6
        },
        {
          "name": "Oli Bartlett",
          "id": "oli-bartlett",
          "played": 4,
          "points": 5
        },
        {
          "name": "Laura Bugge",
          "id": "laura-bugge",
          "played": 4,
          "points": 3
        },
        {
          "name": "Henry Wheeler",
          "id": "henry-wheeler",
          "played": 4,
          "points": 0
        }
      ],
      "Group C": [
        {
          "name": "Jamie Flint",
          "id": "jamie-flint",
          "played": 4,
          "points": 8
        },
        {
          "name": "Curtis Thorpe",
          "id": "curtis-thorpe",
          "played": 4,
          "points": 6
        },
        {
          "name": "Joe Evans",
          "id": "joe-evans",
          "played": 4,
          "points": 5
        },
        {
          "name": "Todd Haynes",
          "id": "todd-haynes",
          "played": 4,
          "points": 4
        },
        {
          "name": "Dan Harrison",
          "id": "dan-harrison",
          "played": 4,
          "points": 2
        }
      ]
    },
    "groupFixtures": {
      "Group A": [
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 2,
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "score2": 0
        },
        {
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "score1": 0,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 2
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 2,
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "score2": 0
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 2,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 0,
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "score2": 2
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 2,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 2,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 0
        },
        {
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "score1": 2,
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "score2": 0
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 2,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 0
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 2,
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "score2": 0
        }
      ],
      "Group B": [
        {
          "player1": "Oli Gubbins",
          "player1Id": "oli-gubbins",
          "score1": 0,
          "player2": "Dom Tofts",
          "player2Id": "dom-tofts",
          "score2": 2
        },
        {
          "player1": "Oli Bartlett",
          "player1Id": "oli-bartlett",
          "score1": 2,
          "player2": "Henry Wheeler",
          "player2Id": "henry-wheeler",
          "score2": 0
        },
        {
          "player1": "Oli Gubbins",
          "player1Id": "oli-gubbins",
          "score1": 2,
          "player2": "Laura Bugge",
          "player2Id": "laura-bugge",
          "score2": 0
        },
        {
          "player1": "Dom Tofts",
          "player1Id": "dom-tofts",
          "score1": 2,
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "score2": 0
        },
        {
          "player1": "Henry Wheeler",
          "player1Id": "henry-wheeler",
          "score1": 0,
          "player2": "Laura Bugge",
          "player2Id": "laura-bugge",
          "score2": 2
        },
        {
          "player1": "Oli Gubbins",
          "player1Id": "oli-gubbins",
          "score1": 2,
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "score2": 1
        },
        {
          "player1": "Dom Tofts",
          "player1Id": "dom-tofts",
          "score1": 2,
          "player2": "Henry Wheeler",
          "player2Id": "henry-wheeler",
          "score2": 0
        },
        {
          "player1": "Oli Bartlett",
          "player1Id": "oli-bartlett",
          "score1": 2,
          "player2": "Laura Bugge",
          "player2Id": "laura-bugge",
          "score2": 1
        },
        {
          "player1": "Oli Gubbins",
          "player1Id": "oli-gubbins",
          "score1": 2,
          "player2": "Henry Wheeler",
          "player2Id": "henry-wheeler",
          "score2": 0
        },
        {
          "player1": "Dom Tofts",
          "player1Id": "dom-tofts",
          "score1": 2,
          "player2": "Laura Bugge",
          "player2Id": "laura-bugge",
          "score2": 0
        }
      ],
      "Group C": [
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 2,
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "score2": 1
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 2,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 1
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 2,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 0
        },
        {
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "score1": 1,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 2
        },
        {
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "score1": 1,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 2
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 2,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 0
        },
        {
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "score1": 0,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 2
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 2,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 1
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 2,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 0
        },
        {
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "score1": 0,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 2
        }
      ]
    },
    "cupBracket": {
      "Prelim": [
        {
          "round": "Prelim",
          "player1": "Oli Bartlett",
          "player1Id": "oli-bartlett",
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "winner": "Todd Haynes",
          "winnerId": "todd-haynes",
          "loser": "Oli Bartlett",
          "loserId": "oli-bartlett",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Todd Haynes 3-2 Oli Bartlett",
          "source": "Confirmed by user"
        },
        {
          "round": "Prelim",
          "player1": "Joe Evans",
          "player1Id": "joe-evans",
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "winner": "Joe Evans",
          "winnerId": "joe-evans",
          "loser": "Deck Ingber",
          "loserId": "deck-ingber",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Joe Evans 3-2 Deck Ingber",
          "source": "Confirmed by user"
        }
      ],
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Todd Haynes",
          "loserId": "todd-haynes",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 3-1 Todd Haynes",
          "source": "Confirmed by user"
        },
        {
          "round": "Quarter-Final",
          "player1": "Dom Tofts",
          "player1Id": "dom-tofts",
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "winner": "Dom Tofts",
          "winnerId": "dom-tofts",
          "loser": "Joe Evans",
          "loserId": "joe-evans",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Dom Tofts 3-1 Joe Evans",
          "source": "Confirmed by user"
        },
        {
          "round": "Quarter-Final",
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "winner": "Jamie Flint",
          "winnerId": "jamie-flint",
          "loser": "Dale Dennett",
          "loserId": "dale-dennett",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Jamie Flint 3-1 Dale Dennett",
          "source": "Confirmed by user"
        },
        {
          "round": "Quarter-Final",
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "player2": "Oli Gubbins",
          "player2Id": "oli-gubbins",
          "winner": "Curtis Thorpe",
          "winnerId": "curtis-thorpe",
          "loser": "Oli Gubbins",
          "loserId": "oli-gubbins",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Curtis Thorpe 3-2 Oli Gubbins",
          "source": "Confirmed by user"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Dom Tofts",
          "player2Id": "dom-tofts",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Dom Tofts",
          "loserId": "dom-tofts",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 4-1 Dom Tofts",
          "source": "Confirmed by user"
        },
        {
          "round": "Semi-Final",
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "winner": "Jamie Flint",
          "winnerId": "jamie-flint",
          "loser": "Curtis Thorpe",
          "loserId": "curtis-thorpe",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Jamie Flint 4-2 Curtis Thorpe",
          "source": "Confirmed by user"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Jamie Flint",
          "loserId": "jamie-flint",
          "winnerLegs": 5,
          "loserLegs": 4,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 5-4 Jamie Flint",
          "source": "Roll of Honour (sheet had no score)"
        }
      ]
    },
    "plateBracket": {
      "Prelim": [
        {
          "round": "Prelim",
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "player2": "Henry Wheeler",
          "player2Id": "henry-wheeler",
          "winner": "Alex Wright",
          "winnerId": "alex-wright",
          "loser": "Henry Wheeler",
          "loserId": "henry-wheeler",
          "winnerLegs": 2,
          "loserLegs": 0,
          "scoreReconstructed": true,
          "scoreDisplay": "Alex Wright 2-0 Henry Wheeler",
          "source": "User-supplied (KnockOut sheet had no score)"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Laura Bugge",
          "player1Id": "laura-bugge",
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "winner": "Laura Bugge",
          "winnerId": "laura-bugge",
          "loser": "Alex Wright",
          "loserId": "alex-wright",
          "winnerLegs": 2,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Laura Bugge 2-1 Alex Wright",
          "source": "User-supplied (KnockOut sheet had no score)"
        },
        {
          "round": "Semi-Final",
          "player1": "Nathan Hemmingway",
          "player1Id": "nathan-hemmingway",
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "winner": "Nathan Hemmingway",
          "winnerId": "nathan-hemmingway",
          "loser": "Dan Harrison",
          "loserId": "dan-harrison",
          "winnerLegs": 2,
          "loserLegs": 0,
          "scoreReconstructed": true,
          "scoreDisplay": "Nathan Hemmingway 2-0 Dan Harrison",
          "source": "User-supplied (KnockOut sheet had no score)"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Laura Bugge",
          "player1Id": "laura-bugge",
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "winner": "Laura Bugge",
          "winnerId": "laura-bugge",
          "loser": "Nathan Hemmingway",
          "loserId": "nathan-hemmingway",
          "winnerLegs": 2,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Laura Bugge 2-1 Nathan Hemmingway",
          "source": "Roll of Honour (sheet had no score)"
        }
      ]
    },
    "conflicts": [
      "Final round has no recorded score in the KnockOut sheet — using Roll of Honour score (5-4) instead."
    ],
    "seasonRecap": "We have a group stage! 3 groups of 5, and Dale's magic spreadsheet nonsense — prelim ranks and all sorts.<br><br>\n<strong>Group A</strong> — a brutal group in fairness, with the 2 standout A-team players this season going into the hat. Alex, Deck and Nathan all traded wins with one another.<br><br>\n<strong>Group B</strong> — newbie Tofts showing why he's an A-team regular, winning all 4 games, with Gubbins getting the points needed to join him. Wheeler whitewashed.<br><br>\n<strong>Group C</strong> — who let Curtis back? Flint was unreal, winning all 4 games in style. Thorpe coming in 2nd, with Todd and Evans close on his tail.<br><br>\n<strong>Parson's Plate</strong> — best-of-3 in the duffers, all good fun. Wright taking the prelim vs a legless Wheeler.<br>\n<u>Semi</u> — Laura with a stoppage-time winner over Wright to claim her spot in the final. Hemmingway shithousing Dan to a 2-1 win himself.<br>\n<u>Final</u> — Laura held her nerve against Ginger Spice to secure the first ever Parson's Plate.<br><br>\n<strong>Handley Cup</strong><br>\n<u>Prelims</u> — saw a clash of best pals, Todd vs Bomber and Evans vs Ingber. Todd and Joe the winners here.<br>\n<u>Quarters</u> — Charlie and Dom are on a crash course to meet in the semis, with impressive wins. Thorpe falls over the line in a last leg vs Gubbins, as Flint ends Dale's hopes of a 2nd-year final.<br>\n<u>Semis</u> — Marshall and Flint showing why they're the big 2 in Hallam Darts this season, both easing into a final.<br>\n<u>Final</u> — so much drama, so close, so much quality — but the 2nd name on the Handley Cup trophy goes to The Fire, in a class final, Flinty missing match darts before Marshall roars, hitting game shot.<br><br>\n<strong>180s</strong> — Todd Haynes 1, Jamie Flint 2.<br>\n<strong>21-or-under legs</strong> — Dan Harrison 20; Jamie Flint 16, 17, 18, 19(x2), 20, 21; Charlie Marshall 19, 20; Curtis Thorpe 21.<br>\n<strong>High Outs</strong> — Jamie Flint 118.",
    "seasonSummary": "The first ever group stage format. Charlie Marshall claims his 2nd title in a classic 5-4 final over Jamie Flint, while Laura Bugge wins the inaugural Parson's Plate."
  },
  "20/21": {
    "format": "Group Stage + K.O.",
    "groups": {
      "Group A": [
        {
          "name": "Dale Dennett",
          "id": "dale-dennett",
          "played": 5,
          "points": 15
        },
        {
          "name": "Jamie Flint",
          "id": "jamie-flint",
          "played": 5,
          "points": 14
        },
        {
          "name": "Curtis Thorpe",
          "id": "curtis-thorpe",
          "played": 5,
          "points": 10
        },
        {
          "name": "Cam Thorpe",
          "id": "cam-thorpe",
          "played": 5,
          "points": 9
        },
        {
          "name": "Nathan Hemmingway",
          "id": "nathan-hemmingway",
          "played": 5,
          "points": 4
        },
        {
          "name": "Dan Rushton",
          "id": "dan-rushton",
          "played": 5,
          "points": 2
        }
      ],
      "Group B": [
        {
          "name": "Charlie Marshall",
          "id": "charlie-marshall",
          "played": 5,
          "points": 15
        },
        {
          "name": "Dom Tofts",
          "id": "dom-tofts",
          "played": 5,
          "points": 12
        },
        {
          "name": "Oli Bartlett",
          "id": "oli-bartlett",
          "played": 5,
          "points": 8
        },
        {
          "name": "Alex Wright",
          "id": "alex-wright",
          "played": 5,
          "points": 7
        },
        {
          "name": "Oli Gubbins",
          "id": "oli-gubbins",
          "played": 5,
          "points": 7
        },
        {
          "name": "Laura Bugge",
          "id": "laura-bugge",
          "played": 5,
          "points": 2
        }
      ],
      "Group C": [
        {
          "name": "Eddie Castaldo",
          "id": "eddie-castaldo",
          "played": 4,
          "points": 11
        },
        {
          "name": "Todd Haynes",
          "id": "todd-haynes",
          "played": 4,
          "points": 10
        },
        {
          "name": "Deck Ingber",
          "id": "deck-ingber",
          "played": 4,
          "points": 9
        },
        {
          "name": "Dan Harrison",
          "id": "dan-harrison",
          "played": 4,
          "points": 5
        },
        {
          "name": "Jamesey Ennis",
          "id": "jamesey-ennis",
          "played": 4,
          "points": 5
        }
      ]
    },
    "groupFixtures": {
      "Group A": [
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "score2": 0
        },
        {
          "player1": "Cam Thorpe",
          "player1Id": "cam-thorpe",
          "score1": 2,
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "score2": 3
        },
        {
          "player1": "Dan Rushton",
          "player1Id": "dan-rushton",
          "score1": 0,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 3
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "score2": 2
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Cam Thorpe",
          "player2Id": "cam-thorpe",
          "score2": 1
        },
        {
          "player1": "Nathan Hemmingway",
          "player1Id": "nathan-hemmingway",
          "score1": 3,
          "player2": "Dan Rushton",
          "player2Id": "dan-rushton",
          "score2": 1
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 0
        },
        {
          "player1": "Cam Thorpe",
          "player1Id": "cam-thorpe",
          "score1": 3,
          "player2": "Dan Rushton",
          "player2Id": "dan-rushton",
          "score2": 1
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "score2": 1
        },
        {
          "player1": "Dan Rushton",
          "player1Id": "dan-rushton",
          "score1": 0,
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "score2": 3
        },
        {
          "player1": "Nathan Hemmingway",
          "player1Id": "nathan-hemmingway",
          "score1": 0,
          "player2": "Cam Thorpe",
          "player2Id": "cam-thorpe",
          "score2": 3
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 1,
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "score2": 3
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Cam Thorpe",
          "player2Id": "cam-thorpe",
          "score2": 0
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Dan Rushton",
          "player2Id": "dan-rushton",
          "score2": 0
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "score2": 0
        }
      ],
      "Group B": [
        {
          "player1": "Laura Bugge",
          "player1Id": "laura-bugge",
          "score1": 1,
          "player2": "Dom Tofts",
          "player2Id": "dom-tofts",
          "score2": 3
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Oli Gubbins",
          "player2Id": "oli-gubbins",
          "score2": 0
        },
        {
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "score1": 3,
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "score2": 2
        },
        {
          "player1": "Oli Gubbins",
          "player1Id": "oli-gubbins",
          "score1": 3,
          "player2": "Laura Bugge",
          "player2Id": "laura-bugge",
          "score2": 0
        },
        {
          "player1": "Oli Bartlett",
          "player1Id": "oli-bartlett",
          "score1": 0,
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "score2": 3
        },
        {
          "player1": "Dom Tofts",
          "player1Id": "dom-tofts",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 1
        },
        {
          "player1": "Laura Bugge",
          "player1Id": "laura-bugge",
          "score1": 1,
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "score2": 3
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Oli Gubbins",
          "player1Id": "oli-gubbins",
          "score1": 1,
          "player2": "Dom Tofts",
          "player2Id": "dom-tofts",
          "score2": 3
        },
        {
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "score1": 3,
          "player2": "Laura Bugge",
          "player2Id": "laura-bugge",
          "score2": 0
        },
        {
          "player1": "Dom Tofts",
          "player1Id": "dom-tofts",
          "score1": 0,
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "score2": 3
        },
        {
          "player1": "Oli Bartlett",
          "player1Id": "oli-bartlett",
          "score1": 3,
          "player2": "Oli Gubbins",
          "player2Id": "oli-gubbins",
          "score2": 0
        },
        {
          "player1": "Laura Bugge",
          "player1Id": "laura-bugge",
          "score1": 0,
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "score2": 3
        },
        {
          "player1": "Oli Gubbins",
          "player1Id": "oli-gubbins",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Oli Bartlett",
          "player1Id": "oli-bartlett",
          "score1": 0,
          "player2": "Dom Tofts",
          "player2Id": "dom-tofts",
          "score2": 3
        }
      ],
      "Group C": [
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 3,
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "score2": 1
        },
        {
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "score1": 3,
          "player2": "Jamesey Ennis",
          "player2Id": "jamesey-ennis",
          "score2": 1
        },
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 1
        },
        {
          "player1": "Jamesey Ennis",
          "player1Id": "jamesey-ennis",
          "score1": 1,
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "score2": 3
        },
        {
          "player1": "Jamesey Ennis",
          "player1Id": "jamesey-ennis",
          "score1": 3,
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "score2": 1
        },
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 0,
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "score2": 3
        },
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 2,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 3
        },
        {
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "score1": 2,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 3
        },
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 3,
          "player2": "Jamesey Ennis",
          "player2Id": "jamesey-ennis",
          "score2": 0
        },
        {
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "score1": 3,
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "score2": 1
        }
      ]
    },
    "cupBracket": {
      "Prelim": [
        {
          "round": "Prelim",
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "winner": "Oli Bartlett",
          "winnerId": "oli-bartlett",
          "loser": "Deck Ingber",
          "loserId": "deck-ingber",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Oli Bartlett 4-1 Deck Ingber"
        }
      ],
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "winner": "Dale Dennett",
          "winnerId": "dale-dennett",
          "loser": "Oli Bartlett",
          "loserId": "oli-bartlett",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Dale Dennett 4-1 Oli Bartlett"
        },
        {
          "round": "Quarter-Final",
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "player2": "Dom Tofts",
          "player2Id": "dom-tofts",
          "winner": "Eddie Castaldo",
          "winnerId": "eddie-castaldo",
          "loser": "Dom Tofts",
          "loserId": "dom-tofts",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Eddie Castaldo 4-2 Dom Tofts",
          "source": "Confirmed by user"
        },
        {
          "round": "Quarter-Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Curtis Thorpe",
          "loserId": "curtis-thorpe",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Charlie Marshall 4-2 Curtis Thorpe"
        },
        {
          "round": "Quarter-Final",
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "winner": "Todd Haynes",
          "winnerId": "todd-haynes",
          "loser": "Jamie Flint",
          "loserId": "jamie-flint",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Todd Haynes 4-2 Jamie Flint"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "winner": "Dale Dennett",
          "winnerId": "dale-dennett",
          "loser": "Eddie Castaldo",
          "loserId": "eddie-castaldo",
          "winnerLegs": 5,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Dale Dennett 5-0 Eddie Castaldo"
        },
        {
          "round": "Semi-Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Todd Haynes",
          "loserId": "todd-haynes",
          "winnerLegs": 5,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Charlie Marshall 5-1 Todd Haynes"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Dale Dennett",
          "loserId": "dale-dennett",
          "winnerLegs": 6,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 6-0 Dale Dennett",
          "source": "Confirmed by user — sheet had loser-first order (0-6), corrected to winner-first"
        }
      ]
    },
    "plateBracket": {
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "player2": "Jamesey Ennis",
          "player2Id": "jamesey-ennis",
          "winner": "Jamesey Ennis",
          "winnerId": "jamesey-ennis",
          "loser": "Dan Harrison",
          "loserId": "dan-harrison",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Jamesey Ennis 3-2 Dan Harrison"
        },
        {
          "round": "Quarter-Final",
          "player1": "Laura Bugge",
          "player1Id": "laura-bugge",
          "player2": "Cam Thorpe",
          "player2Id": "cam-thorpe",
          "winner": "Cam Thorpe",
          "winnerId": "cam-thorpe",
          "loser": "Laura Bugge",
          "loserId": "laura-bugge",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Cam Thorpe 3-0 Laura Bugge"
        },
        {
          "round": "Quarter-Final",
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "winner": "Nathan Hemmingway",
          "winnerId": "nathan-hemmingway",
          "loser": "Alex Wright",
          "loserId": "alex-wright",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Nathan Hemmingway 3-0 Alex Wright"
        },
        {
          "round": "Quarter-Final",
          "player1": "Dan Rushton",
          "player1Id": "dan-rushton",
          "player2": "Oli Gubbins",
          "player2Id": "oli-gubbins",
          "winner": "Oli Gubbins",
          "winnerId": "oli-gubbins",
          "loser": "Dan Rushton",
          "loserId": "dan-rushton",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Oli Gubbins 3-2 Dan Rushton"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Jamesey Ennis",
          "player1Id": "jamesey-ennis",
          "player2": "Cam Thorpe",
          "player2Id": "cam-thorpe",
          "winner": "Cam Thorpe",
          "winnerId": "cam-thorpe",
          "loser": "Jamesey Ennis",
          "loserId": "jamesey-ennis",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Cam Thorpe 4-2 Jamesey Ennis"
        },
        {
          "round": "Semi-Final",
          "player1": "Nathan Hemmingway",
          "player1Id": "nathan-hemmingway",
          "player2": "Oli Gubbins",
          "player2Id": "oli-gubbins",
          "winner": "Oli Gubbins",
          "winnerId": "oli-gubbins",
          "loser": "Nathan Hemmingway",
          "loserId": "nathan-hemmingway",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Oli Gubbins 4-2 Nathan Hemmingway"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Cam Thorpe",
          "player1Id": "cam-thorpe",
          "player2": "Oli Gubbins",
          "player2Id": "oli-gubbins",
          "winner": "Cam Thorpe",
          "winnerId": "cam-thorpe",
          "loser": "Oli Gubbins",
          "loserId": "oli-gubbins",
          "winnerLegs": 5,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Cam Thorpe 5-1 Oli Gubbins",
          "source": "Roll of Honour"
        }
      ]
    },
    "conflicts": [
      "Plate bracket pairings for this year were unclear in the original sheet (placeholder round labels, one mismatched pairing) — reconstructed by cross-referencing each player's individual match record instead."
    ],
    "seasonRecap": "The Hallam Darts Covid Edition! 3 groups, 17 players and one almighty Zoom call. Let's get into it.<br><br>\n<strong>Group A</strong> — Dennett gets a clean sweep over A-team rivals Thorpe and Flint. Debuts for Rushy and Cam, with the group rounded off by Hemmingway. Curtis wins the battle of the Thorpes with an impressive 72 average, while Dale wins 3-2 over Flint.<br><br>\n<strong>Group B</strong> — the battle for 2nd place was on, with Wright, Gubbins and Bartlett all chasing the spot, but it went to A-team Player of the Season Dom Tofts, finishing 2nd behind defending champion Mr Marshall. Charlie went unbeaten in the group stage, with Dom winning every other game.<br><br>\n<strong>Group C</strong> — easily the most wide-open group. Harrison, Haynes, Ennis, Ingber and Castaldo must've all fancied their chances once the groups were drawn, but it was the Eagle who flew highest, with Super Todd just behind.<br><br>\n<strong>Parson's Plate</strong><br>\n<u>Quarters</u> — a close 5 legs between Ennis and Harrison, Ennis closing it out to reach the semis on debut. Another 3-2 showcase saw Gubbins get the win, joining Hemmingway and Thorpe in the semis.<br>\n<u>Semis</u> — Cam slaps Jamesey in a battle of new vs old, with Gubbins edging out Hemmingway for a spot in the final.<br>\n<u>Final</u> — a Thorpe has finally won something at Hallam, and it's not Curtis. Cam Thorpe, 5-1 winner — take a bow, ginger star boy.<br><br>\n<strong>Handley Cup</strong><br>\n<u>Prelim</u> — Bartlett saw off Ingber, 4-1.<br>\n<u>Quarters</u> — Thorpe clashed with Marshall but Chaz wins again, shocker. Todd pulled off an upset over Flint to set up a semi-final clash, with Eddie and Dale also winning against Bartlett and Tofts.<br>\n<u>Semis</u> — 10-1 combined to Dale and Chaz, as Eddie and Todd fall in the semis.<br>\n<u>Final</u> — there was only one winner. Charlie Marshall takes a bow, taking Dale and his spreadsheets for a dog walk. A big win in the Final — 2 titles now for Marshall, no signs of stopping.<br><br>\n<strong>180s</strong> — Jamesey Ennis 2, Jamie Flint 1, Dale Dennett 2, Oli Bartlett 1, Charlie Marshall 2.<br>\n<strong>21-or-under legs</strong> — Charlie Marshall 16, 17, 18(x3), 19(x4), 20, 21; Curtis Thorpe 15, 18(x3); Eddie Castaldo 21; Jamesey Ennis 19; Jamie Flint 15, 17, 20, 21(x3); Dale Dennett 16, 18, 19, 20(x2), 21(x3); Dom Tofts 20, 21; Oli Bartlett 21; Todd Haynes 20, 21.<br>\n<strong>High Outs</strong> — Curtis Thorpe 100, 118; Oli Gubbins 104; Jamie Flint 113; Eddie Castaldo 107; Jamesey Ennis 111.",
    "seasonSummary": "The Covid Zoom-call edition — 17 players across 3 groups. Charlie Marshall dominates for his 2nd title, and Cam Thorpe wins his first Plate."
  },
  "21/22": {
    "format": "Group Stage + K.O.",
    "groups": {
      "Group A": [
        {
          "name": "Bart Timmer",
          "id": "bart-timmer",
          "played": 4,
          "points": 8
        },
        {
          "name": "Jamie Flint",
          "id": "jamie-flint",
          "played": 4,
          "points": 6
        },
        {
          "name": "Todd Haynes",
          "id": "todd-haynes",
          "played": 4,
          "points": 4
        },
        {
          "name": "Nathan Hemmingway",
          "id": "nathan-hemmingway",
          "played": 4,
          "points": 2
        },
        {
          "name": "Alex Wright",
          "id": "alex-wright",
          "played": 4,
          "points": 0
        }
      ],
      "Group B": [
        {
          "name": "Charlie Marshall",
          "id": "charlie-marshall",
          "played": 4,
          "points": 8
        },
        {
          "name": "Deck Ingber",
          "id": "deck-ingber",
          "played": 4,
          "points": 4
        },
        {
          "name": "Curtis Thorpe",
          "id": "curtis-thorpe",
          "played": 4,
          "points": 4
        },
        {
          "name": "Jessie Sale",
          "id": "jessie-sale",
          "played": 4,
          "points": 2
        },
        {
          "name": "Cam Thorpe",
          "id": "cam-thorpe",
          "played": 4,
          "points": 2
        }
      ]
    },
    "groupFixtures": {
      "Group A": [
        {
          "player1": "Bart Timmer",
          "player1Id": "bart-timmer",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Bart Timmer",
          "player1Id": "bart-timmer",
          "score1": 3,
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "score2": 0
        },
        {
          "player1": "Bart Timmer",
          "player1Id": "bart-timmer",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 0
        },
        {
          "player1": "Bart Timmer",
          "player1Id": "bart-timmer",
          "score1": 3,
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "score2": 2
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 1
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "score2": 1
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "score1": 3,
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "score2": 2
        },
        {
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 2
        },
        {
          "player1": "Nathan Hemmingway",
          "player1Id": "nathan-hemmingway",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 2
        }
      ],
      "Group B": [
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 0
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "score2": 1
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 1
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Cam Thorpe",
          "player2Id": "cam-thorpe",
          "score2": 1
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 2
        },
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 3,
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "score2": 2
        },
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 3,
          "player2": "Cam Thorpe",
          "player2Id": "cam-thorpe",
          "score2": 1
        },
        {
          "player1": "Cam Thorpe",
          "player1Id": "cam-thorpe",
          "score1": 3,
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "score2": 2
        },
        {
          "player1": "Jessie Sale",
          "player1Id": "jessie-sale",
          "score1": 3,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 1
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Cam Thorpe",
          "player2Id": "cam-thorpe",
          "score2": 1
        }
      ]
    },
    "cupBracket": {
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Nathan Hemmingway",
          "loserId": "nathan-hemmingway",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 3-0 Nathan Hemmingway"
        },
        {
          "round": "Quarter-Final",
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "winner": "Jamie Flint",
          "winnerId": "jamie-flint",
          "loser": "Jessie Sale",
          "loserId": "jessie-sale",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Jamie Flint 3-0 Jessie Sale"
        },
        {
          "round": "Quarter-Final",
          "player1": "Bart Timmer",
          "player1Id": "bart-timmer",
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "winner": "Bart Timmer",
          "winnerId": "bart-timmer",
          "loser": "Curtis Thorpe",
          "loserId": "curtis-thorpe",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Bart Timmer 3-1 Curtis Thorpe"
        },
        {
          "round": "Quarter-Final",
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "winner": "Deck Ingber",
          "winnerId": "deck-ingber",
          "loser": "Todd Haynes",
          "loserId": "todd-haynes",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Deck Ingber 3-1 Todd Haynes"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Jamie Flint",
          "loserId": "jamie-flint",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 4-0 Jamie Flint"
        },
        {
          "round": "Semi-Final",
          "player1": "Bart Timmer",
          "player1Id": "bart-timmer",
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "winner": "Bart Timmer",
          "winnerId": "bart-timmer",
          "loser": "Deck Ingber",
          "loserId": "deck-ingber",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Bart Timmer 4-0 Deck Ingber"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Bart Timmer",
          "player2Id": "bart-timmer",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Bart Timmer",
          "loserId": "bart-timmer",
          "winnerLegs": 5,
          "loserLegs": 3,
          "scoreReconstructed": true,
          "scoreDisplay": "Charlie Marshall 5-3 Bart Timmer"
        }
      ]
    },
    "plateBracket": {
      "Final": [
        {
          "round": "Final",
          "player1": "Cam Thorpe",
          "player1Id": "cam-thorpe",
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "winner": "Cam Thorpe",
          "winnerId": "cam-thorpe",
          "loser": "Alex Wright",
          "loserId": "alex-wright",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Cam Thorpe 3-0 Alex Wright"
        }
      ]
    },
    "conflicts": [
      "Group B: Deck Ingber and Curtis Thorpe were tied on both points and leg difference — order broken using the recap's own account (\"Ingber finishing just behind\" the group winner) since the stats gave no clear answer.",
      "Group B: Jessie Sale and Cam Thorpe were tied on points; Sale ranked above Cam by leg difference (-2 vs -5), consistent with the recap confirming Cam (not Sale) went to the Plate."
    ],
    "seasonRecap": "The Final Handley Cup? One last hurrah for Hallam Darts? I hope not... 10 of the finest Hallam has to offer stepped up today, 2 groups of 5.<br><br>\n<strong>Group A</strong> — on-loan darting superstar Bart Timmer showed quality, winning all 4 games, with Flint, Haynes and Hemmingway making the knockouts and one-to-watch Alex Wright into the Plate.<br><br>\n<strong>Group B</strong> — Charlie Marshall looking for another trophy, with Ingber finishing just behind him, Sale and Thorpe both in the mix too, Cam Thorpe drawing the short straw into the Plate.<br><br>\n<strong>Parson's Plate</strong> — Cam Thorpe wins his 2nd title in 2 years, the Plate just seems to belong to him. Alex not getting a leg, but what a man for turning up.<br><br>\n<strong>Handley Cup</strong><br>\n<u>Quarters</u> — Timmer and Marshall showing why they're group winners, dispatching Thorpe and Hemmingway. Flint and Ingber, the Donny duo, complete the semi-final line-up.<br>\n<u>Semis</u> — the Donny boys drowned in the semis under the might of Chesterfield and Holland, 4-0 each for the group winners.<br>\n<u>Final</u> — a tight final sees Marshall win his 3rd trophy, but a very impressive day for Timmer, who in his short time at Hallam has made one hell of an impact.<br><br>\nIf this is goodbye for Hallam Darts then what a ride it's been — Covid hit the society hard but it still couldn't stop the Handley Cup. The show must surely go on.<br><br>\n<strong>The Sheet</strong> — no sheet was recorded this year, but full group fixtures were.",
    "seasonSummary": "A tiny 10-player Covid-affected field sees Charlie Marshall win his 3rd title over Bart Timmer, while Cam Thorpe claims back-to-back Parson's Plate titles."
  },
  "22/23": {
    "format": "Group Stage + K.O.",
    "groups": {
      "Group A": [
        {
          "name": "Deck Ingber",
          "id": "deck-ingber",
          "played": 5,
          "points": 15
        },
        {
          "name": "Eddie Castaldo",
          "id": "eddie-castaldo",
          "played": 5,
          "points": 13
        },
        {
          "name": "Morgan Shillito",
          "id": "morgan-shillito",
          "played": 5,
          "points": 13
        },
        {
          "name": "Nathan Hemmingway",
          "id": "nathan-hemmingway",
          "played": 5,
          "points": 7
        },
        {
          "name": "Joe Evans",
          "id": "joe-evans",
          "played": 5,
          "points": 6
        },
        {
          "name": "Nathan Stewart",
          "id": "nathan-stewart",
          "played": 5,
          "points": 4
        }
      ],
      "Group B": [
        {
          "name": "Dale Dennett",
          "id": "dale-dennett",
          "played": 5,
          "points": 15
        },
        {
          "name": "Jessie Sale",
          "id": "jessie-sale",
          "played": 5,
          "points": 12
        },
        {
          "name": "Alex Wright",
          "id": "alex-wright",
          "played": 5,
          "points": 10
        },
        {
          "name": "Dereece O'Hara",
          "id": "dereece-ohara",
          "played": 5,
          "points": 7
        },
        {
          "name": "Harvey Thompson",
          "id": "harvey-thompson",
          "played": 5,
          "points": 6
        },
        {
          "name": "Huxley Largan",
          "id": "huxley-largan",
          "played": 5,
          "points": 1
        }
      ],
      "Group C": [
        {
          "name": "Curtis Thorpe",
          "id": "curtis-thorpe",
          "played": 5,
          "points": 15
        },
        {
          "name": "Zach Hodgson",
          "id": "zach-hodgson",
          "played": 5,
          "points": 13
        },
        {
          "name": "Oli Bartlett",
          "id": "oli-bartlett",
          "played": 5,
          "points": 12
        },
        {
          "name": "James Buckby",
          "id": "james-buckby",
          "played": 5,
          "points": 10
        },
        {
          "name": "Todd Haynes",
          "id": "todd-haynes",
          "played": 5,
          "points": 8
        },
        {
          "name": "Neiran Donnelley",
          "id": "neiran-donnelley",
          "played": 5,
          "points": 2
        }
      ],
      "Group D": [
        {
          "name": "Charlie Marshall",
          "id": "charlie-marshall",
          "played": 5,
          "points": 15
        },
        {
          "name": "Connor Bowler",
          "id": "connor-bowler",
          "played": 5,
          "points": 13
        },
        {
          "name": "Jamie Flint",
          "id": "jamie-flint",
          "played": 5,
          "points": 11
        },
        {
          "name": "Oliver Burgess",
          "id": "oliver-burgess",
          "played": 5,
          "points": 6
        },
        {
          "name": "Calum Brown",
          "id": "calum-brown",
          "played": 5,
          "points": 4
        },
        {
          "name": "Oli Gubbins",
          "id": "oli-gubbins",
          "played": 5,
          "points": 4
        }
      ]
    },
    "groupFixtures": {
      "Group A": [
        {
          "player1": "Nathan Hemmingway",
          "player1Id": "nathan-hemmingway",
          "score1": 3,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 0
        },
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 3,
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "score2": 2
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Nathan Stewart",
          "player2Id": "nathan-stewart",
          "score2": 0
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 1,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 3
        },
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 3,
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "score2": 1
        },
        {
          "player1": "Nathan Stewart",
          "player1Id": "nathan-stewart",
          "score1": 1,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 3
        },
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 3,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 0
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "score2": 1
        },
        {
          "player1": "Nathan Stewart",
          "player1Id": "nathan-stewart",
          "score1": 0,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 3
        },
        {
          "player1": "Nathan Hemmingway",
          "player1Id": "nathan-hemmingway",
          "score1": 1,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 3
        },
        {
          "player1": "Joe Evans",
          "player1Id": "joe-evans",
          "score1": 2,
          "player2": "Morgan Shillito",
          "player2Id": "morgan-shillito",
          "score2": 3
        },
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 3,
          "player2": "Nathan Stewart",
          "player2Id": "nathan-stewart",
          "score2": 0
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "score2": 2
        },
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 3,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 1
        },
        {
          "player1": "Nathan Hemmingway",
          "player1Id": "nathan-hemmingway",
          "score1": 1,
          "player2": "Nathan Stewart",
          "player2Id": "nathan-stewart",
          "score2": 3
        }
      ],
      "Group B": [
        {
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "score1": 3,
          "player2": "Dereece O'Hara",
          "player2Id": "dereece-ohara",
          "score2": 1
        },
        {
          "player1": "Huxley Largan",
          "player1Id": "huxley-largan",
          "score1": 3,
          "player2": "Harvey Thompson",
          "player2Id": "harvey-thompson",
          "score2": 1
        },
        {
          "player1": "Jessie Sale",
          "player1Id": "jessie-sale",
          "score1": 0,
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "score2": 3
        },
        {
          "player1": "Jessie Sale",
          "player1Id": "jessie-sale",
          "score1": 3,
          "player2": "Huxley Largan",
          "player2Id": "huxley-largan",
          "score2": 2
        },
        {
          "player1": "Harvey Thompson",
          "player1Id": "harvey-thompson",
          "score1": 0,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 3
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Dereece O'Hara",
          "player2Id": "dereece-ohara",
          "score2": 0
        },
        {
          "player1": "Harvey Thompson",
          "player1Id": "harvey-thompson",
          "score1": 0,
          "player2": "Dereece O'Hara",
          "player2Id": "dereece-ohara",
          "score2": 3
        },
        {
          "player1": "Jessie Sale",
          "player1Id": "jessie-sale",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 1
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Huxley Largan",
          "player2Id": "huxley-largan",
          "score2": 1
        },
        {
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "score1": 3,
          "player2": "Huxley Largan",
          "player2Id": "huxley-largan",
          "score2": 0
        },
        {
          "player1": "Dereece O'Hara",
          "player1Id": "dereece-ohara",
          "score1": 0,
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "score2": 3
        },
        {
          "player1": "Harvey Thompson",
          "player1Id": "harvey-thompson",
          "score1": 0,
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "score2": 3
        },
        {
          "player1": "Jessie Sale",
          "player1Id": "jessie-sale",
          "score1": 3,
          "player2": "Harvey Thompson",
          "player2Id": "harvey-thompson",
          "score2": 0
        },
        {
          "player1": "Huxley Largan",
          "player1Id": "huxley-largan",
          "score1": 0,
          "player2": "Dereece O'Hara",
          "player2Id": "dereece-ohara",
          "score2": 3
        },
        {
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "score1": 0,
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "score2": 3
        }
      ],
      "Group C": [
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "score2": 1
        },
        {
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "score1": 3,
          "player2": "Neiran Donnelley",
          "player2Id": "neiran-donnelley",
          "score2": 2
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 2,
          "player2": "Zach Hodgson",
          "player2Id": "zach-hodgson",
          "score2": 3
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 0
        },
        {
          "player1": "Neiran Donnelley",
          "player1Id": "neiran-donnelley",
          "score1": 0,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 3
        },
        {
          "player1": "Zach Hodgson",
          "player1Id": "zach-hodgson",
          "score1": 2,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 3
        },
        {
          "player1": "Neiran Donnelley",
          "player1Id": "neiran-donnelley",
          "score1": 0,
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "score2": 3
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 0,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 3
        },
        {
          "player1": "Zach Hodgson",
          "player1Id": "zach-hodgson",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 2
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 1
        },
        {
          "player1": "Oli Bartlett",
          "player1Id": "oli-bartlett",
          "score1": 3,
          "player2": "James Buckby",
          "player2Id": "james-buckby",
          "score2": 2
        },
        {
          "player1": "Neiran Donnelley",
          "player1Id": "neiran-donnelley",
          "score1": 0,
          "player2": "Zach Hodgson",
          "player2Id": "zach-hodgson",
          "score2": 3
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 3,
          "player2": "Neiran Donnelley",
          "player2Id": "neiran-donnelley",
          "score2": 0
        },
        {
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "score1": 2,
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "score2": 3
        }
      ],
      "Group D": [
        {
          "player1": "Connor Bowler",
          "player1Id": "connor-bowler",
          "score1": 3,
          "player2": "Oli Gubbins",
          "player2Id": "oli-gubbins",
          "score2": 0
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "score2": 0
        },
        {
          "player1": "Calum Brown",
          "player1Id": "calum-brown",
          "score1": 2,
          "player2": "Oliver Burgess",
          "player2Id": "oliver-burgess",
          "score2": 3
        },
        {
          "player1": "Calum Brown",
          "player1Id": "calum-brown",
          "score1": 0,
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "score2": 3
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 2,
          "player2": "Connor Bowler",
          "player2Id": "connor-bowler",
          "score2": 3
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Oli Gubbins",
          "player2Id": "oli-gubbins",
          "score2": 2
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Oli Gubbins",
          "player2Id": "oli-gubbins",
          "score2": 0
        },
        {
          "player1": "Calum Brown",
          "player1Id": "calum-brown",
          "score1": 0,
          "player2": "Connor Bowler",
          "player2Id": "connor-bowler",
          "score2": 3
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 0,
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "score2": 3
        },
        {
          "player1": "Connor Bowler",
          "player1Id": "connor-bowler",
          "score1": 1,
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "score2": 3
        },
        {
          "player1": "Oli Gubbins",
          "player1Id": "oli-gubbins",
          "score1": 3,
          "player2": "Calum Brown",
          "player2Id": "calum-brown",
          "score2": 1
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Oliver Burgess",
          "player2Id": "oliver-burgess",
          "score2": 0
        },
        {
          "player1": "Calum Brown",
          "player1Id": "calum-brown",
          "score1": 1,
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "score2": 3
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Oli Gubbins",
          "player2Id": "oli-gubbins",
          "score2": 0
        },
        {
          "player1": "Connor Bowler",
          "player1Id": "connor-bowler",
          "score1": 3,
          "player2": "Oliver Burgess",
          "player2Id": "oliver-burgess",
          "score2": 0
        }
      ]
    },
    "cupBracket": {
      "Last 16": [
        {
          "round": "Last 16",
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "player2": "Oliver Burgess",
          "player2Id": "oliver-burgess",
          "winner": "Oliver Burgess",
          "winnerId": "oliver-burgess",
          "loser": "Deck Ingber",
          "loserId": "deck-ingber",
          "winnerLegs": 4,
          "loserLegs": 3,
          "scoreReconstructed": false,
          "scoreDisplay": "Oliver Burgess 4-3 Deck Ingber"
        },
        {
          "round": "Last 16",
          "player1": "Zach Hodgson",
          "player1Id": "zach-hodgson",
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "winner": "Zach Hodgson",
          "winnerId": "zach-hodgson",
          "loser": "Alex Wright",
          "loserId": "alex-wright",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Zach Hodgson 4-1 Alex Wright"
        },
        {
          "round": "Last 16",
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "player2": "Dereece O'Hara",
          "player2Id": "dereece-ohara",
          "winner": "Curtis Thorpe",
          "winnerId": "curtis-thorpe",
          "loser": "Dereece O'Hara",
          "loserId": "dereece-ohara",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Curtis Thorpe 4-1 Dereece O'Hara"
        },
        {
          "round": "Last 16",
          "player1": "Connor Bowler",
          "player1Id": "connor-bowler",
          "player2": "Morgan Shillito",
          "player2Id": "morgan-shillito",
          "winner": "Connor Bowler",
          "winnerId": "connor-bowler",
          "loser": "Morgan Shillito",
          "loserId": "morgan-shillito",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Connor Bowler 4-1 Morgan Shillito"
        },
        {
          "round": "Last 16",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "James Buckby",
          "player2Id": "james-buckby",
          "winner": "Dale Dennett",
          "winnerId": "dale-dennett",
          "loser": "James Buckby",
          "loserId": "james-buckby",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Dale Dennett 4-2 James Buckby"
        },
        {
          "round": "Last 16",
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "winner": "Jamie Flint",
          "winnerId": "jamie-flint",
          "loser": "Eddie Castaldo",
          "loserId": "eddie-castaldo",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Jamie Flint 4-2 Eddie Castaldo"
        },
        {
          "round": "Last 16",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Nathan Hemmingway",
          "player2Id": "nathan-hemmingway",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Nathan Hemmingway",
          "loserId": "nathan-hemmingway",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 4-0 Nathan Hemmingway"
        },
        {
          "round": "Last 16",
          "player1": "Oli Bartlett",
          "player1Id": "oli-bartlett",
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "winner": "Oli Bartlett",
          "winnerId": "oli-bartlett",
          "loser": "Jessie Sale",
          "loserId": "jessie-sale",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Oli Bartlett 4-0 Jessie Sale"
        }
      ],
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "player2": "Zach Hodgson",
          "player2Id": "zach-hodgson",
          "winner": "Oliver Burgess",
          "winnerId": "oliver-burgess",
          "loser": "Zach Hodgson",
          "loserId": "zach-hodgson",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Oliver Burgess 4-0 Zach Hodgson"
        },
        {
          "round": "Quarter-Final",
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "player2": "Connor Bowler",
          "player2Id": "connor-bowler",
          "winner": "Connor Bowler",
          "winnerId": "connor-bowler",
          "loser": "Curtis Thorpe",
          "loserId": "curtis-thorpe",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Connor Bowler 4-1 Curtis Thorpe"
        },
        {
          "round": "Quarter-Final",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "winner": "Dale Dennett",
          "winnerId": "dale-dennett",
          "loser": "Jamie Flint",
          "loserId": "jamie-flint",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Dale Dennett 4-2 Jamie Flint"
        },
        {
          "round": "Quarter-Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Oli Bartlett",
          "loserId": "oli-bartlett",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 4-0 Oli Bartlett"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "player2": "Connor Bowler",
          "player2Id": "connor-bowler",
          "winner": "Connor Bowler",
          "winnerId": "connor-bowler",
          "loser": "Oliver Burgess",
          "loserId": "oliver-burgess",
          "winnerLegs": 5,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Connor Bowler 5-1 Oliver Burgess"
        },
        {
          "round": "Semi-Final",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Dale Dennett",
          "loserId": "dale-dennett",
          "winnerLegs": 5,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 5-0 Dale Dennett"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Connor Bowler",
          "player1Id": "connor-bowler",
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Connor Bowler",
          "loserId": "connor-bowler",
          "winnerLegs": 6,
          "loserLegs": 4,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 6-4 Connor Bowler"
        }
      ]
    },
    "plateBracket": {
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Joe Evans",
          "player1Id": "joe-evans",
          "player2": "Calum Brown",
          "player2Id": "calum-brown",
          "winner": "Calum Brown",
          "winnerId": "calum-brown",
          "loser": "Joe Evans",
          "loserId": "joe-evans",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Calum Brown 3-0 Joe Evans"
        },
        {
          "round": "Quarter-Final",
          "player1": "Harvey Thompson",
          "player1Id": "harvey-thompson",
          "player2": "Huxley Largan",
          "player2Id": "huxley-largan",
          "winner": "Harvey Thompson",
          "winnerId": "harvey-thompson",
          "loser": "Huxley Largan",
          "loserId": "huxley-largan",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Harvey Thompson 3-0 Huxley Largan"
        },
        {
          "round": "Quarter-Final",
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "player2": "Neiran Donnelley",
          "player2Id": "neiran-donnelley",
          "winner": "Todd Haynes",
          "winnerId": "todd-haynes",
          "loser": "Neiran Donnelley",
          "loserId": "neiran-donnelley",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Todd Haynes 3-0 Neiran Donnelley"
        },
        {
          "round": "Quarter-Final",
          "player1": "Oli Gubbins",
          "player1Id": "oli-gubbins",
          "player2": "Nathan Stewart",
          "player2Id": "nathan-stewart",
          "winner": "Oli Gubbins",
          "winnerId": "oli-gubbins",
          "loser": "Nathan Stewart",
          "loserId": "nathan-stewart",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Oli Gubbins 3-0 Nathan Stewart"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Calum Brown",
          "player1Id": "calum-brown",
          "player2": "Harvey Thompson",
          "player2Id": "harvey-thompson",
          "winner": "Calum Brown",
          "winnerId": "calum-brown",
          "loser": "Harvey Thompson",
          "loserId": "harvey-thompson",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Calum Brown 4-0 Harvey Thompson"
        },
        {
          "round": "Semi-Final",
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "player2": "Oli Gubbins",
          "player2Id": "oli-gubbins",
          "winner": "Oli Gubbins",
          "winnerId": "oli-gubbins",
          "loser": "Todd Haynes",
          "loserId": "todd-haynes",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Oli Gubbins 4-1 Todd Haynes"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Calum Brown",
          "player1Id": "calum-brown",
          "player2": "Oli Gubbins",
          "player2Id": "oli-gubbins",
          "winner": "Calum Brown",
          "winnerId": "calum-brown",
          "loser": "Oli Gubbins",
          "loserId": "oli-gubbins",
          "winnerLegs": 5,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Calum Brown 5-2 Oli Gubbins"
        }
      ]
    },
    "conflicts": [
      "Group C: found a duplicate fixture entry (Curtis Thorpe vs Zach Hodgson recorded twice) which meant Oli Bartlett vs Zach Hodgson was never actually recorded — removed the duplicate, but that one match result is still missing. If you have it, send it over."
    ],
    "seasonRecap": "5 events already! We're so back — doubling our numbers and then some, Hallam Darts back from the dead and the Handley Cup a roaring success. <strong>24 players, 4 groups</strong>, let's get into it.<br><br>\n<strong>Group A</strong> — 4 old boys and 2 from the new school, but it was Ingber on top after an impressive display in a group boasting Hemmingway, Shillito, Castaldo, Evans and Stewart. Pick of the game: Ingber showing who Donny's number 1 is, beating Shillito 3-1 and Evans by the same scoreline.<br><br>\n<strong>Group B</strong> — Darts Dale! Dennett didn't drop a game in the groups, a perfect 5/5 record, with Sale becoming the first woman to qualify from the groups in a live event. Alex the one to watch, and Dereece rounding out the group. Jessie with a huge win over Dereece 3-0, Dale only dropping 1 leg all group.<br><br>\n<strong>Group C</strong> — the closest group on paper looked too hard to call. Thorpe topped a group with prospects Hodgson and Buckby, while old boy \"Bomber\" Bartlett snuck in 3rd. Todd dropped to the Plate. Thorpe boasted a perfect record but had some scares along the way.<br><br>\n<strong>Group D</strong> — easily the hardest group in Handley Cup history: Marshall, Flint, Bowler, OPB, Gubbins, Brown. How's your luck! The defending champ battled hard to go unbeaten, only dropping 1 leg all group — stupid. Bowler 2nd, beating the rest, while Jamie and Burgess sneak their way into the Cup. Brown and Gubbins ones to watch in the Plate.<br><br>\n<strong>The Plate</strong><br>\nQuarters — with 2 drop-outs, it was only Brown and Gubbins who needed to win to reach the semis, and the pair did just that, not dropping a leg. Semis — Brown and Gubbins smashed their way into the final, beating Thompson and Haynes. Final — a high-quality final, won by the man with the best 'tache in darts, the Scotsman Calum, claiming a 5-2 win over Hallam's own Wayne Gretzky.<br><br>\n<strong>Handley Cup</strong><br>\n<u>Last 16</u> — Ingber carried his fine form, going 3-0 up on OPB, but the cheeky monkey didn't give up, reeling off 4 magic legs on the spin — Ingber left spitting feathers. The other 3 qualifiers from the group of death all stormed through, as well as group winners Thorpe and Dennett. A tough last 8 awaited.<br>\n<u>Quarters</u> — Bowler and Burgess both won comfortably over Zodge and Thorpe, showing Group D's quality yet again. Dennett met Marshall in the other semi-final — Charlie yet to drop a leg in the knockouts.<br>\n<u>Semis</u> — Marshall now a mind-bending 14-0 in KO legs on the day, with Bowler only dropping 1 to Marshall to set up a mouth-watering final.<br>\n<u>Final</u> — BackToBackToBackToBack for Mr Marshall in his toughest final yet, battling Tenpin over 10 legs and coming out a 6-4 victor.<br><br>\n<strong>The Sheet</strong><br>\n<u>180s</u> — Charlie 7, Bowler 4, Thorpe 1, Flint 2.<br>\n<u>Legs</u> — Marshall 14, 15(x2), 16, 17(x5); Bowler 15, 16(x3), 17(x2); Buckby 17.<br>\n<u>High Outs</u> — Ingber 108, Castaldo 115, Ingber 125, Dennett 111.",
    "seasonSummary": "Hallam Darts roars back from Covid with 24 players. Charlie Marshall wins a tense 6-4 final over Connor Bowler, and Calum Brown becomes the first Scottish champion, winning the Plate."
  },
  "23/24": {
    "format": "Group Stage + K.O.",
    "groups": {
      "Group A": [
        {
          "name": "Charlie Marshall",
          "id": "charlie-marshall",
          "played": 6,
          "points": 12
        },
        {
          "name": "Eddie Castaldo",
          "id": "eddie-castaldo",
          "played": 6,
          "points": 10
        },
        {
          "name": "Jamie Flint",
          "id": "jamie-flint",
          "played": 6,
          "points": 8
        },
        {
          "name": "Will Ellis",
          "id": "will-ellis",
          "played": 6,
          "points": 6
        },
        {
          "name": "Nathan Stewart",
          "id": "nathan-stewart",
          "played": 6,
          "points": 4
        },
        {
          "name": "Finley Sanderson",
          "id": "finley-sanderson",
          "played": 6,
          "points": 2
        },
        {
          "name": "Jessie Sale",
          "id": "jessie-sale",
          "played": 6,
          "points": 0
        }
      ],
      "Group B": [
        {
          "name": "Oliver Burgess",
          "id": "oliver-burgess",
          "played": 5,
          "points": 10
        },
        {
          "name": "Dale Dennett",
          "id": "dale-dennett",
          "played": 5,
          "points": 8
        },
        {
          "name": "Curtis Thorpe",
          "id": "curtis-thorpe",
          "played": 5,
          "points": 6
        },
        {
          "name": "Jack Clucas",
          "id": "jack-clucas",
          "played": 5,
          "points": 4
        },
        {
          "name": "Todd Haynes",
          "id": "todd-haynes",
          "played": 5,
          "points": 3
        },
        {
          "name": "Kelham Elliot",
          "id": "kelham-elliot",
          "played": 5,
          "points": 0
        }
      ],
      "Group C": [
        {
          "name": "Morgan Shillito",
          "id": "morgan-shillito",
          "played": 5,
          "points": 10
        },
        {
          "name": "Bradley Truelove",
          "id": "bradley-truelove",
          "played": 5,
          "points": 8
        },
        {
          "name": "Zach Hodgson",
          "id": "zach-hodgson",
          "played": 5,
          "points": 6
        },
        {
          "name": "Fillip Brom",
          "id": "fillip-brom",
          "played": 5,
          "points": 4
        },
        {
          "name": "Hugo Nilsson",
          "id": "hugo-nilsson",
          "played": 5,
          "points": 2
        },
        {
          "name": "Jack Briggs",
          "id": "jack-briggs",
          "played": 5,
          "points": 0
        }
      ],
      "Group D": [
        {
          "name": "Connor Bowler",
          "id": "connor-bowler",
          "played": 5,
          "points": 10
        },
        {
          "name": "Will North",
          "id": "will-north",
          "played": 5,
          "points": 8
        },
        {
          "name": "Alex Wright",
          "id": "alex-wright",
          "played": 5,
          "points": 4
        },
        {
          "name": "Oliver Wilson",
          "id": "oliver-wilson",
          "played": 5,
          "points": 4
        },
        {
          "name": "Joe Ellett",
          "id": "joe-ellett",
          "played": 5,
          "points": 4
        },
        {
          "name": "Harvey Thompson",
          "id": "harvey-thompson",
          "played": 5,
          "points": 0
        }
      ]
    },
    "groupFixtures": {
      "Group A": [
        {
          "player1": "Finley Sanderson",
          "player1Id": "finley-sanderson",
          "score1": 0,
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "score2": 3
        },
        {
          "player1": "Jessie Sale",
          "player1Id": "jessie-sale",
          "score1": 2,
          "player2": "Nathan Stewart",
          "player2Id": "nathan-stewart",
          "score2": 3
        },
        {
          "player1": "Jessie Sale",
          "player1Id": "jessie-sale",
          "score1": 1,
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "score2": 3
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Will Ellis",
          "player2Id": "will-ellis",
          "score2": 2
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "score2": 0
        },
        {
          "player1": "Nathan Stewart",
          "player1Id": "nathan-stewart",
          "score1": 3,
          "player2": "Finley Sanderson",
          "player2Id": "finley-sanderson",
          "score2": 2
        },
        {
          "player1": "Will Ellis",
          "player1Id": "will-ellis",
          "score1": 0,
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "score2": 3
        },
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 3,
          "player2": "Finley Sanderson",
          "player2Id": "finley-sanderson",
          "score2": 1
        },
        {
          "player1": "Nathan Stewart",
          "player1Id": "nathan-stewart",
          "score1": 0,
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "score2": 3
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Finley Sanderson",
          "player2Id": "finley-sanderson",
          "score2": 0
        },
        {
          "player1": "Will Ellis",
          "player1Id": "will-ellis",
          "score1": 3,
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "score2": 1
        },
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 3,
          "player2": "Will Ellis",
          "player2Id": "will-ellis",
          "score2": 2
        },
        {
          "player1": "Finley Sanderson",
          "player1Id": "finley-sanderson",
          "score1": 3,
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "score2": 0
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "score2": 0
        },
        {
          "player1": "Nathan Stewart",
          "player1Id": "nathan-stewart",
          "score1": 2,
          "player2": "Will Ellis",
          "player2Id": "will-ellis",
          "score2": 3
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "score2": 1
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Nathan Stewart",
          "player2Id": "nathan-stewart",
          "score2": 0
        },
        {
          "player1": "Jessie Sale",
          "player1Id": "jessie-sale",
          "score1": 0,
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "score2": 3
        },
        {
          "player1": "Finley Sanderson",
          "player1Id": "finley-sanderson",
          "score1": 2,
          "player2": "Will Ellis",
          "player2Id": "will-ellis",
          "score2": 3
        },
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 3,
          "player2": "Nathan Stewart",
          "player2Id": "nathan-stewart",
          "score2": 1
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 2,
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "score2": 3
        }
      ],
      "Group B": [
        {
          "player1": "Jack Clucas",
          "player1Id": "jack-clucas",
          "score1": 3,
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "score2": 1
        },
        {
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "score1": 1,
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "score2": 3
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 2
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 1
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Jack Clucas",
          "player2Id": "jack-clucas",
          "score2": 1
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "score2": 0
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "score2": 2
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Jack Clucas",
          "player2Id": "jack-clucas",
          "score2": 1
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 1
        },
        {
          "player1": "Jack Clucas",
          "player1Id": "jack-clucas",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 1
        },
        {
          "player1": "Kelham Elliot",
          "player1Id": "kelham-elliot",
          "score1": 0,
          "player2": "Oliver Burgess",
          "player2Id": "oliver-burgess",
          "score2": 3
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 0
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "score2": 1
        },
        {
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "score1": 3,
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "score2": 2
        },
        {
          "player1": "Jack Clucas",
          "player1Id": "jack-clucas",
          "score1": 2,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 3
        }
      ],
      "Group C": [
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Bradley Truelove",
          "player2Id": "bradley-truelove",
          "score2": 1
        },
        {
          "player1": "Zach Hodgson",
          "player1Id": "zach-hodgson",
          "score1": 3,
          "player2": "Jack Briggs",
          "player2Id": "jack-briggs",
          "score2": 0
        },
        {
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "score1": 0,
          "player2": "Fillip Brom",
          "player2Id": "fillip-brom",
          "score2": 3
        },
        {
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "score1": 2,
          "player2": "Zach Hodgson",
          "player2Id": "zach-hodgson",
          "score2": 3
        },
        {
          "player1": "Jack Briggs",
          "player1Id": "jack-briggs",
          "score1": 0,
          "player2": "Morgan Shillito",
          "player2Id": "morgan-shillito",
          "score2": 3
        },
        {
          "player1": "Fillip Brom",
          "player1Id": "fillip-brom",
          "score1": 2,
          "player2": "Bradley Truelove",
          "player2Id": "bradley-truelove",
          "score2": 3
        },
        {
          "player1": "Jack Briggs",
          "player1Id": "jack-briggs",
          "score1": 0,
          "player2": "Bradley Truelove",
          "player2Id": "bradley-truelove",
          "score2": 3
        },
        {
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "score1": 0,
          "player2": "Morgan Shillito",
          "player2Id": "morgan-shillito",
          "score2": 3
        },
        {
          "player1": "Fillip Brom",
          "player1Id": "fillip-brom",
          "score1": 2,
          "player2": "Zach Hodgson",
          "player2Id": "zach-hodgson",
          "score2": 3
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Zach Hodgson",
          "player2Id": "zach-hodgson",
          "score2": 0
        },
        {
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "score1": 3,
          "player2": "Hugo Nilsson",
          "player2Id": "hugo-nilsson",
          "score2": 1
        },
        {
          "player1": "Jack Briggs",
          "player1Id": "jack-briggs",
          "score1": 0,
          "player2": "Fillip Brom",
          "player2Id": "fillip-brom",
          "score2": 3
        },
        {
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "score1": 3,
          "player2": "Jack Briggs",
          "player2Id": "jack-briggs",
          "score2": 0
        },
        {
          "player1": "Zach Hodgson",
          "player1Id": "zach-hodgson",
          "score1": 0,
          "player2": "Bradley Truelove",
          "player2Id": "bradley-truelove",
          "score2": 3
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Fillip Brom",
          "player2Id": "fillip-brom",
          "score2": 0
        }
      ],
      "Group D": [
        {
          "player1": "Will North",
          "player1Id": "will-north",
          "score1": 3,
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "score2": 0
        },
        {
          "player1": "Harvey Thompson",
          "player1Id": "harvey-thompson",
          "score1": 2,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 3
        },
        {
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "score1": 0,
          "player2": "Connor Bowler",
          "player2Id": "connor-bowler",
          "score2": 3
        },
        {
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "score1": 3,
          "player2": "Harvey Thompson",
          "player2Id": "harvey-thompson",
          "score2": 0
        },
        {
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "score1": 0,
          "player2": "Will North",
          "player2Id": "will-north",
          "score2": 3
        },
        {
          "player1": "Connor Bowler",
          "player1Id": "connor-bowler",
          "score1": 3,
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "score2": 0
        },
        {
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "score1": 3,
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "score2": 1
        },
        {
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "score1": 0,
          "player2": "Will North",
          "player2Id": "will-north",
          "score2": 3
        },
        {
          "player1": "Connor Bowler",
          "player1Id": "connor-bowler",
          "score1": 3,
          "player2": "Harvey Thompson",
          "player2Id": "harvey-thompson",
          "score2": 0
        },
        {
          "player1": "Will North",
          "player1Id": "will-north",
          "score1": 3,
          "player2": "Harvey Thompson",
          "player2Id": "harvey-thompson",
          "score2": 0
        },
        {
          "player1": "Joe Ellett",
          "player1Id": "joe-ellett",
          "score1": 3,
          "player2": "Oliver Wilson",
          "player2Id": "oliver-wilson",
          "score2": 0
        },
        {
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "score1": 0,
          "player2": "Connor Bowler",
          "player2Id": "connor-bowler",
          "score2": 3
        },
        {
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Harvey Thompson",
          "player1Id": "harvey-thompson",
          "score1": 1,
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "score2": 3
        },
        {
          "player1": "Will North",
          "player1Id": "will-north",
          "score1": 2,
          "player2": "Connor Bowler",
          "player2Id": "connor-bowler",
          "score2": 3
        }
      ]
    },
    "cupBracket": {
      "Last 16": [
        {
          "round": "Last 16",
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "player2": "Fillip Brom",
          "player2Id": "fillip-brom",
          "winner": "Morgan Shillito",
          "winnerId": "morgan-shillito",
          "loser": "Fillip Brom",
          "loserId": "fillip-brom",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Morgan Shillito 4-1 Fillip Brom",
          "source": "Winner deduced from later-round appearance"
        },
        {
          "round": "Last 16",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Oliver Wilson",
          "player2Id": "oliver-wilson",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Oliver Wilson",
          "loserId": "oliver-wilson",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 4-0 Oliver Wilson"
        },
        {
          "round": "Last 16",
          "player1": "Will North",
          "player1Id": "will-north",
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "winner": "Jamie Flint",
          "winnerId": "jamie-flint",
          "loser": "Will North",
          "loserId": "will-north",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Jamie Flint 4-0 Will North"
        },
        {
          "round": "Last 16",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "Zach Hodgson",
          "player2Id": "zach-hodgson",
          "winner": "Dale Dennett",
          "winnerId": "dale-dennett",
          "loser": "Zach Hodgson",
          "loserId": "zach-hodgson",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Dale Dennett 4-2 Zach Hodgson",
          "source": "Winner deduced from later-round appearance"
        },
        {
          "round": "Last 16",
          "player1": "Connor Bowler",
          "player1Id": "connor-bowler",
          "player2": "Will Ellis",
          "player2Id": "will-ellis",
          "winner": "Connor Bowler",
          "winnerId": "connor-bowler",
          "loser": "Will Ellis",
          "loserId": "will-ellis",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Connor Bowler 4-1 Will Ellis",
          "source": "Winner deduced from later-round appearance"
        },
        {
          "round": "Last 16",
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "player2": "Jack Clucas",
          "player2Id": "jack-clucas",
          "winner": "Oliver Burgess",
          "winnerId": "oliver-burgess",
          "loser": "Jack Clucas",
          "loserId": "jack-clucas",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Oliver Burgess 4-0 Jack Clucas"
        },
        {
          "round": "Last 16",
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "winner": "Eddie Castaldo",
          "winnerId": "eddie-castaldo",
          "loser": "Curtis Thorpe",
          "loserId": "curtis-thorpe",
          "winnerLegs": 4,
          "loserLegs": 3,
          "scoreReconstructed": true,
          "scoreDisplay": "Eddie Castaldo 4-3 Curtis Thorpe",
          "source": "Winner deduced from later-round appearance"
        },
        {
          "round": "Last 16",
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "winner": "Bradley Truelove",
          "winnerId": "bradley-truelove",
          "loser": "Joe Ellett",
          "loserId": "joe-ellett",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Bradley Truelove 4-0 Joe Ellett"
        }
      ],
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "player2": "Charlie Marshall",
          "player2Id": "charlie-marshall",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Morgan Shillito",
          "loserId": "morgan-shillito",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Charlie Marshall 4-1 Morgan Shillito",
          "source": "Winner deduced from later-round appearance"
        },
        {
          "round": "Quarter-Final",
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "winner": "Jamie Flint",
          "winnerId": "jamie-flint",
          "loser": "Dale Dennett",
          "loserId": "dale-dennett",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Jamie Flint 4-2 Dale Dennett"
        },
        {
          "round": "Quarter-Final",
          "player1": "Connor Bowler",
          "player1Id": "connor-bowler",
          "player2": "Oliver Burgess",
          "player2Id": "oliver-burgess",
          "winner": "Oliver Burgess",
          "winnerId": "oliver-burgess",
          "loser": "Connor Bowler",
          "loserId": "connor-bowler",
          "winnerLegs": 4,
          "loserLegs": 3,
          "scoreReconstructed": true,
          "scoreDisplay": "Oliver Burgess 4-3 Connor Bowler"
        },
        {
          "round": "Quarter-Final",
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "player2": "Bradley Truelove",
          "player2Id": "bradley-truelove",
          "winner": "Bradley Truelove",
          "winnerId": "bradley-truelove",
          "loser": "Eddie Castaldo",
          "loserId": "eddie-castaldo",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Bradley Truelove 4-1 Eddie Castaldo",
          "source": "Winner deduced from later-round appearance"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Jamie Flint",
          "loserId": "jamie-flint",
          "winnerLegs": 5,
          "loserLegs": 4,
          "scoreReconstructed": true,
          "scoreDisplay": "Charlie Marshall 5-4 Jamie Flint"
        },
        {
          "round": "Semi-Final",
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "player2": "Bradley Truelove",
          "player2Id": "bradley-truelove",
          "winner": "Oliver Burgess",
          "winnerId": "oliver-burgess",
          "loser": "Bradley Truelove",
          "loserId": "bradley-truelove",
          "winnerLegs": 5,
          "loserLegs": 3,
          "scoreReconstructed": true,
          "scoreDisplay": "Oliver Burgess 5-3 Bradley Truelove"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Oliver Burgess",
          "player2Id": "oliver-burgess",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Oliver Burgess",
          "loserId": "oliver-burgess",
          "winnerLegs": 6,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 6-2 Oliver Burgess",
          "source": "Roll of Honour"
        }
      ]
    },
    "plateBracket": {
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "player2": "Harvey Thompson",
          "player2Id": "harvey-thompson",
          "winner": "Todd Haynes",
          "winnerId": "todd-haynes",
          "loser": "Harvey Thompson",
          "loserId": "harvey-thompson",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Todd Haynes 3-0 Harvey Thompson"
        },
        {
          "round": "Quarter-Final",
          "player1": "Nathan Stewart",
          "player1Id": "nathan-stewart",
          "player2": "Kelham Elliott",
          "player2Id": "kelham-elliot",
          "winner": "Nathan Stewart",
          "winnerId": "nathan-stewart",
          "loser": "Kelham Elliott",
          "loserId": "kelham-elliot",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Nathan Stewart 3-1 Kelham Elliott"
        },
        {
          "round": "Quarter-Final",
          "player1": "Jack Briggs",
          "player1Id": "jack-briggs",
          "player2": "Finley Sanderson",
          "player2Id": "finley-sanderson",
          "winner": "Finley Sanderson",
          "winnerId": "finley-sanderson",
          "loser": "Jack Briggs",
          "loserId": "jack-briggs",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Finley Sanderson 3-2 Jack Briggs"
        },
        {
          "round": "Quarter-Final",
          "player1": "Alex Wright",
          "player1Id": "alex-wright",
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "winner": "Alex Wright",
          "winnerId": "alex-wright",
          "loser": "Jessie Sale",
          "loserId": "jessie-sale",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Alex Wright 3-1 Jessie Sale"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "player2": "Nathan Stewart",
          "player2Id": "nathan-stewart",
          "winner": "Todd Haynes",
          "winnerId": "todd-haynes",
          "loser": "Nathan Stewart",
          "loserId": "nathan-stewart",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": true,
          "scoreDisplay": "Todd Haynes 4-1 Nathan Stewart"
        },
        {
          "round": "Semi-Final",
          "player1": "Finley Sanderson",
          "player1Id": "finley-sanderson",
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "winner": "Finley Sanderson",
          "winnerId": "finley-sanderson",
          "loser": "Alex Wright",
          "loserId": "alex-wright",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Finley Sanderson 4-0 Alex Wright"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "player2": "Finley Sanderson",
          "player2Id": "finley-sanderson",
          "winner": "Todd Haynes",
          "winnerId": "todd-haynes",
          "loser": "Finley Sanderson",
          "loserId": "finley-sanderson",
          "winnerLegs": 5,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Todd Haynes 5-2 Finley Sanderson",
          "source": "Roll of Honour (sheet had no Final score)"
        }
      ]
    },
    "conflicts": [
      "Plate Final had no recorded score in the sheet — used Roll of Honour's score (5-2) instead."
    ],
    "seasonRecap": "The 23/24 Handley Cup boasted <strong>25 players</strong>, a new record! 4 old faces kept the streak alive of attending every event — Marshall, Thorpe, Flint and Haynes. Will Charlie win it again? Yeah, probably.<br><br>\n<strong>Group A</strong> — Marshall started strong with a 143 checkout in his first game, dropping just 1 leg in 6 matches (that one to Castaldo). Eddie secured 2nd while Flint and Will secured passage to the Cup.<br><br>\n<strong>Group B</strong> — the group of death? 5 of the 6 players had played A-team matches in recent years, but it was OPB showing his class, not dropping a game and beating Dennett, Thorpe and Clucas along the way. Thorpe bottled a 2-0 lead vs OPB and missed a match dart. Todd unlucky to finish 5th in a group with a lot of quality, one to watch in the Plate. Clucas snatched the crucial 4th spot.<br><br>\n<strong>Group C</strong> — not a single alumni in this group, all fresh-faced and keen to impress. Captain Morgan flexed his darting ability, not dropping a game — Truelove 2nd, only falling to Morgan. Hodgson and Brom made up the top 4.<br><br>\n<strong>Group D</strong> — the Connor Bowler show, fresh from his final last season and looking to go one better without losing a game, only dropping legs to Chesterfield native Will (King of the North). Joe and Wilson also played well enough to qualify.<br><br>\n<strong>Parson's Plate</strong> — the Quarters saw Alex Wright beat Jessie in a battle of the old guard, before Stewart, Haynes and Finley completed the semi-final line-up. Todd and Finley both showed why they were in the final, winning 8 legs between them and dropping just 1. In the final, Haynes finally got his Plate with an impressive display including 2 checkouts north of 90 — Finley played well on the day but Haynes looked unstoppable.<br><br>\n<strong>Handley Cup</strong><br>\nCastaldo 4-3 Thorpe, the crowd goes wild. Zodge pushed Dennett, and the rest of the fixtures were straightforward with group winners Marshall, OPB, Bowler and Morgan all set for the last 8.<br>\n<u>Quarters</u> — Truelove vs Castaldo looked wide open before a dart was thrown, but a semi-final on debut for \"TheOne\" after Dale's draw put all 4 group winners on the same side of the bracket. Marshall and OPB came out on top over Morgan and Bowler.<br>\n<u>Semis</u> — Flint 4-5 Marshall: the first match darts missed against Marshall since 2019, and by that man again, Jamie Flint. OPB played Truelove in a close contest, Oliver coming out on top.<br>\n<u>Final</u> — Marshall in a final... water is wet and grass is green, and Marshall lifts another Handley Cup.<br><br>\n<strong>The Sheet</strong><br>\n<u>180s</u> — Charlie Marshall 3, Bradley Truelove 1, Morgan Shillito 3, Connor Bowler 4, Fillip Brom 2, Will Ellis 2, Finley Sanderson 1, Oliver Burgess 3, Will North 1, Curtis Thorpe 1, Eddie Castaldo 1, Jamie Flint 1, Todd Haynes 1.<br>\n<u>High Outs</u> — Charlie Marshall 143, Connor Bowler 114 &amp; 138, Jamie Flint 108, Morgan Shillito 100, Curtis Thorpe 122, Will Ellis 110, Bradley Truelove 100 (x2), Oliver Burgess 110, Todd Haynes 118.<br>\n<u>21-or-under legs</u> — Charlie Marshall 14, 15, 17(x2), 18(x5), 19(x3), 20, 21(x3); Bradley Truelove 16, 17(x2), 19(x2), 20; Morgan Shillito 16, 17(x3), 18, 19, 20, 21; Eddie Castaldo 21, 20; Connor Bowler 18(x2); Oliver Burgess 15, 19(x6), 20; Fillip Brom 19; Dale Dennett 19, 20, 21(x2); Curtis Thorpe 17, 18(x2), 20(x2); Oliver Wilson 21; Will North 19, 21; Kelham Elliot 21; Nathan Stewart 20; Jamie Flint 19, 20(x3), 21.",
    "seasonSummary": "A new record 25 players enter as Charlie Marshall wins his 5th title, beating Oliver Burgess 6-2 in the final, while Todd Haynes finally gets his hands on the Parson's Plate after a 6-year wait."
  },
  "24/25": {
    "format": "Group Stage + K.O.",
    "groups": {
      "Group A": [
        {
          "name": "Oliver Burgess",
          "id": "oliver-burgess",
          "played": 5,
          "points": 10
        },
        {
          "name": "Joe Ellett",
          "id": "joe-ellett",
          "played": 5,
          "points": 6
        },
        {
          "name": "Dan Rushton",
          "id": "dan-rushton",
          "played": 5,
          "points": 6
        },
        {
          "name": "Deck Ingber",
          "id": "deck-ingber",
          "played": 5,
          "points": 4
        },
        {
          "name": "Oliver Wilson",
          "id": "oliver-wilson",
          "played": 5,
          "points": 4
        },
        {
          "name": "Lewis Ruston",
          "id": "lewis-ruston",
          "played": 5,
          "points": 0
        }
      ],
      "Group B": [
        {
          "name": "Morgan Shillito",
          "id": "morgan-shillito",
          "played": 5,
          "points": 10
        },
        {
          "name": "Curtis Thorpe",
          "id": "curtis-thorpe",
          "played": 5,
          "points": 8
        },
        {
          "name": "Eddie Castaldo",
          "id": "eddie-castaldo",
          "played": 5,
          "points": 6
        },
        {
          "name": "Finley Sanderson",
          "id": "finley-sanderson",
          "played": 5,
          "points": 4
        },
        {
          "name": "Alex Botha",
          "id": "alex-botha",
          "played": 5,
          "points": 2
        },
        {
          "name": "Tom Russell",
          "id": "tom-russell",
          "played": 5,
          "points": 0
        }
      ],
      "Group C": [
        {
          "name": "Dale Dennett",
          "id": "dale-dennett",
          "played": 5,
          "points": 10
        },
        {
          "name": "Fillip Brom",
          "id": "fillip-brom",
          "played": 5,
          "points": 8
        },
        {
          "name": "Dereece O'Hara",
          "id": "dereece-ohara",
          "played": 5,
          "points": 6
        },
        {
          "name": "Kelham Elliot",
          "id": "kelham-elliot",
          "played": 5,
          "points": 4
        },
        {
          "name": "Zach Hodgson",
          "id": "zach-hodgson",
          "played": 5,
          "points": 2
        },
        {
          "name": "Tom Hodder",
          "id": "tom-hodder",
          "played": 5,
          "points": 0
        }
      ],
      "Group D": [
        {
          "name": "Charlie Marshall",
          "id": "charlie-marshall",
          "played": 5,
          "points": 10
        },
        {
          "name": "Jamie Flint",
          "id": "jamie-flint",
          "played": 5,
          "points": 8
        },
        {
          "name": "Ben Pellington",
          "id": "ben-pellington",
          "played": 5,
          "points": 6
        },
        {
          "name": "Tom Khan",
          "id": "tom-khan",
          "played": 5,
          "points": 4
        },
        {
          "name": "Todd Haynes",
          "id": "todd-haynes",
          "played": 5,
          "points": 2
        },
        {
          "name": "Alex Wright",
          "id": "alex-wright",
          "played": 5,
          "points": 0
        }
      ],
      "Group E": [
        {
          "name": "Bradley Truelove",
          "id": "bradley-truelove",
          "played": 5,
          "points": 10
        },
        {
          "name": "Jack Clucas",
          "id": "jack-clucas",
          "played": 5,
          "points": 8
        },
        {
          "name": "Hugo Nilsson",
          "id": "hugo-nilsson",
          "played": 5,
          "points": 6
        },
        {
          "name": "Oli Bartlett",
          "id": "oli-bartlett",
          "played": 5,
          "points": 4
        },
        {
          "name": "Dan Burton",
          "id": "dan-burton",
          "played": 5,
          "points": 2
        },
        {
          "name": "Alex McCowen",
          "id": "alex-mccowen",
          "played": 5,
          "points": 0
        }
      ],
      "Group F": [
        {
          "name": "James Buckby",
          "id": "james-buckby",
          "played": 6,
          "points": 12
        },
        {
          "name": "Will Ellis",
          "id": "will-ellis",
          "played": 6,
          "points": 8
        },
        {
          "name": "Dom Tofts",
          "id": "dom-tofts",
          "played": 6,
          "points": 8
        },
        {
          "name": "Dan Harrison",
          "id": "dan-harrison",
          "played": 6,
          "points": 8
        },
        {
          "name": "Luke McCormack",
          "id": "luke-mccormack",
          "played": 6,
          "points": 4
        },
        {
          "name": "Joe Evans",
          "id": "joe-evans",
          "played": 6,
          "points": 2
        },
        {
          "name": "Sam Taylor",
          "id": "sam-taylor",
          "played": 6,
          "points": 0
        }
      ]
    },
    "groupFixtures": {
      "Group A": [
        {
          "player1": "Joe Ellett",
          "player1Id": "joe-ellett",
          "score1": 3,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 0
        },
        {
          "player1": "Joe Ellett",
          "player1Id": "joe-ellett",
          "score1": 3,
          "player2": "Lewis Ruston",
          "player2Id": "lewis-ruston",
          "score2": 0
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Dan Rushton",
          "player2Id": "dan-rushton",
          "score2": 1
        },
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 3,
          "player2": "Oliver Wilson",
          "player2Id": "oliver-wilson",
          "score2": 2
        },
        {
          "player1": "Joe Ellett",
          "player1Id": "joe-ellett",
          "score1": 3,
          "player2": "Dan Rushton",
          "player2Id": "dan-rushton",
          "score2": 2
        },
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 3,
          "player2": "Lewis Ruston",
          "player2Id": "lewis-ruston",
          "score2": 0
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Oliver Wilson",
          "player2Id": "oliver-wilson",
          "score2": 0
        },
        {
          "player1": "Dan Rushton",
          "player1Id": "dan-rushton",
          "score1": 3,
          "player2": "Oliver Wilson",
          "player2Id": "oliver-wilson",
          "score2": 0
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Lewis Ruston",
          "player2Id": "lewis-ruston",
          "score2": 0
        },
        {
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "score1": 3,
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "score2": 2
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 0
        },
        {
          "player1": "Dan Rushton",
          "player1Id": "dan-rushton",
          "score1": 3,
          "player2": "Lewis Ruston",
          "player2Id": "lewis-ruston",
          "score2": 0
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "score2": 1
        },
        {
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "score1": 3,
          "player2": "Lewis Ruston",
          "player2Id": "lewis-ruston",
          "score2": 1
        },
        {
          "player1": "Dan Rushton",
          "player1Id": "dan-rushton",
          "score1": 3,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 0
        }
      ],
      "Group B": [
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Tom Russell",
          "player2Id": "tom-russell",
          "score2": 0
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "score2": 1
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Alex Botha",
          "player2Id": "alex-botha",
          "score2": 0
        },
        {
          "player1": "Finley Sanderson",
          "player1Id": "finley-sanderson",
          "score1": 3,
          "player2": "Tom Russell",
          "player2Id": "tom-russell",
          "score2": 1
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 1
        },
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 3,
          "player2": "Tom Russell",
          "player2Id": "tom-russell",
          "score2": 0
        },
        {
          "player1": "Finley Sanderson",
          "player1Id": "finley-sanderson",
          "score1": 3,
          "player2": "Alex Botha",
          "player2Id": "alex-botha",
          "score2": 0
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Finley Sanderson",
          "player2Id": "finley-sanderson",
          "score2": 1
        },
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 3,
          "player2": "Alex Botha",
          "player2Id": "alex-botha",
          "score2": 0
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Finley Sanderson",
          "player2Id": "finley-sanderson",
          "score2": 0
        },
        {
          "player1": "Alex Botha",
          "player1Id": "alex-botha",
          "score1": 3,
          "player2": "Tom Russell",
          "player2Id": "tom-russell",
          "score2": 2
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "score2": 0
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Alex Botha",
          "player2Id": "alex-botha",
          "score2": 0
        },
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 3,
          "player2": "Finley Sanderson",
          "player2Id": "finley-sanderson",
          "score2": 0
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Tom Russell",
          "player2Id": "tom-russell",
          "score2": 2
        }
      ],
      "Group C": [
        {
          "player1": "Dereece O'Hara",
          "player1Id": "dereece-ohara",
          "score1": 3,
          "player2": "Tom Hodder",
          "player2Id": "tom-hodder",
          "score2": 0
        },
        {
          "player1": "Fillip Brom",
          "player1Id": "fillip-brom",
          "score1": 3,
          "player2": "Dereece O'Hara",
          "player2Id": "dereece-ohara",
          "score2": 1
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "score2": 0
        },
        {
          "player1": "Zach Hodgson",
          "player1Id": "zach-hodgson",
          "score1": 3,
          "player2": "Tom Hodder",
          "player2Id": "tom-hodder",
          "score2": 2
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Dereece O'Hara",
          "player2Id": "dereece-ohara",
          "score2": 1
        },
        {
          "player1": "Fillip Brom",
          "player1Id": "fillip-brom",
          "score1": 3,
          "player2": "Tom Hodder",
          "player2Id": "tom-hodder",
          "score2": 0
        },
        {
          "player1": "Kelham Elliot",
          "player1Id": "kelham-elliot",
          "score1": 3,
          "player2": "Zach Hodgson",
          "player2Id": "zach-hodgson",
          "score2": 2
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Zach Hodgson",
          "player2Id": "zach-hodgson",
          "score2": 1
        },
        {
          "player1": "Fillip Brom",
          "player1Id": "fillip-brom",
          "score1": 3,
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "score2": 0
        },
        {
          "player1": "Dereece O'Hara",
          "player1Id": "dereece-ohara",
          "score1": 3,
          "player2": "Zach Hodgson",
          "player2Id": "zach-hodgson",
          "score2": 1
        },
        {
          "player1": "Kelham Elliot",
          "player1Id": "kelham-elliot",
          "score1": 3,
          "player2": "Tom Hodder",
          "player2Id": "tom-hodder",
          "score2": 0
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Fillip Brom",
          "player2Id": "fillip-brom",
          "score2": 0
        },
        {
          "player1": "Dereece O'Hara",
          "player1Id": "dereece-ohara",
          "score1": 3,
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "score2": 0
        },
        {
          "player1": "Fillip Brom",
          "player1Id": "fillip-brom",
          "score1": 3,
          "player2": "Zach Hodgson",
          "player2Id": "zach-hodgson",
          "score2": 1
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Tom Hodder",
          "player2Id": "tom-hodder",
          "score2": 0
        }
      ],
      "Group D": [
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 0
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 0
        },
        {
          "player1": "Ben Pellington",
          "player1Id": "ben-pellington",
          "score1": 3,
          "player2": "Tom Khan",
          "player2Id": "tom-khan",
          "score2": 0
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Ben Pellington",
          "player1Id": "ben-pellington",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 2
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "score2": 0
        },
        {
          "player1": "Tom Khan",
          "player1Id": "tom-khan",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 1
        },
        {
          "player1": "Ben Pellington",
          "player1Id": "ben-pellington",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 2
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Tom Khan",
          "player2Id": "tom-khan",
          "score2": 1
        },
        {
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Tom Khan",
          "player2Id": "tom-khan",
          "score2": 0
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Ben Pellington",
          "player2Id": "ben-pellington",
          "score2": 1
        },
        {
          "player1": "Tom Khan",
          "player1Id": "tom-khan",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 2
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 2
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Ben Pellington",
          "player2Id": "ben-pellington",
          "score2": 0
        }
      ],
      "Group E": [
        {
          "player1": "Dan Burton",
          "player1Id": "dan-burton",
          "score1": 3,
          "player2": "Alex McCowen",
          "player2Id": "alex-mccowen",
          "score2": 2
        },
        {
          "player1": "Jack Clucas",
          "player1Id": "jack-clucas",
          "score1": 3,
          "player2": "Dan Burton",
          "player2Id": "dan-burton",
          "score2": 0
        },
        {
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "score1": 3,
          "player2": "Hugo Nilsson",
          "player2Id": "hugo-nilsson",
          "score2": 0
        },
        {
          "player1": "Oli Bartlett",
          "player1Id": "oli-bartlett",
          "score1": 3,
          "player2": "Alex McCowen",
          "player2Id": "alex-mccowen",
          "score2": 0
        },
        {
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "score1": 3,
          "player2": "Dan Burton",
          "player2Id": "dan-burton",
          "score2": 0
        },
        {
          "player1": "Jack Clucas",
          "player1Id": "jack-clucas",
          "score1": 3,
          "player2": "Alex McCowen",
          "player2Id": "alex-mccowen",
          "score2": 1
        },
        {
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "score1": 3,
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "score2": 1
        },
        {
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "score1": 3,
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "score2": 1
        },
        {
          "player1": "Jack Clucas",
          "player1Id": "jack-clucas",
          "score1": 3,
          "player2": "Hugo Nilsson",
          "player2Id": "hugo-nilsson",
          "score2": 1
        },
        {
          "player1": "Oli Bartlett",
          "player1Id": "oli-bartlett",
          "score1": 3,
          "player2": "Dan Burton",
          "player2Id": "dan-burton",
          "score2": 1
        },
        {
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "score1": 3,
          "player2": "Alex McCowen",
          "player2Id": "alex-mccowen",
          "score2": 0
        },
        {
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "score1": 3,
          "player2": "Jack Clucas",
          "player2Id": "jack-clucas",
          "score2": 1
        },
        {
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "score1": 3,
          "player2": "Dan Burton",
          "player2Id": "dan-burton",
          "score2": 1
        },
        {
          "player1": "Oli Bartlett",
          "player1Id": "oli-bartlett",
          "score1": 3,
          "player2": "Jack Clucas",
          "player2Id": "jack-clucas",
          "score2": 0
        },
        {
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "score1": 3,
          "player2": "Alex McCowen",
          "player2Id": "alex-mccowen",
          "score2": 0
        }
      ],
      "Group F": [
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 3,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 0
        },
        {
          "player1": "Dom Tofts",
          "player1Id": "dom-tofts",
          "score1": 3,
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "score2": 1
        },
        {
          "player1": "Luke McCormack",
          "player1Id": "luke-mccormack",
          "score1": 3,
          "player2": "Sam Taylor",
          "player2Id": "sam-taylor",
          "score2": 1
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 3,
          "player2": "Will Ellis",
          "player2Id": "will-ellis",
          "score2": 1
        },
        {
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "score1": 3,
          "player2": "Sam Taylor",
          "player2Id": "sam-taylor",
          "score2": 1
        },
        {
          "player1": "Will Ellis",
          "player1Id": "will-ellis",
          "score1": 3,
          "player2": "Dom Tofts",
          "player2Id": "dom-tofts",
          "score2": 1
        },
        {
          "player1": "Luke McCormack",
          "player1Id": "luke-mccormack",
          "score1": 3,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 0
        },
        {
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "score1": 3,
          "player2": "Will Ellis",
          "player2Id": "will-ellis",
          "score2": 2
        },
        {
          "player1": "Joe Evans",
          "player1Id": "joe-evans",
          "score1": 3,
          "player2": "Sam Taylor",
          "player2Id": "sam-taylor",
          "score2": 1
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 3,
          "player2": "Luke McCormack",
          "player2Id": "luke-mccormack",
          "score2": 0
        },
        {
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "score1": 3,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 1
        },
        {
          "player1": "Will Ellis",
          "player1Id": "will-ellis",
          "score1": 3,
          "player2": "Luke McCormack",
          "player2Id": "luke-mccormack",
          "score2": 0
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 1,
          "player2": "Sam Taylor",
          "player2Id": "sam-taylor",
          "score2": 0
        },
        {
          "player1": "Dom Tofts",
          "player1Id": "dom-tofts",
          "score1": 3,
          "player2": "Luke McCormack",
          "player2Id": "luke-mccormack",
          "score2": 2
        },
        {
          "player1": "Dom Tofts",
          "player1Id": "dom-tofts",
          "score1": 3,
          "player2": "Sam Taylor",
          "player2Id": "sam-taylor",
          "score2": 0
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 3,
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "score2": 0
        },
        {
          "player1": "Dom Tofts",
          "player1Id": "dom-tofts",
          "score1": 3,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 1
        },
        {
          "player1": "Will Ellis",
          "player1Id": "will-ellis",
          "score1": 3,
          "player2": "Sam Taylor",
          "player2Id": "sam-taylor",
          "score2": 1
        },
        {
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "score1": 3,
          "player2": "Luke McCormack",
          "player2Id": "luke-mccormack",
          "score2": 1
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 3,
          "player2": "Dom Tofts",
          "player2Id": "dom-tofts",
          "score2": 1
        },
        {
          "player1": "Will Ellis",
          "player1Id": "will-ellis",
          "score1": 3,
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "score2": 1
        }
      ]
    },
    "cupBracket": {
      "Last 16": [
        {
          "round": "Last 16",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Will Ellis",
          "player2Id": "will-ellis",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Will Ellis",
          "loserId": "will-ellis",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 4-2 Will Ellis"
        },
        {
          "round": "Last 16",
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "winner": "Bradley Truelove",
          "winnerId": "bradley-truelove",
          "loser": "Joe Ellett",
          "loserId": "joe-ellett",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Bradley Truelove 4-1 Joe Ellett"
        },
        {
          "round": "Last 16",
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "player2": "Oli Bartlett",
          "player2Id": "oli-bartlett",
          "winner": "Oliver Burgess",
          "winnerId": "oliver-burgess",
          "loser": "Oli Bartlett",
          "loserId": "oli-bartlett",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Oliver Burgess 4-0 Oli Bartlett"
        },
        {
          "round": "Last 16",
          "player1": "Dom Tofts",
          "player1Id": "dom-tofts",
          "player2": "Dereece O'Hara",
          "player2Id": "dereece-ohara",
          "winner": "Dom Tofts",
          "winnerId": "dom-tofts",
          "loser": "Dereece O'Hara",
          "loserId": "dereece-ohara",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Dom Tofts 4-1 Dereece O'Hara"
        },
        {
          "round": "Last 16",
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "winner": "Morgan Shillito",
          "winnerId": "morgan-shillito",
          "loser": "Jamie Flint",
          "loserId": "jamie-flint",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Morgan Shillito 4-1 Jamie Flint"
        },
        {
          "round": "Last 16",
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "winner": "Curtis Thorpe",
          "winnerId": "curtis-thorpe",
          "loser": "Eddie Castaldo",
          "loserId": "eddie-castaldo",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Curtis Thorpe 4-1 Eddie Castaldo"
        },
        {
          "round": "Last 16",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "Dan Rushton",
          "player2Id": "dan-rushton",
          "winner": "Dale Dennett",
          "winnerId": "dale-dennett",
          "loser": "Dan Rushton",
          "loserId": "dan-rushton",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Dale Dennett 4-1 Dan Rushton"
        },
        {
          "round": "Last 16",
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "player2": "Fillip Brom",
          "player2Id": "fillip-brom",
          "winner": "James Buckby",
          "winnerId": "james-buckby",
          "loser": "Fillip Brom",
          "loserId": "fillip-brom",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "James Buckby 4-1 Fillip Brom"
        }
      ],
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Bradley Truelove",
          "player2Id": "bradley-truelove",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Bradley Truelove",
          "loserId": "bradley-truelove",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 4-0 Bradley Truelove"
        },
        {
          "round": "Quarter-Final",
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "player2": "Dom Tofts",
          "player2Id": "dom-tofts",
          "winner": "Oliver Burgess",
          "winnerId": "oliver-burgess",
          "loser": "Dom Tofts",
          "loserId": "dom-tofts",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Oliver Burgess 4-0 Dom Tofts"
        },
        {
          "round": "Quarter-Final",
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "winner": "Morgan Shillito",
          "winnerId": "morgan-shillito",
          "loser": "Curtis Thorpe",
          "loserId": "curtis-thorpe",
          "winnerLegs": 4,
          "loserLegs": 3,
          "scoreReconstructed": false,
          "scoreDisplay": "Morgan Shillito 4-3 Curtis Thorpe"
        },
        {
          "round": "Quarter-Final",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "James Buckby",
          "player2Id": "james-buckby",
          "winner": "Dale Dennett",
          "winnerId": "dale-dennett",
          "loser": "James Buckby",
          "loserId": "james-buckby",
          "winnerLegs": 4,
          "loserLegs": 3,
          "scoreReconstructed": false,
          "scoreDisplay": "Dale Dennett 4-3 James Buckby"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Oliver Burgess",
          "player2Id": "oliver-burgess",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Oliver Burgess",
          "loserId": "oliver-burgess",
          "winnerLegs": 5,
          "loserLegs": 3,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 5-3 Oliver Burgess"
        },
        {
          "round": "Semi-Final",
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "winner": "Morgan Shillito",
          "winnerId": "morgan-shillito",
          "loser": "Dale Dennett",
          "loserId": "dale-dennett",
          "winnerLegs": 5,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Morgan Shillito 5-2 Dale Dennett"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Morgan Shillito",
          "player2Id": "morgan-shillito",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Morgan Shillito",
          "loserId": "morgan-shillito",
          "winnerLegs": 6,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 6-0 Morgan Shillito",
          "source": "Roll of Honour"
        }
      ]
    },
    "plateBracket": {
      "Last 32": [
        {
          "round": "Last 32",
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "winner": "Hugo Nilsson",
          "winnerId": "hugo-nilsson",
          "loser": "Deck Ingber",
          "loserId": "deck-ingber",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Hugo Nilsson 3-2 Deck Ingber"
        },
        {
          "round": "Last 32",
          "player1": "Alex Botha",
          "player1Id": "alex-botha",
          "player2": "Tom Hodder",
          "player2Id": "tom-hodder",
          "winner": "Alex Botha",
          "winnerId": "alex-botha",
          "loser": "Tom Hodder",
          "loserId": "tom-hodder",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Alex Botha 3-1 Tom Hodder"
        },
        {
          "round": "Last 32",
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "player2": "Joe Evans",
          "player2Id": "joe-evans",
          "winner": "Oliver Wilson",
          "winnerId": "oliver-wilson",
          "loser": "Joe Evans",
          "loserId": "joe-evans",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Oliver Wilson 3-1 Joe Evans"
        },
        {
          "round": "Last 32",
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "player2": "Ben Pellington",
          "player2Id": "ben-pellington",
          "winner": "Dan Harrison",
          "winnerId": "dan-harrison",
          "loser": "Ben Pellington",
          "loserId": "ben-pellington",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Dan Harrison 3-1 Ben Pellington"
        }
      ],
      "Last 16": [
        {
          "round": "Last 16",
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "winner": "Hugo Nilsson",
          "winnerId": "hugo-nilsson",
          "loser": "Alex Wright",
          "loserId": "alex-wright",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Hugo Nilsson 3-2 Alex Wright"
        },
        {
          "round": "Last 16",
          "player1": "Jack Clucas",
          "player1Id": "jack-clucas",
          "player2": "Tom Russell",
          "player2Id": "tom-russell",
          "winner": "Jack Clucas",
          "winnerId": "jack-clucas",
          "loser": "Tom Russell",
          "loserId": "tom-russell",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Jack Clucas 3-1 Tom Russell"
        },
        {
          "round": "Last 16",
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "player2": "Alex Botha",
          "player2Id": "alex-botha",
          "winner": "Todd Haynes",
          "winnerId": "todd-haynes",
          "loser": "Alex Botha",
          "loserId": "alex-botha",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Todd Haynes 3-1 Alex Botha"
        },
        {
          "round": "Last 16",
          "player1": "Luke McCormack",
          "player1Id": "luke-mccormack",
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "winner": "Luke McCormack",
          "winnerId": "luke-mccormack",
          "loser": "Kelham Elliot",
          "loserId": "kelham-elliot",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Luke McCormack 3-1 Kelham Elliot"
        },
        {
          "round": "Last 16",
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "player2": "Lewis Ruston",
          "player2Id": "lewis-ruston",
          "winner": "Oliver Wilson",
          "winnerId": "oliver-wilson",
          "loser": "Lewis Ruston",
          "loserId": "lewis-ruston",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Oliver Wilson 3-0 Lewis Ruston"
        },
        {
          "round": "Last 16",
          "player1": "Alex McCowen",
          "player1Id": "alex-mccowen",
          "player2": "Tom Khan",
          "player2Id": "tom-khan",
          "winner": "Alex McCowen",
          "winnerId": "alex-mccowen",
          "loser": "Tom Khan",
          "loserId": "tom-khan",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Alex McCowen 3-1 Tom Khan"
        },
        {
          "round": "Last 16",
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "player2": "Finley Sanderson",
          "player2Id": "finley-sanderson",
          "winner": "Dan Harrison",
          "winnerId": "dan-harrison",
          "loser": "Finley Sanderson",
          "loserId": "finley-sanderson",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Dan Harrison 3-2 Finley Sanderson"
        },
        {
          "round": "Last 16",
          "player1": "Zach Hodgson",
          "player1Id": "zach-hodgson",
          "player2": "Dan Burton",
          "player2Id": "dan-burton",
          "winner": "Zach Hodgson",
          "winnerId": "zach-hodgson",
          "loser": "Dan Burton",
          "loserId": "dan-burton",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Zach Hodgson 3-1 Dan Burton"
        }
      ],
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "player2": "Jack Clucas",
          "player2Id": "jack-clucas",
          "winner": "Hugo Nilsson",
          "winnerId": "hugo-nilsson",
          "loser": "Jack Clucas",
          "loserId": "jack-clucas",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Hugo Nilsson 3-2 Jack Clucas"
        },
        {
          "round": "Quarter-Final",
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "player2": "Luke McCormack",
          "player2Id": "luke-mccormack",
          "winner": "Todd Haynes",
          "winnerId": "todd-haynes",
          "loser": "Luke McCormack",
          "loserId": "luke-mccormack",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Todd Haynes 3-0 Luke McCormack"
        },
        {
          "round": "Quarter-Final",
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "player2": "Alex McCowen",
          "player2Id": "alex-mccowen",
          "winner": "Oliver Wilson",
          "winnerId": "oliver-wilson",
          "loser": "Alex McCowen",
          "loserId": "alex-mccowen",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Oliver Wilson 3-0 Alex McCowen"
        },
        {
          "round": "Quarter-Final",
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "player2": "Zach Hodgson",
          "player2Id": "zach-hodgson",
          "winner": "Dan Harrison",
          "winnerId": "dan-harrison",
          "loser": "Zach Hodgson",
          "loserId": "zach-hodgson",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Dan Harrison 3-1 Zach Hodgson"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "winner": "Hugo Nilsson",
          "winnerId": "hugo-nilsson",
          "loser": "Todd Haynes",
          "loserId": "todd-haynes",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Hugo Nilsson 3-1 Todd Haynes"
        },
        {
          "round": "Semi-Final",
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "winner": "Oliver Wilson",
          "winnerId": "oliver-wilson",
          "loser": "Dan Harrison",
          "loserId": "dan-harrison",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Oliver Wilson 3-1 Dan Harrison"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "player2": "Oliver Wilson",
          "player2Id": "oliver-wilson",
          "winner": "Hugo Nilsson",
          "winnerId": "hugo-nilsson",
          "loser": "Oliver Wilson",
          "loserId": "oliver-wilson",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": true,
          "scoreDisplay": "Hugo Nilsson 3-2 Oliver Wilson",
          "source": "Roll of Honour (sheet had no Final score)"
        }
      ]
    },
    "conflicts": [
      "Group F: the James Buckby vs Sam Taylor match was recorded as '1-F' rather than a normal leg score — confirmed as a forfeit win for Buckby.",
      "Group F: that forfeit left Will Ellis, Dom Tofts and Dan Harrison tied on points with a head-to-head cycle (Tofts beat Harrison, Harrison beat Ellis, Ellis beat Tofts) — ranked by total leg difference (Ellis +6, Tofts +4, Harrison +2), confirmed as the correct tiebreak method.",
      "Group F has 7 entrants rather than the usual 6 — confirmed intentional, not an error.",
      "Parson's Plate Last 32 only had 4 of a possible 8 matches recorded — the rest of that round's Last 16 entrants appear to have had a bye straight through, kept as given.",
      "Parson's Plate Final score wasn't in the supplied sheet — used Roll of Honour's score (3-2) and inferred the runner-up as Oliver Wilson, the other Semi-Final winner."
    ],
    "seasonRecap": "Grab a cup of tea, this is going to be a long read.<br><br>\nWe had a record-shattering <strong>37 players</strong> this year (previous record: 27), with <strong>9 debutants</strong>. 36 of those 37 went into the knockouts, 16 into the Handley Cup and the rest making up the Parson's Plate.<br><br>\n<strong>Game of the group stage:</strong> Daniel Rushton vs Joe Ellett, 3-2 to Joe with a combined average of 135.6 — both players hitting 180s, with a 14-darter followed by a 16 and then a 20. Unreal effort lads.<br><br>\n<strong>Honourable mentions:</strong> James Buckby beating Will Ellis 3-1 with both players averaging around 65; Dan Harrison rolling back the years to win 3-2 over Will Ellis; Brad Truelove's leg reading 180, 26, 180, 75, (40 in 1); Curtis banishing his demons from last year with a whitewash of Castaldo.<br><br>\n<strong>Highest averages through the day, by group:</strong><br>\nGroup A — Oliver Burgess, 87.94 in a 3-1 win over Dan Rushton<br>\nGroup B — Morgan Shillito, 65.22 in a 3-1 win over Eddie Castaldo<br>\nGroup C — Dale Dennett, 63.51 in a 3-0 win over Fillip Brom<br>\nGroup D — Charlie Marshall, 92.02 in a 3-0 win over Todd Haynes (the highest single average of the day)<br>\nGroup E — Bradley Truelove, 65.35 in a 3-0 win over Hugo Nilsson<br>\nGroup F — James Buckby, 81.98 in a 3-0 win over Luke McCormack<br>\nKnockouts — Charlie Marshall, 82.26 in a 5-3 win over Oliver Burgess<br>\nPlate — Dan Harrison, 60.12 in a 3-1 win over Zach Hodgson<br><br>\n<strong>Game of the entire day</strong> has to be Charlie Marshall (82.26) 5-3 Oliver Burgess (79.17) in the winners' semi-final — Curtis Thorpe 4-1 Eddie Castaldo gets an honourable mention too.<br><br>\n<strong>180s hit:</strong> 43! 10 each from Morgan and Charlie, with 10 unique players hitting a 180 on the day. We also had 3 players average over 70 for the day: Charlie Marshall, Oliver Burgess and Dan Rushton.<br><br>\n<strong>High checkout:</strong> 148 by Charlie Marshall (Dale also hit a 146, his highest visit of the day).<br><br>\n<strong>Notable quick legs:</strong> Morgan Shillito 15, Oliver Burgess 15, Charlie Marshall 15 (x3), Oliver Burgess 14, James Buckby 14, Dan Rushton 14, Joe Ellett 14, Brad Truelove 13, Oliver Burgess 13, Charlie Marshall 13, Dan Rushton 13, Charlie Marshall 12.<br><br>\n<strong>Lowest single-game average:</strong> 31.05.<br><br>\n<strong>Dark Horse:</strong> Dan Rushton &nbsp;·&nbsp; <strong>Underperformer:</strong> Jamie Flint<br><br>\nAnd finally, a massive well done — <strong>Winner</strong> (#BackToBackToBackToBackToBackToBackToBackToBackToBackToBackToBack): Charlie Marshall. <strong>Runner-up:</strong> Morgan Shillito. <strong>Parson's Plate Winner:</strong> Hugo Nilsson.",
    "seasonSummary": "A record 37 players enter as Charlie Marshall beats Morgan Shillito 6-0 in the final for his 6th title, with Hugo Nilsson taking the Plate."
  },
  "25/26": {
    "format": "Group Stage + K.O.",
    "groups": {
      "Group A": [
        {
          "name": "Jono Downing",
          "id": "jono-downing",
          "played": 4,
          "points": 6
        },
        {
          "name": "Will Ellis",
          "id": "will-ellis",
          "played": 4,
          "points": 6
        },
        {
          "name": "Jack Clucas",
          "id": "jack-clucas",
          "played": 4,
          "points": 4
        },
        {
          "name": "Reuben Evans",
          "id": "reuben-evans",
          "played": 4,
          "points": 4
        },
        {
          "name": "Luke McCormack",
          "id": "luke-mccormack",
          "played": 4,
          "points": 0
        }
      ],
      "Group B": [
        {
          "name": "Josh Longden",
          "id": "josh-longden",
          "played": 5,
          "points": 8
        },
        {
          "name": "Finley Sanderson",
          "id": "finley-sanderson",
          "played": 5,
          "points": 6
        },
        {
          "name": "Ben Pellington",
          "id": "ben-pellington",
          "played": 5,
          "points": 4
        },
        {
          "name": "Dereece O'Hara",
          "id": "dereece-ohara",
          "played": 5,
          "points": 4
        },
        {
          "name": "Blake Longden",
          "id": "blake-longden",
          "played": 5,
          "points": 4
        },
        {
          "name": "Chris Ward",
          "id": "chris-ward",
          "played": 5,
          "points": 4
        }
      ],
      "Group C": [
        {
          "name": "Louis Bell",
          "id": "louis-bell",
          "played": 5,
          "points": 10
        },
        {
          "name": "Deck Ingber",
          "id": "deck-ingber",
          "played": 5,
          "points": 6
        },
        {
          "name": "Jamie Flint",
          "id": "jamie-flint",
          "played": 5,
          "points": 6
        },
        {
          "name": "Callum Woodcock",
          "id": "callum-woodcock",
          "played": 5,
          "points": 6
        },
        {
          "name": "Joe Ellett",
          "id": "joe-ellett",
          "played": 5,
          "points": 2
        },
        {
          "name": "Alex Wright",
          "id": "alex-wright",
          "played": 5,
          "points": 0
        }
      ],
      "Group D": [
        {
          "name": "Charlie Marshall",
          "id": "charlie-marshall",
          "played": 5,
          "points": 10
        },
        {
          "name": "Hedley-Paul Keegan",
          "id": "hedley-paul-keegan",
          "played": 5,
          "points": 6
        },
        {
          "name": "Jack Whiteley",
          "id": "jack-whiteley",
          "played": 5,
          "points": 6
        },
        {
          "name": "Olly Doherty",
          "id": "olly-doherty",
          "played": 5,
          "points": 4
        },
        {
          "name": "Jessie Sale",
          "id": "jessie-sale",
          "played": 5,
          "points": 4
        },
        {
          "name": "Caitlin Cope",
          "id": "catlin-cope",
          "played": 5,
          "points": 0
        }
      ],
      "Group E": [
        {
          "name": "Bradley Truelove",
          "id": "bradley-truelove",
          "played": 5,
          "points": 10
        },
        {
          "name": "Dale Dennett",
          "id": "dale-dennett",
          "played": 5,
          "points": 8
        },
        {
          "name": "Oliver Wilson",
          "id": "oliver-wilson",
          "played": 5,
          "points": 6
        },
        {
          "name": "Tom Hodder",
          "id": "tom-hodder",
          "played": 5,
          "points": 2
        },
        {
          "name": "Alex Howes",
          "id": "alex-howes",
          "played": 5,
          "points": 2
        },
        {
          "name": "Thomas Palmer",
          "id": "thomas-palmer",
          "played": 5,
          "points": 2
        }
      ],
      "Group F": [
        {
          "name": "Will North",
          "id": "will-north",
          "played": 5,
          "points": 10
        },
        {
          "name": "James Buckby",
          "id": "james-buckby",
          "played": 5,
          "points": 8
        },
        {
          "name": "Curtis Thorpe",
          "id": "curtis-thorpe",
          "played": 5,
          "points": 6
        },
        {
          "name": "Eddie Castaldo",
          "id": "eddie-castaldo",
          "played": 5,
          "points": 4
        },
        {
          "name": "Dan Harrison",
          "id": "dan-harrison",
          "played": 5,
          "points": 2
        },
        {
          "name": "Finley Nottingham",
          "id": "finley-nottingham",
          "played": 5,
          "points": 0
        }
      ],
      "Group G": [
        {
          "name": "Oliver Burgess",
          "id": "oliver-burgess",
          "played": 5,
          "points": 10
        },
        {
          "name": "Dominic Tofts",
          "id": "dom-tofts",
          "played": 5,
          "points": 6
        },
        {
          "name": "Billy Bennett",
          "id": "billy-bennett",
          "played": 5,
          "points": 6
        },
        {
          "name": "Mat Davies",
          "id": "matt-davies",
          "played": 5,
          "points": 6
        },
        {
          "name": "Todd Haynes",
          "id": "todd-haynes",
          "played": 5,
          "points": 2
        },
        {
          "name": "Will Burgess",
          "id": "will-burgess",
          "played": 5,
          "points": 0
        }
      ],
      "Group H": [
        {
          "name": "Dan Rushton",
          "id": "dan-rushton",
          "played": 5,
          "points": 10
        },
        {
          "name": "Morgan Shillito",
          "id": "morgan-shillito",
          "played": 5,
          "points": 8
        },
        {
          "name": "Hugo Nilsson",
          "id": "hugo-nilsson",
          "played": 5,
          "points": 6
        },
        {
          "name": "Dan Burton",
          "id": "dan-burton",
          "played": 5,
          "points": 4
        },
        {
          "name": "Kelham Elliot",
          "id": "kelham-elliot",
          "played": 5,
          "points": 2
        },
        {
          "name": "Tom Russell",
          "id": "tom-russell",
          "played": 5,
          "points": 0
        }
      ]
    },
    "groupFixtures": {
      "Group A": [
        {
          "player1": "Will Ellis",
          "player1Id": "will-ellis",
          "score1": 3,
          "player2": "Luke McCormack",
          "player2Id": "luke-mccormack",
          "score2": 1
        },
        {
          "player1": "Reuben Evans",
          "player1Id": "reuben-evans",
          "score1": 3,
          "player2": "Luke McCormack",
          "player2Id": "luke-mccormack",
          "score2": 0
        },
        {
          "player1": "Jono Downing",
          "player1Id": "jono-downing",
          "score1": 3,
          "player2": "Jack Clucas",
          "player2Id": "jack-clucas",
          "score2": 2
        },
        {
          "player1": "Will Ellis",
          "player1Id": "will-ellis",
          "score1": 3,
          "player2": "Reuben Evans",
          "player2Id": "reuben-evans",
          "score2": 1
        },
        {
          "player1": "Jono Downing",
          "player1Id": "jono-downing",
          "score1": 3,
          "player2": "Luke McCormack",
          "player2Id": "luke-mccormack",
          "score2": 0
        },
        {
          "player1": "Jack Clucas",
          "player1Id": "jack-clucas",
          "score1": 3,
          "player2": "Reuben Evans",
          "player2Id": "reuben-evans",
          "score2": 0
        },
        {
          "player1": "Jono Downing",
          "player1Id": "jono-downing",
          "score1": 3,
          "player2": "Will Ellis",
          "player2Id": "will-ellis",
          "score2": 0
        },
        {
          "player1": "Jack Clucas",
          "player1Id": "jack-clucas",
          "score1": 3,
          "player2": "Luke McCormack",
          "player2Id": "luke-mccormack",
          "score2": 0
        },
        {
          "player1": "Reuben Evans",
          "player1Id": "reuben-evans",
          "score1": 3,
          "player2": "Jono Downing",
          "player2Id": "jono-downing",
          "score2": 2
        },
        {
          "player1": "Will Ellis",
          "player1Id": "will-ellis",
          "score1": 3,
          "player2": "Jack Clucas",
          "player2Id": "jack-clucas",
          "score2": 2
        }
      ],
      "Group B": [
        {
          "player1": "Ben Pellington",
          "player1Id": "ben-pellington",
          "score1": 3,
          "player2": "Josh Longden",
          "player2Id": "josh-longden",
          "score2": 2
        },
        {
          "player1": "Ben Pellington",
          "player1Id": "ben-pellington",
          "score1": 3,
          "player2": "Dereece O'Hara",
          "player2Id": "dereece-ohara",
          "score2": 2
        },
        {
          "player1": "Josh Longden",
          "player1Id": "josh-longden",
          "score1": 3,
          "player2": "Blake Longden",
          "player2Id": "blake-longden",
          "score2": 1
        },
        {
          "player1": "Chris Ward",
          "player1Id": "chris-ward",
          "score1": 3,
          "player2": "Finley Sanderson",
          "player2Id": "finley-sanderson",
          "score2": 1
        },
        {
          "player1": "Blake Longden",
          "player1Id": "blake-longden",
          "score1": 3,
          "player2": "Ben Pellington",
          "player2Id": "ben-pellington",
          "score2": 2
        },
        {
          "player1": "Josh Longden",
          "player1Id": "josh-longden",
          "score1": 3,
          "player2": "Chris Ward",
          "player2Id": "chris-ward",
          "score2": 0
        },
        {
          "player1": "Finley Sanderson",
          "player1Id": "finley-sanderson",
          "score1": 3,
          "player2": "Dereece O'Hara",
          "player2Id": "dereece-ohara",
          "score2": 0
        },
        {
          "player1": "Dereece O'Hara",
          "player1Id": "dereece-ohara",
          "score1": 3,
          "player2": "Chris Ward",
          "player2Id": "chris-ward",
          "score2": 0
        },
        {
          "player1": "Finley Sanderson",
          "player1Id": "finley-sanderson",
          "score1": 3,
          "player2": "Blake Longden",
          "player2Id": "blake-longden",
          "score2": 1
        },
        {
          "player1": "Chris Ward",
          "player1Id": "chris-ward",
          "score1": 3,
          "player2": "Ben Pellington",
          "player2Id": "ben-pellington",
          "score2": 1
        },
        {
          "player1": "Josh Longden",
          "player1Id": "josh-longden",
          "score1": 3,
          "player2": "Finley Sanderson",
          "player2Id": "finley-sanderson",
          "score2": 1
        },
        {
          "player1": "Dereece O'Hara",
          "player1Id": "dereece-ohara",
          "score1": 3,
          "player2": "Blake Longden",
          "player2Id": "blake-longden",
          "score2": 1
        },
        {
          "player1": "Finley Sanderson",
          "player1Id": "finley-sanderson",
          "score1": 3,
          "player2": "Ben Pellington",
          "player2Id": "ben-pellington",
          "score2": 2
        },
        {
          "player1": "Josh Longden",
          "player1Id": "josh-longden",
          "score1": 3,
          "player2": "Dereece O'Hara",
          "player2Id": "dereece-ohara",
          "score2": 0
        },
        {
          "player1": "Blake Longden",
          "player1Id": "blake-longden",
          "score1": 3,
          "player2": "Chris Ward",
          "player2Id": "chris-ward",
          "score2": 1
        }
      ],
      "Group C": [
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 3,
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "score2": 1
        },
        {
          "player1": "Callum Woodcock",
          "player1Id": "callum-woodcock",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Louis Bell",
          "player1Id": "louis-bell",
          "score1": 3,
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "score2": 0
        },
        {
          "player1": "Callum Woodcock",
          "player1Id": "callum-woodcock",
          "score1": 3,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 1
        },
        {
          "player1": "Louis Bell",
          "player1Id": "louis-bell",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "score2": 0
        },
        {
          "player1": "Louis Bell",
          "player1Id": "louis-bell",
          "score1": 3,
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "score2": 2
        },
        {
          "player1": "Callum Woodcock",
          "player1Id": "callum-woodcock",
          "score1": 3,
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "score2": 0
        },
        {
          "player1": "Louis Bell",
          "player1Id": "louis-bell",
          "score1": 3,
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "score2": 2
        },
        {
          "player1": "Joe Ellett",
          "player1Id": "joe-ellett",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 2
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Callum Woodcock",
          "player2Id": "callum-woodcock",
          "score2": 2
        },
        {
          "player1": "Deck Ingber",
          "player1Id": "deck-ingber",
          "score1": 3,
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "score2": 1
        },
        {
          "player1": "Jamie Flint",
          "player1Id": "jamie-flint",
          "score1": 3,
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "score2": 0
        },
        {
          "player1": "Louis Bell",
          "player1Id": "louis-bell",
          "score1": 3,
          "player2": "Callum Woodcock",
          "player2Id": "callum-woodcock",
          "score2": 0
        }
      ],
      "Group D": [
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Caitlin Cope",
          "player2Id": "catlin-cope",
          "score2": 0
        },
        {
          "player1": "Olly Doherty",
          "player1Id": "olly-doherty",
          "score1": 3,
          "player2": "Caitlin Cope",
          "player2Id": "catlin-cope",
          "score2": 0
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Hedley-Paul Keegan",
          "player2Id": "hedley-paul-keegan",
          "score2": 0
        },
        {
          "player1": "Jessie Sale",
          "player1Id": "jessie-sale",
          "score1": 3,
          "player2": "Jack Whiteley",
          "player2Id": "jack-whiteley",
          "score2": 2
        },
        {
          "player1": "Hedley-Paul Keegan",
          "player1Id": "hedley-paul-keegan",
          "score1": 3,
          "player2": "Caitlin Cope",
          "player2Id": "catlin-cope",
          "score2": 0
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Jack Whiteley",
          "player2Id": "jack-whiteley",
          "score2": 0
        },
        {
          "player1": "Olly Doherty",
          "player1Id": "olly-doherty",
          "score1": 3,
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "score2": 2
        },
        {
          "player1": "Jack Whiteley",
          "player1Id": "jack-whiteley",
          "score1": 3,
          "player2": "Olly Doherty",
          "player2Id": "olly-doherty",
          "score2": 2
        },
        {
          "player1": "Hedley-Paul Keegan",
          "player1Id": "hedley-paul-keegan",
          "score1": 3,
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "score2": 0
        },
        {
          "player1": "Jack Whiteley",
          "player1Id": "jack-whiteley",
          "score1": 3,
          "player2": "Caitlin Cope",
          "player2Id": "catlin-cope",
          "score2": 0
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "score2": 0
        },
        {
          "player1": "Hedley-Paul Keegan",
          "player1Id": "hedley-paul-keegan",
          "score1": 3,
          "player2": "Olly Doherty",
          "player2Id": "olly-doherty",
          "score2": 1
        },
        {
          "player1": "Jessie Sale",
          "player1Id": "jessie-sale",
          "score1": 3,
          "player2": "Caitlin Cope",
          "player2Id": "catlin-cope",
          "score2": 0
        },
        {
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "score1": 3,
          "player2": "Olly Doherty",
          "player2Id": "olly-doherty",
          "score2": 0
        },
        {
          "player1": "Jack Whiteley",
          "player1Id": "jack-whiteley",
          "score1": 3,
          "player2": "Hedley-Paul Keegan",
          "player2Id": "hedley-paul-keegan",
          "score2": 2
        }
      ],
      "Group E": [
        {
          "player1": "Tom Hodder",
          "player1Id": "tom-hodder",
          "score1": 3,
          "player2": "Thomas Palmer",
          "player2Id": "thomas-palmer",
          "score2": 1
        },
        {
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "score1": 3,
          "player2": "Thomas Palmer",
          "player2Id": "thomas-palmer",
          "score2": 0
        },
        {
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "score1": 3,
          "player2": "Tom Hodder",
          "player2Id": "tom-hodder",
          "score2": 0
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Alex Howes",
          "player2Id": "alex-howes",
          "score2": 0
        },
        {
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "score1": 3,
          "player2": "Thomas Palmer",
          "player2Id": "thomas-palmer",
          "score2": 0
        },
        {
          "player1": "Alex Howes",
          "player1Id": "alex-howes",
          "score1": 3,
          "player2": "Tom Hodder",
          "player2Id": "tom-hodder",
          "score2": 1
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Oliver Wilson",
          "player2Id": "oliver-wilson",
          "score2": 2
        },
        {
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "score1": 3,
          "player2": "Alex Howes",
          "player2Id": "alex-howes",
          "score2": 1
        },
        {
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "score1": 3,
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "score2": 1
        },
        {
          "player1": "Thomas Palmer",
          "player1Id": "thomas-palmer",
          "score1": 3,
          "player2": "Alex Howes",
          "player2Id": "alex-howes",
          "score2": 2
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Tom Hodder",
          "player2Id": "tom-hodder",
          "score2": 1
        },
        {
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "score1": 3,
          "player2": "Oliver Wilson",
          "player2Id": "oliver-wilson",
          "score2": 1
        },
        {
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "score1": 3,
          "player2": "Thomas Palmer",
          "player2Id": "thomas-palmer",
          "score2": 0
        },
        {
          "player1": "Oliver Wilson",
          "player1Id": "oliver-wilson",
          "score1": 3,
          "player2": "Tom Hodder",
          "player2Id": "tom-hodder",
          "score2": 2
        },
        {
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "score1": 3,
          "player2": "Alex Howes",
          "player2Id": "alex-howes",
          "score2": 0
        }
      ],
      "Group F": [
        {
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "score1": 3,
          "player2": "Finley Nottingham",
          "player2Id": "finley-nottingham",
          "score2": 0
        },
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 3,
          "player2": "Finley Nottingham",
          "player2Id": "finley-nottingham",
          "score2": 0
        },
        {
          "player1": "Will North",
          "player1Id": "will-north",
          "score1": 3,
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "score2": 0
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 3,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 2
        },
        {
          "player1": "Will North",
          "player1Id": "will-north",
          "score1": 3,
          "player2": "Finley Nottingham",
          "player2Id": "finley-nottingham",
          "score2": 0
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "score2": 0
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 3,
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "score2": 2
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "score2": 1
        },
        {
          "player1": "Will North",
          "player1Id": "will-north",
          "score1": 3,
          "player2": "James Buckby",
          "player2Id": "james-buckby",
          "score2": 2
        },
        {
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "score1": 3,
          "player2": "Finley Nottingham",
          "player2Id": "finley-nottingham",
          "score2": 0
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 3,
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "score2": 0
        },
        {
          "player1": "Will North",
          "player1Id": "will-north",
          "score1": 3,
          "player2": "Eddie Castaldo",
          "player2Id": "eddie-castaldo",
          "score2": 1
        },
        {
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "score1": 3,
          "player2": "Finley Nottingham",
          "player2Id": "finley-nottingham",
          "score2": 0
        },
        {
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "score1": 3,
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "score2": 0
        },
        {
          "player1": "Will North",
          "player1Id": "will-north",
          "score1": 3,
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "score2": 1
        }
      ],
      "Group G": [
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Mat Davies",
          "player2Id": "matt-davies",
          "score2": 0
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Billy Bennett",
          "player2Id": "billy-bennett",
          "score2": 0
        },
        {
          "player1": "Mat Davies",
          "player1Id": "matt-davies",
          "score1": 3,
          "player2": "Dominic Tofts",
          "player2Id": "dom-tofts",
          "score2": 1
        },
        {
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "score1": 3,
          "player2": "Will Burgess",
          "player2Id": "will-burgess",
          "score2": 0
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Dominic Tofts",
          "player2Id": "dom-tofts",
          "score2": 1
        },
        {
          "player1": "Mat Davies",
          "player1Id": "matt-davies",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 2
        },
        {
          "player1": "Billy Bennett",
          "player1Id": "billy-bennett",
          "score1": 3,
          "player2": "Will Burgess",
          "player2Id": "will-burgess",
          "score2": 1
        },
        {
          "player1": "Billy Bennett",
          "player1Id": "billy-bennett",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 2
        },
        {
          "player1": "Dominic Tofts",
          "player1Id": "dom-tofts",
          "score1": 3,
          "player2": "Will Burgess",
          "player2Id": "will-burgess",
          "score2": 0
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 1
        },
        {
          "player1": "Mat Davies",
          "player1Id": "matt-davies",
          "score1": 3,
          "player2": "Will Burgess",
          "player2Id": "will-burgess",
          "score2": 1
        },
        {
          "player1": "Dominic Tofts",
          "player1Id": "dom-tofts",
          "score1": 3,
          "player2": "Billy Bennett",
          "player2Id": "billy-bennett",
          "score2": 1
        },
        {
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "score1": 3,
          "player2": "Will Burgess",
          "player2Id": "will-burgess",
          "score2": 0
        },
        {
          "player1": "Billy Bennett",
          "player1Id": "billy-bennett",
          "score1": 3,
          "player2": "Mat Davies",
          "player2Id": "matt-davies",
          "score2": 0
        },
        {
          "player1": "Dominic Tofts",
          "player1Id": "dom-tofts",
          "score1": 3,
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "score2": 0
        }
      ],
      "Group H": [
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Tom Russell",
          "player2Id": "tom-russell",
          "score2": 0
        },
        {
          "player1": "Dan Rushton",
          "player1Id": "dan-rushton",
          "score1": 3,
          "player2": "Tom Russell",
          "player2Id": "tom-russell",
          "score2": 0
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Dan Burton",
          "player2Id": "dan-burton",
          "score2": 0
        },
        {
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "score1": 3,
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "score2": 0
        },
        {
          "player1": "Dan Burton",
          "player1Id": "dan-burton",
          "score1": 3,
          "player2": "Tom Russell",
          "player2Id": "tom-russell",
          "score2": 0
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Hugo Nilsson",
          "player2Id": "hugo-nilsson",
          "score2": 1
        },
        {
          "player1": "Dan Rushton",
          "player1Id": "dan-rushton",
          "score1": 3,
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "score2": 0
        },
        {
          "player1": "Dan Rushton",
          "player1Id": "dan-rushton",
          "score1": 3,
          "player2": "Hugo Nilsson",
          "player2Id": "hugo-nilsson",
          "score2": 0
        },
        {
          "player1": "Dan Burton",
          "player1Id": "dan-burton",
          "score1": 3,
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "score2": 2
        },
        {
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "score1": 3,
          "player2": "Tom Russell",
          "player2Id": "tom-russell",
          "score2": 2
        },
        {
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "score1": 3,
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "score2": 0
        },
        {
          "player1": "Dan Rushton",
          "player1Id": "dan-rushton",
          "score1": 3,
          "player2": "Dan Burton",
          "player2Id": "dan-burton",
          "score2": 0
        },
        {
          "player1": "Kelham Elliot",
          "player1Id": "kelham-elliot",
          "score1": 3,
          "player2": "Tom Russell",
          "player2Id": "tom-russell",
          "score2": 0
        },
        {
          "player1": "Dan Rushton",
          "player1Id": "dan-rushton",
          "score1": 3,
          "player2": "Morgan Shillito",
          "player2Id": "morgan-shillito",
          "score2": 2
        },
        {
          "player1": "Hugo Nilsson",
          "player1Id": "hugo-nilsson",
          "score1": 3,
          "player2": "Dan Burton",
          "player2Id": "dan-burton",
          "score2": 1
        }
      ]
    },
    "cupBracket": {
      "Last 24": [
        {
          "round": "Last 24",
          "player1": "James Buckby",
          "player1Id": "james-buckby",
          "player2": "Ben Pellington",
          "player2Id": "ben-pellington",
          "winner": "James Buckby",
          "winnerId": "james-buckby",
          "loser": "Ben Pellington",
          "loserId": "ben-pellington",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "James Buckby 4-0 Ben Pellington"
        },
        {
          "round": "Last 24",
          "player1": "Billy Bennett",
          "player1Id": "billy-bennett",
          "player2": "Deck Ingber",
          "player2Id": "deck-ingber",
          "winner": "Billy Bennett",
          "winnerId": "billy-bennett",
          "loser": "Deck Ingber",
          "loserId": "deck-ingber",
          "winnerLegs": 4,
          "loserLegs": 3,
          "scoreReconstructed": false,
          "scoreDisplay": "Billy Bennett 4-3 Deck Ingber"
        },
        {
          "round": "Last 24",
          "player1": "Dominic Tofts",
          "player1Id": "dom-tofts",
          "player2": "Jamie Flint",
          "player2Id": "jamie-flint",
          "winner": "Dominic Tofts",
          "winnerId": "dom-tofts",
          "loser": "Jamie Flint",
          "loserId": "jamie-flint",
          "winnerLegs": 4,
          "loserLegs": 3,
          "scoreReconstructed": false,
          "scoreDisplay": "Dominic Tofts 4-3 Jamie Flint"
        },
        {
          "round": "Last 24",
          "player1": "Curtis Thorpe",
          "player1Id": "curtis-thorpe",
          "player2": "Finley Sanderson",
          "player2Id": "finley-sanderson",
          "winner": "Curtis Thorpe",
          "winnerId": "curtis-thorpe",
          "loser": "Finley Sanderson",
          "loserId": "finley-sanderson",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Curtis Thorpe 4-0 Finley Sanderson"
        },
        {
          "round": "Last 24",
          "player1": "Will Ellis",
          "player1Id": "will-ellis",
          "player2": "Oliver Wilson",
          "player2Id": "oliver-wilson",
          "winner": "Will Ellis",
          "winnerId": "will-ellis",
          "loser": "Oliver Wilson",
          "loserId": "oliver-wilson",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Will Ellis 4-1 Oliver Wilson"
        },
        {
          "round": "Last 24",
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "player2": "Jack Whiteley",
          "player2Id": "jack-whiteley",
          "winner": "Morgan Shillito",
          "winnerId": "morgan-shillito",
          "loser": "Jack Whiteley",
          "loserId": "jack-whiteley",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Morgan Shillito 4-1 Jack Whiteley"
        },
        {
          "round": "Last 24",
          "player1": "Dale Dennett",
          "player1Id": "dale-dennett",
          "player2": "Jack Clucas",
          "player2Id": "jack-clucas",
          "winner": "Dale Dennett",
          "winnerId": "dale-dennett",
          "loser": "Jack Clucas",
          "loserId": "jack-clucas",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Dale Dennett 4-2 Jack Clucas"
        },
        {
          "round": "Last 24",
          "player1": "Hedley-Paul Keegan",
          "player1Id": "hedley-paul-keegan",
          "player2": "Hugo Nilsson",
          "player2Id": "hugo-nilsson",
          "winner": "Hedley-Paul Keegan",
          "winnerId": "hedley-paul-keegan",
          "loser": "Hugo Nilsson",
          "loserId": "hugo-nilsson",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Hedley-Paul Keegan 4-1 Hugo Nilsson"
        }
      ],
      "Last 16": [
        {
          "round": "Last 16",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "James Buckby",
          "player2Id": "james-buckby",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "James Buckby",
          "loserId": "james-buckby",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 4-1 James Buckby"
        },
        {
          "round": "Last 16",
          "player1": "Bradley Truelove",
          "player1Id": "bradley-truelove",
          "player2": "Billy Bennett",
          "player2Id": "billy-bennett",
          "winner": "Bradley Truelove",
          "winnerId": "bradley-truelove",
          "loser": "Billy Bennett",
          "loserId": "billy-bennett",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Bradley Truelove 4-0 Billy Bennett"
        },
        {
          "round": "Last 16",
          "player1": "Dominic Tofts",
          "player1Id": "dom-tofts",
          "player2": "Jono Downing",
          "player2Id": "jono-downing",
          "winner": "Dominic Tofts",
          "winnerId": "dom-tofts",
          "loser": "Jono Downing",
          "loserId": "jono-downing",
          "winnerLegs": 4,
          "loserLegs": 3,
          "scoreReconstructed": false,
          "scoreDisplay": "Dominic Tofts 4-3 Jono Downing"
        },
        {
          "round": "Last 16",
          "player1": "Dan Rushton",
          "player1Id": "dan-rushton",
          "player2": "Curtis Thorpe",
          "player2Id": "curtis-thorpe",
          "winner": "Dan Rushton",
          "winnerId": "dan-rushton",
          "loser": "Curtis Thorpe",
          "loserId": "curtis-thorpe",
          "winnerLegs": 4,
          "loserLegs": 3,
          "scoreReconstructed": false,
          "scoreDisplay": "Dan Rushton 4-3 Curtis Thorpe"
        },
        {
          "round": "Last 16",
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "player2": "Will Ellis",
          "player2Id": "will-ellis",
          "winner": "Oliver Burgess",
          "winnerId": "oliver-burgess",
          "loser": "Will Ellis",
          "loserId": "will-ellis",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Oliver Burgess 4-0 Will Ellis"
        },
        {
          "round": "Last 16",
          "player1": "Morgan Shillito",
          "player1Id": "morgan-shillito",
          "player2": "Josh Longden",
          "player2Id": "josh-longden",
          "winner": "Morgan Shillito",
          "winnerId": "morgan-shillito",
          "loser": "Josh Longden",
          "loserId": "josh-longden",
          "winnerLegs": 4,
          "loserLegs": 3,
          "scoreReconstructed": false,
          "scoreDisplay": "Morgan Shillito 4-3 Josh Longden"
        },
        {
          "round": "Last 16",
          "player1": "Louis Bell",
          "player1Id": "louis-bell",
          "player2": "Dale Dennett",
          "player2Id": "dale-dennett",
          "winner": "Louis Bell",
          "winnerId": "louis-bell",
          "loser": "Dale Dennett",
          "loserId": "dale-dennett",
          "winnerLegs": 4,
          "loserLegs": 3,
          "scoreReconstructed": false,
          "scoreDisplay": "Louis Bell 4-3 Dale Dennett"
        },
        {
          "round": "Last 16",
          "player1": "Will North",
          "player1Id": "will-north",
          "player2": "Hedley-Paul Keegan",
          "player2Id": "hedley-paul-keegan",
          "winner": "Will North",
          "winnerId": "will-north",
          "loser": "Hedley-Paul Keegan",
          "loserId": "hedley-paul-keegan",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Will North 4-0 Hedley-Paul Keegan"
        }
      ],
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Bradley Truelove",
          "player2Id": "bradley-truelove",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Bradley Truelove",
          "loserId": "bradley-truelove",
          "winnerLegs": 5,
          "loserLegs": 4,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 5-4 Bradley Truelove"
        },
        {
          "round": "Quarter-Final",
          "player1": "Dominic Tofts",
          "player1Id": "dom-tofts",
          "player2": "Dan Rushton",
          "player2Id": "dan-rushton",
          "winner": "Dominic Tofts",
          "winnerId": "dom-tofts",
          "loser": "Dan Rushton",
          "loserId": "dan-rushton",
          "winnerLegs": 5,
          "loserLegs": 3,
          "scoreReconstructed": false,
          "scoreDisplay": "Dominic Tofts 5-3 Dan Rushton"
        },
        {
          "round": "Quarter-Final",
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "player2": "Morgan Shillito",
          "player2Id": "morgan-shillito",
          "winner": "Oliver Burgess",
          "winnerId": "oliver-burgess",
          "loser": "Morgan Shillito",
          "loserId": "morgan-shillito",
          "winnerLegs": 5,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Oliver Burgess 5-1 Morgan Shillito"
        },
        {
          "round": "Quarter-Final",
          "player1": "Louis Bell",
          "player1Id": "louis-bell",
          "player2": "Will North",
          "player2Id": "will-north",
          "winner": "Louis Bell",
          "winnerId": "louis-bell",
          "loser": "Will North",
          "loserId": "will-north",
          "winnerLegs": 5,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Louis Bell 5-2 Will North"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Dominic Tofts",
          "player2Id": "dom-tofts",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Dominic Tofts",
          "loserId": "dom-tofts",
          "winnerLegs": 6,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 6-1 Dominic Tofts"
        },
        {
          "round": "Semi-Final",
          "player1": "Oliver Burgess",
          "player1Id": "oliver-burgess",
          "player2": "Louis Bell",
          "player2Id": "louis-bell",
          "winner": "Oliver Burgess",
          "winnerId": "oliver-burgess",
          "loser": "Louis Bell",
          "loserId": "louis-bell",
          "winnerLegs": 6,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Oliver Burgess 6-1 Louis Bell"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Charlie Marshall",
          "player1Id": "charlie-marshall",
          "player2": "Oliver Burgess",
          "player2Id": "oliver-burgess",
          "winner": "Charlie Marshall",
          "winnerId": "charlie-marshall",
          "loser": "Oliver Burgess",
          "loserId": "oliver-burgess",
          "winnerLegs": 7,
          "loserLegs": 4,
          "scoreReconstructed": false,
          "scoreDisplay": "Charlie Marshall 7-4 Oliver Burgess"
        }
      ]
    },
    "plateBracket": {
      "Last 24": [
        {
          "round": "Last 24",
          "player1": "Thomas Palmer",
          "player1Id": "thomas-palmer",
          "player2": "Jessie Sale",
          "player2Id": "jessie-sale",
          "winner": "Thomas Palmer",
          "winnerId": "thomas-palmer",
          "loser": "Jessie Sale",
          "loserId": "jessie-sale",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Thomas Palmer 3-1 Jessie Sale"
        },
        {
          "round": "Last 24",
          "player1": "Alex Howes",
          "player1Id": "alex-howes",
          "player2": "Chris Ward",
          "player2Id": "chris-ward",
          "winner": "Alex Howes",
          "winnerId": "alex-howes",
          "loser": "Chris Ward",
          "loserId": "chris-ward",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Alex Howes 3-0 Chris Ward"
        },
        {
          "round": "Last 24",
          "player1": "Kelham Elliot",
          "player1Id": "kelham-elliot",
          "player2": "Caitlin Cope",
          "player2Id": "catlin-cope",
          "winner": "Kelham Elliot",
          "winnerId": "kelham-elliot",
          "loser": "Caitlin Cope",
          "loserId": "catlin-cope",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Kelham Elliot 3-2 Caitlin Cope"
        },
        {
          "round": "Last 24",
          "player1": "Finley Nottingham",
          "player1Id": "finley-nottingham",
          "player2": "Luke McCormack",
          "player2Id": "luke-mccormack",
          "winner": "Finley Nottingham",
          "winnerId": "finley-nottingham",
          "loser": "Luke McCormack",
          "loserId": "luke-mccormack",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Finley Nottingham 3-0 Luke McCormack"
        },
        {
          "round": "Last 24",
          "player1": "Todd Haynes",
          "player1Id": "todd-haynes",
          "player2": "Alex Wright",
          "player2Id": "alex-wright",
          "winner": "Todd Haynes",
          "winnerId": "todd-haynes",
          "loser": "Alex Wright",
          "loserId": "alex-wright",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Todd Haynes 3-0 Alex Wright"
        },
        {
          "round": "Last 24",
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "player2": "Will Burgess",
          "player2Id": "will-burgess",
          "winner": "Dan Harrison",
          "winnerId": "dan-harrison",
          "loser": "Will Burgess",
          "loserId": "will-burgess",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Dan Harrison 3-0 Will Burgess"
        },
        {
          "round": "Last 24",
          "player1": "Joe Ellett",
          "player1Id": "joe-ellett",
          "player2": "Tom Russell",
          "player2Id": "tom-russell",
          "winner": "Joe Ellett",
          "winnerId": "joe-ellett",
          "loser": "Tom Russell",
          "loserId": "tom-russell",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Joe Ellett 3-0 Tom Russell"
        }
      ],
      "Last 16": [
        {
          "round": "Last 16",
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "player2": "Thomas Palmer",
          "player2Id": "thomas-palmer",
          "winner": "Eddie Castaldo",
          "winnerId": "eddie-castaldo",
          "loser": "Thomas Palmer",
          "loserId": "thomas-palmer",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Eddie Castaldo 3-0 Thomas Palmer"
        },
        {
          "round": "Last 16",
          "player1": "Callum Woodcock",
          "player1Id": "callum-woodcock",
          "player2": "Alex Howes",
          "player2Id": "alex-howes",
          "winner": "Callum Woodcock",
          "winnerId": "callum-woodcock",
          "loser": "Alex Howes",
          "loserId": "alex-howes",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Callum Woodcock 3-0 Alex Howes"
        },
        {
          "round": "Last 16",
          "player1": "Dereece O'Hara",
          "player1Id": "dereece-ohara",
          "player2": "Kelham Elliot",
          "player2Id": "kelham-elliot",
          "winner": "Dereece O'Hara",
          "winnerId": "dereece-ohara",
          "loser": "Kelham Elliot",
          "loserId": "kelham-elliot",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Dereece O'Hara 3-0 Kelham Elliot"
        },
        {
          "round": "Last 16",
          "player1": "Mat Davies",
          "player1Id": "matt-davies",
          "player2": "Finley Nottingham",
          "player2Id": "finley-nottingham",
          "winner": "Mat Davies",
          "winnerId": "matt-davies",
          "loser": "Finley Nottingham",
          "loserId": "finley-nottingham",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Mat Davies 3-0 Finley Nottingham"
        },
        {
          "round": "Last 16",
          "player1": "Reuben Evans",
          "player1Id": "reuben-evans",
          "player2": "Todd Haynes",
          "player2Id": "todd-haynes",
          "winner": "Reuben Evans",
          "winnerId": "reuben-evans",
          "loser": "Todd Haynes",
          "loserId": "todd-haynes",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Reuben Evans 3-0 Todd Haynes"
        },
        {
          "round": "Last 16",
          "player1": "Blake Longden",
          "player1Id": "blake-longden",
          "player2": "Dan Burton",
          "player2Id": "dan-burton",
          "winner": "Blake Longden",
          "winnerId": "blake-longden",
          "loser": "Dan Burton",
          "loserId": "dan-burton",
          "winnerLegs": 3,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Blake Longden 3-0 Dan Burton"
        },
        {
          "round": "Last 16",
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "player2": "Olly Doherty",
          "player2Id": "olly-doherty",
          "winner": "Dan Harrison",
          "winnerId": "dan-harrison",
          "loser": "Olly Doherty",
          "loserId": "olly-doherty",
          "winnerLegs": 3,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Dan Harrison 3-2 Olly Doherty"
        },
        {
          "round": "Last 16",
          "player1": "Joe Ellett",
          "player1Id": "joe-ellett",
          "player2": "Tom Hodder",
          "player2Id": "tom-hodder",
          "winner": "Joe Ellett",
          "winnerId": "joe-ellett",
          "loser": "Tom Hodder",
          "loserId": "tom-hodder",
          "winnerLegs": 3,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Joe Ellett 3-1 Tom Hodder"
        }
      ],
      "Quarter-Final": [
        {
          "round": "Quarter-Final",
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "player2": "Callum Woodcock",
          "player2Id": "callum-woodcock",
          "winner": "Eddie Castaldo",
          "winnerId": "eddie-castaldo",
          "loser": "Callum Woodcock",
          "loserId": "callum-woodcock",
          "winnerLegs": 4,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Eddie Castaldo 4-1 Callum Woodcock"
        },
        {
          "round": "Quarter-Final",
          "player1": "Dereece O'Hara",
          "player1Id": "dereece-ohara",
          "player2": "Mat Davies",
          "player2Id": "matt-davies",
          "winner": "Dereece O'Hara",
          "winnerId": "dereece-ohara",
          "loser": "Mat Davies",
          "loserId": "matt-davies",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Dereece O'Hara 4-2 Mat Davies"
        },
        {
          "round": "Quarter-Final",
          "player1": "Reuben Evans",
          "player1Id": "reuben-evans",
          "player2": "Blake Longden",
          "player2Id": "blake-longden",
          "winner": "Reuben Evans",
          "winnerId": "reuben-evans",
          "loser": "Blake Longden",
          "loserId": "blake-longden",
          "winnerLegs": 4,
          "loserLegs": 3,
          "scoreReconstructed": false,
          "scoreDisplay": "Reuben Evans 4-3 Blake Longden"
        },
        {
          "round": "Quarter-Final",
          "player1": "Dan Harrison",
          "player1Id": "dan-harrison",
          "player2": "Joe Ellett",
          "player2Id": "joe-ellett",
          "winner": "Dan Harrison",
          "winnerId": "dan-harrison",
          "loser": "Joe Ellett",
          "loserId": "joe-ellett",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Dan Harrison 4-2 Joe Ellett"
        }
      ],
      "Semi-Final": [
        {
          "round": "Semi-Final",
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "player2": "Dereece O'Hara",
          "player2Id": "dereece-ohara",
          "winner": "Eddie Castaldo",
          "winnerId": "eddie-castaldo",
          "loser": "Dereece O'Hara",
          "loserId": "dereece-ohara",
          "winnerLegs": 4,
          "loserLegs": 0,
          "scoreReconstructed": false,
          "scoreDisplay": "Eddie Castaldo 4-0 Dereece O'Hara"
        },
        {
          "round": "Semi-Final",
          "player1": "Reuben Evans",
          "player1Id": "reuben-evans",
          "player2": "Dan Harrison",
          "player2Id": "dan-harrison",
          "winner": "Reuben Evans",
          "winnerId": "reuben-evans",
          "loser": "Dan Harrison",
          "loserId": "dan-harrison",
          "winnerLegs": 4,
          "loserLegs": 2,
          "scoreReconstructed": false,
          "scoreDisplay": "Reuben Evans 4-2 Dan Harrison"
        }
      ],
      "Final": [
        {
          "round": "Final",
          "player1": "Eddie Castaldo",
          "player1Id": "eddie-castaldo",
          "player2": "Reuben Evans",
          "player2Id": "reuben-evans",
          "winner": "Eddie Castaldo",
          "winnerId": "eddie-castaldo",
          "loser": "Reuben Evans",
          "loserId": "reuben-evans",
          "winnerLegs": 5,
          "loserLegs": 1,
          "scoreReconstructed": false,
          "scoreDisplay": "Eddie Castaldo 5-1 Reuben Evans"
        }
      ]
    },
    "conflicts": [
      "Group standings were cross-checked win-for-win against fixture-level data supplied afterward — every group matched exactly, so the original standings order (already correctly tie-broken by leg difference) has been kept as-is.",
      "Parson's Plate Last 24 only had 7 of a possible 8 matches recorded — 9 Last 16 entrants had a bye straight through, consistent with the pattern seen in 24/25.",
      "Handley Cup Final (Marshall 7-4 Burgess) matches the existing Roll of Honour record exactly."
    ],
    "seasonRecap": "<strong>161 games played total!</strong> Here are some of the highlights.<br><br>\n<strong>180s hit:</strong> a whopping 52 180s hit! 20 of the 47 players hit a max on the day, with the top 3 being Charlie (12), Morgan (7) and James (6).<br><br>\n<strong>Ton Plus Outs:</strong> 12 players hit a ton-plus out! Highest was Mr Rushton with a 130 effort, Hodder in 2nd with a 124 on the bull, and Hugo 3rd with a 118.<br><br>\n<strong>Dark Horses:</strong> impossible to pick just one, so shoutouts to Jono Downing, Josh Longden and Billy Bennett for all making it to the Last 16; birthday boy Dom Tofts for reaching the semi-final (\"I haven't averaged 60 all day\"); and Reuben Evans for reaching the Plate final.<br><br>\n<strong>Underperformers:</strong> Connor Bowler and Zach Hodgson, for picking a trip to the Cotswolds/Romania over the Handley Cup.<br><br>\n<strong>Games of the Groups</strong><br>\n<u>Group A</u> — Clucas rolling back the years in a 3-0 whitewash of Plate finalist Reuben, life in the old dog yet. Jono coming from 2-0 down to beat Clucas 3-2, stones.<br>\n<u>Group B</u> — Josh and Blake battled it out in a family affair, Josh coming out the victor. Josh also with an impressive win over Chris Ward with a 65+ average.<br>\n<u>Group C</u> — Jamie Flint 3-2 Callum Woodcock: despite starting with a 19 and a 21-darter, Flint followed with a 29.8-scoring leg to leave 203 after 28 darts. Ingber also beat Jamie 3-1 to reclaim the title of Donny's number 2. Woodcock hit a 60 average in 3 of his 5 games, good form heading into the varsity qualifiers.<br>\n<u>Group D</u> — the first ever all-female clash at the Handley Cup after 8 years, Jessie Sale beat Caitlin Cope. Marshall's 3-0 win with an 85 average was the highest of the group stage — boring.<br>\n<u>Group E</u> — shithouse central: Dennett came back from 2-0 down to beat Wilson 3-2, Wilson missing more than a few match darts. Truelove laid down a marker with a 3-0 over Hodder on a 67.30 average.<br>\n<u>Group F</u> — the group of death, 4 of the 6 players inside the top 8 running averages going into the KOs. Curtis Thorpe (61.67) beat Eddie Castaldo (60.51) 3-1. Eddie averaged 80.52 in a whitewash of Dan Harrison. Will North found form again, not dropping a game in a group of Harrison, Thorpe, Buckby, Castaldo and Nottingham.<br>\n<u>Group G</u> — OPB didn't drop a game, only 2 legs in the groups, to Tofts and Haynes. Haynes and Bennett fought a tight contest for the last KO spot, settled with a 26-darter on throw.<br>\n<u>Group H</u> — Kel did ask \"why the fuck is Dan Burton above me in the rankings\" — Burton took the spoils in a classic 3-2. Game of the Groups: Dan Rushton (76.79) beat Morgan Shillito (82.70) 3-2.<br><br>\n<strong>Parson's Plate</strong><br>\nShoutout to Kel and Caitlin for their 3-2 game taking only 55 minutes. Game of the Plate was the quarter-final between Castaldo and Woodcock — no leg over 24 darts, both averaging north of 60, Eddie taking the tie 4-1. Harrison now with back-to-back Plate semi-finals, one day mate. Shoutout debutant Reuben for reaching the final, but no one was stopping the winner today: Eddie Castaldo, dropping just 2 legs including a 72.54 average in the final, the 5th highest average of the day.<br><br>\n<strong>Handley Cup</strong><br>\n<u>Last 24</u> — Billy Bennett came back from 3-1 down to beat Deck Ingber and book his place in the Last 16, sealing it with a 20-darter. A battle of the old guard saw Dom topple Flint 4-3 despite a 39-dart leg from Flint to force a decider.<br>\n<u>Last 16</u> — 4-3 was the most common scoreline, with heart-breaking last legs for Thorpe, Dennett, Josh and Jono. Marshall showed why he's still the man to beat, with finishes of 72, 32, 107 and 116 to beat Buckby, who averaged 88.26 — brutal draw to say the least.<br>\n<u>Quarters</u> — Bradley Truelove stormed to a 4-3 lead with back-to-back 16-darters, daring to dream — Charlie showed his class with a 14 to hold and an 18 to break to seal the win. Shillito, Rushton and North all fell at the quarter-final stage.<br>\n<u>Semis</u> — two 6-1 victories for OPB and Chaz over debutant Louis Bell and birthday boy (34 years old) Dom Tofts.<br><br>\n<strong>The Final</strong><br>\nWhat a classic — maybe the best game in Handley Cup history, if you don't count the hat-trick of wins Thorpe boasts over Castaldo. The Fire and OPB served up a classic, with the first 5 legs going 14, 14, 13, 17, 17. Both players refused to buckle, locked at 4-4 with 8 holds of throw — but once again, like Taylor at the Matchplay, Marshall found another level, holding in 21 before breaking in 16 and clinching his 7th Handley Cup with a 17-darter on double 1, leaving 81 after just 9 darts. Game shot and the match — Charlie Marshall becomes the BackToBackToBackToBackToBackToBackToBack Handley Cup 2026 Champion.",
    "seasonSummary": "Charlie Marshall wins a 7-4 classic over Oliver Burgess for his 7th straight Handley Cup, while Eddie Castaldo claims the Parson's Plate — 161 games and 52 180s across a record 47-player field."
  }
};
