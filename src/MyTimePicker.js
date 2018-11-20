import React from "react";
import connectField from "uniforms/connectField";
import { TimePicker } from "antd";

const handleStartTime = (time, timeString, onChange ) => {
  onChange(time ? time.toDate() : null, "timeRange.start");
};

const handleEndTime = (time, timeString, onChange ) => {
  onChange(time ? time.toDate() : null, "timeRange.end");
};

const MyTimePicker = props => {
 console.log("The value of the time picker is ", props.value);
  const { onChange } = props;
  return (
    <section>
      <TimePicker
        onChange={(time, timeString) =>
            handleStartTime(time, timeString, onChange )
        }
      />
      <TimePicker
        onChange={(time, timeString) =>
            handleEndTime(time, timeString, onChange )
        }
      />
    </section>
  );
};

export default connectField(MyTimePicker);
