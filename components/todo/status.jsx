import { useEffect } from "react";
import { Button } from "react-bootstrap";

const StatusViewer = ({ statusTask }) => {
  useEffect(() => {
    iconStatus(statusTask);
  }, [statusTask]);

  function iconStatus(status) {
    let result = "bi bi-question";
    if (status === "active") {
      result = "bi bi-hammer";
    } else if (status === "suspend") {
      result = "bi bi-pause-circle";
    } else if (status === "info") {
      result = "bi bi-info-circle";
    } else if (status === "done") {
      result = "bi bi-check-circle";
    }
    return result;
  }
  // console.log(statusTask);
  return (
    <Button variant="outline-info" className="ms-1 float-end">
      <i className={iconStatus(statusTask)} />
    </Button>
  );
};
export default StatusViewer;
