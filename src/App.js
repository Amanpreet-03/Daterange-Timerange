import React from "react";
import AutoForm from "uniforms-antd/AutoForm";
import SubmitField from "uniforms-antd/SubmitField";
import ErrorsField from "uniforms-antd/ErrorsField";
import MyDatePicker from "./MyDatePicker";
import MyTimePicker from "./MyTimePicker";
import schema from "./lib/schema";
import "./App.css";

class Range extends React.Component {
  state = {
    submitted: false, 
    startDate : '',
    endDate : '',
    startTime : '',
    endTime : '',
  };

  handleSubmit = model => {
    console.log("Submitted: ", model);
    this.setState({ 
        submitted: true,  
        startDate: model.dateRange.start ? model.dateRange.start.toDateString() : '',
        endDate: model.dateRange.end ? model.dateRange.end.toDateString() : '',
        startTime: model.timeRange.start ? model.timeRange.start.toTimeString() : '',
        endTime: model.timeRange.end ? model.timeRange.end.toTimeString() : '',
    });
  };

  myFormValidation = (model, error, callback) => {
    if (model.timeRange.start >= model.timeRange.end) {
      const timeError = new Error(["Start time is ahead or equal to end time"]);
      callback(timeError);
    } else {
      //Pass in null, as we don't care if start date and end date is filled.
      callback(null);
    }
  };

  render() {
    const { startDate, endDate, startTime, endTime } = this.state;
    return (
      <div className="App">
        <AutoForm
          schema={schema}
          onSubmit={this.handleSubmit}
          onValidate={this.myFormValidation}
          onSubmitSuccess={() => console.log("Success")}
          onSubmitFailure={() => console.log("failure")}
        >
          <section className="section">
            <MyDatePicker name="dateRange" />
          </section>
          <section className="section">
            <MyTimePicker name="timeRange" />
          </section>

          <section className="section">
            <ErrorsField />
          </section>

          <section className="section">
            <SubmitField />
          </section>

          {
            this.state.submitted ? 
              <section className="section"> 
                  The values are : { ` The start date is ${startDate} and end date is ${endDate}. 
                  The start time is ${startTime} and end time is ${endTime} `}
                </section> : null
          }
        </AutoForm>
      </div>
    );
  }
}

export default Range;
