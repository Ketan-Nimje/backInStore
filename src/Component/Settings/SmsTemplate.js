
import React, { useState, useCallback } from "react";
import { Card, Link, FormLayout, Layout, Page, TextField, TextStyle, Form, Heading } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

export default function SmsTemplate() {
    const navigation = useNavigate();

    return (
        <Page title="SMS template" breadcrumbs={[{ content: "Sections", onAction: () => navigation(`/settings`) }]}>
            <Layout title="SMS Content">
                <Layout.Section oneHalf>
                    <Card primaryFooterAction={
                        {
                            content: "Save",
                        }
                    }>
                        <Card.Section title={<Heading>SMS Content</Heading>}>
                            <FormLayout>
                                <TextField
                                    helpText={`The actual number of characters will vary depending on the specific product name. Each text message has a maximum of 140 character, please reserve enough character quota.`}
                                />
                            </FormLayout>
                        </Card.Section>
                    </Card>
                </Layout.Section>
                <Layout.Section secondary>
                    <Card sectioned title="Preview">
                        <div className="Polaris-bubble-vue">
                            <div data-v-13327c65="" class="bubble-container"> {`WC-Kunalg: {{ product_name }} is now Back in Stock! Buy now: {{ product_URL }} `}</div>
                        </div>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}