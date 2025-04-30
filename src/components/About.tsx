import React from 'react';

const About: React.FC = () => {
  return (
    // Light theme: White background, dark text
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Executive Summary
        </h2>
        <div className="text-lg text-gray-700 space-y-6">
          <p>
            With over 18 years of extensive leadership experience, I specialize in driving transformational change at the intersection of data science, business strategy, and technology within the financial services industry. My career has focused on building and leading high-performing, multi-disciplinary teams across data science, business intelligence, analytics, and data infrastructure management.
          </p>
          <p>
            I possess a unique blend of deep technical expertise and strong business acumen, allowing me to effectively bridge the gap between advanced AI/ML capabilities and tangible business outcomes. My leadership philosophy centers on fostering data literacy, democratizing analytics, and leveraging cutting-edge technology to solve complex challenges and achieve aggressive organizational targets.
          </p>
          <p>
            Throughout my tenure, particularly at Discover Financial Services, I have envisioned and executed key data and analytics strategies, delivering significant cost savings, productivity gains, and enhanced customer experiences through initiatives such as:
          </p>
          {/* List items with slightly darker text */}
          <ul className="list-disc list-inside space-y-2 pl-4 text-gray-800">
            <li>Building sophisticated enterprise control environments and exception management systems.</li>
            <li>Developing enterprise-scale Identity Graphs and Customer360 MDM platforms.</li>
            <li>Implementing impactful MarTech/CDP solutions (Neustar, Segment) for improved marketing activation and personalization.</li>
            <li>Creating generalized Machine Learning feature datastores supporting critical modeling efforts (credit risk, retention).</li>
            <li>Leading the development of self-service BI capabilities across multiple business units.</li>
          </ul>
          <p>
            Equally fluent in C-suite strategy discussions and hands-on AI engineering, I am passionate about leading data initiatives that drive both innovation and measurable ROI, preparing organizations for the future of data-driven decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;