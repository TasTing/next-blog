import React from "react";
import Moment from "react-moment";
import Image from "./image";

const BlogFooter = ({ author, publish, image }) => {
  return (
    <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
      {image?
        <div>
          {image && (
            <Image
              image={image}
              style={{
                position: "static",
                borderRadius: "50%",
                height: 30
              }}
            />
          )}
        </div>:null
      }

      <div className="uk-width-expand">
        {author?
          <p className="uk-margin-remove-bottom">
            By {author}
          </p>:null
        }
        <p className="uk-text-meta uk-margin-remove-top">
          <Moment format="MMM Do YYYY">{publish}</Moment>
        </p>
      </div>
    </div>
  );
};

export default BlogFooter;
