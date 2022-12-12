import { useState } from "react";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";
import { UncontrolledOnboardingFlow } from "./onboarding-flow/UncontrolledOnboardingFlow";

const StepOne = ({ onNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => onNext({ name: "John Doe" })}>Next</button>
  </>
);

const StepTwo = ({ onNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => onNext({ age: 100 })}>Next</button>
  </>
);

const StepThree = ({ onNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => onNext({})}>Next</button>
  </>
);

const StepFour = ({ onNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => onNext({ hairColor: "Brown" })}>Next</button>
  </>
);

export function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData((previousData) => ({
      ...previousData,
      ...stepData,
    }));
    setCurrentIndex((lastIndex) => lastIndex + 1);
  };

  return (
    <>
      <button onClick={() => setShouldShowModal(true)}>Show Modal</button>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hello!</h1>
      </ControlledModal>

      <UncontrolledOnboardingFlow onFinish={(data) => console.log(data)}>
        <StepOne />
      </UncontrolledOnboardingFlow>

      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}
