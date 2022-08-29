import React, { useState } from "react";
import { Page, Card, Layout, Stack, TextContainer, TextStyle, DisplayText } from "@shopify/polaris";
import './../../index.css';

export default function Dashboard() {
  const [tabIndex, setTabIndex] = useState(1)
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Stack distribution="fillEvenly">
            <Stack.Item>
              <Card>
                <Card.Section>
                  <TextContainer spacing="tight" >
                    <DisplayText size="medium">
                      <TextStyle variation="strong" >0</TextStyle>
                    </DisplayText>
                  </TextContainer>
                  <TextStyle variation="subdued">Total Sale</TextStyle>

                </Card.Section>
              </Card>
            </Stack.Item>
            <Stack.Item>
              <Card>
                <Card.Section>
                  <TextContainer spacing="tight" >
                    <DisplayText size="medium">
                      <TextStyle variation="strong" >0</TextStyle>
                    </DisplayText>
                  </TextContainer>
                  <TextStyle variation="subdued">Total Sale</TextStyle>

                </Card.Section>
              </Card>
            </Stack.Item>
            <Stack.Item>
              <Card>
                <Card.Section>
                  <TextContainer spacing="tight" >
                    <DisplayText size="medium">
                      <TextStyle variation="strong" >0</TextStyle>
                    </DisplayText>
                  </TextContainer>
                  <TextStyle variation="subdued">Total Sale</TextStyle>

                </Card.Section>
              </Card>
            </Stack.Item>
            <Stack.Item>
              <Card>
                <Card.Section>
                  <TextContainer spacing="tight" >
                    <DisplayText size="medium">
                      <TextStyle variation="strong" >0</TextStyle>
                    </DisplayText>
                  </TextContainer>
                  <TextStyle variation="subdued">Total Sale</TextStyle>

                </Card.Section>
              </Card>
            </Stack.Item>

          </Stack>
        </Layout.Section>
        <Layout.Section>
          <Card title="App setup and activation" >
            <div className="Polaris-TabsRow" >
              <div className="Polaris-Tabs-Colnov"  >
                <div className="Polaris-Tabs__Wrapper">
                  <ul role="tablist" className="Polaris-Tabs">
                    <li className="Polaris-Tabs__TabContainer" role="presentation">
                      <button id="all-customers-1" role="tab" type="button" aria-selected="true" aria-controls="all-customers-content-1" aria-label="All customers" className={`Polaris-Tabs__Tab ${tabIndex === 1 ? "Polaris-Tabs__Tab--selected" : ""}`} onClick={() => setTabIndex(1)}  >
                        <span className="Polaris-Button__Icon">
                          <span className="Polaris-Icon"><svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="M15 10a1 1 0 0 1-1 1h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1zm-5-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path></svg></span></span>
                        <span className="Polaris-Tabs__Title">All</span>
                      </button>
                    </li>
                    <li className="Polaris-Tabs__TabContainer" role="presentation">
                      <button id="accepts-marketing-1" role="tab" type="button" className={`Polaris-Tabs__Tab ${tabIndex === 2 ? "Polaris-Tabs__Tab--selected" : ""}`} aria-selected="false" aria-controls="accepts-marketing-content-1" onClick={() => setTabIndex(2)}>
                        <span className="Polaris-Tabs__Title">Accepts marketing</span>
                      </button>
                    </li>
                    <li className="Polaris-Tabs__TabContainer" role="presentation">
                      <button id="repeat-customers-1" role="tab" type="button" className={`Polaris-Tabs__Tab ${tabIndex === 3 ? "Polaris-Tabs__Tab--selected" : ""}`} aria-selected="false" aria-controls="repeat-customers-content-1" onClick={() => setTabIndex(3)}>
                        <span className="Polaris-Tabs__Title">Repeat customers</span>
                      </button>
                    </li>
                    <li className="Polaris-Tabs__TabContainer" role="presentation">
                      <button id="prospects-1" role="tab" type="button" className={`Polaris-Tabs__Tab ${tabIndex === 4 ? "Polaris-Tabs__Tab--selected" : ""}`} aria-selected="false" aria-controls="prospects-content-1" onClick={() => setTabIndex(4)}>
                        <span className="Polaris-Tabs__Title">Prospects</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Polaris-Tabs-Contain">
                <div className="Polaris-Tabs__Panel" id="all-customers-content-1" role="tabpanel" >
                  {
                    tabIndex === 1 && <Card.Section title="TEST">
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>

                    </Card.Section>
                  }
                  {
                    tabIndex === 2 && <Card.Section title="TEST">
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                    </Card.Section>
                  }
                  {
                    tabIndex === 3 && <Card.Section title="TEST">
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                    </Card.Section>
                  }
                  {
                    tabIndex === 4 && <Card.Section title="TEST">
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                      <p>Tab  selected</p>
                    </Card.Section>
                  }
                </div>
              </div>
            </div>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card title="Dashboard">
            <Card.Section>
              Hello
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>

    </Page>
  );
}
