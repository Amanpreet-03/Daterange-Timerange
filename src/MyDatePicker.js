import React from "react";
import connectField from "uniforms/connectField";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const handleChange = (date, dateString, onChange) => {
  console.log("the date is ", date)
  onChange(date[0].toDate(), "dateRange.start");
  onChange(date[1].toDate(), "dateRange.end");
};

const MyDatePicker = props => {
  const { onChange } = props;

  return (
    <section>
      <RangePicker
        onChange={(date, dateString) =>
          handleChange(date, dateString, onChange)
        }
      />
    </section>
  );
};

export default connectField(MyDatePicker);
