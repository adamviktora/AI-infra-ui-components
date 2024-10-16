import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';

const pageData = {
  "id": "AI-infra-ui-components",
  "section": "extensions",
  "subsection": "",
  "deprecated": false,
  "template": false,
  "beta": false,
  "demo": false,
  "newImplementationLink": false,
  "source": "design-guidelines",
  "tabName": null,
  "slug": "/extensions/ai-infra-ui-components/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/module/patternfly-docs/content/design-guidelines/design-guidelines.md",
  "relPath": "packages/module/patternfly-docs/content/design-guidelines/design-guidelines.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"pf-v6-c-content--p ws-p "}}>
      {`Design guidelines intro`}
    </p>
    <AutoLinkHeader {...{"id":"header","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`Header`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"sub-header","headingLevel":"h3","className":"ws-title ws-h3"}}>
      {`Sub-header`}
    </AutoLinkHeader>
    <p {...{"className":"pf-v6-c-content--p ws-p "}}>
      {`Guidelines:`}
    </p>
    <ol {...{"className":"pf-v6-c-content--ol ws-ol "}}>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        {`A`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        {`list`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        {`using`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        {`markdown`}
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'ExtensionsAiInfraUiComponentsDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
