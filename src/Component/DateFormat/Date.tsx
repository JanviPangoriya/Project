import { FieldInputProps } from "formik";
import React from "react";

interface DateSelectProps {
  formikProps: {
    day?: FieldInputProps<any>;
    month?: FieldInputProps<any>;
    year?: FieldInputProps<any>;
  };
  ids: { day?: string; month?: string; year?: string };
  format: "mm/yyyy" | "dd/mm/yyyy" | "yyyy";
  label: string;
  monthsName?: boolean;
}

const DateSelect: React.FC<DateSelectProps> = (props) => {
  let days: any[] = [];
  let months: any[] = [];
  const monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let years: any[] = [];

  let loop: number;
  let currentYear = new Date().getFullYear();
  let temp: number = +props.formikProps.year?.value!;

  if (props.formikProps.month?.value === "2") {
    if (temp % 4 === 0) {
      loop = 29;
    } else {
      loop = 28;
    }
  } else if (
    props.formikProps.month?.value === "1" ||
    props.formikProps.month?.value === "3" ||
    props.formikProps.month?.value === "5" ||
    props.formikProps.month?.value === "7" ||
    props.formikProps.month?.value === "8" ||
    props.formikProps.month?.value === "10" ||
    props.formikProps.month?.value === "12" ||
    props.formikProps.month?.value === "Jan" ||
    props.formikProps.month?.value === "Mar" ||
    props.formikProps.month?.value === "May" ||
    props.formikProps.month?.value === "Jul" ||
    props.formikProps.month?.value === "Aug" ||
    props.formikProps.month?.value === "Oct" ||
    props.formikProps.month?.value === "Dec"
  ) {
    loop = 31;
  } else {
    loop = 30;
  }

  for (let i = 1; i <= loop; i++) {
    days.push(
      <option key={i} value={i.toString()}>
        {i}
      </option>
    );
  }
  if (props.monthsName) {
    months = monthNames.map((month) => {
      return (
        <option key={month} value={month}>
          {month}
        </option>
      );
    });
  } else {
    for (let i = 1; i <= 12; i++) {
      months.push(
        <option key={i} value={i.toString()}>
          {i}
        </option>
      );
    }
  }
  for (let i = 1900; i < currentYear; i++) {
    years.push(
      <option key={i} value={i.toString()}>
        {i}
      </option>
    );
  }

  return (
    <>
      <h6 className="mb-2 text-sm text-searchBar-text ">{props.label}</h6>
      <div className="flex mb-6">
        {props.format === "dd/mm/yyyy" ? (
          <>
            <label className="sr-only" htmlFor="birthDay">
              Day
            </label>
            <select
              id={props.ids.day}
              name={props.ids.day}
              {...props.formikProps.day}
              className="box-border p-2 border border-gray-300 rounded-md text-dark-300 focus:border-primary-200 focus:outline-none"
            >
              {days}
            </select>
          </>
        ) : (
          <></>
        )}
        {props.format === "dd/mm/yyyy" || "mm/yyyy" ? (
          <>
            <label className="sr-only" htmlFor="birthMonth">
              Month
            </label>
            <select
              id={props.ids.month}
              name={props.ids.month}
              {...props.formikProps.month}
              className="box-border p-2 mx-1 border border-gray-300 rounded-md text-dark-300 focus:border-primary-200 focus:outline-none"
            >
              {months}
            </select>
          </>
        ) : (
          <></>
        )}
        <label className="sr-only" htmlFor="birthYear">
          Year
        </label>
        <select
          id={props.ids.year}
          name={props.ids.year}
          {...props.formikProps.year}
          className="box-border p-2 border border-gray-300 rounded-md text-dark-300 focus:border-primary-200 focus:outline-none"
        >
          {years}
        </select>
      </div>
    </>
  );
};

DateSelect.defaultProps = {};

export default React.memo(DateSelect);