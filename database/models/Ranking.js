import { Schema, model } from "mongoose";

const RankingSchema = Schema({
  username: {
    type: String,
    required: true,
    maxLength: 3,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Ranking", RankingSchema, "ranking");
