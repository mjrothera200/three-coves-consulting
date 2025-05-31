'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
  ClickableTile,
  TileGroup,
} from '@carbon/react';
import {
  Advocate,
  Globe,
  AcceleratingTransformation,
  StrategyPlay,
  DesignLeadership,
  ManagingItems,
  Organization,
  AgilityWithHybridMulticloud,
  Connect,
  KnowsDarkData,
  Build,
} from '@carbon/pictograms-react';
import { OfferingSection, OfferingCard } from '@/components/Offering/Offering';

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Grid>
          <Column md={4} lg={4} sm={4}>
            <img
              className="landing-page__headshot"
              src="/mjr-headshot.jpg"
              alt="Matt Rothera"
              width={150}
              height={150}
            />
          </Column>
          <Column md={4} lg={{ span: 8, offset: 4 }} sm={4}>
            <div className="landing-page__overview">
              <h1 className="landing-page__heading">
                Three Coves Consulting LLC
              </h1>
              <div className="landing-page__summary">
                Matt is a proven executive leader, self-starter, and creative
                thinker with 30+ years of experience in the field of consulting
                and computer software. My expertise is helping clients envision,
                design, implement, and gain value from a variety of IoT related
                projects, especially those that involve a move to the cloud and
                integration with AI and Analytics. I bring a unique blend of
                hands-on and technical IoT skills, with a wide “end-to-end view”
                of the full ecosystem and the ability to translate a system to
                deliver business value.
                <br />
                <br />
                <a
                  target="_blank"
                  href="/IoT_Professional_Profile_Matt_Rothera_March2024.pdf"
                >
                  Download My IoT Professional Profile
                </a>
                <br />
                <br />
                <a target="_blank" href="http://oyster-haven.mjrothera.io">
                  Check out my live Oyster Reef Monitoring Site!
                </a>
              </div>
            </div>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>Offerings</Tab>
            <Tab>Technology Expertise</Tab>
            <Tab>Leadership Experience</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="landing-page__subheading">How can I help?</h2>
                  <div className="landing-page__tab-subcontent">
                    <div className="landing-page__keypoint">
                      <h4>Ideation and Strategy:</h4> Leverage proven experience
                      to assist companies in identifying opportunities for
                      innovation with the Internet of Things, Cloud, and AI.
                    </div>
                    <div className="landing-page__keypoint">
                      <h4>Transformation Program Management:</h4> Oversee the
                      planning and execution of scaled transformation programs,
                      managing all aspects from initiation to completion, while
                      ensuring seamless integration with existing business
                      processes.
                    </div>
                    <div className="landing-page__keypoint">
                      <h4>Enterprise Architecture:</h4> Develop a strong
                      foundation for digital architecture, while recognizing the
                      need to integrate existing systems over time
                    </div>
                  </div>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <img
                    className="landing-page__illo"
                    src="/tab-illo.png"
                    alt="Carbon illustration"
                    width={400}
                    height={300}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <OfferingSection
                heading="Technology Expertise"
                className="landing-page__r3"
              >
                <OfferingCard
                  servicename="Internet of Things Ecosystem"
                  serviceoverview="A wide knowledge of IoT connectivity, device management, protocols, and architectural concerns"
                  icon={() => <Connect size={32} />}
                />
                <OfferingCard
                  servicename="Cloud Deployment"
                  serviceoverview="Deploying IoT Solutions that combine the right mix of edge and cloud to deliver an end-to-end solution"
                  icon={() => <AgilityWithHybridMulticloud size={32} />}
                />
                <OfferingCard
                  servicename="Integration of AI and Machine Learning"
                  serviceoverview="Bringing IoT data together with other enterprise sources to bring new insights and deliver new services."
                  icon={() => <KnowsDarkData size={32} />}
                />
                <OfferingCard
                  servicename="End To End Architecture"
                  serviceoverview="From front-end role basedd dashboards, to a back-end database and integration architecture with other key systems, bringing together a diverse set of technologies to achieve the vision "
                  icon={() => <Build size={32} />}
                />
              </OfferingSection>
            </TabPanel>
            <TabPanel>
              <OfferingSection
                heading="Leadership"
                className="landing-page__r3"
              >
                <OfferingCard
                  servicename="Consulting Partner"
                  serviceoverview="Helping clients align business strategy to innovative new solutions and launching programs to bring together vision and reality"
                  icon={() => <StrategyPlay size={32} />}
                />
                <OfferingCard
                  servicename="Chief Architect"
                  serviceoverview="Guiding the delivery of a complex, distributed system to realize value while building a strong platform for the future"
                  icon={() => <DesignLeadership size={32} />}
                />
                <OfferingCard
                  servicename="Program Manager"
                  serviceoverview="Bringing together multiple work streams and creating organizational alignment"
                  icon={() => <ManagingItems size={32} />}
                />
                <OfferingCard
                  servicename="Customer Delivery and Presales Leader "
                  serviceoverview="Managing a team of consultants and/or presales to drive product solution sales and delivery"
                  icon={() => <Organization size={32} />}
                />
              </OfferingSection>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
    </Grid>
  );
}
