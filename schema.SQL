Match(matchID: CHAR(12), teamH: CHAR(3) NOT NULL UNIQUE, teamA: CHAR(3) NOT NULL UNIQUE, score: CHAR (3) NOT NULL, date: DATE NOT NULL);
Prediction(predictionID: CHAR(12), teamH: CHAR(3) NOT NULL UNIQUE, teamA: CHAR(3) NOT NULL UNIQUE, score: CHAR (3) NOT NULL, date: DATE NOT NULL);
/* add goalscorers to schema*/