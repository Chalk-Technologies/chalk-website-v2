import * as React from 'react';
import Helmet from 'react-helmet';

const Seo = ({
  lang = "en",
  title = "Chalk Technologies",
  description = "The new way to manage your climbing gyms",
}: TProps) => {
  return (
    <>
      <Helmet>
        {/* @ts-ignore */}
        <hmtl lang={lang} />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </>
  );
};

export default Seo;

type TProps = {
  lang?: "en" | "fr";
  title?: string;
  description?: string;
};
