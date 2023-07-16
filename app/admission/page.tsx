import AdmissionHeader from "@/components/admission-header";
import Steps from "@/components/steps";
import Fees from "@/components/fees";
import Eligilibity from "@/components/eligibility";

export default function AdmissionPage() {
  return (
    <>
      <AdmissionHeader />
      <Steps />
      <Fees />
      <div className="container">
        <Eligilibity type="FULL" />
      </div>
    </>
  );
}
