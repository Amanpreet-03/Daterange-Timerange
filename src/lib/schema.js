import SimpleSchema from "simpl-schema";

//Note: I ended up using SimpleSchema instead of SimpleSchema2.
export default new SimpleSchema({
  dateRange: { type: Object },
  "dateRange.start": { type: Date },
  "dateRange.end": { type: Date },
  timeRange: { type: Object },
  "timeRange.start": { type: Date },
  "timeRange.end": { type: Date },
});
