import React from "react";
import { css } from "react-emotion";
import { Page } from "../components/styles";
import Layout from "../components/layout";

const Workshop = () => {
  return (
    <Layout>
      <div
        className={`outerContainer ${css`
          padding: 0;
        `}`}
      >
        <img
          className={css`
            width: 100%;
            height: 40vh;
            object-fit: cover;
            object-position: bottom;
          `}
          alt="Header"
          src={require("../img/workshop.jpg")}
        />
        <Page>
          <h1>Thorium Developer Workshop</h1>
          <h2>
            <em>August 25, 2018 10:00am - 3:00pm</em>
          </h2>
          <br />
          To encourage outside collaboration and development, the Thorium team
          invites you to a one-day workshop and hackathon. This will be an
          excellent opportunity to learn about how Thorium was developed, pick
          up some new skills, make some new friends, and give back to Thorium
          and the Space Center community.
          <br />
          <h2
            className={css`
              margin-top: 10px;
              text-align: center;
            `}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHv8heZvvdGejDEC2pv9tbc2a95IFAA4DiQ40s9adHIAIGug/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register To Attend
            </a>
          </h2>
          <br />
          <ul>
            <li>
              <p>
                <strong>Who:</strong> Programmers, current or past Flight
                Directors and supervisors, and anyone interested in bridge
                simulation and building Thorium. Participants should be willing
                to learn, work on projects, provide ideas and feedback, design
                screens and features, and most of all contribute to great
                projects during this workshop.
              </p>
              <p>
                If you are planning on doing development, make sure you are
                familiar with Git as well as basic web technologies. Try to
                familiarize yourself with some of Thorium's third-party
                frameworks, such as React and GraphQL, before you come. See
                details below.
              </p>
              <p>We ask that all participants are at least 15 years old.</p>
            </li>
            <li>
              <strong>When:</strong> August 25, 2018 from 10:00am to 3:00pm.
              Lunch will be provided.
            </li>
            <li>
              <strong>Where:</strong>{" "}
              <a
                href="https://www.google.com/maps/place/N.+Eldon+Tanner+Building+(TNRB)/@40.2491849,-111.6524323,17z/data=!4m8!1m2!2m1!1stnrb+near+Brigham+Young+University,+Provo,+UT!3m4!1s0x0:0x4858f3307ac3d0b2!8m2!3d40.250435!4d-111.6525017"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Information Systems Lab on BYU Campus - TNRB
              </a>{" "}
              W328 (
              <a
                href="https://marriottschool.byu.edu/wp-content/uploads/2015/05/floor3.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                Map
              </a>
              ) or online - an interactive live-stream will (hopefully) be
              provided.
            </li>
            <li>
              <strong>Why:</strong> To build the starship simulator controls
              community, train new developers, and make awesome stuff!
            </li>
            <li>
              <strong>What:</strong> Bring your own laptop, or use one of the
              provided computers to work on actual code for Thorium. We'll
              provide several possible projects you can work on and learn from,
              as well as instruction on how Thorium works and the best way to
              get involved.
            </li>
          </ul>
          <h2
            className={css`
              text-align: center;
            `}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHv8heZvvdGejDEC2pv9tbc2a95IFAA4DiQ40s9adHIAIGug/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interested? Register Here
            </a>
          </h2>
          <h3>Schedule</h3>
          <p>Schedule information will be added soon!</p>
          <h3
            className={css`
              margin-top: 20px;
            `}
          >
            What if I'm not a programmer or don't have a lot of experience?
          </h3>
          <p>
            There is still a lot you can do! While this workshop is primarily
            focused on the programming aspects of simulator controls, there are
            a lot of things that non-programmers can contribute:
          </p>
          <ul>
            <li>
              Design. You could make graphics for the simulations, like sensor
              contacts and images for the alien countries. You could design new
              cards or redesign the current ones. You could make new layouts.
              There are many possibilities.
            </li>
            <li>
              Documentation. Thorium hosts all of its documentation on
              Thoriumsim.com so it is easy for Thorium users to get answers to
              their questions in one place. However, the documentation isn't
              complete. You can play around with Thorium to learn how it works
              and then help to write documentation for the screens. You can also
              provide updated screenshots of the screens.
            </li>
            <li>
              User testing. Play around with the controls and take note of your
              observations. What works well? What needs improvement? Write those
              things down and share them so Thorium can continue to improve.
            </li>
            <li>
              You can learn how to program! There are great free resources out
              there that you can use to learn the ins and outs of programming
              websites. See below.
            </li>
          </ul>
          <h3>
            I want to learn how to program so I can contribute! Where do I
            start?
          </h3>
          <p>
            Learn Git. Git is an awesome tool that is used to keep track of
            changes to code and help multiple developers work on the same
            project at the same time. Thorium uses Git extensively.{" "}
            <a
              href="https://try.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Here are a bunch of resources
            </a>{" "}
            for learning Git.
          </p>
          <p>
            Thorium is built with web technologies, so learn HTML, CSS, and
            JavaScript. The{" "}
            <a
              href="https://webdev-guild.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebDev Guild
            </a>{" "}
            is a good place to start on that.
          </p>
          <p>
            Thorium is also built with React. You can learn React from{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              its website.
            </a>{" "}
            There are also great{" "}
            <a
              href="https://egghead.io/courses/the-beginner-s-guide-to-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video Tutorials
            </a>{" "}
            that can walk you through the ropes. There's a lot of extra
            JavaScript stuff that will be helpful to know when learning React.{" "}
            <a
              href="https://www.robinwieruch.de/javascript-fundamentals-react-requirements/"
              target="_blank"
              rel="noopener noreferrer"
            >
              This is a great resource
            </a>{" "}
            for learning those things.
          </p>
          <p>
            Thorium is also built with GraphQL.{" "}
            <a
              href="https://www.howtographql.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              How To GraphQL
            </a>{" "}
            is a great place to learn. When you get to the technologies section,
            Thorium uses React with Apollo for the front-end and Node with
            Apollo Server for the back-end.
          </p>
          <p>
            <a
              href="https://github.com/davo/awesome-react-framer-x"
              target="_blank"
              rel="noopener noreferrer"
            >
              This is another great compendium of resources
            </a>{" "}
            which you can use to jump-start your development skills.
          </p>
          <h3>Okay, I'm coming. What should I do to prepare?</h3>
          <p>
            <a href="/download" target="_blank" rel="noopener noreferrer">
              Download and install Thorium
            </a>{" "}
            and play around with it. Become familiar with how it works.{" "}
            <a href="/docs/overview" target="_blank" rel="noopener noreferrer">
              Take a look at the docs.
            </a>{" "}
            Watch the videos in the overviews doc page so you are familiar with
            how Thorium simulations work. Think of ways that it can be improved.
          </p>
          <p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHv8heZvvdGejDEC2pv9tbc2a95IFAA4DiQ40s9adHIAIGug/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register to attend
            </a>
            , so we know how many people are coming.
          </p>
          <h2>Can't wait to see you there!</h2>
        </Page>
      </div>
    </Layout>
  );
};
export default Workshop;
