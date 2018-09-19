import React, { Fragment, Component } from "react";
import styled from "react-emotion";
import { Page } from "../components/styles";
import Layout from "../components/layout";
import { titleCase } from "change-case";

const Button = styled("button")`
  text-decoration: none;
  color: #b99bd8;
  background-color: transparent;
  transition: background-color 0.3s ease;
  margin-top: 5px;
  &:visited {
    color: #b99bd8;
  }
  &:hover {
    text-decoration: none;
    background-color: #6b5483;
  }
  border: solid 1px #b99bd8;
  border-radius: 5px;
  padding: 2px 15px;
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
const stepTypes = {
  damageTeam: {
    preamble: { label: "Preamble", type: "textarea" },
    type: {
      label: "Type",
      type: "select",
      options: [
        "Computer Specialist",
        "Quality Assurance",
        "Electrician",
        "Explosive Expert",
        "Fire Control",
        "General Engineer",
        "Hazardous Waste Expert",
        "Maintenance Officer",
        "Mechanic",
        "Plumber",
        "Structural Engineer",
        "Welder"
      ]
    },
    name: { label: "Name", type: "textarea" },
    orders: { label: "Orders", type: "textarea" },
    room: { label: "Deck/Room (Optional)", type: "text" }
  },
  internalCall: {
    preamble: { label: "Preamble", type: "textarea" },
    room: { label: "Deck/Room (Optional)", type: "text" },
    message: { label: "Message", type: "textarea" }
  },
  probeLaunch: {
    preamble: { label: "Preamble", type: "textarea" },
    query: { label: "Probe Query", type: "text" }
  },
  securityTeam: {
    preamble: { label: "Preamble", type: "textarea" },
    teamName: { label: "Team Name", type: "text" },
    orders: { label: "Orders", type: "text" },
    room: { label: "Deck/Room (Optional)", type: "text" }
  },
  damageTeamMessage: { message: { label: "Message", type: "textarea" } },
  generic: {
    message: { label: "Message", type: "textarea" }
  },
  longRangeMessage: {
    preamble: { label: "Preamble", type: "textarea" },
    destination: { label: "Destination", type: "text" },
    message: { label: "Message", type: "textarea" }
  },
  remoteAccess: {
    preamble: { label: "Preamble", type: "textarea" },
    code: { label: "Code", type: "text" },
    backup: { label: "Backup Code", type: "text" }
  },
  sendInventory: {
    preamble: { label: "Preamble", type: "textarea" },
    inventory: {
      type: "textarea",
      label: "Inventory (Optional)",
      placeholder: `1 Power Coupling
3 Coaxial Servos
2 Romulan Ale Glass`
    },
    room: { label: "Deck/Room (Optional)", type: "text" }
  },
  exocomps: {
    preamble: { label: "Preamble", type: "textarea" }
  },
  securityEvac: {
    preamble: { label: "Preamble", type: "textarea" },
    room: { label: "Deck/Room (Optional)", type: "text" }
  },
  softwarePanel: {
    preamble: { label: "Preamble", type: "textarea" }
  },
  computerCore: {
    preamble: { label: "Preamble", type: "textarea" },
    level: { label: "Level (1-10)", type: "number" },
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "text" }
  }
};

class ReportForm extends Component {
  state = {};
  renderStep = ({ key, type, placeholder, options }) => {
    if (type === "select")
      return (
        <Select
          value={this.state[key] || "nothing"}
          onChange={e => this.setState({ [key]: e.target.value })}
        >
          <option value="nothing" disabled>
            Select an option
          </option>
          {options.map(o => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
      );
    if (type === "textarea")
      return (
        <TextArea
          rows={3}
          value={this.state[key]}
          placeholder={placeholder}
          onChange={e => this.setState({ [key]: e.target.value })}
        />
      );

    return (
      <Input
        type={type}
        placeholder={placeholder}
        value={this.state[key]}
        onChange={e => this.setState({ [key]: e.target.value })}
      />
    );
  };
  renderForm = stepType => {
    if (!stepType) return null;
    const step = stepTypes[stepType];
    return (
      <Fragment>
        {Object.entries(step).map(([key, value]) => (
          <div key={key}>
            <div>
              <label>{value.label || titleCase(key)}</label>
            </div>
            {this.renderStep({ key, ...value })}
          </div>
        ))}
      </Fragment>
    );
  };
  render() {
    const { stepType, reportType } = this.state;
    return (
      <form
        // eslint-disable-next-line
        action={"javascript:void(0);"}
        onSubmit={() => {}}
      >
        <div>
          <label>Report Type</label>
        </div>
        <Select
          value={reportType || "nothing"}
          onChange={e => this.setState({ reportType: e.target.value })}
        >
          <option disabled value="nothing">
            Select a report type
          </option>
          <option value="any">Any</option>
          <option value="default">Damage</option>
          <option value="rnd">R{"&"}D</option>
          <option value="engineering">Engineering</option>
        </Select>
        <div>
          <label>Step Type</label>
        </div>
        <Select
          value={stepType || "nothing"}
          onChange={e => this.setState({ stepType: e.target.value })}
        >
          <option disabled value="nothing">
            Select a step type
          </option>
          {Object.keys(stepTypes)
            .sort()
            .map(s => (
              <option key={s} value={s}>
                {titleCase(s)}
              </option>
            ))}
        </Select>
        {this.renderForm(stepType)}
        <Button type="submit" disabed={!stepType || !reportType}>
          Submit
        </Button>
      </form>
    );
  }
}

const DamageReport = () => {
  return (
    <Layout>
      <div className={`outerContainer`}>
        <Page>
          <h1>Damage Report Steps</h1>
          <p>
            Thorium uses pre-defined steps to create randomly generated damage
            report steps. You can help create these steps by filling out the
            form below.
          </p>
          <p>You can use some hashtags to make your report dynamic:</p>
          <ul>
            <li>
              <strong>#COLOR</strong> - a random color of red, green, blue,
              yellow
            </li>
            <li>
              <strong>#PART</strong> - a random exocomp part
            </li>
            <li>
              <strong>#[1 - 2]</strong> - a random whole number between the two
              listed numbers
            </li>
            <li>
              <strong>#["string1", "string2", "string3", etc.]</strong> - a
              random string from the list provided
            </li>
          </ul>
          <p>
            You can leave the deck/room field blank (if applicable) to use the
            locations assigned to a system or a random deck.
          </p>
          <p>
            Be sure to include a preamble in your step if you are writing an R
            {"&"}D or Engineering report
          </p>
          <ReportForm />
        </Page>
      </div>
    </Layout>
  );
};

export default DamageReport;
