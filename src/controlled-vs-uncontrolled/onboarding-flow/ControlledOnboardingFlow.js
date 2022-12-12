import React from "react";

export function ControlledOnboardingFlow({
  children,
  onFinish,
  currentIndex,
  onNext,
}) {
  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { onNext });
  }

  return currentChild;
}
