import { Schema, model, connect } from "mongoose";

interface IterorrEvent {
  eventid: number;
  iyear: number;
  imonth: number;
  iday: number;
  country_txt: string;
  region_txt: string;
  city: string;
  latitude: number;
  longitude: number;
  attacktype1_txt: string;
  targtype1_txt: string;
  target1: string;
  gname: string;
  weaptype1_txt: string;
  nkill: number;
  nwound: number;
  nperps: number;
  summary: string;
}
const terorrScheme = new Schema<IterorrEvent>({
  eventid: Number,
  iyear: Number,
  imonth: Number,
  iday: Number,
  country_txt: String,
  region_txt: String,
  city: String,
  latitude: Number,
  longitude: Number,
  attacktype1_txt: String,
  targtype1_txt: String,
  target1: String,
  gname: String,
  weaptype1_txt: String,
  nkill: Number,
  nwound: Number,
  nperps: Number,
  summary: String,
});

export const TerorrEvent = model<IterorrEvent>("TerorrEvent", terorrScheme);
