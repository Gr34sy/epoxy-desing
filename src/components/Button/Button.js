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
    <button class="blob-btn" onClick={handleClick}>
      {children}
      <span class="blob-btn__inner">
        <span class="blob-btn__blobs">
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
        </span>
      </span>
    </button>
  );
}
