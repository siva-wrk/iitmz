import AdmissionHeader from "@/components/admission-header";
import Steps from "@/components/steps";
import AdmissionsDownloadable from "@/components/admissions-downloadable";
import Fees from "@/components/fees";
import Eligilibity from "@/components/eligibility";

export default function AdmissionPage() {
  return (
    <>
      <AdmissionHeader />
      <Steps />
      <AdmissionsDownloadable />
      <Fees />
      <div className="container">
        <Eligilibity type="FULL" />
      </div>
    </>
  );
}
