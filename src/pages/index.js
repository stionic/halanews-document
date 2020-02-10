import React from 'react';
import window from 'global';

function Home() {
  if (window.location) window.location.href = 'docs/introduction';
  return (
    <div></div>
  )
}

export default Home;
