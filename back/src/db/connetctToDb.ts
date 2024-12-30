const mongoose = require("mongoose");

const uri = `mongodb+srv://c0548519466:PG16duesrOpGC03R@cluster0.ejtci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
export default async () => {
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
  } catch (err) {
    console.log(`cant connect to db${err}`);
  }
};
