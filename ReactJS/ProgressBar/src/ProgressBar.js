import "./styles.css";

export default function ProgressBar({ progress }) {
  return (
    <div className="progress_bar">
      <div
        className="progress_bar_fill"
        style={{ transform: `translateX(${progress - 100}%)` }}
      />
    </div>
  );
}
