'use client'
// import { useRouter } from "next/router";
// import React from "react";

// export default function Page() {
//   const router = useRouter();
//   const { email } = router.query;

//   return <div>User Email : {email}</div>;
// }
import React from "react";

export default function page({ params }: any) {
  return <div>User Email : {params.email}</div>;
}
