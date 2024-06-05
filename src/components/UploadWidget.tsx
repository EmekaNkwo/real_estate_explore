import { createContext, useEffect, useState } from "react";

declare global {
    interface Window {
        cloudinary: any;
    }
}
// Create a context to manage the script loading state
// const CloudinaryScriptContext = createContext();

function UploadWidget({ uwConfig, setPublicId, setState }: {
    uwConfig: Record<string, any>,
    setPublicId: Function,
    setState: Function
}) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Check if the script is already loaded
        if (!loaded) {
            const uwScript = document.getElementById("uw");
            if (!uwScript) {
                // If not loaded, create and load the script
                const script = document.createElement("script");
                script.setAttribute("async", "");
                script.setAttribute("id", "uw");
                script.src = "https://upload-widget.cloudinary.com/global/all.js";
                script.addEventListener("load", () => setLoaded(true));
                document.body.appendChild(script);
            } else {
                // If already loaded, update the state
                setLoaded(true);
            }
        }
    }, [loaded]);

    const initializeCloudinaryWidget = () => {
        if (loaded) {
            var myWidget = window.cloudinary.createUploadWidget(
                uwConfig,
                (error: any, result: { event: string; info: { secure_url: any; }; }) => {
                    if (!error && result && result.event === "success") {
                        console.log("Done! Here is the image info: ", result.info);
                        setState((prev: Record<string, any>[]) => [...prev, result.info.secure_url]);
                    }
                }
            );

            const uploadWidget = document.getElementById("upload_widget");
            if (uploadWidget) {
                uploadWidget.addEventListener(
                    "click",
                    function () {
                        myWidget.open();
                    },
                    false
                );
            }
        }
    };

    return (
        // <CloudinaryScriptContext.Provider value={{ loaded }}>
        <button
            id="upload_widget"
            className="cloudinary-button"
            onClick={initializeCloudinaryWidget}
        >
            Upload
        </button>
        // </CloudinaryScriptContext.Provider>
    );
}

export default UploadWidget;
// export { CloudinaryScriptContext };
