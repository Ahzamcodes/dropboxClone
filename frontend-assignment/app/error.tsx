"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()} style={{ marginTop: '2rem', padding: '0.5rem 1.5rem', fontSize: '1rem' }}>
          Try again
        </button>
      </body>
    </html>
  );
} 