import { useState } from "react";
import axios from "axios";

export default function List() {
  const [userlist, setUserlist] = useState([]);
  // axios
  //   .get("http://127.0.0.1:8000/")
  //   .then((response) => {
  //     setUserlist([...response.data]);
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  const count = userlist.length;
  return (
    <>
      <div className="row col-lg-6 order-1">
        <div className="card col">
          <h4 className="card-header"> 총 {count}명의 친구를 찾았어요! </h4>
          <div className="card-body">
            {axios
              .get("http://127.0.0.1:8000/")
              .then((response) => {
                setUserlist([...response.data]);
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              })}
            {userlist.map((e) => {
              <>{e.username}</>;
            })}
          </div>
        </div>
      </div>
      <div className="row">
        총 {count}명의 친구를 찾았어요!
        <div className="col">
          {userlist.map((e) => {
            <div>
              <div className="list">
                <span>
                  {e.username}, {e.name}, {e.address_do}
                </span>
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
}
