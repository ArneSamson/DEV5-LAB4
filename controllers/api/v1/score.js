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

module.exports = {
    index,
    create,
};

