import React, { Component } from "react";
import './registration-form.css';




const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    // Object.values(isError).forEach(val => {
    //     if (val.length > 0) {
    //         isValid = false
    //     } else {
    //         isValid = true
    //     }
    // });

    // Object.values(rest).forEach(val => {
    //     if (val === null) {
    //         isValid = false
    //     } else {
    //         isValid = true
    //     }
    // });

    return isValid;
};
export default class RegistrationForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            phone_no: '',
            empId: '',
            address: '',
            city: '',
            annual_salary: '',
            gender: '',
            DOB: '',
            bank_name: '',
            bank_account_no: '',
            PAN_no: '',
            UAN_no: '',
            isError: {
                name: '',
                email: '',
                phone_no: '',
                empId: '',
                address: '',
                city: '',
                annual_salary: '',
                gender: '',
                DOB: '',
                bank_name: '',
                bank_account_no: '',
                PAN_no: '',
                UAN_no: '',
            }
        }
    }

    
    onSubmit = e => {
        e.preventDefault();

        console.log(this.state)
        // if (formValid(this.state)) {
        // } else {
        //     console.log("Form is invalid!");
        // }
    };

    
    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                    break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "phone_no":
                isError.phone_no =
                    value.length < 10 ? "Atleast 10 characaters required" : "";
                break;

            default:
                break;
            case "empId":
                isError.empId =
                    value.length < 0 ? "Empolyee ID is required" : "";
                break;

            case " address":
                isError.address =
                    value.length < 0 ? "Address is required" : "";
                break;

            case "city":
                isError.city =
                    value.length < 0 ? "City is required" : "";
                break;

            case "annual_salary":
                isError.annual_salary =
                    value.length < 0 ? "Annual Salary is required" : "";
                break;


            case "gender":
                isError.gender =
                    value.length < 0 ? "gender is required" : "";
                break;

            case "DOB":
                isError.DOB =
                    value.length < 8 ? "Date of birth  is required" : "";
                break;

            case "bank_name":
                isError.bank_name =
                    value.length < 8 ? "Bank Name is required" : "";
                break;

            case "bank_account_no":
                isError.bank_account_no =
                    value.length < 8 ? "Bank Account Number is required" : "";
                break;

            case "PAN_no":
                isError.PAN_no =
                    value.length < 8 ? "PAN Number  is required" : "";
                break;

            case "UAn_no":
                isError.UAN_no =
                    value.length < 8 ? "UAN Number  is required" : "";
                break;
        }
        
        if((this.state.UAN_no !=="" && this.state.name !=="" 
        && this.state.DOB !=="" && this.state.PAN_no !==""  && this.state.address !=="" && this.state.annual_salary !=="" && this.state.bank_account_no !=="" && this.state.bank_name !==""&& this.state.city !==""&& this.state.email!==""&& this.state.empId !==""&& this.state.gender !==""&& this.state.phone_no !==""
        )){
            this.formValid=true;

        }
        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
        const { isError } = this.state;



        return (
            <form onSubmit={this.onSubmit} noValidate>
                <div className="form-group">
                    <label> Employee ID</label>
                    <input
                        type="number"
                        className={isError.empId.length > 2 ? "is-invalid form-control" : "form-control"}
                        name="empId"
                        onChange={this.formValChange}
                    />
                    {isError.empId.length > 0 && (
                        <span className="invalid-feedback">{isError.empId}</span>
                    )}
                </div>

                <div className="form-group">
                    <label> Employee Name</label>
                    <input
                        type="text"
                        className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="name"
                        onChange={this.formValChange}
                    />
                    {isError.name.length > 0 && (
                        <span className="invalid-feedback">{isError.name}</span>
                    )}
                </div>

                < div className="form-group">
                    <label> Address</label>
                    <input
                        type="text"
                        className={isError.address.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="address"
                        onChange={this.formValChange}
                    />
                    {isError.address.length > 0 && (
                        <span className="invalid-feedback">{isError.address}</span>
                    )}
                </div>
                < div className="form-group">
                    <label> City</label>
                    <input
                        type="text"
                        className={isError.city.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="city"
                        onChange={this.formValChange}
                    />
                    {isError.city.length > 0 && (
                        <span className="invalid-feedback">{isError.city}</span>
                    )}
                </div>
                < div className="form-group">
                    <label> Annual Salary</label>
                    <input
                        type="text"
                        className={isError.annual_salary.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="annual_salary"
                        onChange={this.formValChange}
                    />
                    {isError.annual_salary.length > 0 && (
                        <span className="invalid-feedback">{isError.annual_salary}</span>
                    )}
                </div>
                < div className="form-group">
                    <label> Gender</label>
                    <input
                        type="text"
                        className={isError.gender.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="gender"
                        onChange={this.formValChange}
                    />
                    {isError.gender.length > 0 && (
                        <span className="invalid-feedback">{isError.gender}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.formValChange}
                    />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}
                </div>


                <div className="form-group">
                    <label>Contact Number</label>
                    <input
                        type="number"
                        className={isError.phone_no.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="phone_no"
                        onChange={this.formValChange}
                    />
                    {isError.phone_no.length > 0 && (
                        <span className="invalid-feedback">{isError.phone_no}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Date OF Birth</label>
                    <input
                        type="number"
                        className={isError.DOB.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="DOB"
                        onChange={this.formValChange}
                    />
                    {isError.DOB.length > 0 && (
                        <span className="invalid-feedback">{isError.DOB}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Bank Name</label>
                    <input
                        type="text"
                        className={isError.bank_name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="bank_name"
                        onChange={this.formValChange}
                    />
                    {isError.bank_name.length > 0 && (
                        <span className="invalid-feedback">{isError.bank_name}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Bank Account Number</label>
                    <input
                        type="text"
                        className={isError.bank_account_no.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="bank_account_no"
                        onChange={this.formValChange}
                    />
                    {isError.bank_account_no.length > 0 && (
                        <span className="invalid-feedback">{isError.bank_account_no}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>PAN Number</label>
                    <input
                        type="text"
                        className={isError.PAN_no.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="PAN_no"
                        onChange={this.formValChange}
                    />
                    {isError.PAN_no.length > 0 && (
                        <span className="invalid-feedback">{isError.PAN_no}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>UAN Number</label>
                    <input
                        type="text"
                        className={isError.UAN_no.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="UAN_no"
                        onChange={this.formValChange}
                    />
                    {isError.UAN_no.length > 0 && (
                        <span className="invalid-feedback">{isError.UAN_no}</span>)


                    }
                    <button disabled={!this.formValid} onClick={this.saveAndContinue}>Submit</button>



                    

                                   




                </div>













            </form>



        );





    }
}