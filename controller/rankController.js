import Ranking from "../database/models/Ranking.js";

const getRankOrdered = async (req, res) => {
  Ranking.find({})
    .limit(process.env.RANK_LIMIT)
    .sort({ score: -1 })
    .exec()
    .then((rank) => res.status(200).json(rank))
    .catch((err) =>
      res.status(500).json({ status: "failed", error: err?.message })
    );
};

const postScore = async (req, res) => {
  const { body } = req;
  if (!body)
    return res
      .status(400)
      .json({ status: "failed", error: "No data was provided" });

  const _ranking = new Ranking({ ...body, created_at: Date.now() });
  _ranking
    .save()
    .then(() => res.status(204).json({}))
    .catch((err) =>
      res.status(500).json({ status: "failed", error: err?.message })
    );
};

export { getRankOrdered, postScore };
