import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "mjml-react";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Header from "./components/Header";
import { grayDark } from "./components/theme";

export default function WelcomeEmail({ name }: { name?: string }): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header title="Welcome to Dyo" />
          <MjmlSection padding="0">
            <MjmlColumn>
              <MjmlImage
                cssClass="hero"
                padding="0"
                align="left"
                src="https://dyo.at/_static/thumbnail.png"
              />
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">
                Thanks for signing up{name && `, ${name}`}!
              </MjmlText>
              <MjmlText cssClass="paragraph">
                We are Dyonic, the creators of Dyo - the open-source
                Bitly alternative. We are excited to have you on board!
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Here are a few things you can do:
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Create a custom{" "}
                <a href="https://app.dyo.at/links" target="_blank">
                  Dyo short link
                </a>
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Create a new{" "}
                <a href="https://app.dyo.at/" target="_blank">
                  project
                </a>{" "}
                and add your custom domain
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Star the repo on{" "}
                <a href="https://github.com/dyonc/dyo" target="_blank">
                  GitHub
                </a>
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Follow us on{" "}
                <a href="https://twitter.com/DyonicLTD" target="_blank">
                  Twitter
                </a>
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Let me know if you have any questions or feedback. We always
                happy to help!
              </MjmlText>
              <MjmlText cssClass="paragraph" color={grayDark}>
                Over and out,
                The Dyo team
              </MjmlText>
              <Divider />
            </MjmlColumn>
          </MjmlSection>
          <Footer unsubscribe />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}