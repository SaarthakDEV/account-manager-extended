"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function useRemoveQuery(id: string | number) {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== undefined)
      window.history.replaceState(null, "", `/account/${id}`);
  }, [id, pathname]);
}

export default useRemoveQuery;
