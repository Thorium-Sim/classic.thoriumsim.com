import React from "react";
import { Page, FlexArea, FlexSection, FlexAside } from "../components/styles";
import Donation from "../components/donationForm";
import Layout from "../components/layout";

const Contribute = () => {
  return (
    <Layout>
      <div className="outerContainer">
        <Page>
          <FlexSection>
            <FlexArea>
              <h1>Donation</h1>
              <p />
              <p>
                Thorium is being developed by a small number of contributors in
                their spare time. To help fund Thorium development, you can
                provide a donation (minimum of $5.00). Your donations help to
                create new and exciting features and content which you can use
                in your space center. As a Thorium Donor, you recieve the
                following benefits:
              </p>
              <ul>
                <li>Your name in the credits of Thorium.</li>
                <li>Your company's logo on the front page of this website.</li>
                <li>Increased priority for feature requests.</li>
                <li>
                  A warm feeling knowing that you have contributed to creating
                  excellent starship simulator software.
                </li>
              </ul>
              <p>Your donation will go toward several great causes: </p>
              <ul>
                <li>Making new features and content for Thorium.</li>
                <li>
                  Holding developer workshops to train new developers on how
                  Thorium works.
                </li>
                <li>
                  Teaching middle and high school students in the{" "}
                  <a href="https://github.com/webdev-guild/webdev-guild">
                    WebDev Guild
                  </a>{" "}
                  how to code.
                </li>
              </ul>
              <p>
                Use the donation form to find out your suggested donation based
                on your use-case, or fill in your own amount. Recurring
                donations are also accepted and encouraged!
              </p>
              <p>
                If you have any problems with your donation, need to cancel your
                subscription or want to request a refund, please{" "}
                <a href="mailto:alex@fyreworks.us">contact us</a>.
              </p>
            </FlexArea>
            <FlexAside style={{ flex: 2, marginLeft: "10px" }}>
              <Donation />
            </FlexAside>
          </FlexSection>
        </Page>
      </div>
    </Layout>
  );
};
export default Contribute;
