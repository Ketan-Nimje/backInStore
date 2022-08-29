
import React, { useState, useCallback } from "react";
import { Card, Link, FormLayout, Layout, Page, TextField, Thumbnail, Stack, Caption, DropZone } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

export default function EmailTemplate() {
    const navigation = useNavigate();
    const [files, setFiles] = useState([]);
    const [openFileDialog, setOpenFileDialog] = useState(false);

    const handleDropZoneDrop = useCallback(
        (dropFiles, _acceptedFiles, _rejectedFiles) =>
            setFiles((files) => [...files, ...dropFiles]),
        [],
    );
    const toggleOpenFileDialog = useCallback(
        () => setOpenFileDialog((openFileDialog) => !openFileDialog),
        [],
    );

    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

    const uploadedFiles = files.length > 0 && (
        <Stack vertical>
            {files.map((file, index) => (
                <Stack alignment="center" key={index}>
                    <Thumbnail
                        size="small"
                        alt={file.name}
                        source={
                            window.URL.createObjectURL(file)
                        }
                    />
                    <div>
                        {file.name} <Caption>{file.size} bytes</Caption>
                    </div>
                </Stack>
            ))}
        </Stack>
    );

    return (
        <Page title="Email template" breadcrumbs={[{ content: "Sections", onAction: () => navigation(`/settings`) }]}>
            <Layout>
                <Layout.Section oneHalf>
                    <Card
                        primaryFooterAction={
                            {
                                content: "Save",
                            }
                        }>
                        <Card.Section title="Store Logo" actions={[
                            {
                                content: 'Upload Image',
                                onAction: toggleOpenFileDialog,
                            },
                        ]}>
                            <div className="email-drop-zone">
                                <DropZone

                                    openFileDialog={openFileDialog}
                                    onDrop={handleDropZoneDrop}
                                    onFileDialogClose={toggleOpenFileDialog}
                                >
                                    <DropZone.FileUpload actionHint="Accepts .gif, .jpg, and .png" />
                                    {uploadedFiles}
                                </DropZone>
                            </div>
                        </Card.Section>
                        <Card.Section title="Email">
                            <FormLayout>
                                <TextField label="Email Subject" />
                                <TextField label="Email Title" />
                                <TextField label="Email content" multiline={3} />
                            </FormLayout>
                        </Card.Section>
                        <Card.Section title="Button Customizations">
                            <FormLayout>
                                <TextField label="Button Text" />
                                <FormLayout.Group condensed>

                                    <TextField label="Background color"
                                        type='color'
                                        suffix={"#000000"}
                                        value={"#000000"} />
                                    <TextField label="Font color"
                                        type='color'
                                        suffix={"#FFFFFF"}
                                        value={"#FFFFFF"} />
                                </FormLayout.Group>
                            </FormLayout>
                        </Card.Section>
                        <Card.Section title="Coupon Code" actions={[{
                            content: <label className="switch" >
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        }]}>
                            <FormLayout>
                                <TextField label="Coupon Code" labelHidden />
                            </FormLayout>
                        </Card.Section>
                    </Card>
                </Layout.Section>
                <Layout.Section oneHalf>
                    <Card>
                        <Card.Section title="Preview">
                            Live Preview
                        </Card.Section>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}