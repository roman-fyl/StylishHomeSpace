import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";

import "./Pages.scss";

const Warranty = () => {
  useEffect(() => {
    document.title = "Warranty";
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="privacy_description">
          <h1>Warranty</h1>
          <p>September 01, 2024</p>
          
<section className="section">
    <h4>COPPA Compliance Disclosure:</h4>
    <p>This Privacy Policy presumes that your website is not directed at children under the age of 13 and does not knowingly collect personal identifiable information from them or allow others to do the same through your site. If this is not true for your website or online service and you do collect such information (or allow others to do so), please be aware that you must be compliant with all COPPA regulations and guidelines in order to avoid violations which could lead to law enforcement actions, including civil penalties.</p>
    <p>In order to be fully compliant with COPPA your website or online service must fulfill other requirements such as: (i) posting a privacy policy which describes not only your practices, but also the practices of any others collecting personal information on your site or service — for example, plug-ins or ad networks; (ii) include a prominent link to your privacy policy anywhere you collect personal information from children; (iii) include a description of parental rights (e.g. that you won't require a child to disclose more information than is reasonably necessary, that they can review their child's personal information, direct you to delete it, and refuse to allow any further collection or use of the child's information, and the procedures to exercise their rights); (iv) give parents "direct notice" of your information practices before collecting information from their children; and (v) obtain the parents' "verifiable consent" before collecting, using or disclosing personal information from a child. For more information on the definition of these terms and how to make sure your website or online service is fully compliant with COPPA please visit https://www.ftc.gov/tips-advice/business-center/guidance/childrens-online-privacy-protection-rule-six-step-compliance. FormSwift and its subsidiaries are in no way responsible for determining whether or not your company is in fact compliant with COPPA and takes no responsibility for the use you make of this Privacy Policy or for any potential liability your company may face in relation to any COPPA compliance issues.</p>
</section>
        </div>
      </div>
    </Layout>
  );
};

export default Warranty;
