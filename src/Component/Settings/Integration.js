
import React, { useState, useCallback } from "react";
import { Card, Link, FormLayout, Layout, Page, TextField, TextStyle } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

export default function Integrations() {
    const navigation = useNavigate();

    return (
        <Page title="Integration" breadcrumbs={[{ content: "Sections", onAction: () => navigation(`/settings`) }]}>
            <Layout>
                <Layout.AnnotatedSection
                    title="Integrations"
                    description="Customers can opt-in to your Klaviyo mailing list at the same time as creating a Back in Stock notification"
                >
                    <Card primaryFooterAction={{ content: "Save" }} >
                        <Card.Section title="Klaviyo"
                            actions={[{
                                content: <label className="switch" >
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            }]}
                        >
                            <FormLayout>
                                <TextField
                                    label="Klaviyo private API key"
                                    helpText={<TextStyle>The private API key can be found in Klaviyo->Account->Settings->API Keys <Link external url="https://www.klaviyo.com/login?next=/account#api-keys-tab">Click here</Link></TextStyle>}
                                />
                            </FormLayout>
                        </Card.Section>
                    </Card>
                    <Card primaryFooterAction={{ content: "Save" }}>
                        <Card.Section title="Mailchimp"
                            actions={[{
                                content: <label className="switch" >
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            }]}
                        >
                            <FormLayout>
                                <TextField
                                    label="Klaviyo private API key"
                                    helpText={<TextStyle>The private API key can be found in Klaviyo->Account->Settings->API Keys <Link external url="https://www.klaviyo.com/login?next=/account#api-keys-tab">Click here</Link></TextStyle>}
                                />
                            </FormLayout>
                        </Card.Section>
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
    );
}