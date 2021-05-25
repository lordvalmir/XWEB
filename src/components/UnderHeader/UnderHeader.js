import "./UnderHeader.css";
import { useLocation } from "react-router-dom";

function UnderHeader() {
  const location = useLocation();
  const page = location.pathname.replace("/", "").replace("-", " ");

  return (
    <div className="UnderHeader">
      <div className="UnderHeaderMain">
        <div className="UnderHeaderTitle">{page}</div>
        <div className="UnderHeaderSubtitle">
          Home {">"} {page}
        </div>
      </div>
    </div>
  );
}

export default UnderHeader;
