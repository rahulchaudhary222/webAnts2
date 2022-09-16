import React from "react";
import "./card.scss";

const Card = () => {
  return (
    <>
      <div className="heads">
        <h2> Our Sevrices</h2>
        <br />
        <h1>Digital Solutions That Drive Change</h1>
      </div>
      <br />
      <div className="cards">
        <figure class="image-block">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <figcaption>
            <h3>Product Engineering</h3>
            <p>
              Building and supercharging your web, mobile & digital products
              from design to delivery.
            </p>
            <button>More Info</button>
          </figcaption>
        </figure>
        <figure class="image-block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRX8e1B5GTrbqp6GwKJ7ftyW8Tde6WmhY7A&usqp=CAU"
            alt=""
          />
          <figcaption>
            <h3>Customer Experiences</h3>
            <p>
              Keeping people, process, and product in mind to design & deliver
              unmatched experiences.
            </p>
            <button>More Info</button>
          </figcaption>
        </figure>
        <figure class="image-block">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <figcaption>
            <h3>Digital Transformation</h3>
            <p>
              Enabling enterprises to leverage new-gen technologies to improve
              efficiency & innovate.
            </p>
            <button>More Info</button>
          </figcaption>
        </figure>
        <figure class="image-block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Vaje0u72m2WM1DvxKs2laFVZNwPhn09qLg&usqp=CAU"
            alt=""
          />
          <figcaption>
            <h3>Digital Next</h3>
            <p>
              Providing consultation & engineers for new-age technologies like
              AI, ML, IoT, and more.
            </p>
            <button>More Info</button>
          </figcaption>
        </figure>
      </div>
      <br />
      <br />
      <div className="cards-2">
        <div class="photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hz8ZTe_FLSZoBNTSofJwklHtoG8kwqF8oA&usqp=CAU"
            alt=""
          />
          <div className="info">
            <h3> Custom Software Development</h3>
            <br />
            <h1>Customizing software solutions for specific needs.</h1>
          </div>
          <button className="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
            </svg>
          </button>
        </div>
        <div class="photo">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <div className="info">
            <h3>MVP Development</h3>
            <br />
            <h1>Rapid prototyping for testing potential in weeks.</h1>
          </div>
          <button className="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
            </svg>
          </button>
        </div>
      </div>
      <br />
      <div className="cards-2">
        <div class="photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QBBHwC0p3rIG_Z88pDk_b7Sb9JjB945iOg&usqp=CAU"
            alt=""
          />
          <div className="info">
            <h3> Digital Commerce</h3>
            <br />
            <h1>Crafting intuitive digital commerce experiences.</h1>
          </div>
          <button className="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
            </svg>
          </button>
        </div>
        <div class="photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHyrbp4Lj0dxA0m11Kemwzm_o02YOP0Wq87Q&usqp=CAU"
            alt=""
          />
          <div className="info">
            <h3> Business Intelligence</h3>
            <br />
            <h1>Infusing intelligence in business with BI strategies.</h1>
          </div>
          <button className="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
            </svg>
          </button>
        </div>
      </div>
      <br />

      <div className="cards-2">
        <div class="photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqJnakQP1hVtA4atNIFPxeAMDUUy_N72z7w&usqp=CAU"
            alt=""
          />

          <div className="info">
            <h3>Content Management Systems</h3>
            <br />
            <h1>Buiding platforms to simplify content management.</h1>
          </div>
          <button className="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
            </svg>
          </button>
        </div>

        <div class="photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXoikYRZGP8vkzwwF6SrHHXTiv3S_Xfl6cw&usqp=CAU"
            alt=""
          />
          <div className="info">
            <h3> Inbound Marketing</h3>
            <br />
            <h1>Paving new ways to increase traffic & inbound leads.</h1>
          </div>
          <button className="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
