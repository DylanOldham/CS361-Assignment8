let fs = require("fs");



// Constants ----------------------------------------------------

const SCORES_FILE_LOCATION = "./scores.txt"
const BACKUP_FILE_LOCATION = "./backup.txt"



// Mutable State

let scores = {
    wins: 0,
    losses: 0,
};



// Support Functions ---------------------------------------------

const handleErr = (err) => {
    err && console.log(err.message);
    return !err;
}

const resetScores = () => {
    scores.wins = 0;
    scores.losses = 0;
}

const writeScores = () => {

    let scoresString = `Wins: ${scores.wins} Losses: ${scores.losses}`;

    fs.writeFile(SCORES_FILE_LOCATION, scoresString, (err) => {
        if (handleErr(err)) {
            console.log(`Updated scores: ${scoresString}`);
        }
    });
}

const backupScoresToDisk = () => {

    const scoresJSON = JSON.stringify(scores);

    fs.writeFile(BACKUP_FILE_LOCATION, scoresJSON, (err) => {
        if (handleErr(err)) console.log(`Backed up scores: ${scoresJSON}`);
    });
}

const loadBackupScores = () => {
    fs.readFile(BACKUP_FILE_LOCATION, (err, data) => {
        handleErr(err);
        scores = JSON.parse(data.toString());
    })
}

const update = () => {

    fs.readFile(SCORES_FILE_LOCATION, (err, data) => {

        handleErr(err);

        let res = data.toString();

        switch (res) {
            case "Start":
                resetScores();
                break;
            case "W1":
                scores.wins++;
                break;
            case "L1":
                scores.losses++;
                break;
            default:
                break;
        }

        backupScoresToDisk();

        writeScores();

        setTimeout(update, 200);
    });

}



// Start point --------------------------------------------------

loadBackupScores();
update();