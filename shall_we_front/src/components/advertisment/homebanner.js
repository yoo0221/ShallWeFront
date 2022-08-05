import banner from "./광고베너.png";
export default function Homebanner() {
  return (
    <a href="#">
      <div className="row d-flex justify-content-center">
        <div className="col-12 p-2">
          <img src={banner} height="80rem" width="100%" />
        </div>
      </div>
    </a>
  );
}
