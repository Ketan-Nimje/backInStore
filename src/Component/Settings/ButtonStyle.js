
import React, { useState, useCallback } from "react";
import { Card, Link, FormLayout, Layout, Page, TextField, TextStyle, Form, Heading, RangeSlider, ChoiceList } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

export default function ButtonStyle() {
    const navigation = useNavigate();
    const [rangeValue, setRangeValue] = useState(32);
    const [color, setColor] = useState('#000000');

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
        <Page title="Button Style"
            subtitle="You can customize your button style"
            breadcrumbs={[{ content: "Sections", onAction: () => navigation(`/settings`) }]}
        >
            <Layout>
                <Layout.Section oneHalf>
                    <Card
                        primaryFooterAction={
                            {
                                content: "Save",
                            }
                        }>
                        <Card.Section title={<Heading>Float Button</Heading>}
                            actions={[{
                                content: <label className="switch" >
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            }]}
                        >
                            <FormLayout>
                                <RangeSlider
                                    label="From top"
                                    value={rangeValue}
                                    onChange={handleRangeSliderChange}
                                    output
                                    suffix={<p style={{
                                        minWidth: '24px',
                                        textAlign: 'right',
                                    }}>{rangeValue}px</p>}
                                />
                                <TextField label="Button Text" value="EMAIL ME WHEN AVAILABLE" />
                                <FormLayout.Group condensed>
                                    <TextField label="Background Color" type="color" value={"#000000"} suffix={"#000000"} />
                                    <TextField label="Text/Font Color" type="color" value={"#FFFFFF"} suffix={"#FFFFFF"} />
                                </FormLayout.Group>
                            </FormLayout>
                        </Card.Section>
                        <Card.Section title={<Heading>Inline Button</Heading>}
                            actions={[{
                                content: <label className="switch" >
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            }]}
                        >
                            <FormLayout>
                                <RangeSlider
                                    label="Button margin from top"
                                    value={rangeValue}
                                    onChange={handleRangeSliderChange}
                                    output
                                    suffix={<p style={{
                                        minWidth: '24px',
                                        textAlign: 'right',
                                    }}>{rangeValue}</p>}

                                />
                                <TextField label="Button Text" value="EMAIL ME WHEN AVAILABLE" />
                                <FormLayout.Group condensed>
                                    <TextField label="Background Color" type="color" value={"#000000"} suffix={"#000000"} />
                                    <TextField label="Text/Font Color" type="color" value={"#FFFFFF"} suffix={"#FFFFFF"} />
                                </FormLayout.Group>
                            </FormLayout>
                        </Card.Section>
                        <Card.Section title={<Heading>General Settings</Heading>}>
                            <FormLayout>
                                <ChoiceList
                                    allowMultiple
                                    choices={[
                                        {
                                            label: 'Display for all',
                                            value: 'shipping',
                                            helpText: `Tick if you want to show BIS button for all variants even if there's only one out of stock variant.`,
                                        },
                                        {
                                            label: 'Customize inline button position',
                                            value: 'confirmation',
                                        },
                                    ]}
                                    selected={"confirmation"}
                                />

                                <div>
                                    <TextField label="Insert element css selector" placeholder="Element/Class name" />
                                    <TextField label="Insert type" placeholder="afterend" />
                                </div>
                                <RangeSlider
                                    label="Border radius"
                                    value={rangeValue}
                                    onChange={handleRangeSliderChange}
                                    output
                                    suffix={<p style={{
                                        minWidth: '24px',
                                        textAlign: 'right',
                                    }}>{rangeValue}</p>}

                                />
                                <RangeSlider
                                    label="Font size"
                                    value={rangeValue}
                                    onChange={handleRangeSliderChange}
                                    output
                                    suffix={<p style={{
                                        minWidth: '24px',
                                        textAlign: 'right',
                                    }}>{rangeValue}</p>}

                                />
                                <FormLayout.Group condensed>
                                    <TextField label="Hovering Button Color" type="color" value={"#000000"} suffix={"#000000"} />
                                    <TextField label="Hovering Text/Font Color" type="color" value={"#FFFFFF"} suffix={"#FFFFFF"} />
                                </FormLayout.Group>
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