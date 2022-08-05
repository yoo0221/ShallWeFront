import { useState } from "react";
function Profile() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const renderErrorMessage = (name) => {
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  };
  const renderForm = (
    <div className="card mb-4 form">
      <h5 className="card-header">프로필 등록</h5>
      <form
        id="formAccountSettings"
        method="post"
        encType="multipart/form-data"
      >
        <div className="card-body">
          <label for="photo"></label>
        </div>
      </form>
    </div>
  );
  return (
    <div className="container-xxl flex-grow-1 contatiner-p-y">
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <h5 className="card-header">프로필 등록</h5>
            <form
              id="formAccountSettings"
              method="post"
              encType="multipart/form-data"
            >
              <div className="card-body">
                <div className="d-flex gap-4">
                  <label for="photo_img" className="avatar" tabIndex={0}>
                    <div className="avatar">
                      <img
                        src="%PUBLIC_URL%/assets/img/photo_add.png"
                        className="w-px-40 h-auto rounded-circle"
                      />
                    </div>
                    <input></input>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
