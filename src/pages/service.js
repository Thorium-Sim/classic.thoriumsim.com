import React, { Fragment, Component } from "react";
import { Link } from "gatsby";
import styled from "react-emotion";
import { Page } from "../components/styles";
import Layout from "../components/layout";
import { toast } from "react-toastify";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Button = styled("button")`
  text-decoration: none;
  color: #b99bd8;
  background-color: transparent;
  transition: background-color 0.3s ease;
  margin-top: 5px;
  border: solid 1px #b99bd8;
  border-radius: 5px;
  padding: 2px 15px;
  &:visited {
    color: #b99bd8;
  }
  &:hover {
    text-decoration: none;
    background-color: #6b5483;
  }
  &:disabled,
  &[disabled] {
    color: #665479;
    background-color: transparent;
    border-color: #665479;
    cursor: not-allowed;
  }
`;
const FormLabel = styled("div")`
  margin-top: 30px;
`;
const Input = styled("input")`
  width: 100%;
  font-size: 16px;
  padding: 0.2em 0.5em;
  border-radius: 5px;
  border: solid 1px rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;
const TextArea = Input.withComponent("textarea");
const Select = Input.withComponent("select");

const priorityOptions = {
  Feature: [
    "Low - Complete the feature within one month. $20/hr",
    "Medium - Complete the feature within two weeks. $30/hr",
    "High - Complete the feature within one week. $60/hr"
  ],
  "Bug Fix": [
    "Low - Fix the bug within one week. $25/hr",
    "Medium - Fix the bug within one day. $35/hr",
    "High - Fix the bug within four hours. $65/hr"
  ],
  "On-Site Visit": [
    "Low - Arrive at the location within one week. Good for getting Thorium set up. $30/hr",
    "Medium - Arrive at the location within two working days. $50/hr",
    "High - Arrive at the location within two hours. Mission-critical issues. $100/hr"
  ]
};

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};
class Form extends Component {
  state = {};
  submit = () => {
    if (!this.verify()) return;
    const URL =
      "https://us-central1-thorium-sim.cloudfunctions.net/serviceRequest";
    this.setState({ loading: true });
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(() => {
        toast("Service request sent!", toastOptions);
        this.setState({
          loading: false,
          name: null,
          contact: null,
          priority: null,
          location: null,
          type: null,
          description: null
        });
      })
      .catch(() => {
        toast("There was an error sending your service request.", toastOptions);
        this.setState({ loading: false });
      });
  };
  verify = () => {
    const { name, contact, priority, type, description } = this.state;
    return name && contact && priority && type && description;
  };
  render() {
    const {
      name,
      contact,
      location,
      priority,
      type,
      description,
      loading
    } = this.state;
    if (loading) return <h1>Processing your request...</h1>;
    return (
      <form
        // eslint-disable-next-line
        action={"javascript:void(0);"}
        onSubmit={this.submit}
      >
        <FormLabel>
          <label>Service Type</label>
        </FormLabel>
        <Select
          value={type || "nothing"}
          required
          onChange={e => this.setState({ type: e.target.value })}
        >
          <option value="nothing" disabled>
            Choose One
          </option>
          <option value="Feature">Feature</option>
          <option value="Bug Fix">Bug Fix</option>
          <option value="On-Site Visit">On-Site Visit</option>
        </Select>
        <FormLabel>
          <label>Your Name</label>
        </FormLabel>
        <Input
          type="text"
          value={name || ""}
          required
          onChange={e => this.setState({ name: e.target.value })}
        />
        <FormLabel>
          <label>Contact (Email/Phone)</label>
        </FormLabel>
        <Input
          type="text"
          value={contact || ""}
          required
          onChange={e => this.setState({ contact: e.target.value })}
        />
        {type === "On-Site Visit" && (
          <Fragment>
            <FormLabel>
              <label>Location</label>{" "}
              <small>
                We currently can only visit centers in Utah County, Utah
              </small>
            </FormLabel>
            <Input
              type="text"
              value={location || ""}
              required
              onChange={e => this.setState({ location: e.target.value })}
            />
          </Fragment>
        )}
        <FormLabel>
          <label>Priority</label>
        </FormLabel>
        <Select
          disabled={!type}
          value={priority || "nothing"}
          required
          onChange={e => this.setState({ priority: e.target.value })}
        >
          <option value="nothing" disabled>
            Choose {!type ? "a Service Type" : "One"}
          </option>
          {type &&
            priorityOptions[type].map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
        </Select>
        <FormLabel>
          <label>
            Description{" "}
            {type === "Feature" || type === "Bug Fix" ? (
              <small>
                Please include an{" "}
                <OutboundLink
                  href="https://github.com/Thorium-Sim/thorium/issues"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  issue number from Github
                </OutboundLink>{" "}
                if applicable.
              </small>
            ) : null}
          </label>
        </FormLabel>
        <TextArea
          type="text"
          value={description || ""}
          required
          onChange={e => this.setState({ description: e.target.value })}
        />
        <Button type="submit" disabled={!this.verify()}>
          Submit
        </Button>
      </form>
    );
  }
}

const Service = () => {
  return (
    <Layout>
      <div className={`outerContainer`}>
        <Page>
          <h1>Support Service Request</h1>
          <p>
            Thorium offers support service to help you make sure Thorium is
            working smoothly and correctly. Have a feature you want added in a
            hurry? How about a bug that needs to be fixed quickly? Need someone
            to come on site to help you get everything working right? Then fill
            out this form, and we'll make it happen!
          </p>
          <p>
            <strong>Note:</strong>
            <em>
              As of January 2019, the rates for the service request have
              changed. Please review the options before submitting a request. If
              you have any questions or want to work out a custom rate, please
              reach out at{" "}
              <a href="mailto:alex@fyreworks.us">alex@fyreworks.us</a>
            </em>
          </p>
          <Form />
          <h2>Frequently Asked Questions</h2>
          <h4>What is this?</h4>
          <p>
            Filling out this form allows you to request a Thorium expert to
            either work on bugs or features for Thorium or provide an on-site
            visit. They can help you with anything you need to get Thorium
            working for your space center.
          </p>
          <h4>Is this a service contract?</h4>
          <p>
            No, there is no contract being signed through this form. This form
            is just a notification system. Filling it out informs the support
            team of your need. They'll get in contact to give you expectations
            of when and how to expect your service.
          </p>
          <p>
            <strong>
              Filling out this form is not a guarantee of service. We reserve
              the right to refuse service for any reason.
            </strong>
          </p>
          <h4>What if I don't want to pay for my feature or bug?</h4>
          <p>
            As always, you can submit an issue through{" "}
            <OutboundLink
              href="https://github.com/Thorium-Sim/thorium/issues/new"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github's issue tracker
            </OutboundLink>{" "}
            or Thorium's built-in issue tracker. Those issues are handled based
            on the project's roadmap and developer availability. There is no
            guarantee that features and bug reports submitted through the issue
            tracker will be completed.
          </p>
          <h4>Who is the service provider?</h4>
          <p>
            Currently, the only service provider is Alex Anderson. Eventually
            other talented Thorium developers and users could provide service to
            you as well.
          </p>
          <h4>
            What if I request high priority service and the service is late?
          </h4>
          <p>
            You will be billed for the service level that you recieve. If you
            request a high-priority on-site visit within 2 hours and it takes 4
            hours for someone to arrive, you will be billed at the lower medium
            priority level.
          </p>
          <p>
            However, if you request a low priority visit and someone arrives
            within 2 days, you will still be billed at the low priority visit.
            No surprises.
          </p>
          <h4>How will payment be handled?</h4>
          <p>
            Within a month of any service being provided, you will be sent an
            invoice with the service charges. You will be expected to provide
            payment within one month from the invoice. Failure to do so will
            result in refusal of all future service requests until the invoice
            is paid.
          </p>
          <h4>Will you visit my space center without a service request?</h4>
          <p>
            Doing on-site visits is incredibly valuable for Thorium's
            development. It helps us understand customer need, discover hidden
            bugs and issues, and hopefully builds trust between the developers
            and the space centers. However, it is also very time consuming and
            expensive. The time it takes to travel, discover and resolve the
            issues, can be taxing on those of us with families, jobs, and school
            work.
          </p>
          <p>
            While we do reserve the right to do service calls pro-bono, we
            encourage space centers to help support Thorium and the developers
            by paying for the service that was requested.{" "}
            <Link to="/donate">Donations</Link> are also welcome.
          </p>
        </Page>
      </div>
    </Layout>
  );
};

export default Service;
