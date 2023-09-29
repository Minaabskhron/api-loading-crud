import React from "react";
import LoadingCss from './Loading.module.css'

export default function Loading() {
  return (
    <>
      <div className={LoadingCss.background + " position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center"}>
        <i className="fa-solid fa-spinner fa-spin fa-2xl"></i>
      </div>
    </>
  );
}
