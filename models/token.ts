import { Document, Schema, model, models, Model } from "mongoose";

import { UserProps } from "./user";

export interface TokenProps extends Document {
  _id: Schema.Types.ObjectId;
  userId: UserProps;
  token: string;
  type: "verification" | "reset" | "email-change" | "delete-account";
  expiresAt: Date;
  expires: boolean;
}

if (models.Token) {
  delete models.Token;
}

const TokenSchema = new Schema<TokenProps>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: ['verification', "reset", 'email-change', 'delete-account'],
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    expires: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

TokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 3600 });

const Token: Model<TokenProps> =
  models.Token || model<TokenProps>("Token", TokenSchema, "tokens");

export default Token;
