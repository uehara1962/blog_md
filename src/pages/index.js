// import React from "react";
// import { Link } from "gatsby";

// const Index = () => {
//   return (
//     <div>
//       <h1>PowerSites</h1>
//       <p>
//         <Link to="/blog">Blog</Link>
//       </p>
//     </div>
//   );
// };

// export default Index;

// S>----------------------------------------------------------------------------------------<//

// import React from "react";
// import { Link } from "gatsby";
// import Helmet from "react-helmet";

// const Index = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Nosso Blogo - PowerSites</title>
//         <meta name="description" content="Valor da descrição" />
//       </Helmet>
//       <h1>PowerSites</h1>
//       <p>
//         <Link to="/blog">Blog</Link>
//       </p>
//     </div>
//   );
// };

// export default Index;

// S>----------------------------------------------------------------------------------------<//

import React from "react";
import { Link } from "gatsby";
import Seo from "../componentes/Seo";

const Index = () => {
  return (
    <div>
      <Seo title="Nosso Blog - PowerSites" description="Valor da descrição" />
      <h1>PowerSites</h1>
      <p>
        <Link to="/blog">Blog</Link>
      </p>
    </div>
  );
};

export default Index;
