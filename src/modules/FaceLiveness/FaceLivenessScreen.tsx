import { FaceLivenessDetector } from "@aws-amplify/ui-react-liveness";
import { Loader, ThemeProvider } from "@aws-amplify/ui-react";
import { useFaceLiveness } from "./useFaceLiveness";

const LivenessQuickStartReact = () => {
    const { loading, createLivenessApiData, handleAnalysisComplete } =
        useFaceLiveness();

    return (
        <ThemeProvider>
            {loading ? (
                <Loader />
            ) : (
                <FaceLivenessDetector
                    sessionId={createLivenessApiData?.sessionId ?? ""}
                    region="us-east-1"
                    onAnalysisComplete={handleAnalysisComplete}
                    onError={(error) => {
                        console.error(error);
                    }}
                />
            )}
        </ThemeProvider>
    );
};

export default LivenessQuickStartReact;
