import useSEO from "../../Hook/useSEO";

const SurveyForm = () => {

    // hook for seo using react helmet 
    useSEO({
        title: "Survey Form",
        description: "This is a survey form",
        keywords: "survey, form",
        url: "https://surveyform.teachfosys.com",
    })

    return (
        <div className="bg-[#005F47] text-white max-h-screen text-center ">
            <div className="container mx-auto">
                <div className="pt-20">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl ">Understanding Your Needs for a New<span className="text-[#F69B2F]">Digital Trading Platform</span></h1>
                    <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 ">Share Your Insights to Help Us Create a Better Marketplace for Digital Products</p>
                </div>
            </div>
        </div>
    );
};

export default SurveyForm;