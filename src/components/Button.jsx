export default function Button({ text ,onClick, buttonType, children }) {
    return (
      <button
        onClick={onClick}
        className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
      >
       {text}
      </button>
    );
  }