'use client';

import { useRouter } from 'next/navigation';
export function Button({ action, link, children }) {
  const router = useRouter();

  function handleClick() {
    if (link) {
      router.push(link);
    } else {
      if (typeof action === 'function') {
        action();
      }
    }
  }

  return (
    <button class="custom-button" onClick={handleClick}>
      {children}
      <span class="custom-button__inner">
        <span class="custom-button__blobs">
          <span class="custom-button__blob"></span>
          <span class="custom-button__blob"></span>
          <span class="custom-button__blob"></span>
          <span class="custom-button__blob"></span>
          <span class="custom-button__blob"></span>
        </span>
      </span>
    </button>
  );
}
