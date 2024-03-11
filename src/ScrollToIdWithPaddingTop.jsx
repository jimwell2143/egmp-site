import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function ScrollToIdWithPaddingTop() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = 100; // Replace this with the actual height of your header
        const yOffset = -headerHeight;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

  return <></>; // Empty fragment as this component doesn't render anything
}

export default ScrollToIdWithPaddingTop;
