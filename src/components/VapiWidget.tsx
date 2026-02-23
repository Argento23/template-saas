"use client";

import Script from "next/script";

export default function VapiWidget() {
    return (
        <Script
            src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/vapi-widget.js"
            strategy="afterInteractive"
            onLoad={() => {
                // @ts-ignore
                if (window.vapiSDK) {
                    // @ts-ignore
                    window.vapiSDK.run({
                        apiKey: "pub-1858a4ab-1eb6-4ca3-99df-d1da31150892",
                        assistant: "d446be03-dfb6-4de6-b83b-9b904af74829",
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
