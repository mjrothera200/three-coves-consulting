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
                thinker with 35 years of experience in the field of consulting
                and computer software. My expertise is around three coves of 
                expertise:  Professional Services, IoT, and AI Deployment.  As 
                an executive in these domains selling and delivering solutions, I 
                helped clients and organizations realize the value of these 
                initiatives.  Today I am focused on sharing relevant best practices
                to help ensure your success.
                <br />
                <br />
                <Grid fullWidth className="tabs-group-content">
                <Column sm={4}
                  className="landing-page__tab-content"
                  >
                    <div className='landing-page__subheading'>Professional Services Leader</div>
                    <br/>
                    <a
                  target="_blank"
                  href="/Services_Profile_Matt_Rothera_2025.pdf"
                >
                  Download My Services Professional Profile
                </a>
                <br/><br/>
                  </Column>
                 <Column sm={4} >
                  <div className='landing-page__subheading'>The "Internet of Things (IoT) and AI Deployment"</div>
                  <br/>
                  <a
                  target="_blank"
                  href="/IoT_Professional_Profile_Matt_Rothera_March2024.pdf"
                >
                  Download My IoT and AI Professional Profile
                </a>
                <br/><br/>
               <a target="_blank" href="http://oyster-haven.mjrothera.io">
                  Check out my live Oyster Reef Monitoring Site!
                </a>
                 </Column>
              </Grid>
              
                <br />
                
              </div>
            </div>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>For Venture Capital Firms and Startups</Tab>
            <Tab>For Software and SaaS Firms</Tab>
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
                      With over 35 years of experience in the software and SaaS industry, 
                      I can help evaluate your investment companies operating model, go-to-market strategy, and 
                      organization from a Professional Services and Sales point of view.  Whether the concerns are 
                      related to scale, repeatable customer success, or go-to-markets that consider the “end-to-end” 
                      deployment of the solution, I can help evaluate early-stage startups and provide concrete and 
                      actionable recommendations to help fortify the offering.
                    </div>
                    <div className="landing-page__keypoint">
                      <h4>Go-To-Market Strategy Review:</h4> Leverage proven experience
                      to review the go-to-market strategy for your new AI product, with special
                      emphasis on selling and delivering the total solution to ensure client success.  Assist with 
                      early cutomer acquisition and refinement of the go-to-market.
                    </div>
                    <div className="landing-page__keypoint">
                      <h4>Deployment Approach:</h4> Create a repeatable deployment approach that assures
                      clients of a professional end-to-end experience.  From initial on-boarding, through implementation
                      and on to steady state, a consistent engagement approach ensures success.
                    </div>
                    <div className="landing-page__keypoint">
                      <h4>Fractional Services Advisor:</h4> Jump-start your organization to lay down the foundations
                      of delivery success.
                    </div>
                    <div className="landing-page__keypoint">
                      <h4>Recent Engagements</h4>
                      <br/>
                       <img
                    className="landing-page__illo"
                    src="/diagram.png"
                    alt="Diagram Ventures"
                  />
                    </div>
                  </div>
                </Column>
                
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <img
                    className="landing-page__illo"
                    src="/tab-illo.png"
                    alt="Ventures"
                    width={400}
                    height={300}
                  />
                </Column>
              </Grid>
            </TabPanel>
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
                      With over 35 years of experience in the software and SaaS industry,  I have seen and
                      addressed services problems with scale, delivery excellence, and organizational alignment. 
                      The move to SaaS only excerbates those issues, requiring a much more organized and methodical
                      approach to service delivery.  Whether it be allowing projects to launch quickly without limiting
                      software growth, or move to repeatable delivery model with well defined timeframes, I can help
                      evaluate your operating model and recommend improvements based on my experience.
                    </div>
                    <div className="landing-page__keypoint">
                      <h4>SaaS Best Practices Overview</h4> Review best practices for a SaaS services organization
                      across the customer life-cycle to address problems with scale, delivery excellence, and organizational
                      alignment.  
                    </div>
                    <div className="landing-page__keypoint">
                      <h4>Methodology Development:</h4> Create a repeatable deployment approach that assures
                      clients of a professional end-to-end experience.  From initial on-boarding, through implementation
                      and on to steady state, a consistent engagement approach ensures success.
                    </div>
                    <div className="landing-page__keypoint">
                      <h4>Services Process Review and Refinement:</h4>Review the key services processes and recommend actions 
                      to create better alignment and higher efficiency.
                    </div>
                    
                  </div>
                </Column>
                
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <img
                    className="landing-page__illo"
                    src="/saas.png"
                    alt="SaaS"
                    width={300}
                    height={450}
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
                  servicename="Cloud Deployment"
                  serviceoverview="Deploying Solutions that combine the right mix of edge and cloud to deliver an end-to-end solution"
                  icon={() => <AgilityWithHybridMulticloud size={32} />}
                />
                <OfferingCard
                  servicename="Internet of Things Ecosystem"
                  serviceoverview="A wide knowledge of IoT connectivity, device management, protocols, and architectural concerns"
                  icon={() => <Connect size={32} />}
                />
                <OfferingCard
                  servicename="Enterprise Integration of AI and Machine Learning"
                  serviceoverview="Bringing data together with other enterprise sources to bring new insights and deliver new services."
                  icon={() => <KnowsDarkData size={32} />}
                />
                <OfferingCard
                  servicename="End To End Architecture"
                  serviceoverview="From front-end role based dashboards, to a back-end database and integration architecture with other key systems, bringing together a diverse set of technologies to achieve the vision "
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
                  servicename="Customer Delivery and Presales Leader "
                  serviceoverview="Managing a team of consultants and/or presales to drive product solution sales and delivery"
                  icon={() => <Organization size={32} />}
                />
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
                
              </OfferingSection>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
    </Grid>
  );
}
