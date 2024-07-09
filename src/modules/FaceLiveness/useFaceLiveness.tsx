import { useEffect, useState } from "react";

export const useFaceLiveness = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [createLivenessApiData, setCreateLivenessApiData] = useState<{
        sessionId: string;
    } | null>(null);

    useEffect(() => {
        const fetchCreateLiveness: () => Promise<void> = async () => {
            await new Promise((r) => setTimeout(r, 2000));
            const mockResponse = { sessionId: "mockSessionId" };
            const data = mockResponse;

            setCreateLivenessApiData(data);
            setLoading(false);
        };

        fetchCreateLiveness();
    }, []);

    const handleAnalysisComplete: () => Promise<void> = async () => {
        const response = await fetch(
            `/api/get?sessionId=${createLivenessApiData?.sessionId}`
        );
        const data = await response.json();

        if (data.isLive) {
            console.log("User is live");
        } else {
            console.log("User is not live");
        }
    };

    return {
        loading,
        createLivenessApiData,
        handleAnalysisComplete,
    };
};
