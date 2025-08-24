import React from "react";
import Link from "next/link";

function Page() {

  return(
    <main className="">
      <button className="border">
        <Link href={'./profile'}>Click to redirect</Link>
      </button>
      <button className="border">
        <Link href={'./test-tanstack'}>Click to redirect to test page</Link>
      </button>
      <button className="border">
        <Link href={'./magazine'}>Click to redirect to magazine page</Link>
      </button>
      <button className="border">
        <Link href={'./axios-test'}>Click to redirect to axios test(study code) page</Link>
      </button>
    </main>
  )
}

export default Page;