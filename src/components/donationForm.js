import React, { Component } from "react";
import styled, { css } from "react-emotion";
import StripeCheckout from "react-stripe-checkout";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import CurrencyInput from "react-currency-input";
import color from "color";

const donationFormStyle = css`
  background-color: rgba(0, 0, 0, 0.5);
  border: solid 1px rgba(255, 255, 255, 0.5);
  padding: 20px;
  .section {
    margin: 20px auto;
  }
  h2 {
    margin-bottom: 0;
  }
  h2 + p {
    margin-top: 0;
  }
`;
const donationInputStyle = css`
  background-color: rgba(0, 0, 0, 0.75);
  border: solid 2px rgba(255, 255, 255, 0.5);
  color: white;
  font-size: 34px;
  width: 100%;
`;
const colors = {
  commercial: "#5fb79a",
  personal: "#4b6496",
  educational: "#8f49ad"
};

const Button = styled("button")`
  -webkit-appearance: none;
  -webkit-user-select: none;
  -moz-appearance: none;
  user-select: none;
  font-size: 18px;
  margin: 5px 0;
  border-style: solid;
  border-width: 3px;
  padding: 7px 20px;
  color: white;
  width: 100%;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  ${props => `  background-color: ${colors[props.color]};
  border-color: ${color(colors[props.color])
    .darken(0.1)
    .toString()};
  &:hover {
    background-color: ${color(colors[props.color])
      .darken(0.05)
      .toString()};
  }
  &.active,
  &:active {
    border: solid 3px ${color(colors[props.color])
      .lighten(0.1)
      .toString()};
    background-color: ${color(colors[props.color])
      .darken(0.15)
      .toString()};
  }`};
`;
const inputRangeStyle = css`
  margin: 40px auto;
  span {
    font-size: 16px;
  }
`;
class Donation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usage: "personal",
      simulators: 1,
      payment: "once",
      donation: 30
    };
    this.baseDonations = {
      personal: 3000,
      educational: 15000,
      commercial: 200000
    };
    this.setUsage = evt => {
      this.setState({
        usage: evt.target.value,
        donation:
          (this.baseDonations[evt.target.value] *
            this.state.simulators *
            (this.state.payment === "multiple" ? 1 / 24 : 1)) /
          100
      });
    };
    this.setSimulators = value => {
      this.setState({
        simulators: value,
        donation:
          (this.baseDonations[this.state.usage] *
            value *
            (this.state.payment === "multiple" ? 1 / 24 : 1)) /
          100
      });
    };
    this.setPayment = evt => {
      this.setState({
        payment: evt.target.value,
        donation:
          (this.baseDonations[this.state.usage] *
            this.state.simulators *
            (evt.target.value === "multiple" ? 1 / 24 : 1)) /
          100
      });
    };
    this.updateDonation = evt => {
      this.setState({
        donation: parseFloat(evt.target.value.replace("$", ""))
      });
    };
    this.onToken = charge => {
      const url = this.state.payment === "multiple" ? "subscribe" : "charge";
      this.setState({ processing: true });
      fetch(`https://stripe-checkout-cednztddti.now.sh/${url}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
          stripeToken: charge.id,
          stripeEmail: charge.email,
          amount: Math.round(this.state.donation * 100),
          usage: this.state.usage,
          simulators: this.state.simulators
        })
      })
        .catch(() => {
          alert(
            "Sorry, There was an error processing your payment. Please try again."
          );
        })
        .then(() => this.setState({ donated: true, processing: false }));
    };
  }
  render() {
    if (this.state.donated) {
      return (
        <div className={donationFormStyle}>
          <h2> Thank you for your donation!</h2>
          <p>
            Your donation will go to helping us develop the best simulator
            controls possible. You will soon recieve an email with links to
            download Thorium
          </p>
        </div>
      );
    }
    if (this.state.processing) {
      return (
        <div className={donationFormStyle}>
          <h1> Processing your donation...</h1>
        </div>
      );
    }
    return (
      <div className={donationFormStyle}>
        <div>
          <h2>Usage:</h2>
          <Button
            color={"personal"}
            className={this.state.usage === "personal" ? "active" : ""}
            onClick={this.setUsage}
            name="usage"
            value="personal"
          >
            Personal
          </Button>{" "}
          <Button
            color={"educational"}
            className={this.state.usage === "educational" ? "active" : ""}
            onClick={this.setUsage}
            name="usage"
            value="educational"
          >
            Educational
          </Button>
          <Button
            color="commercial"
            className={this.state.usage === "commercial" ? "active" : ""}
            onClick={this.setUsage}
            name="usage"
            value="commercial"
          >
            Commercial
          </Button>
        </div>
        <div>
          {this.state.usage === "personal" && (
            <p>
              <strong>Personal: </strong>
              You plan on using Thorium every now and then with a few friends to
              do some bridge simulation or 'Space LARP-ing'. You don't charge
              money or advertise - you just want to have a good time.
            </p>
          )}
          {this.state.usage === "educational" && (
            <p>
              <strong>Educational: </strong>
              You are a school or educator that wants to use Thorium to give
              your students a Space Edventure! You might run field trips for
              other schools and might charge for the cost of the flights, but
              you don't advertise or run paid flights for private parties. You
              just want to see your students excel!
            </p>
          )}
          {this.state.usage === "commercial" && (
            <p>
              <strong>Commercial: </strong>
              You run flights of all kinds - birthday parties, corporate
              training, family reunions, summer camps - the whole gamut. You
              want to give your customers the most exciting, inspiring
              experience possible (for an affordable price).
            </p>
          )}
        </div>
        <div>
          <h2>Simulators: </h2>
          <p>
            How many simulators do you intend to run simultaneously (either in
            joint-flights or solo)?
          </p>
          <div className={inputRangeStyle}>
            <InputRange
              maxValue={6}
              minValue={1}
              value={this.state.simulators}
              onChange={this.setSimulators}
            />
          </div>
        </div>
        <div>
          <h2>Payments: </h2>
          <Button
            color="educational"
            className={this.state.payment === "once" ? "active" : ""}
            onClick={this.setPayment}
            value="once"
          >
            One-Time Donation
          </Button>
          <Button
            color="commercial"
            className={this.state.payment === "multiple" ? "active" : ""}
            onClick={this.setPayment}
            value="multiple"
          >
            Monthly Recurring Donation
          </Button>
        </div>
        <div>
          <h2>
            Suggested {this.state.payment === "multiple" ? "Monthly" : ""}{" "}
            Donation:{" "}
          </h2>
          <CurrencyInput
            decimalSeparator="."
            thousandSeparator=","
            prefix="$"
            className={donationInputStyle}
            value={this.state.donation}
            onChangeEvent={this.updateDonation}
          />
          <small>
            You can change your donation to any amount. Donations are{" "}
            <em>not</em> tax exempt.
          </small>
        </div>
        {this.state.donation < 5 ? (
          <p>You must purchase Thorium for at least $5.00.</p>
        ) : (
          <StripeCheckout
            token={this.onToken}
            name="Thorium Donation"
            description="Fyreworks LLC"
            panelLabel={`Donate ${
              this.state.payment === "multiple" ? "Monthly" : ""
            }:`}
            currency="USD"
            amount={Math.round(this.state.donation * 100)}
            image="/assets/logo.png"
            stripeKey="pk_live_B64x8t6rLJNzanCWVXOs1pu5"
          >
            <Button color="personal">Pay With Card</Button>
          </StripeCheckout>
        )}
      </div>
    );
  }
}

export default Donation;
