import React from "react";
import "./style.css";

function Form() {
    return (
        <div className="card">
        <div className="card-body">
            <form id="form">
                <div id="contactInfo">
                <label>Name: <span>*</span></label>
                <br />
                <input type="text" id="name" placeholder="Name" />
                <br />
                <label>Email: <span>*</span></label>
                <br />
                <input type="text" id="email" placeholder="Email" />
                <br />
                <label>Contact No: <span>*</span></label>
                <br />
                <input type="text" id="contact" placeholder="10 digit Mobile no." />
                <br />
                <label>Message:</label>
                <br />
                <textarea id="message" placeholder="Message......."></textarea>
                <br />
                <p>* = Required Fields</p>
                <button className="btn btn-primary" id="submit">Send Message</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Form;