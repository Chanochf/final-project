import { TerorrEvent } from "../models/terorrEvents";

export const deadliestTypes = async () => {
  const response = await TerorrEvent.aggregate([
    {
      $group:
        {
          _id: "$attacktype1_txt",
          casualties: {
            $sum: {
              $add: ["$nkill", "$nwound"],
            },
          },
        },
    },
  ]);
  console.log(response)
  return response;
};
