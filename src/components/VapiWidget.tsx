"use client";

import Script from "next/script";

export default function VapiWidget() {
    return (
        <Script
            src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"
            strategy="afterInteractive"
            onLoad={() => {
                // @ts-ignore
                if (window.vapiSDK) {
                    // @ts-ignore
                    window.vapiSDK.run({
                        apiKey: "996ce0cb-fff4-47a2-a3e9-01e20a4f4789",
                        assistant: "c500ab0f-ea72-47fd-b66f-e2caf54a0ebf", // Stefan New
                        config: {
                            position: "bottom-left",
                            title: "Alex - AI Consultant",
                            subtitle: "Neurova Agencia AI",
                            color: "#2563eb"
                        },
                    });
                }
            }}
        />
    );
}
