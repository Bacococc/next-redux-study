import React from "react";
import Link from "next/link";

function Page() {

  return(
    <main className="">
      <button className="border m-2">
        <Link href={'./profile'}>Click to redirect</Link>
      </button>
      <button className="border m-2">
        <Link href={'./test-tanstack'}>Click to redirect to test page</Link>
      </button>
      <button className="border m-2">
        <Link href={'./magazine'}>Click to redirect to magazine page</Link>
      </button>
      <button className="border m-2">
        <Link href={'./axios-test'}>Click to redirect to axios test(study code) page</Link>
      </button>
      <button className="border m-2">
        <Link href={'./react-query-test'}>Click to redirect to react query test(study code) page</Link>
      </button>
    </main>
  )
}

export default Page;