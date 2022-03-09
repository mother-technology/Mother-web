/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./PanelSellItem.css";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

interface PanelSellItemInterface {
  header: string;
  img: string;
  link: string;
  linkText: string;
  buttonText?: string;
  buttonLink?: string;
  children: JSX.Element;
}

export const PanelSellItem: React.FC<PanelSellItemInterface> = ({
  header,
  img,
  link,
  linkText,
  buttonText,
  buttonLink,
  children,
}: PanelSellItemInterface) => {
  // const hashId = header.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="panel-sell-item pink">
      <div className="flex panel-info">
        <h2>{header}</h2>
        {/* id={hashId} */}
        {children}
      </div>
      {img && <img src={img} />}
      {buttonText && (
        <a className="buttonLink" href={buttonLink}>
          {buttonText}
        </a>
      )}
      {link && (
        <a className="downloadLink" href={link}>
          {linkText}
        </a>
      )}
    </div>
  );
};

// ---
// /* eslint-disable jsx-a11y/alt-text */
// import React from "react";
// import "./PanelSellItem.css";
// import { Link, withRouter, RouteComponentProps } from "react-router-dom";

// interface PanelSellItemInterface extends RouteComponentProps {
//   header: string;
//   img: string;
//   link: string;
//   linkText: string;
//   buttonText?: string;
//   buttonLink?: string;
//   children: JSX.Element;
// }

// export const PanelSellItem: React.FC<PanelSellItemInterface> = ({
//   header,
//   img,
//   link,
//   linkText,
//   buttonText,
//   buttonLink,
//   children,
// }: PanelSellItemInterface) => {
//   // const hashId = header.replace(/\s+/g, "-").toLowerCase();

//   return (
//     <div className="panel-sell-item pink">
//       <div className="flex panel-info">
//         <h2>{header}</h2>
//         {/* id={hashId} */}
//         {children}
//       </div>
//       {img && <img src={img} />}
//       {buttonText && (
//         <Link className="buttonLink" to={buttonLink}>
//           {buttonText}
//         </Link>
//       )}
//       {link && (
//         <a className="downloadLink" href={link}>
//           {linkText}
//         </a>
//       )}
//     </div>
//   );
// };

// export default withRouter(PanelSellItem);
