
import React, { useState, useCallback } from "react";
import { Card, FormLayout, Layout, Page, TextField, ChoiceList, RangeSlider, Heading } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

export default function PopupStyle() {
    const navigation = useNavigate();
    const [rangeValue, setRangeValue] = useState(32);

    const handleRangeSliderChange = useCallback(
        (value) => setRangeValue(value),
        [],
    );
    setTimeout(function () {
        document.querySelectorAll('.Polaris-TextField input[type="color"]').forEach((Element) => {
            Element.parentElement.addEventListener("click", () => {
                Element.click()
            })
        })
    }, 1000)
    return (
        <Page title="Popup Style"
            subtitle="You can customize your popup design"
            breadcrumbs={[{ content: "Sections", onAction: () => navigation(`/settings`) }]}
        >
            <Layout>
                <Layout.Section oneHalf>
                    <Card>
                        <Card.Section title={<Heading>Popup settings</Heading>} >
                            <FormLayout>
                                <ChoiceList
                                    title="Popup template"
                                    choices={[
                                        {
                                            label: 'Email',
                                            value: 'shipping',
                                        },
                                        {
                                            label: 'SMS',
                                            value: 'confirmation',
                                        },
                                        {
                                            label: 'Email or SMS',
                                            value: 'confirmation',
                                        },
                                    ]}
                                    selected={"confirmation"}
                                />
                                <TextField label="Popup Header Text" value="EMAIL ME WHEN AVAILABLE" />
                                <FormLayout.Group title="Tab Text for Email or SMS">
                                    <TextField label="Email Tab" labelHidden placeholder="Email" value="Email" />
                                    <TextField label="SMS Tab" labelHidden value="SMS" />
                                </FormLayout.Group>
                                <TextField label="Button Text" value="EMAIL ME WHEN AVAILABLE" />
                                <TextField label="Placeholder Text for Customer Name" placeholder="Your name" value="Your name" />
                                <TextField label="Placeholder Text for Email Address" placeholder="Your name" value="Email address..." />
                                <TextField label="Contact Info Validation Text" placeholder="* Your contact info is invalid" value="* Your contact info is invalid" />
                                <TextField label="Subscribed Text" placeholder="* You are already subsribed to this product" value="* You are already subsribed to this product" />
                                <TextField label="Footer Text" placeholder="We will notify you when this product is in stock. We do not share your address with anybody else." value="We will notify you when this product is in stock. We do not share your address with anybody else." />
                                <FormLayout.Group condensed>
                                    <TextField label="Hovering Button Color" type="color" value={"#000000"} suffix={"#000000"} />
                                    <TextField label="Hovering Text/Font Color" type="color" value={"#FFFFFF"} suffix={"#FFFFFF"} />
                                </FormLayout.Group>
                            </FormLayout>
                        </Card.Section>
                        <Card.Section title="Success popup">
                            <FormLayout>
                                <TextField label="Success header" value="Successfully subscribed"></TextField>
                                <TextField label="Success content" value="We will send you an email when this product is back in stock."></TextField>
                            </FormLayout>
                        </Card.Section>
                    </Card>
                </Layout.Section>
                <Layout.Section oneHalf>
                    <Card sectioned title="Preview">

                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}