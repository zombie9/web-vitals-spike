import { useEffect, useState } from 'react';
import { getCLS, getFID, getLCP, getTTFB } from 'web-vitals';
import './WebVitalsBar.css';

function WebVitalsBar() {
  const [cls, setCLS] = useState(localStorage.getItem('latestCLS') || '???');
  const [ttfb, setTtfb] = useState(0)
  const [fid, setFID] = useState('???');
  const [lcp, setLCP] = useState('???');

  useEffect(() => {
      getCLS(cls => {
          localStorage.setItem('latestCLS', cls.value);
          setCLS(cls.value);
      });
      getFID(fid => setFID(fid.value));
      getLCP(lcp => setLCP(lcp.value));
      getTTFB(ttfb =>setTtfb(ttfb.value));

    }, [cls, fid, lcp, ttfb]);

    return (
        <div className="web-vitals-bar">
            <span className="heading">Core Web Vitals </span>
            <span className="web-vital">LCP: {lcp}</span>
            <span className="web-vital">FID: {fid}</span>
            <span className="web-vital">CLS: {cls}</span>
            <span className="web-vital">TTFB: {ttfb}</span>
        </div>
    );
}

export default WebVitalsBar;