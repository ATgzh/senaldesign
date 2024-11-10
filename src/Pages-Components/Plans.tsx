import React, { useState, useEffect } from 'react';
import '../Styles/Plans.css';
import '../Styles/App.css';
import '../Styles/Home.css';

import * as globals from './Globals';

function Plans() {

  const [plans, setPlans] = useState([]);

  

  return (
    <div className="main-container-loggedin-Plans">
      <main className='main'>
      <p className='header-text-plans'>
        Plans
      </p>
      <div className="module-plans-big">
        <p>The following plans are available for SE&Ntilde;AL. Each plan offers you a specific number of analysis jobs per month or year, and provides you with a certain amount of storage for both your uploads and results.</p>
        <p>Data retention refers to how long a result will remain available to you to download. Results longer than the data retention period will be removed and you will need to run the analysis again on the same source text (which will incur credits cost). <strong>Retention does not apply to your document uploads</strong> and you can store them as long as you wish as long as your account is active.</p>
        <p>You can activate a plan and set up your payment method on your <a href="/account">Account</a> page.</p>
      </div>
      <div className='placeholder'>
        <div className='main-page-loggedin-Plans'>

        {plans.map((plan, index) =>
        <div className='plan-container' key={plan["id"]}>
          <div className="plan-title">{plan["name"]}</div>
          <hr />
          <div className="plan-list">
            <ul>
              <li><strong>{plan["_api"]}</strong> analyses per {plan["_interval"]}</li>
              <li><strong>{plan["_rd"]}</strong> days data retention</li>
              <li><strong>{plan["_ds"]}</strong> library storage</li>
            </ul>
          </div>
          <hr />
          <span className="price">{plan["_cost"]}</span> <span className="price-interval">/ {plan["_interval"]}</span>
        </div>

        )}

        </div>
      </div>
      </main>
    </div>
  );
}

export default Plans;
export {}