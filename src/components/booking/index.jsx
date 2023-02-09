import React from "react";
import {
  BookingContainer,
  BookingContent,
  BookingImage,
  BookingForm,
  BookingHeader,
  StyledTextField,
  FormFieldGroup,
} from "../../styles/booking";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

const Booking = () => {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <BookingContainer>
             <BookingImage src="/images/banner/booking.jpg"></BookingImage>
      <BookingContent>
        <BookingHeader>Make a reservation</BookingHeader>
        <BookingForm component="form" noValidate>
          <div>
            <FormFieldGroup className="test">
              <StyledTextField
                required
                id="outlined-required"
                label="Name"
                type="text"
              />
              <StyledTextField required id="contact" label="Contact Number" />
            </FormFieldGroup>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormFieldGroup>
                <StyledTextField
                  as={DesktopDatePicker}
                  label="Date desktop"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
                <StyledTextField
                  as={TimePicker}
                  label="Time"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
           </FormFieldGroup>
            </LocalizationProvider>
            <FormFieldGroup>
            <StyledTextField
                required
                id="outlined-required"
                label="Guest number"
                type="number"
              />
            </FormFieldGroup>
          </div>
        </BookingForm>
      </BookingContent>
    </BookingContainer>
  );
};

export default Booking;
