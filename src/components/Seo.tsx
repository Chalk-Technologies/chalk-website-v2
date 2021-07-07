import * as React from 'react';
import Helmet from 'react-helmet';
import { t } from '@lingui/macro';

const Seo = ({
  lang = t`en`,
  title = t`Chalk Technologies`,
  description = t`The new way to manage your climbing gyms`,
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
  lang?: string;
  title?: string;
  description?: string;
};
