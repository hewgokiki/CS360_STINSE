const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orderSchema = mongoose.Schema(
  {
    customer: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    orderContent: [
      {
        itemName: String,
        itemSize: String,
        itemId: {
          type: ObjectId,
          ref: "Item",
        },
        itemPrice: Number,
        addOn: [
          {
            addOnName: String,
            addOnPrice: Number,
            addOnType: String,
            addOnId: {
              type: ObjectId,
              ref: "AddOn",
            },
          },
        ],
      },
    ],
    orderStatus: {
      type: String,
      enum: ["completed", "delivered", "cancelled", "accepted", "pending"],
      default: "pending",
    },
    orderPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
