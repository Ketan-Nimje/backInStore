
import React, { useState, useCallback } from "react";
import { AccountConnection, Button, Card, ChoiceList, Link, FormLayout, Heading, Layout, Page } from "@shopify/polaris";
import { useNavigate, } from "react-router-dom";
export default function Settings() {
    const navigation = new useNavigate()
    const [connected, setConnected] = useState(false);
    const accountName = connected ? 'Jane Appleseed' : '';

    const handleAction = useCallback(() => {
        setConnected((connected) => !connected);
    }, []);

    const buttonText = connected ? 'Disconnect' : 'Connect';
    const details = connected ? 'Account connected' : 'No account connected';
    const terms = connected ? null : (
        <p>
            By clicking <strong>Connect</strong>, you agree to accept Sample App’s{' '}
            <Link url="Example App">terms and conditions</Link>. You’ll pay a
            commission rate of 15% on sales made through Sample App.
        </p>
    );

    return (
        <Page title="Settings">
            <Layout>
                <Layout.AnnotatedSection>
                    <AccountConnection
                        accountName={accountName}
                        connected={connected}
                        title="App "
                        action={{
                            content: buttonText,
                            onAction: handleAction,
                        }}
                        details={details}
                        termsOfService={terms}
                    />
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection
                    id="buttonstyle"
                    title="Button Style"
                    description=""
                >
                    <Card >
                        <Card.Section title="Button style">
                            <FormLayout>
                                <p>Customize the color, text and display method of your "Notify me" button</p>
                                <Button onClick={() => navigation(`/settings/button-style`)} >Customize</Button>
                            </FormLayout>
                        </Card.Section>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection
                    id="popupstyle"
                    title="Popup Style"
                    description=""
                >
                    <Card >
                        <Card.Section title="Popup style">
                            <FormLayout>
                                <p>Customize the color, text and template of your popup that shows after clicking "Notify me" button</p>
                                <Button onClick={() => navigation(`/settings/popup-style`)} >Customize</Button>
                            </FormLayout>
                        </Card.Section>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection
                    id="integrations"
                    title="Integrations"
                    description=""
                >
                    <Card >
                        <Card.Section title="Integrations">
                            <FormLayout>
                                <p>Integrate your mailing list with other apps.</p>
                                <Button onClick={() => navigation(`/settings/integration`)} >Customize</Button>
                            </FormLayout>
                        </Card.Section>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection
                    id="storeDetails"
                    title="Notifications Sending & Template"
                    description="Activate/deactivate your notifications."
                >
                    <Card >
                        <Card.Section title={<Heading>Back in stock Email</Heading>}
                            actions={[{ content: 'Manage', onAction: () => navigation(`/settings/email-template/1`) }]}
                        >
                            <FormLayout>
                                <ChoiceList
                                    allowMultiple
                                    choices={[

                                        {
                                            label: 'Send back in stock notifications',
                                            value: 'confirmation',
                                            helpText:
                                                `Untick this box if you don't want to send your customers email/SMS when out of stock products are available.`,
                                        },
                                    ]}
                                    selected={['confirmation']}
                                />

                            </FormLayout>

                        </Card.Section>
                        <Card.Section title={<Heading>Confirmation Email</Heading>}
                            actions={[{ content: 'Manage', onAction: () => navigation(`/settings/email-template/1`) }]}
                        >

                            <ChoiceList
                                allowMultiple
                                choices={[

                                    {
                                        label: 'Send confirmation email',
                                        value: 'confirmation',
                                        helpText:
                                            `Untick this box if you don't want to send your customers confirmation email when they subscribed an OOS product.`,
                                    },
                                ]}
                                selected={['confirmation']}
                            />

                        </Card.Section>
                        <Card.Section title={<Heading>Back in stock SMS</Heading>}
                            actions={[{ content: 'Manage', onAction: () => navigation(`/settings/sms-template/2`) }]}
                        >
                            <ChoiceList
                                allowMultiple
                                choices={[

                                    {
                                        label: 'Send confirmation email',
                                        value: 'confirmation',
                                        helpText:
                                            `Untick this box if you don't want to send your customers confirmation email when they subscribed an OOS product.`,
                                    },
                                ]}
                                selected={['confirmation']}
                            />

                        </Card.Section>
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
    );
}