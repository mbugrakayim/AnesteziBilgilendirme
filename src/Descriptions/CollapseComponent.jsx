import React, { useState } from "react";

function CollapseComponent({id, title, content, image}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card w-100 mt-3">
      <div className="card-body">
        <button className="btn w-100 text-start" onClick={toggleCollapse}>
          <strong className="h4">{title}</strong>
        </button>
      </div>
      <div className={`collapse ${isOpen ? "show" : ""}`}>
        <div className="card-body">
          <ul className="lead">{content}</ul>
          {image && (
            <div className="text-center">
              <img src={image} alt="" className="img-thumbnail" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default CollapseComponent;
