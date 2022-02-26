import CircularProgress from "react-cssfx-loading/lib/CircularProgress";

function Loading() {
  return (
    <div className="loading">
      <CircularProgress
        color="#919191"
        width="50px"
        height="50px"
        duration="2s"
      />
    </div>
  );
}
export default Loading;
