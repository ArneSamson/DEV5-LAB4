const Score = require('../../../models/scoreModel.js');

const index = async (req, res) => {
    let scores = await Score.find({});

    res.json({
        status: "success",
        message: "GET all scores",
        data: [{
            scores: scores,
        }],
    });
};

const create = async (req, res) => {
    let team = req.body.team;
    let score = req.body.score;
    let s = new Score;
    s.team = team;
    s.score = score;
    await s.save();

    res.json({
        status: "success",
        message: "POST a score",
        data: [
            {
                score: s,
            }
        ],
    });
}

const update = async (req, res) => {
    const {team} = req.params;
    const newScore = req.body.score;

    try{
        // Find the existing score for the specified team
        let existingScore = await Score.findOne({ team: team });

        // If the team doesn't exist, you might want to handle this case accordingly
        if (!existingScore) {
            return res.status(404).json({ message: "Team not found" });
        }

        existingScore.score = newScore;
        await existingScore.save();

        res.json({
            status: "success",
            message: "PUT a score",
            data: [
                {
                    score: existingScore,
                }
            ],
        });
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
};


module.exports = {
    index,
    create,
    update,
};

