export function partiallyApply(Component, partialProps) {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
}

export function Button({ size, color, children, ...props }) {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export const DangerButton = partiallyApply(Button, { color: "red" });
export const BigSuccessButton = partiallyApply(Button, {
  color: "green",
  size: "large",
});
