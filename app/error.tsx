"use client";

export default function Error({error, reset}: {error: Error, reset: () => void}) {
  return <div>
    Ooops there is an error try later!!!
  </div>;
}