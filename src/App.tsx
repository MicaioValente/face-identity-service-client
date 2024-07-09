import { Amplify } from "aws-amplify";
import awsexports from "./aws-exports";
import { ThemeProvider } from "@aws-amplify/ui-react";
import LivenessQuickStartReact from "./modules/FaceLiveness/FaceLivenessScreen";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsexports);

function App() {
    return (
        <ThemeProvider>
            <LivenessQuickStartReact />
        </ThemeProvider>
    );
}

export default App;
